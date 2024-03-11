import React from "react";
import CupCakeImage from "../../images/cup-ice-cream.png";

export default function CupCakeImg() {
  return (
    <div className="flex items-center justify-center ml-72 tablet:items-center tablet:mt-48 tablet:w-full tablet:ml-0 ">
      <div className="absolute bg-tertiary tablet:w-[15rem] tablet:h-[15rem] w-[35rem] h-[35rem] rounded-full z-30 flex justify-center items-center">
        {" "}
        <div className=" w-full z-50 mt-0">
          <img
            src={CupCakeImage}
            alt="Cup Cake Image"
            className="z-50 bg-transparent w-[30rem] tablet:w-[9rem] ml-12 tablet:ml-[3.5rem] mt-10 relative"
          />
        </div>
      </div>
      <div className="absolute bg-tertiary tablet:w-[15rem] tablet:h-[15rem] w-[35rem] h-[35rem] ml-10 mt-[-2rem] tablet:mt-[-0rem] rounded-full z-10 opacity-35"></div>
      <div className="absolute bg-tertiary tablet:w-[15rem] tablet:h-[15rem] w-[35rem] h-[35rem] ml-20 mt-[-3rem] tablet:mt-[-1rem] rounded-full z-10 opacity-35"></div>
    </div>
  );
}
