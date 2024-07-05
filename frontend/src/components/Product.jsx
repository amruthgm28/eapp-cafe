import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import list from "../../public/list.json";
import Cards from "./Cards";
import axios from 'axios';

function product() {

const [shop, setShop]=useState([])
useEffect(()=>{
 const getShop = async()=>{
  try{
  const res =await axios.get("http://localhost:4001/shop");
  console.log(res.data)
  setShop(res.data)
  }catch(error){
   console.log(error);
  }
 }
 getShop();
},[])

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-3xl font-bold ">
            We are delighted have you
            <span className="text-pink-500"> Here : )</span>
          </h1>
          <p className="mt-12 justify-normal">
          At Mother's cafe, we believe in crafting more than just great coffee and delicious food; we create experiences. Nestled in the heart of Banglore, our cafe offers a warm and inviting atmosphere where you can relax, socialize, or catch up on work while enjoying the finest beverages and treats.
          </p>
          <Link to="/">
            <button className="bg-pink-400 text-white px-4 py-2 rounded-lg mt-6 hover:bg-pink-500 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="grid mt-4 grid-cols-1 md:grid-cols-4">
          {shop.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default product;
