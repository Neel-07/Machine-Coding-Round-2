import React from "react";

function ProfileImage() {
  return (
    <>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c49a1e7df34597de5392c602f3834a6aec42fbc7b6725cf539f047848a62180?placeholderIfAbsent=true&apiKey=ca25893004784157b7d465cb615c082f"
        alt="Profile picture of Tom Garza"
        className="object-cover mt-7 w-full max-w-[111px] aspect-[1.04] shadow-[1px_1px_4px_rgba(0,0,0,0.25)]"
      />

      <h2 className="mt-3 text-2xl tracking-wider text-black">Tom Garza</h2>
      <p className="mt-3.5 text-xs tracking-wide text-black">
        beautifulkoala355
      </p>
    </>
  );
}

export default ProfileImage;
