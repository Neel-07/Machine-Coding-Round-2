import React from "react";

function ProfileImage() {
  return (
    <>
      <div className="relative mt-7 w-full max-w-[111px]">
  <img
    loading="lazy"
    src="https://s3-alpha-sig.figma.com/img/0584/17a5/4f205aba496f239ced6e754fd1ca71f7?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nJCvuJ9S3S14Dlwj69182PAUTeL0aK8U8Aqf~LznENvZSu4HgEJf5rRF9GWOnLsy2MO0Q7Nm8H86sozUaAzn3kjdOvta5yv0vrqhnlHFsHjjwa20T9YSMNWFliw~3cwT9GyfUmuQFec~zQR-pcGv5qXPyKg-vHA6n8qiJWjs0HrGC6UK1nyx3p9oWKP73-jNvpWV4nnav8GxnP2d~EQTXIGLUUBJUzyewMSLYKlV~JqeVN2jA17vwASfYEVUODpSZaG54YCBqabHv0xL9-HUKg8iYDzubcSd44oY6baeBgWAOOQ7sH3-W~v4RdPeLBdKC1p0Ugl4APwt47g66My9ig__"
    alt="Profile picture of Tom Garza"
    className="rounded-full object-cover w-full aspect-[1.04] shadow-[1px_1px_4px_rgba(0,0,0,0.25)]"
  />
  <div className="absolute -top-2 -right-5 bg-black text-white text-xs font-semibold px-2 py-1 rounded-full">
    Mr
  </div>
</div>


      <h2 className="mt-3 text-2xl tracking-wider text-black">Tom Garza</h2>
      <p className="mt-3.5 text-xs tracking-wide text-black">
        beautifulkoala355
      </p>
    </>
  );
}

export default ProfileImage;
