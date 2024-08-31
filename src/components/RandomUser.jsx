import React from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { MdRefresh } from "react-icons/md";

function RandomUser() {
  return (
    <div className="container">
      
      <div className="box">
           <div className="flex justify-between items-center px-5 mt-6">
           <IoArrowBackSharp className="text-2xl" />
           <h2 className="title text-lg">Profile Overview</h2>
           <MdRefresh className="text-2xl"  />
           </div>
      </div>
      
    </div>
  );
}

export default RandomUser;
