import React, { useState, useEffect } from "react";

function PostContent() {
  const [joke, setJoke] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const [views, setViews] = useState(0);

  useEffect(() => {
    // Fetch joke from API
    const fetchJoke = async () => {
      try {
        const response = await fetch("https://api.freeapi.app/api/v1/public/randomjokes/joke/random");
        const data = await response.json();
        setJoke(data.data.content || "Failed to load joke.");
      } catch (error) {
        setJoke("Failed to load joke.");
      }
    };

    fetchJoke();

    // Generate random date and time
    const startYear = 2015; // specify the earliest year you want
    const endYear = new Date().getFullYear(); // current year
    const randomYear = Math.floor(Math.random() * (endYear - startYear + 1)) + startYear;

    const randomDate = new Date(
      new Date(randomYear, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(randomYear, 0, 1).getTime())
    );


    const formattedDate = randomDate.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    const formattedTime = `${formattedDate} · ${randomDate.toLocaleDateString(
      "en-US",
      { month: "short", day: "numeric", year: "numeric" }
    )}`;
    setTimestamp(formattedTime);

    // Generate random view count
    const randomViews = (Math.floor(Math.random() * 900) + 100) / 10; // random views between 10.0M and 99.9M
    setViews(randomViews.toFixed(1)); // keep one decimal place
  }, []);

  return (
    <>
      <p className="mt-2.5 text-sm tracking-tight text-white max-md:mr-1 max-md:max-w-full">
        {joke}
      </p>
      <div className="self-start mt-6 text-xs tracking-normal text-neutral-400">
        {timestamp} · <span className="font-semibold text-white">{views}M</span> Views
      </div>
    </>
  );
}

export default PostContent;
