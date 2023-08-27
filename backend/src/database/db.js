// const mongoose = require('mongoose');

// // const mongoURl = process.env.DATABASE ;
// const mongoURl = "mongodb://localhost:27017/notebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false" ;

// const connectToMongo= ()=>{
//     mongoose.connect(mongoURl,()=>{
//         console.log("Connected to Mongooes  Successfully!");
//     })
// }
// module.exports=connectToMongo;
import { MongoClient } from "mongodb";

const connectionString =
  "mongodb://localhost:27017/notebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch (e) {
  console.error(e);
}

let db = conn.db("sample_training");

export default db;
