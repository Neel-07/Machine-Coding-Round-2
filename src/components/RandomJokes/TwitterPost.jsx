import React, { useState, useEffect } from "react";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostStats from "./PostStats";
import PostFooter from "./PostFooter";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";

function TwitterPost() {
  const [isOpen, setIsOpen] = useState(false);
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  const fetchJoke = async () => {
    setLoading(true); // Start loading
    try {
      const response = await fetch("https://api.freeapi.app/api/v1/public/randomjokes/joke/random");
      const data = await response.json();
      setJoke(data.data.content || "Failed to load joke.");
    } catch (error) {
      setJoke("Failed to load joke.");
    } finally {
      setLoading(false); // End loading
    }
  };

  useEffect(() => {
    fetchJoke(); // Fetch a joke on component mount
  }, []);

  return (
    <article className="flex overflow-hidden flex-col bg-white relative">
      <div className="flex relative flex-col pt-64 pr-8 pb-8 pl-20 w-full min-h-[832px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7699e6b79a7e5ec15264e7f4664abc789a03b7062c737cd1591fa0cee4588be?placeholderIfAbsent=true&apiKey=ca25893004784157b7d465cb615c082f"
          alt=""
          className="object-cover absolute inset-0 size-full z-10"
        />
        <div className="flex relative flex-col self-center px-6 py-6 max-w-full bg-black rounded-xl shadow-[2px_2px_4px_rgba(0,0,0,0.25)] w-[524px] max-md:px-5 z-20">
          <PostHeader />
          <PostContent joke={joke} loading={loading} />
          <PostStats />
          <PostFooter />
        </div>
        <a href="https://www.chaicode.com" target="_blank" rel="noopener noreferrer" className="z-30">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a685dbcfe687c1da00eb66734ac4a95d69a762ef671ac629e6e37e0e41b9c98?placeholderIfAbsent=true&apiKey=ca25893004784157b7d465cb615c082f"
            alt=""
            className="object-contain absolute bottom-8 right-8  shrink-0 rounded-xl aspect-[0.97] w-[60px]"
          />
        </a>
      </div>

      {!isOpen && (
        <div className="fixed top-6 right-6 z-50">
          <FiMenu onClick={togglePanel} size={30} className="cursor-pointer text-black" />
        </div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <FiX onClick={togglePanel} size={30} className="cursor-pointer text-black" />
        </div>

        <nav className="flex justify-center border-t border-gray-300 h-full">
          <ul className="flex flex-col space-y-4 text-center p-4">
            <li>
              <NavLink
                to="/random-user"
                className={({ isActive }) =>
                  isActive ? "text-black font-bold p-2 " : "text-black p-2"
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
                  isActive ? " text-black  font-bold p-2 " : " text-black p-2 "
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
