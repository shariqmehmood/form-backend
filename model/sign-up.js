const mongoose=require("mongoose");


const CreateUser=mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
    },
    Password:{
        type:String,
        required:true,
    },
    
    Number:{
        type:String,
        required:true,
    }

})

let UserScheema=mongoose.model("UserScheema",CreateUser);
module.exports=UserScheema;