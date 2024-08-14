import React from "react";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostStats from "./PostStats";
import PostFooter from "./PostFooter";

function TwitterPost() {
  return (
    <article className="flex overflow-hidden flex-col bg-white">
      <div className="flex relative flex-col pt-64 pr-8 pb-8 pl-20 w-full min-h-[832px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7699e6b79a7e5ec15264e7f4664abc789a03b7062c737cd1591fa0cee4588be?placeholderIfAbsent=true&apiKey=ca25893004784157b7d465cb615c082f" alt="" className="object-cover absolute inset-0 size-full" />
        <div className="flex relative flex-col self-center px-6 py-6 max-w-full bg-black rounded-xl shadow-[2px_2px_4px_rgba(0,0,0,0.25)] w-[524px] max-md:px-5">
          <PostHeader />
          <PostContent />
          <PostStats />
          <PostFooter />
        </div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8f20867214e3cbf1c51838c1a34dcf3eb92578acca9700f01bdba9a74f4a386?placeholderIfAbsent=true&apiKey=ca25893004784157b7d465cb615c082f" alt="" className="object-contain self-end mt-44 rounded-xl aspect-[0.96] w-[77px] max-md:mt-10" />
      </div>
    </article>
  );
}

export default TwitterPost;