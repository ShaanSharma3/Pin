const express = require("express");  //to import module
const mongoose = require("mongoose");


const app = express();  //to construct an app using express
const pinRoute = require("./roots/pins");
const userRoute = require("./roots/users");

app.use(express.json());

mongoose.connect   //for establishing connection
('mongodb+srv://shaan:shaan27@cluster0.usiea9i.mongodb.net/shaan?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log("Mongo DB connected")
}).catch(err => console.log(err));


app.use("/api/users",userRoute);
app.use("/api/pins",pinRoute);


app.listen(8800,() =>{
    console.log("backend server is running!")
})
