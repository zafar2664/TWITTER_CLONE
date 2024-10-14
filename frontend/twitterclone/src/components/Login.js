import React from "react";

const Login = () => {
  return (
    <div className=" w-screen h-screen flex items-center justify-center">
      <div className=" flex items-center justify-evenly w-[80%]">
        <div>
          <img
            className=" ml-5"
            width={"180px"}
            src="https://www.citypng.com/public/uploads/preview/hd-twitter-x-new-logo-png-735811696672788haniphkh2j.png"
            alt="twitter-logo"
          />
        </div>
        <div>
          <div className=" my-5">
            <h1 className=" font-bold text-6xl">Happening now.</h1>
          </div>
          <h1 className=" mt-4 mb-2 text-2xl font-bold">Login</h1>
          <form className=" flex flex-col w-[50%]">
            <input type="text" placeholder="Name" className="outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1 font-semibold" />
            <input type="text" placeholder="Username" className="outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1 font-semibold" />
            <input type="text" placeholder="Email" className="outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1 font-semibold" />
            <input type="text" placeholder="Password" className="outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1 font-semibold" />
            <button className=" bg-[#1D9BF0] border-none py-2 my-4 rounded-full text-lg text-white">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
