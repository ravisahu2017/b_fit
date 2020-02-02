var express=require('express');
var schema=require('../DataBase/Model');
var {userDetail}=require('../DataBase/Opreation');
var route=express.Router();
var UserSchema=new userDetail(schema);

route.post("/registration",function(req,res){
    UserSchema.insertUserDetail(req.body)
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        res.send(err);
    })
})
route.get("/search/",function(req,res){
    var seachKey=req.query.searchKey;
    console.log(seachKey);
    UserSchema.searchUser(seachKey)
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        res.send(err);
    })
})

module.exports=route;