 <div class="mtr-4">

  <a href="#">

    <b-card >

    <div class="row" >
  <div class="column" >
<img  :src="'http://localhost:3000/images/' + result.store_image" fluid alt="Responsive image" class="img-responsive" algin= "left" width="200px" height="200px" >
     </div>
  <div class="column" align = "left">


        
      <b-card-body>
        <p><strong>Name : </strong>{{result.store_name}}</p>
        <p><strong>Details : </strong>{{result.store_details}} </p>
      <div> <p> <strong>Phone: </strong>{{result.store_ph}} </p> </div>  
        <p><strong>Adress: </strong>{{result.store_adress}}</p>
    </b-card-body>

  </div>
</div>
       
    

    </b-card>
   </a> 
  </div>