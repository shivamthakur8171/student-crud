const mongoose = require ("mongoose");
const validator = require("validator");

const StudentSchema = new mongoose.Schema({
    name :{
        type:String,
        required:true,
        minlength:3
    },
    email :{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
            }
        }

    },
    phone:{
        type:Number,
        required:true,
        unique:true,
        validate: {
            validator: function (v) {
              return /^[0-9]{10}/.test(v);
            },
            message: `{VALUE} is not a valid 10 digit number!`
          }
    },
    address:{
        type:String,
        required:true
    }

})

//we will create a new collection using models
const Student = new mongoose.model('Student',StudentSchema)

module.exports =Student;