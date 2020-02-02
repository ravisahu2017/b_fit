var mongoose = require('mongoose');
var Schema = mongoose.Schema;
////************ User Detail ************************ */
var userDetail = mongoose.model('zymUser', new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        minlength:3,
        maxlength:30,
        validate:{
            validator(Name){
             return /^[a-zA-Z ]{3,30}$/.test(Name)
            },
            message:"name is incorrect format"
        }
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true,
        validate: {
            validator(email) {
              return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
            },
            message: 'Email is not Correct',
          }
    },
    DOB: {
        type: Date,
        trim: true,
        required: true
    },
    gender:{
        type:String,
        trim:true,
        required:true,
        validate:{
              validator(gender){
                    return /^male$|^female$|^other$/.test(gender);
               },
               message:"Gender is not correct"
        }
    },
    registrationDate: {
        type: Date,
        trim: true,
        required: true
    },
    validity: {
        type: Date,
        trim: true,
        required: true
    },
    membershipId:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    zipCode:{
        type:String,
        required:true,

    },
    phoneNo:{
        type:String,
        required:true, 
        minlength:10,
        maxlength:12,
    },
    memberType:{
        type:String,
        required:true
    }
}, {versionKey: false}))

module.exports=userDetail;