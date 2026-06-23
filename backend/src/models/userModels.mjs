import mongoose, { Schema } from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
    Name : {
        type: String,
        required : [true, "Please enter Your Name"],
        maxLength : [25, "Name must be less then 25 character"],
        minLength: [3, "Name must be more then 3 character"]
    },
    email: {
        type : String,
        required : [true, "Please enter Your Email"],
        unique: true,
        validator : [validator.isEmail, "Please enter valid Your Email"]
    },
    password:{
        type: String,
        required : [true, "Please enter Your Password"],
        minLength : [8, "Name must be more then 8 character"], 
        select: false
    },
    avatar:{
        public_id: {
            type: String,
            required: true,
        },
        url:{
            type: String,
            required: true,
        }
    },
    role:{
        type: String,
        default : "user"
    },
    resetPwdToken : String,
    resetPwdExpire : Date,
},{timestamps:true})

export default mongoose.model("User", userSchema)