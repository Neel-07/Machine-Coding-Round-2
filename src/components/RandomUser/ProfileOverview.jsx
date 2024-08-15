import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";
import ProfileImage from "./ProfileImage";
import ProfileInfo from "./ProfileInfo";
import Footer from "./Footer";
import { FiMenu, FiX } from "react-icons/fi"; // Importing icons from React Icons

function ProfileOverview() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="relative flex overflow-hidden flex-col text-center bg-black bg-opacity-50 text-black text-opacity-70">
      <section className="flex relative flex-col justify-center items-center px-20 py-24 min-h-[832px] max-md:px-5 max-md:py-24 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9cadf6423d74694cad28dcebfb28eaf04447998325904622b85f354c83abd6b?placeholderIfAbsent=true&apiKey=ca25893004784157b7d465cb615c082f"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <article className="flex relative flex-col items-center py-8 mb-0 max-w-full bg-violet-300 rounded-xl border-8 border-white border-solid w-[420px] max-md:mb-2.5">
          <ProfileHeader />
          <ProfileImage />
          <ProfileInfo />
          <Footer />
        </article>
      </section>

      {/* Hamburger Icon */}
      {!isOpen && (
        <div className="fixed top-6 right-6 z-50">
          <FiMenu
            onClick={togglePanel}
            size={30}
            className="cursor-pointer text-white"
          />
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
          <FiX
            onClick={togglePanel}
            size={30}
            className="cursor-pointer text-black"
          />
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex flex-col space-y-4 p-4 border-t border-gray-300">
            <li>
              <NavLink
                to="/random-jokes"
                className={({ isActive }) =>
                  isActive ? "text-black font-bold  nav-link" : "text-black nav-link"
                }
                onClick={togglePanel} // Close panel on link click
              >
                Random Jokes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cats-listing"
                className={({ isActive }) =>
                  isActive ? "text-black font-bold nav-link" : "text-black nav-link"
                }
                onClick={togglePanel} // Close panel on link click
              >
                Cats Listing
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
}

export default ProfileOverview;
