import React from "react";
import Bag from "../../assets/shopping-bag.svg";
import { ReactSVG } from "react-svg";
export default function Card({ image, title, price }) {
  return (
    <div className="flex flex-col mt-20 ">
      <div className="flex items-center justify-center flex-col">
        <div className="bg-quaternary rounded-2xl z-50">
          <img
            src={image}
            alt="banana"
            className="absolute w-[25rem] h-[25rem] z-60 ml-8 mt-[-11rem] tablet:w-[10rem] tablet:h-[10rem] tablet:mt-[-2rem]"
          />
          <div className="w-[17rem] h-[17rem] tablet:w-[10rem] tablet:h-[10rem] " />
        </div>
        <div className="absolute bg-quaternary opacity-35 rounded-2xl z-10 ml-10">
          <div className="w-[17rem] h-[17rem] opacity-0 tablet:w-[10rem] tablet:h-[10rem]" />
        </div>
        <div className="absolute bg-quaternary opacity-35 rounded-2xl z-10 ml-20">
          <div className="w-[17rem] h-[17rem] opacity-0 tablet:w-[10rem] tablet:h-[10rem]" />
        </div>
      </div>
      <div className="tablet:flex tablet:justify-center tablet:flex-col tablet:items-center ">
        <h1 className="font-extrabold text-[1.55rem] w-[17rem] tablet:w-[15rem] tablet:text-[1.2rem]  mt-8 ">
          {title}
        </h1>
        <h1 className="font-normal text-[1.55rem]  w-[17rem] tablet:text-[1.2rem] tablet:w-[15rem] ">
          Ice Cream
        </h1>
        <div className="flex flex-row items-center justify-center tablet:w-[15rem] ">
          <h1 className="font-extrabold text-[1.55rem] w-[17rem] tablet:text-[1.2rem] tablet:w-[15rem] ">
            {price}
          </h1>
          <div className=" w-14 h-14 tablet:w-10 tablet:h-10 bg-quaternary rounded-xl flex items-center justify-center transition duration-500 hover:bg-quaternary/50 cursor-pointer">
            <ReactSVG src={Bag} className="w-8 tablet:w-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
