<template>

<div>
     

  <div class="addStoreFrom">


    

      <h3 id = "Text">Add People  Page Form </h3>
      <br> 
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" enctype="multipart/form-data" >
      <b-form-group
        id="input-group-1"
        label="Enter The People Name:"
        label-for="input-1"
        description=""
      >
        <b-form-input
          id="input-1"
          v-model="form.shop_Name"
          type="name"
          required
          placeholder="Enter The Name"
        ></b-form-input>
      </b-form-group>
        <b-form-group
        id="input-group-1"
         type="number"
        label="Enter The People Number:"
        label-for="input-1"
        description=""
      >
        <b-form-input
          id="input-1"
          v-model="form.shop_ph"
          type="number"
          required
          placeholder="Enter The Number"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Service Details:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.shop_Details"
          required
          placeholder="Service Details"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Service Location :" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.shop_Adress"
          required
          placeholder="Service Location"
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


 <b-form-group id="input-group-90" label="Service Charge :" label-for="input-90">
        <b-form-input
          id="input-90"
          v-model="form.service_charge"
          required
          type="number"
          placeholder="Service Charge "
        ></b-form-input>
      </b-form-group>
       <H4>Enter People Service Category </H4>

        <b-form-group
          id="input-group-3"
          label="People Service Category : (Unchange-able)"
          label-for="input-3"
        >
          <b-form-select
            id="input-3"
            v-model="form.service_category"
            :options="service_category"
            required 
            >
         
          </b-form-select>
  
        </b-form-group>

         <b-form-group
          id="input-group-3"
          label="People Service Sub  Category : (Unchange-able)"
          label-for="input-3"
        >
          <b-form-select
            id="input-3"
            v-model="form.ppl_job_sub_category"
            :options="ppl_job_sub_category"
            required 
            >
         
          </b-form-select>
  
        </b-form-group>



        <H4>Enter People Service  Location</H4>

        <b-form-group
          id="input-group-3"
          label="Location Category : (Unchange-able)"
          label-for="input-3"
        >
          <b-form-select
            id="input-3"
            v-model="form.shop_loc_Category"
            :options="loc_Category"
            required 
            >
         
          </b-form-select>
  
        </b-form-group>

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
            >
            </b-form-input>
          </b-form-group>

          <h4>Image Upload</h4>
        </div>





  <div class="field">

 <div class="file is-boxed is-primary" id ="uploadBtn">
 
 <label  class="file-label">

   <input 
        type = "file"
        ref='file'
        required
        @change="selectFile"
        class="file-input"  />

        <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label">
        Upload a Image..... 
      </span>
    </span>

    <span v-if="file" class="file-name">{{file.name}}</span>

 </label>

     
    </div>
  </div>

<div  >

      <b-button class="submitDiv" type="submit" variant="primary" size="lg" >Submit</b-button>
      <b-button type="reset" variant="danger" size="lg">Reset</b-button>
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
      form: {
        shop_Name: "",
        shop_Details: "",
        shop_ph: "",
        shop_Adress: "",
        shop_Tag: "",
      
        shop_loc_Category: [],
        shop_lat: "",
        shop_long: "",
        shop_image: "",
        ppl_job_sub_category:[],
        service_category:[],
        service_charge:""
      },
      service_category: [
      "DOCTOR",
      "BUILDING",
      "PEDI"
      ],
      loc_Category: [
        { text: "Select One", value: null },
        "KandirPar",
        "RaceCourse",
        "Rajgonj"
      ],
      ppl_job_sub_category: [
      "Medicine",
      "MBBS",
      "PEDI"
      ],
      file: "",
      show: true,
      uploading: false,
      imageLink: " "
    };
  },
  components: {},
  methods: {
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
    },

    greet: function() {
      this.$loading.show({ delay: 0, background: "#88444" });
    },

    selectFile() {
      this.file = this.$refs.file.files[0];

      this.sendFile();
    },

    onSubmit(evt) {
      // alert("fff") ;

      evt.preventDefault();
      let currentObj = this;
      // var headers = {'header1': 'application/json' }

      this.greet();
      axios
        .post("http://app.bddial.com/api/peopledb/create-people", this.form)
        .then(function(response) {
          currentObj.output = response.data;

          alert(currentObj.output + " data uploded");

          // location.reload(true) ;
          window.location.reload();
        })
        .catch(function(error) {
          currentObj.output = error;

          alert(currentObj.output);
          window.location.reload();
        });

      //   alert(JSON.stringify(this.form))
      //
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.food = "";
      this.form.shop_image = "";
      this.form.shop_OpenTime = "";
      this.form.shop_Name = "";
      this.form.ppl_job_sub_category = "" ; 
      this.form.service_sub_category = "" ; 

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>


// css
<style scoped>
.addStoreFrom {
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
.submitDiv {
  margin-right: 10px;
}
</style>