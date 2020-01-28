<template>
  <div id = "hellopage" class="helloPage">

  
    <h1> Welcome To The Admin Panel !!!</h1> 
<div>

  <b-button variant="success" v-on:click="goToStore">Add Store</b-button>
  <b-button variant="success" v-on:click="alerted">Add Store</b-button>
</div>

  
   
  </div>
</template>

<script>

 

export default {

  name: 'HelloPage',
  props: {
    
  },
   methods: {
      goToStore:function(){

         this.$router.push('/AddStore').catch(error => {
  if (error.name != "NavigationDuplicated") {
    throw error;
  }
});
      } , 
      alerted:function()
      {
          alert('ne')

      }




}
} 


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

 .helloPage{

   color: #42b983 ; 
   background: #0000 ; 
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
</style>
