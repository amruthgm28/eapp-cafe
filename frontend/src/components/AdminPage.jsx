import React from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { Admin } from "../../../backend/model/user.model";
import Home from "../home/Home";
import Navbar from "./Navbar";

function Signup() {
  const location =useLocation()
  const from =location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success('Signup Successfull');
         navigate(from, {replace:true});
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: "+  err.response.data.message);
        }
      });
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center ">
        <div className="">
          <div className="modal-box p-12 border w-screen">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-2xl shadow-md">Admin Page</h3>
              <div className="mt-4 space-y-2">
                <span>ID</span>
                <br />
                <input
                  type="Number"
                  placeholder="Enter your Product ID"
                  className="w-full p-1 border-b-2 border-pink-500 outline-none rounded"
                  {...register("password", { required: true })}
                />{" "}
                <br />
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your Product Name"
                  className="w-full p-1 border-b-2 border-pink-500 outline-none rounded"
                  {...register("fullname", { required: true })}
                />
                <br />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    Note-*This field is required
                  </span>
                )}
              </div>
              <div className="mt-4 space-y-2">
                <span>Title</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your product title"
                  className="w-full p-1 border-pink-500 border-b-2 outline-none rounded"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    Note-*This field is required
                  </span>
                )}
              </div>
              <div className="mt-4 space-y-2">
                <span>Price</span>
                <br />
                <input
                  type="Number"
                  placeholder="Enter your Product Price"
                  className="w-full p-1 border-b-2 border-pink-500 outline-none rounded"
                  {...register("password", { required: true })}
                />{" "}
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    Note-*This field is required
                  </span>
                )}
                 </div>
             
                </div>
              <div className="mt-4 space-y-2">
                <span>Catogery</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your Catogary type"
                  className="w-full p-1 border-b-2 border-pink-500 outline-none rounded"
                  {...register("password", { required: true })}
                />{" "}
                <br />
                </div>
              <div className="mt-4 space-y-2">
                <span>Image</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your Image link"
                  className="w-full p-1 border-b-2 border-pink-500 outline-none rounded"
                  {...register("password", { required: true })}
                />{" "}
                <br />
              </div>
              <div className="flex justify-between mt-4">
                <button className="bg-pink-400 text-white px-3 py-2 rounded-md hover:bg-pink-500 duration-150">
                  Add items
                </button>
                <p className="text-lg">
                  {" "}
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Back
                  </button>
                  < Login/>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
