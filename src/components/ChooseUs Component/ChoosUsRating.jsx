import React from "react";
import { ReactSVG } from "react-svg";
import Star from "../../assets/star.svg";

export default function ChoosUsRating() {
  return (
    <div className="flex flex-col justify-center items-center border-l-4 pl-10 tablet:pl-7">
      <div className="flex flex-row justify-center items-center gap-4 ">
        <h4 className="text-3xl tablet:text-xl">4.5</h4>
        <ReactSVG src={Star} className="w-8 tablet:w-6" />
      </div>
      <h4 className="text-2xl font-semibold tablet:text-xl">100K Reviews</h4>
    </div>
  );
}
