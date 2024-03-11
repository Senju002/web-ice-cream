import React from "react";
import Bag from "../../assets/shopping-bag.svg";
import { ReactSVG } from "react-svg";
export default function Card({ image, title, price }) {
  return (
    <div className="flex flex-col ">
      <div className="flex items-center justify-center flex-col">
        <div className="bg-quaternary rounded-2xl z-50">
          <img
            src={image}
            alt="banana"
            className="absolute w-[25rem] h-[25rem] z-60 ml-8 mt-[-11rem]"
          />
          <div className="w-[17rem] h-[17rem] " />
        </div>
        <div className="absolute bg-quaternary opacity-35 rounded-2xl z-10 ml-10">
          <div className="w-[17rem] h-[17rem] opacity-0" />
        </div>
        <div className="absolute bg-quaternary opacity-35 rounded-2xl z-10 ml-20">
          <div className="w-[17rem] h-[17rem] opacity-0" />
        </div>
      </div>
      <div className="">
        <h1 className="font-extrabold text-[1.55rem] w-[17rem] mt-8 ">
          {title}
        </h1>
        <h1 className="font-normal text-[1.55rem]  w-[17rem] ">Ice Cream</h1>
        <div className="flex flex-row items-center ">
          <h1 className="font-extrabold text-[1.55rem] w-[17rem]  ">{price}</h1>
          <div className=" w-14 h-14 bg-quaternary rounded-xl flex items-center justify-center transition duration-500 hover:bg-quaternary/50 cursor-pointer">
            <ReactSVG src={Bag} className="w-8" />
          </div>
        </div>
      </div>
    </div>
  );
}
