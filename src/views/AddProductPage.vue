<template>

<div>
     
     <div>
          <h3 id = "Text">Shop Details</h3>
           <!--  store_Id , shop_Name, shop_Details, shop_ph, shop_Adress, shop_OpenTime , shop_Image
    ,  shop_Rank   -->

          <p id = "Text">   Store ID : {{this.sid}} <br>  Store Name : {{form.shop_Name}}  <br> Store Ph : {{form.shop_ph}}
           <br> shop_Details :{{form.shop_Details}} <br>  shop_Adress : {{form.shop_Adress}} <br>
            shop_OpenTime : {{form.shop_OpenTime}} </p>




     </div>

  <div class="addStoreFrom">


    

      <h3 id = "Text">Add Product Page Form </h3>
      <br> 
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" enctype="multipart/form-data" >
      <b-form-group
        id="input-group-1"
        label="Enter The Product Name:"
        label-for="input-1"
        description=""
      >
        <b-form-input
          id="input-1"
          v-model="form.product_Name"
          type="name"
          required
          placeholder="Enter Product Name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Product Details:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.product_Details"
          required
          placeholder="Product Details"
        ></b-form-input>
      </b-form-group>




 <b-form-group id="input-group-90" label="Product Price :" label-for="input-90">
        <b-form-input
          id="input-90"
          v-model="form.product_Price"
          required
          placeholder="Product Price"
        ></b-form-input>
      </b-form-group>




 


<div>
     

      <h4> Product Image Upload</h4>

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

import axios from 'axios' ; 

// product_Name, product_Details, product_Price, product_Image,
//         shop_Name, shop_Details, shop_ph, shop_Adress, shop_OpenTime , shop_Image
//     ,  shop_Rank , store_Id
   
  export default {
    data() {
    //       <!--  store_Id , shop_Name, shop_Details, shop_ph, shop_Adress, shop_OpenTime , shop_Image
    // ,  shop_Rank   -->
      return {
        form: {
          shop_Name: '',
          shop_Details : '',
          shop_ph: '',
          shop_Adress : '',
          product_Price:'',
          product_Image:'',
          shop_Rank:0,
          shop_Id : 0, 
          product_Name : '',
          product_Details:'', 
          shop_Image:'',
          shop_OpenTime : '',  
           },
        sid: '',
        file : '',
        show: true ,
        uploading : false , 
        imageLink : ' '

         
      }
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

     
      
        this.form.shop_Id = this.Results[0].store_id ; 
        this.form.shop_Image = this.Results[0].store_image;
        this.form.shop_OpenTime = this.Results[0].store_open_time;

        // update the pics value to load the image

        this.pics = "http://app.bddial.com/public/images/" + this.form.shop_image;

        //alert(JSON.stringify(this.Results))
      });


          
        },
    methods: {


        sendFile(){

      const formData = new FormData() ; 
            formData.append('file', this.file) ; 
           

            try{
     axios.post( 'http://app.bddial.com/api/upload',formData,
  {
    headers: {
      
        'Content-Type': 'multipart/form-data'
    }
  }
)
.then(res =>{
  this.form.product_Image = res.data;

  alert(this.form.product_Image)
})
.catch(function(res){
  alert('FAILURE!!' + res.data);
});
            }
            catch(err){
             alert(err) ; }
             } , 
     
          greet : function(){

        
        this.$loading.show({delay:0, background: '#88444'})

           
              
          }, 

            selectFile(){

                  this.file = this.$refs.file.files[0] ; 

                  this.sendFile() ; 

            },



      onSubmit(evt) {
        // alert("fff") ; 
        
        evt.preventDefault()
         let currentObj = this;
   // var headers = {'header1': 'application/json' }

    this.greet() ; 
    axios.post('http://app.bddial.com/api/allProducts/create-product/'
    , this.form )
    .then(function (response) {
                    currentObj.output = response.data;
                  
  
                   
                     alert(currentObj.output + "") ; 

               
           

                     // location.reload(true) ; 
                    window.location.reload(); 
                      

                  


                })
      .catch(function (error) {
                    currentObj.output = error;
                    
                   
                    alert(currentObj.output)
                    window.location.reload(); 

                    
                }); 
      
    
     //   alert(JSON.stringify(this.form))
        // 
      },
      onReset(evt) {

      
        evt.preventDefault()
        // Reset our form values
        this.form.food = ''
        this.form.shop_Image = '' 
        this.form.shop_OpenTime = '' 
        this.form.shop_Name = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>


// css
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

#Text{
 
   font-family: 'Montserrat', sans-serif;
   
}
.addStoreFrom{
    width: 50%;
   text-align: center;
   display: inline-block;
}

#locationDiv{
    display: inline-block;
}

#input-group-8{
     display: inline-block;
     margin-left: 10%;
     margin-top:3%;
     margin-bottom: 3% ; 

}
#spinner{

margin: 15;

}
#uploadBtn{

 display: inline;
}
.submitDiv{

margin-right: 10px


}




</style>