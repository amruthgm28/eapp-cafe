import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Items from "../components/Items";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Items />
      <Footer />
    </>
  );
}

export default Home;
