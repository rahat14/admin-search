<template>
  <div class="container" id="app">
    <h3 class="text-center" id = "Text">Store Listing :</h3>

    <!-- SEARCH FORM -->
<br>
    <input v-model="searchQuery" type="text" class="input is-medium" placeholder="Search For Store" id= "Text" />

    <b-button
      class="Searchbutton is-link is-medium"
      v-on:click="searchForData"
      variant="success"
    id="Text">Search</b-button>
    <br>
  <br> 

    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4 py-2" v-for="result in results" v-bind:key="result">
          <!-- Loading Cards   -->
          <div class="card h-100" id="cardDiv">
            <a class="a">
              <router-link :to="'/store-Page/' + result.store_id" class="a">
                <div class="img-hover-zoom">
                  <img
                    class="card-img-top"
                    :src="'http://app.bddial.com/public/images/' + result.store_image"
                    fluid
                    alt="card image collar"
                  />
                </div>

              </router-link>
            </a>

                <div class="card-body d-flex flex-column align-items-start">
                  <a class="a">
              <router-link :to="'/store-Page/' + result.store_id" class="a">
                  <h5 class="card-title">{{result.store_name}}</h5>
                  <p class="card-text">Store-ID : {{result.store_id}}</p>
                  <p class="card-text">
                    <strong>Name :</strong>
                    {{result.store_name}}
                  </p>
                  <p class="card-text">
                    <strong>Details :</strong>
                    {{result.store_details}}
                  </p>
                  <p class="card-text">
                    <strong>Phone:</strong>
                    {{result.store_ph}}
                  </p>
                  <p class="card-text">
                    <strong>Adress:</strong>
                    {{result.store_adress}}
                  </p>
                     </router-link>
            </a>
            <br>
                  <div id=buttonDiv>
                       <a class="a">
              <router-link :to="'/store-Page/' + result.store_id" class="a">

                   <button class="btn btn-primary mt-auto">Go To Store</button>

              </router-link>
                       </a>

                         
                       <a class="a">
                     <router-link :to="'/product-List/' + result.store_id" class="a">
                    <button class="btn btn-primary mt-auto" id=buttonDiv v-on:click="goToProductList">Product List</button>
                     </router-link>
                       </a>
                  </div>
             
                </div>
           
          </div>
        </div>
      </div>
    </div>

    <div>
      <!-- <b-img src="http://localhost:3000/images/1579327033101.jpg" fluid alt="Responsive image"></b-img> -->

      {{ res }}
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
      res: "null",
      isSearching: false,
      searchQuery: ""
    };
  },
  mounted() {
    axios.get("http://app.bddial.com/api/allstores").then(response => {
      this.res = response.data; // responseing the data
      this.results = response.data; // loading the data
    });
  },

  methods: {

     goToProductList: function() {
      this.$router.push("/AddStore").catch(error => {
        if (error.name != "NavigationDuplicated") {
          throw error;
        }
      });
    },
    searchForData: function() {
      if (this.searchQuery) {
        this.isSearching = true;
        const searchQuery = encodeURIComponent(this.searchQuery);

        axios
          .get("http://app.bddial.com/api/allstores/admin-search/" + searchQuery)
          .then(response => {
            this.res = response.data; // responseing the data
            this.results = response.data; // loading the data
          });
      } else 
      alert("Please Enter Somthing To Seach");

      //  axios.get(`${this.apiUrl}/?key=${this.apiKey}&q=${searchQuery}s&image_type=photo&per_page=15&safesearch=true`)
      //   .then(res => {
      //     if (res.data.total != 0) {
      //       this.images      = res.data.hits
      //       this.isSearching = false;
      //     } else {
      //       this.isSearching = false;
      //     }
      //   })
    },

    test() {
      alert("ok");
    }

    // }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

.container{
  background-color: #ffffff;
}

.img-responsive {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  height: 120px;
  width: 150px;
}


.a {
  text-decoration: none;
  color: black;
  font-size: .95rem ; 
  font-family: 'Montserrat', sans-serif;
}
#Text{
 
   font-family: 'Montserrat', sans-serif;
   font-weight: bold
}
.card-img-top {
  width: 100%;
  height: 12vw;
  object-fit: cover;
}

/* 
 for zoom effect  in the image 
.img-hover-zoom {
  height: 300px; 
  overflow: hidden; 
}


.img-hover-zoom img {
  transition: transform .5s ease;
}


.img-hover-zoom:hover img {
  transform: scale(1.5);
} */

#cardDiv:hover {
  box-shadow: 0 4px 8px 0 rgba(214, 57, 55, 0.52),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
#cardDiv{
  background: #ffffff
}

#search-form {
  padding-left: 20%;
  padding-right: 20%;
  display: flex;
  align-items: center;
}
.input {
  margin-right: 5px;
}

.Searchbutton {
  margin-top: 10px;
  width: 220px;
}
#buttonDiv{
  margin-left: 18px
}
</style>
