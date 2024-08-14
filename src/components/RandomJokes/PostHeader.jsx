import React from "react";

function PostHeader() {
  return (
    <>
      <div className="flex gap-6 self-start text-base font-bold text-white whitespace-nowrap max-md:ml-1">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/086819406583ca20ec10d853870c779be39c11c3bd01a7915a68322e1a1616a7?placeholderIfAbsent=true&apiKey=ca25893004784157b7d465cb615c082f" alt="" className="object-contain shrink-0 self-start mt-1.5 aspect-[1.45] w-[13px]" />
        <div>Post</div>
      </div>
      <div className="flex gap-5 justify-between mt-6 w-full max-md:mr-2.5 max-md:max-w-full">
        <div className="flex gap-1.5">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d478ee9b0e45afc2c704a6313ac94bb77fb951c70f4483dc8e439b7a303e6019?placeholderIfAbsent=true&apiKey=ca25893004784157b7d465cb615c082f" alt="Elon Musk's profile picture" className="object-contain shrink-0 aspect-square rounded-[200px] w-[45px]" />
          <div className="flex flex-col self-start">
            <div className="flex gap-1 text-sm font-bold text-white">
              <div className="grow">Elon Musk</div>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba03f0fa8d3389634bf94eb7e023790e4bc8000d70f8d89f4480580197fc49ad?placeholderIfAbsent=true&apiKey=ca25893004784157b7d465cb615c082f" alt="" className="object-contain shrink-0 self-start w-3.5 aspect-square" />
            </div>
            <div className="self-start text-xs tracking-tight text-neutral-400">
              @elonmusk
            </div>
          </div>
        </div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/77a54952db61fed72061bee8ef570a5c01ef38b735f007ee94c1fdd44781b437?placeholderIfAbsent=true&apiKey=ca25893004784157b7d465cb615c082f" alt="" className="object-contain shrink-0 self-start mt-1 aspect-[3.66] w-[11px]" />
      </div>
    </>
  );
}

export default PostHeader;