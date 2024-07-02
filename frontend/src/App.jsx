import React from "react";
import Home from "./home/Home";
import Fashion from "./product/Fashion";
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser]=useAuth();
  console.log("authh",authUser);
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fashion" element={authUser?<Fashion />:<Navigate to={"/signup"}/>} />
          {/* <Route path="/fashion" element={<Fashion/>}/> */}
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Toaster/>
      </div>
    </>
  );
}

export default App;
