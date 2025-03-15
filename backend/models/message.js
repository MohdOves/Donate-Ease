import mongoose from "mongoose";
import validator from "validator"

const messageSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required:true,
        minLength:[3,"Name must contain at Least 3 characters!"],
        maxLength:[30,"Name cannot exceed 30 characters!"]
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"Provide a valid EMail"]
    },
    phone:{
        type:String,
        required:true,
        minLength:[12,"Phone Must Contain 12 Digits"],
        maxLength:[13,"Phone Must Contain 12 Digits"]
    },
    message:{
        type:String,
        required:true,
    },
    
});


export const Message = mongoose.model("Message",messageSchema);