<template>
  <div>
    <div class="storeUpdateFrom">
      <h1>Update Store Form</h1>

      <h5>Store Image</h5>

      <div>
        <img :src="this.pics" alt="No Image Found" width="300" height="300" />
      </div>

      <br />
      <b-form @submit="onSubmit" @reset="onReset" v-if="show" enctype="multipart/form-data">
        <b-form-group
          id="input-group-1"
          label="Update The ShopName:"
          label-for="input-1"
          description
        >
          <b-form-input
            id="input-1"
            v-model="form.shop_Name"
            type="name"
            required
            placeholder="Update Shop Name"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Shop Details:" label-for="input-2">
          <textarea
            cols="40"
            rows="5"
            type="text"
            id="input-2"
            v-model="form.shop_Details"
            required
            placeholder="Update Shop Details"
          ></textarea>
        </b-form-group>

        <b-form-group id="input-group-200" label="Shop Rank:" label-for="input-200">
          <b-form-input
            id="input-200"
            v-model="form.shop_Rank"
            type="number"
            required
            placeholder="Update Shop Rank"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-90" label="Shop Phone :" label-for="input-90">
          <b-form-input
            id="input-90"
            type="number"
            v-model="form.shop_ph"
            required
            placeholder="Update Shop Phone Number "
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" label="Shop Adress :" label-for="input-4">
          <b-form-input
            id="input-4"
            v-model="form.shop_Adress"
            required
            placeholder=" Update ShopAdress"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-5" label="Search Tag : (All LowerCase)" label-for="input-5">
          <b-form-input
            id="input-5"
            v-model="form.shop_Tag"
            required
            placeholder="Searcg Tag Ex : burger , chicken"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-6" label="Shop Time" label-for="input-6">
          <b-form-input
            id="input-6"
            v-model="form.shop_OpenTime"
            required
            placeholder="Update Opening Time "
          ></b-form-input>
        </b-form-group>

        <H4>Enter Shop Location</H4>

        <div>
          <div id="locationDiv">
            <b-form-group id="input-group-7" label label-for="input-7">
              <b-form-input
                id="input-7"
                v-model="form.shop_lat"
                required
                placeholder="Location Lantitude"
              ></b-form-input>
            </b-form-group>
          </div>

          <b-form-group id="input-group-8" label label-for="input-8">
            <b-form-input
              id="input-8"
              v-model="form.shop_long"
              required
              placeholder="Location Longtitude"
            ></b-form-input>
          </b-form-group>

          <h4>Image Upload</h4>
        </div>
        <div class="field">
          <div class="file is-boxed is-primary" id="uploadBtn">
            <label class="file-label">
              <input type="file" ref="file" @change="selectFile" class="file-input" />

              <span class="file-cta">
                <span class="file-icon">
                  <i class="fas fa-upload"></i>
                </span>
                <span class="file-label">Update The Image.....</span>
              </span>

              <span v-if="file" class="file-name">{{file.name}}</span>
            </label>
          </div>
        </div>

        <div>
          <b-button class="submitDiv" type="submit" variant="primary" size="lg">Update The Store</b-button>

           <b-button v-on:click="deleteThisStore"   variant="danger" size="lg">Delete This Store</b-button>
        </div>


        
      </b-form>
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      results: [],
      link: "http://app.bddial.com/public/images/",
      sid: "0",
      searchQuery: "",
      form: {
        shop_Name: "",
        shop_Details: "",
        shop_ph: "",
        shop_Adress: "",
        shop_Tag: "",
        shop_loc_Category: "kandipar",
        shop_lat: "",
        shop_long: "",
        shop_image: "",
        shop_OpenTime: "",
        shop_Rank: "" , 
        shop_Id : ""
      },

      file: "",
      pics: "https://cdn2.thecatapi.com/images/e99.jpg",
      show: true,
      uploading: false,
      imageLink: " ",
      res: "",
      Results: []
    };
  },
  mounted() {
    this.sid = this.$route.params.pid;

    axios
      .get("http://app.bddial.com/api/allstores/" + this.sid)
      .then(response => {
        this.res = JSON.stringify(response.data);
        this.Results = response.data;
        //const obj = JSON.parse(response.data)

        this.form.shop_Name = this.Results[0].store_name;
        this.form.shop_Details = this.Results[0].store_details;
        this.form.shop_Rank = this.Results[0].store_rank;
        this.form.shop_ph = this.Results[0].store_ph;
        this.form.shop_Adress = this.Results[0].store_adress;

        this.form.shop_Tag = this.Results[0].store_tag;
        this.form.shop_loc_Category = this.Results[0].store_loc_category;
        this.form.shop_lat = this.Results[0].store_lat;
        this.form.shop_Id = this.Results[0].store_id ; 
        this.form.shop_long = this.Results[0].store_long;
        this.form.shop_image = this.Results[0].store_image;
        this.form.shop_OpenTime = this.Results[0].store_open_time;

        // update the pics value to load the image

        this.pics = "http://app.bddial.com/public/images/" + this.form.shop_image;

        //alert(JSON.stringify(this.Results))
      });
  },
  methods: {

    getImgUrl(pet) {
      var images = require.context("../assets/", false, /\.png$/);
      return images(pet + "https://cdn2.thecatapi.com/images/e99.jpg");
    },
  greet: function() {
      this.$loading.show({ delay: 0, background: "#88444" });
    }
    ,
    deleteThisStore : function()
    { 
    
         axios
          .get("http://app.bddial.com/api/allstores/delete/"+ this.sid )
          .then(response => {
            this.res = response.data; // responseing the data
            this.results = response.data; // loading the data
         

           alert(this.results)
          
            history.back() 
          });  


    },
    onSubmit(evt) {
     // alert("fff");
      evt.preventDefault();
      let currentObj = this;
      this.greet() 
      axios.post("http://app.bddial.com/api/allstores/update-store" , this.form)
      .then(function(response){
          currentObj.output = response.data;

          alert(currentObj.output + " Data uploded");

          // location.reload(true) ;
          window.location.reload();
      })
        .catch(function(error) {
          currentObj.output = error;

          alert(currentObj.output);
          //window.location.reload();
        });
     
     
      // var headers = {'header1': 'application/json' }

      //this.greet() ;
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.food = "";
      this.form.shop_image = "";
      this.form.shop_OpenTime = "";
      this.form.shop_Name = "";
      this.form.shop_rank = 100;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },

    selectFile() {
      this.file = this.$refs.file.files[0];

      this.sendFile();
    },
    sendFile() {
      const formData = new FormData();
      formData.append("file", this.file);

      try {
        axios
          .post("http://app.bddial.com/api/upload", formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
          .then(res => {
            this.form.shop_image = res.data;

            alert(this.form.shop_image);
          })
          .catch(function(res) {
            alert("FAILURE!!" + res.data);
          });
      } catch (err) {
        alert(err);
      }
    }

  }
};
</script>


// css
<style scoped>
.storeUpdateFrom {
  width: 50%;
  text-align: center;
  display: inline-block;
}

#locationDiv {
  display: inline-block;
}

#input-group-8 {
  display: inline-block;
  margin-left: 10%;
  margin-top: 3%;
  margin-bottom: 3%;
}
#spinner {
  margin: 15;
}
#uploadBtn {
  display: inline;
}
#input-2{
  width: 100%;
  height: 100px ;
  text-align: center;
}

.submitDiv {
  margin-right: 10px;
}
</style>