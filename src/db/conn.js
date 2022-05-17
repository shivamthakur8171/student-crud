const mongoose = require ("mongoose");

mongoose.connect("mongodb://localhost:27017/studentapi").then(() =>{
    console.log("conn is successsful");
}).catch((e) =>{
    console.log("no conn" , e);
});