import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import list from "../../public/list.json";
import Cards from "./Cards";
import axios from "axios";
import { useState, useEffect } from "react";

function Items() {

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
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // const filterData = list.filter((data) => data.category === "shirt");
  // console.log(filterData);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-10">
        <div>
          <h1 className="text-xl font-semibold pb-2">new trending fashions</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            iure ex perferendis quas minima aspernatur error, maxime fuga
            aliquid assumenda soluta quidem consequuntur? Nobis provident
            doloribus neque veniam, maiores quaerat.
          </p>
        </div>

        <div className="slider-container">
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
