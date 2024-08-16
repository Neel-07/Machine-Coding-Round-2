import React from 'react';

function ProfileHeader({ onRefresh }) {
  return (
    <header className="flex gap-5 justify-between max-w-full text-base w-[319px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/562691351240c63843e6166f318a61178113b57e256d0ec97400222bfa5573f2?placeholderIfAbsent=true&apiKey=ca25893004784157b7d465cb615c082f"
        alt="Left Icon"
        className="object-contain shrink-0 my-auto w-4 aspect-[1.33]"
      />
      <h1>Profile Overview</h1>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a61351683dc3eb09cad047eb8f147d0148cedff67dac79d9a06d914999565464?placeholderIfAbsent=true&apiKey=ca25893004784157b7d465cb615c082f"
        alt="Refresh Icon"
        className="object-contain shrink-0 w-6 aspect-square cursor-pointer"
        onClick={onRefresh} // Attach the refresh function to this icon
      />
    </header>
  );
}

export default ProfileHeader;
