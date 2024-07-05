import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Login Successfull");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
          
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);

          toast.error("Error: " + err.response.data.message);
          setTimeout(()=>{},2000);
        }
      });
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box p-12 border w-screen">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h4 className="font-bold text-2xl">Login</h4>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your Email"
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
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your Password"
                className="w-full p-1 border-b-2 border-pink-500 outline-none rounded"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  Note-*This field is required
                </span>
              )}
            </div>
            <div className="flex justify-between mt-4">
              <button
                className="bg-pink-400 text-white px-3 py-2 rounded-md hover:bg-pink-500 duration-150"
                type="submit"
              >
                Login
              </button>
              <p>
                Not registered ?{" "}
                <Link
                  to="/signup"
                  className="cursor-pointer text-blue-500 underline"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;