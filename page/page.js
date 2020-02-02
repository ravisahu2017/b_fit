var express=require('express');
var route=express.Router();
const path = require('path');
route.use(express.static(__dirname))
route.get("/",function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
})

module.exports= route;