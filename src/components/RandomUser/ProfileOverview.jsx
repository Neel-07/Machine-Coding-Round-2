import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileImage from "./ProfileImage";
import ProfileInfo from "./ProfileInfo";
import Footer from "./Footer";

function ProfileOverview() {
  return (
    <main className="flex overflow-hidden flex-col text-center bg-black bg-opacity-50 text-black text-opacity-70">
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
    </main>
  );
}

export default ProfileOverview;
