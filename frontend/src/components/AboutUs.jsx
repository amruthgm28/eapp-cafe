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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            magna ut ipsum tempor iaculis. Fusce pharetra, libero vel tempus
            efficitur, nisi libero eleifend lectus, at tempus sapien sapien a
            nulla. Nulla nec suscipit nisi. Cras suscipit volutpat lacus, vel
            pharetra sapien volutpat vel. Duis vel dictum lorem. Nulla facilisi.
          </p>
          <p className="mb-4">
            Nullam id aliquet quam. Etiam vel metus ac eros scelerisque iaculis
            non non ipsum. Vestibulum at efficitur ligula. Nulla pharetra
            ullamcorper nisi, ut interdum metus aliquam vel. In hac habitasse
            platea dictumst. Nullam pellentesque auctor diam, eget lacinia
            turpis mollis ac.
          </p>
          <p>
            Nam efficitur, turpis vel lacinia molestie, tortor augue ullamcorper
            est, eget condimentum libero arcu vitae ligula. Vestibulum pretium
            odio at nunc condimentum, vel gravida dui malesuada. Proin commodo
            turpis nec purus efficitur eleifend. Quisque tincidunt mi id dapibus
            vehicula. Cras sodales lorem a eros egestas dapibus.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full md:w-1/2 p-4">
            <img
              className="rounded-lg shadow-lg"
              src="https://img.freepik.com/free-photo/full-length-smiling-young-caucasian-brunette-woman-wears-sweater-jeans-glasses-looking-away-purple-background-leisure-lifestyle-concept_197531-32515.jpg?ga=GA1.1.1341278248.1705148826&semt=sph"
              alt="About Us"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <img
              className="rounded-lg shadow-lg"
              src="https://img.freepik.com/free-photo/young-woman-beautiful-red-dress_1303-17506.jpg?ga=GA1.1.1341278248.1705148826&semt=sph"
              alt="About Us"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
