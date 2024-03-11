import React from "react";

export default function CupCakeButton() {
  return (
    <div className="relative ">
      <button className="font-medium text-[1.7rem] h-24 bg-tertiary w-[20rem] rounded-3xl z-50 relative transition duration-500 hover:bg-primary  ">
        Explore More
      </button>
      <div className="absolute top-[0rem] ml-2 z-10">
        <div className="font-medium text-[2rem] h-24 opacity-35 bg-tertiary w-[20rem] rounded-3xl text-transparent"></div>
      </div>
      <div className="absolute top-[0rem] ml-4 z-30">
        <div className="font-medium text-[2rem] h-24 opacity-35 bg-tertiary w-[20rem] rounded-3xl text-transparent "></div>
      </div>
    </div>
  );
}
