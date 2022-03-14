const express=require("express");


let routes=express.Router();
const {createUserData}=require("../controler/Userdata")
const {createLogindata}=require("../controler/logindata")

routes.post("/Signup",createUserData);
routes.post("/login", createLogindata);

module.exports=routes;