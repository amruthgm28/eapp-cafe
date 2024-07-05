import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import list from "../../public/list.json";
import Cards from "./Cards";
import axios from "axios";
import { useState, useEffect } from "react";

function  Items() {

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

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplaySpeed:6000,
    autoplay:true,
    cssEase:'ease-in-out',
    pauseOnHover:false,
    pauseOnFocus:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          autoplay:true,
          autoplaySpeed:4000,
          cssEase:'ease-in-out',
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          autoplay:true,
          autoplaySpeed:4000,
          cssEase:'ease-in-out',
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay:true,
          autoplaySpeed:4000,
          cssEase:'ease-in-out',
        },
      },
    ],
  };

  // const filterData = list.filter((data) => data.category === "shirt");
  // console.log(filterData);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-10 ">
        <div>
          <h1 className="text-xl font-semibold pb-2">Find your meal Here</h1>
          <p>
          Finding the perfect meal for any occasion is now easier than ever with MealSearch. Whether you're craving a quick lunch, planning a romantic dinner, or searching for a new recipe to try at home, MealSearch is your ultimate culinary companion.
          </p>
        </div>

        <div className="" >
          <Slider {...settings}>
            {shop.map((item)=>(
              <Cards item={item} key={item.id}/>
            ))}
            
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Items;
