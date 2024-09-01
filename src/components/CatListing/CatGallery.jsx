import React, { useState, useEffect, useCallback } from 'react';
import CatCard from './CatCard';
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const CatGallery = () => {
  const [cats, setCats] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   console.log('Cats data:', cats);
  // }, [cats]);
  
  
  const fetchCats = useCallback(async () => {
    if (!hasMore || isLoading) return;

    setIsLoading(true);
    try {
      const response = await fetch(`https://api.freeapi.app/api/v1/public/cats?page=${page}&limit=4`);
      const data = await response.json();
      setCats(prevCats => {
        const newCats = [...prevCats, ...data.data.data];
        return newCats;
      });
      if (data.data.data.length < 4) {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching cat data:', error);
    } finally {
      setIsLoading(false);
    }
  }, [page, hasMore, isLoading]);

  useEffect(() => {
    fetchCats();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (isLoading || !hasMore) return;

      const container = document.querySelector('.cat-container');
      if (!container) return;

      const { scrollLeft, scrollWidth, clientWidth } = container;

      if (scrollLeft + scrollWidth >= clientWidth - 10) {
          // console.log('Condition met, incrementing page');
          setPage(prevPage => {
            const newPage = prevPage + 1;
            return newPage;
          });
      }
    };

    const container = document.querySelector('.cat-container');
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isLoading, hasMore]);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="flex overflow-hidden bg-white bg-opacity-60 relative">
      <section className="flex flex-col pt-4 pb-16 pl-10 w-full min-h-screen max-md:pl-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7615083a4cbb2129312ead281e128af65d1871ef4da45342efca79167839f04a?placeholderIfAbsent=true&apiKey=ca25893004784157b7d465cb615c082f"
          alt="Background"
          className="object-cover absolute inset-0 w-full h-full z-10"
        />
        <header className="flex justify-between items-center w-full text-5xl font-bold tracking-tighter text-center text-white max-w-[1214px] max-md:max-w-full max-md:text-4xl z-20">
          <h1 className="mt-5">Cats around us</h1>
          <a
            href="https://www.chaicode.com"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-20 z-50"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a685dbcfe687c1da00eb66734ac4a95d69a762ef671ac629e6e37e0e41b9c98?placeholderIfAbsent=true&apiKey=ca25893004784157b7d465cb615c082f"
              alt="Chaicode Logo"
              className="object-contain rounded-xl aspect-[0.97] w-[60px]"
            />
          </a>
        </header>
        <div className="flex overflow-x-auto gap-5 mt-6 py-4 relative z-20 cat-container" style={{ height: '800px' }}>
          {cats.length > 0 ? (
            cats.map((cat, index) => (
              <div key={index} className="flex-shrink-0 w-[300px] h-[400px]">
                <CatCard {...cat} />
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No cats available</p>
          )}
          {isLoading && <p className="text-center text-gray-600">Loading...</p>}
        </div>
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
          <ul className="flex flex-col items-center space-y-4 p-4 border-t border-gray-300">
            <li>
              <NavLink
                to="/random-user"
                className={({ isActive }) =>
                  isActive ? "text-black font-bold nav-link" : "text-black nav-link"
                }
                onClick={togglePanel}
              >
                Random User
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/random-jokes"
                className={({ isActive }) =>
                  isActive ? "text-black font-bold nav-link" : "text-black nav-link"
                }
                onClick={togglePanel}
              >
                Random Jokes
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
};

export default CatGallery;
