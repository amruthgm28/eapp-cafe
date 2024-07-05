import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const User = mongoose.model("User", userSchema);
export default User;

const adminSchema = mongoose.Schema({
    id:{
        type : Number,
        required : true,
        unique: true,
    },
    name:{
        type : String,
        required:true,
    },
    title:{
        type : String,
        required : true,
    },
    price:{
        type : Number,
        required : true,
    },
    category:{
        type : String,
        required : true,
    },
    image:{
        type : String,
        required : true,
    },
});
const Admin = mongoose.model("Admin", adminSchema);
export { Admin };