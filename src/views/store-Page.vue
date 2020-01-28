<template>

<div>



</div>
     







</template>
<script>
export default {
    
     
    data(){
        return{
  results: [ ] , 
    link :'http://localhost:3000/images/' , 
    sid: '0' ,
    searchQuery: '' 
        }  
        
        
    }
, 

mounted(){

    this.sid = this.$route.params.pid ; 
 

}



}
</script>