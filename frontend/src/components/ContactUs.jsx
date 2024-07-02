import React, { useState } from 'react';
import {Link }from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to backend or display it
    console.log(formData);
    // Optionally, you can reset the form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-24">
        <Navbar/>
        <Link to="/" className="absolute ml-2 md:size-fit text-xs md:text-sm bg-pink-400 rounded-lg text-white md:p-2 p-1">Back</Link>
      <div className="flex flex-col items-center justify-center my-9">
        <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          <div className="flex flex-wrap mb-6">
            <div className="w-full">
              <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="name"
                type="text"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-6">
            <div className="w-full">
              <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="email"
                type="email"
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-6">
            <div className="w-full">
              <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="message"
                placeholder="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
}

export default ContactUs;
