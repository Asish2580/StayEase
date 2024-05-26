const User=require('../models/user');

module.exports.renderSignupForm=async(req,res)=>{
    res.render('./users/signup.ejs')
}

module.exports.signup=async(req,res)=>{
    try{
        let {username,email,password}=req.body;
        const newuser=new User({email,username});
       const registereduser= await User.register(newuser,password);
       req.login(registereduser,(err)=>{
        if(err){
            return next(err)
         }
         req.flash('success','You are logged in now')
         return res.redirect("/listings");
       })
     
    }catch(e){
        req.flash('error',e.message);
        res.redirect("/signup");
    }
}

module.exports.renderLoginForm=(req,res)=>{
    res.render("users/login.ejs")
}

module.exports.login=async(req,res)=>{
    req.flash('success','Welcome to wanderlust');
    let redirectUrl=res.locals.redirectUrl || "/listings"
    res.redirect(redirectUrl);
}

module.exports.logout=(req,res,next)=>{
    req.logout((err)=>{
        if(err){
           return next(err)
        }
        req.flash('success','You are logged out now')
        res.redirect("/listings");
    })
}