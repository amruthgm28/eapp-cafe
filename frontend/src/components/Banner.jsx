import React from "react";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row gap-4 mt-20">
        <div className=" w-full md:w-1/2 mt-12  md:mt-32 order-2 md:order-1">
          <div className="space-y-12 ">
            <h1 className="text-4xl font-bold">
              Hello, Welcome here to buy somthing{" "}
              <span className="text-pink-500 text-4xl font-bold">
                {" "}
                new everyday!!!
              </span>
            </h1>
            <p className="text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus hic vitae aperiam aspernatur enim? Incidunt, perferendis
              ipsam? Neque praesentium eius eveniet eligendi laboriosam officia
              doloremque, libero corporis dolore earum voluptates.
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="btn btn-secondary mt-8">Subscribe</button>
        </div>
        <div className="order-1 w-full md:w-1/2 flex">
          <img
            src="https://img.freepik.com/free-photo/portrait-handsome-young-man-talk-phone-straw-hat-isolated-white-background_231208-12578.jpg?ga=GA1.1.1341278248.1705148826&semt=ais_user"
            className="w-1/2  md:w-1/2 rounded-s-lg"
            alt=""
          />
          <img
            src="https://img.freepik.com/free-photo/portrait-beautiful-stylish-young-woman-with-sunglasses_158538-4112.jpg?ga=GA1.1.1341278248.1705148826&semt=ais_user"
            className="w-1/2  md:w-1/2 rounded-e-lg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
