// const { default: mongoose } = require('mongoose');
const mongoose = require('mongoose');

// const mongoURl = process.env.DATABASE ;
const mongoURl = "mongodb://localhost:27017/notebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false" ;

const connectToMongo= ()=>{
    mongoose.connect(mongoURl,()=>{
        console.log("Connected to Mongooes  Successfully!");
    })
}
module.exports=connectToMongo;