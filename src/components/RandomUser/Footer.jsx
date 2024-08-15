import React from 'react';

function Footer() {
  return (
    <footer className="flex gap-5 justify-between self-end mt-20 max-w-full text-xs font-bold text-white text-opacity-40 w-[237px] mr-5 max-md:mt-10 max-md:mr-5">
      <p className="self-end mt-12 max-md:mt-10">© chai aur code</p>
      <a href="https://www.chaicode.com" target="_blank" rel="noopener noreferrer">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a685dbcfe687c1da00eb66734ac4a95d69a762ef671ac629e6e37e0e41b9c98?placeholderIfAbsent=true&apiKey=ca25893004784157b7d465cb615c082f"
        alt=""
        className="object-contain shrink-0 rounded-xl aspect-[0.97] w-[60px]"
      />
    </a>
    </footer>
  );
}

export default Footer;