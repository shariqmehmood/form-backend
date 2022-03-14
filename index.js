console.log("hello");
const express = require("express");
const mongoose = require("mongoose");
const CreateUser = require('./routes/routes')
// mongoose.connect("mongodb://localhost:27017/sign")



mongoose.connect("mongodb+srv://shariqweb:2F8f2ko2IYm2vYvo@cluster0.t2oaq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

mongoose.connection.once('open', () => {
    console.log(' Database Connected');
});
mongoose.connection.on('error', () => {
    console.log( "not Connect") 
});
const cors = require('cors')
let app = express();
app.use(cors())
app.use(express.json());


app.use('/', CreateUser)


app.listen(3000, () => {
    console.log("run Port")
});