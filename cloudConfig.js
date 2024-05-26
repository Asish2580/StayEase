if(process.env.NODE_ENV != "production"){
    const dotenv= require('dotenv');
    dotenv.config();
 }
 
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET
});

const storage=new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:'wanderlust_DEV',
        allowedFormat:['png', 'jpg', 'jpeg']
    }
});

module.exports={
    cloudinary,
    storage
}