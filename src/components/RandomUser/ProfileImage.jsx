import React from "react";

function ProfileImage({ imageUrl, title, name, username }) {
  return (
    <>
      <div className="relative mt-7 w-full max-w-[111px]">
        <img
          loading="lazy"
          src={imageUrl}
          alt={`Profile picture of ${name}`}
          className="rounded-full object-cover w-full aspect-[1.04] shadow-[1px_1px_4px_rgba(0,0,0,0.25)]"
        />
        {title && (
          <div className="absolute -top-2 -right-5 bg-black text-white text-xs font-semibold px-2 py-1 rounded-full">
            {title}
          </div>
        )}
      </div>
      <h2 className="mt-3 text-2xl tracking-wider text-black">{name}</h2>
      <p className="mt-3.5 text-xs tracking-wide text-black">{username}</p>
    </>
  );
}

export default ProfileImage;
