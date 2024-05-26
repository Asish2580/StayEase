const express=require('express');
const router=express.Router();
const wrapasync = require('../utils/wrapasync');
const passport = require('passport');
const { saveRedirectUrl } = require('../middleware');
const userController=require('../controllers/users')

router.route('/signup')
.get(wrapasync(userController.renderSignupForm))
.post(wrapasync(userController.signup))

router.route('/login')
.get((userController.renderLoginForm))
.post(saveRedirectUrl,
passport.authenticate("local",{
    failureRedirect:'/login',
    failureFlash:true
}), wrapasync(userController.login))

router.get('/logout',userController.logout)

module.exports=router;