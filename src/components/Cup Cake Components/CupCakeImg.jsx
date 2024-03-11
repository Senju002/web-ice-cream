import React from "react";
import CupCakeImage from "../../images/cup-ice-cream.png";

export default function CupCakeImg() {
  return (
    <div className="flex items-center justify-center ml-20 ">
      <div className=" w-full z-50 mt-48">
        <img
          src={CupCakeImage}
          alt="Cup Cake Image"
          className="z-50 bg-transparent w-[30rem]"
        />
      </div>

      <div className="absolute bg-tertiary w-[35rem] h-[35rem] rounded-full z-30"></div>
      <div className="absolute bg-tertiary w-[35rem] h-[35rem] ml-10 mt-[-2rem] rounded-full z-10 opacity-35"></div>
      <div className="absolute bg-tertiary w-[35rem] h-[35rem] ml-20 mt-[-3rem] rounded-full z-10 opacity-35"></div>
    </div>
  );
}
