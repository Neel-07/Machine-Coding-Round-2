import React, { useState } from "react";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostStats from "./PostStats";
import PostFooter from "./PostFooter";
import { FiMenu, FiX } from "react-icons/fi"; // Importing icons from React Icons
import { NavLink } from "react-router-dom";

function TwitterPost() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className="flex overflow-hidden flex-col bg-white">
      <div className="flex relative flex-col pt-64 pr-8 pb-8 pl-20 w-full min-h-[832px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7699e6b79a7e5ec15264e7f4664abc789a03b7062c737cd1591fa0cee4588be?placeholderIfAbsent=true&apiKey=ca25893004784157b7d465cb615c082f"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col self-center px-6 py-6 max-w-full bg-black rounded-xl shadow-[2px_2px_4px_rgba(0,0,0,0.25)] w-[524px] max-md:px-5">
          <PostHeader />
          <PostContent />
          <PostStats />
          <PostFooter />
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8f20867214e3cbf1c51838c1a34dcf3eb92578acca9700f01bdba9a74f4a386?placeholderIfAbsent=true&apiKey=ca25893004784157b7d465cb615c082f"
          alt=""
          className="object-contain self-end mt-44 rounded-xl aspect-[0.96] w-[77px] max-md:mt-10"
        />
      </div>

      {/* Hamburger Icon */}
      {!isOpen && (
        <div className="fixed top-6 right-6 z-50">
          <FiMenu onClick={togglePanel} size={30} className="cursor-pointer text-black" />
        </div>
      )}

      {/* Side Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Icon */}
        <div className="flex justify-end p-4">
          <FiX onClick={togglePanel} size={30} className="cursor-pointer text-black" />
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex flex-col space-y-4 p-4 border-t border-gray-300">
            <li>
              <NavLink
                to="/random-user"
                className={({ isActive }) =>
                  isActive ? "text-black font-bold p-2" : "text-black p-2"
                }
                onClick={togglePanel}
              >
                Random User
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cats-listing"
                className={({ isActive }) =>
                  isActive ? "text-black font-bold p-2" : "text-black p-2"
                }
                onClick={togglePanel}
              >
                Cats Listing
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </article>
  );
}

export default TwitterPost;
