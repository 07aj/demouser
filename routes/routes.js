var express=require('express'),
var login=require('config/login'),
var models=require('config/models');
var app=express();
module.exports = function(app)
{
    app.get('/login',function(req,res){
    var email=req.body.email;
    var passsword=req.body.password;
    login.login(email,password,function(found)
    {

    console.log(found);res.json(found);
    });
    });
}
    
        