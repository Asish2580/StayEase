const express=require('express');
const router=express.Router({mergeParams: true});
const wrapasync = require('../utils/wrapasync');

const {validateReview,isLoggedin,isReviewauthor}=require('../middleware.js')
const reviewController=require('../controllers/reviews.js')



//Reviews
//post Route
router.post("/",isLoggedin,validateReview,wrapasync(
  reviewController.createReview));
  
//Delete  Review Route
  router.delete("/:reviewId",isLoggedin,isReviewauthor,wrapasync(reviewController.destroyReview))
  
  module.exports=router;