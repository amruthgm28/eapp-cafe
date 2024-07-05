import React from "react";
import Home from "./home/Home";
import Fashion from "./product/Fashion";
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";
import Admin from './components/AdminPage'
import Items from "./components/Items";


function App() {
  const [authUser, setAuthUser]=useAuth();
  // console.log("auth",authUser);
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/food" element={authUser?<Fashion/>:<Navigate to={"/signup"}/>}/>
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<Admin />}/>
        </Routes>
        <Toaster/>
      </div>
    </>
  );
}

export default App;
