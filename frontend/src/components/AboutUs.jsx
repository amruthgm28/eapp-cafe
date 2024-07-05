import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function AboutUs() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-24">
      <Navbar />
      <Link
        to="/"
        className="absolute ml-2 md:size-fit text-xs md:text-sm bg-pink-400 rounded-lg text-white md:p-2 p-1"
      >
        Back
      </Link>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold mb-4">About Us</h1>
        <div className="mb-8">
          <p className="mb-4">
          Nestled in the heart of Banglore, Mother's cafe is more than just a place to grab a cup of coffee—it's a cozy retreat where every visit feels like coming home. Since 2024 we've been dedicated to serving our community with exceptional coffee, delectable treats, and a warm, inviting atmosphere.
          </p>
          <p className="mb-4">
          in our cafe, we believe in the simple pleasures of life: good coffee, great food, and genuine hospitality. Our passion for quality drives everything we do, from sourcing the finest beans to crafting each beverage with care. We're committed to creating an environment where friends gather, ideas flow, and memories are made.
          </p>
          <p>
          More than just a cafe, it is a place where connections are made and friendships flourish. We're proud to support local artists, host community events, and partner with like-minded businesses to contribute positively to Banglore's vibrant culture.
          </p>
        </div>
        <div className="flex  justify-center items-center">
          <div className="w-full md:w-1/2">
            <img
              className="rounded-lg shadow-lg h-96"
              src="https://img.freepik.com/free-photo/full-shot-senior-people-chatting-bistro_23-2149356869.jpg?t=st=1720095460~exp=1720099060~hmac=a64b887cf7e70a32de95f13528f0f6183b0bf1d311c591907a52fc4c59d5648a&w=360"
              alt="About Us"
             
            />
          </div>
          <div className="w-full md:w-1/2">
            <img
              className="rounded-lg shadow-lg h-96"
              src="https://img.freepik.com/premium-photo/restaurant-room-with-tables-chairs_461960-2360.jpg?ga=GA1.1.1309892207.1720078656&semt=sph"
              alt="About Us"
              
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
