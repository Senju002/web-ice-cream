import React from "react";

export default function ChooseUsButton() {
  return (
    <div className="relative text-backgroundColor ">
      <button className="font-medium text-[1.7rem] tablet:text-[1.3rem] h-24 tablet:h-16 bg-primaryTextColor tablet:w-[12rem] w-[20rem] rounded-3xl z-50 relative transition duration-500 hover:bg-primaryTextColor/55  ">
        Know More
      </button>
      <div className="absolute top-[0rem] ml-2 z-10">
        <div className="font-medium text-[2rem] h-24 tablet:h-16 opacity-35 bg-primaryTextColor tablet:w-[12rem] w-[20rem] rounded-3xl text-transparent"></div>
      </div>
      <div className="absolute top-[0rem] ml-4 z-30">
        <div className="font-medium text-[2rem] h-24 tablet:h-16 opacity-35 bg-primaryTextColor tablet:w-[12rem] w-[20rem] rounded-3xl text-transparent "></div>
      </div>
    </div>
  );
}
