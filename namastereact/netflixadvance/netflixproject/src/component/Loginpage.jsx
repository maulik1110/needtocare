import React from "react";
import Header from "./Header";
// import Bannerimg from "../assets/logo_files/Bannerimg.jpg"

const Loginpage = () => {
  return (
    <div>
      <Header />
      {/* <img src={Bannerimg} alt="bannerimg" /> */}
      <div className="absolute w-full h-full">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="banner"
        />
      </div>
      <form className="signup text-white rounded-lg px-12 py-5 relative bg-black w-3/12 flex flex-col translate-x-[-50%] translate-y-[50%] top-[50%] left-[50%] bg-opacity-80">
        <h1 className="font-bold text-white text-3xl my-5">Sign In</h1>
        <input className="p-2 my-2 bg-gray-700 rounded w-full" type="text" placeholder="Email Address" name="" id="" />
        <input className="p-2 my-2 bg-gray-700 rounded w-full" type="text" placeholder="Password" name="" id="" />
        <button className="p-2 my-5 rounded w-full bg-red-500" type="submit">Sign In</button>
        <p className="py-4 font-medium">New to Netflix? Sign Up Now</p>
      </form>
    </div>
  );
};

export default Loginpage;
