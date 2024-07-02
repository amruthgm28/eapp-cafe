import mongoose from "mongoose";

const list=mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String
})

const Shop=mongoose.model("fashion",list);

export default Shop;