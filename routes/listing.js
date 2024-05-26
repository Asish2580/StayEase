const express=require('express');
const router=express.Router();
const wrapasync = require('../utils/wrapasync');
const {isLoggedin, isOwner}=require('../middleware.js');
const listingController=require('../controllers/listings.js')
const multer=require('multer')
const {storage}=require('../cloudConfig.js');
const upload=multer({storage})



router.route('/')
.get(wrapasync(listingController.index))
.post(isLoggedin,upload.single('listing[image]'),wrapasync( listingController.createListing))


router.route('/new')
.get(isLoggedin, wrapasync(listingController.renderNewForm))



router.route('/:id')
.get(wrapasync(listingController.showListing))
.put(isLoggedin,isOwner,upload.single('listing[image]'), wrapasync(listingController.updataListing))
.delete(isLoggedin,isOwner,wrapasync(listingController.destroyListing))

router.get("/:id/edit",isLoggedin,wrapasync(listingController.renderEditForm))


module.exports=router;