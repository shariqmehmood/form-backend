const mongoose=require("mongoose");


const loginUser=mongoose.Schema({
  
    Email:{
        type:String,
        required:true,
    },
    Password:{
        type:String,
        required:true,
    },
    
  

})

let loginScheema=mongoose.model("loginScheema",loginUser);
module.exports=loginScheema;