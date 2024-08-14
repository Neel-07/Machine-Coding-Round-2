import React from "react";

function PostStats() {
  const stats = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6fe9d7d67c7d3887bed8607c71e2b0d447ed152f8175dfa02c4f65d145649cdb?placeholderIfAbsent=true&apiKey=ca25893004784157b7d465cb615c082f", text: "4.9K" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4d54007a069737500499c0ddd140ab8ed26c0d3d2ff7d6bee53be81e7946d1b4?placeholderIfAbsent=true&apiKey=ca25893004784157b7d465cb615c082f", text: "5.3K" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5a251ac1343dbde7ba80379f67c9df42305c985e56ca9bc0540779d31972d9bb?placeholderIfAbsent=true&apiKey=ca25893004784157b7d465cb615c082f", text: "59K" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5edaccabe696e4af325c0ab21750d080237bd40f8e71383bc57ef92a9eb9434e?placeholderIfAbsent=true&apiKey=ca25893004784157b7d465cb615c082f", text: "1.1K" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b1b9af58c2ea7ce741e9b3a6b43845510341a3ffb8ea562a22e3115aec558988?placeholderIfAbsent=true&apiKey=ca25893004784157b7d465cb615c082f", text: "" }
  ];

  return (
    <>
      <hr className="shrink-0 mt-4 h-0 border border-solid border-zinc-500 max-md:max-w-full" />
      <div className="flex gap-5 justify-between items-start self-center mt-3 max-w-full text-xs tracking-normal whitespace-nowrap text-zinc-500 w-[438px]">
        {stats.map((stat, index) => (
          <div key={index} className="flex gap-0.5">
            <img loading="lazy" src={stat.icon} alt="" className="object-contain shrink-0 w-2.5 aspect-square" />
            {stat.text && <div>{stat.text}</div>}
          </div>
        ))}
      </div>
      <hr className="shrink-0 mt-3 h-0 border border-solid border-zinc-500 max-md:max-w-full" />
    </>
  );
}

export default PostStats;