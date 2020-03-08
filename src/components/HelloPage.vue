<template>
  <div id="hellopage" class="helloPage">
    <h1   >Welcome To The Admin Panel !!!</h1>
    <br>
    <br>
    <div class="addMinDiv">
      <b-row>
        <b-col lg="4" class="pb-2" id = "btn">
          <b-button variant="success" v-on:click="goToStoreList">Store List</b-button>
        </b-col>
        
      </b-row>

       <b-row>
        
         <b-col lg="4" class="pb-2" id = "btn">
          <b-button variant="success" v-on:click="goToStore">Add Store</b-button>
        </b-col>
       
        
      </b-row>

       <b-row>
        
         <b-col lg="4" class="pb-2" id = "btn">
          <b-button variant="success" v-on:click="gotToPeople">Add People</b-button>
        </b-col>
       
        
      </b-row>

       <b-row>
        
         <b-col lg="4" class="pb-2" id = "btn">
          <b-button variant="success" v-on:click="gotToPeopleList">People List</b-button>
        </b-col>
       
        
      </b-row>

     

      
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloPage",
  props: {},
  methods: {
    goToStore: function() {
      this.$router.push("/AddStore").catch(error => {
        if (error.name != "NavigationDuplicated") {
          throw error;
        }
      });
    },
    goToStoreList : function()
    {
      this.$router.push("/storeList").catch(error => {
        if (error.name != "NavigationDuplicated") {
          throw error;
        }
      });

    },
    gotToPeople : function()
    {
      this.$router.push("/add-people").catch(error => {
        if (error.name != "NavigationDuplicated") {
          throw error;
        }
      });

    },
    alerted: function() {
      alert("ne");
    } , 

    gotToPeopleList : function()
    {
       this.$router.push("/peopleList").catch(error => {
        if (error.name != "NavigationDuplicated") {
          throw error;
        }
      });

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.helloPage {
 
  color: #42b983;
  background: #0000;
  font-family: Verdana, Geneva, Tahoma, sans-serif ;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.selector-for-some-widget {
  box-sizing: content-box;
}
.addMinDiv {
 
  display: inline-block;
}
.btn{
  width: 330px;
  height:70px;
  font-family: Verdana, Geneva, Tahoma, sans-serif ; 
  text-align: center;
  font-size: 1.4rem ; 

 
}

</style>
