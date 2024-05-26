const mongoose=require('mongoose');
const initdata=require("./data.js");
const Listing=require("../models/listing.js");
const MONGO_URL="mongodb://127.0.0.1:27017/wanderlast"

main().then(()=>{
    console.log("conneted to db");
}).catch((err)=>{
    console.log("Database is not connected");
})
async function main(){
    await mongoose.connect(MONGO_URL);

}

const initDB=async()=>{
   await Listing.deleteMany({});
  initdata.data= initdata.data.map((obj)=>({ ...obj,owner:"6650c39855d83becb94414d9" }));
   await Listing.insertMany(initdata.data);
   console.log("DATA INITIALIZED");
}

initDB();