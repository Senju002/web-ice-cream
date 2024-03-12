import React from "react";
import ChooseUsTitle from "./ChooseUsTitle";
import ChooseUsButton from "./ChooseUsButton";
import ChoosUsRating from "./ChoosUsRating";

export default function ChooseUsDescription() {
  return (
    <div className=" flex items-center justify-center flex-col w-[50rem]">
      <ChooseUsTitle />
      <div className="flex flex-row gap-2 justify-between tablet:justify-center items-center w-full tablet:gap-10 flex-wrap mt-10">
        <ChooseUsButton />
        <ChoosUsRating />
        <div className="w-24 mobile:hidden"></div>
      </div>
    </div>
  );
}
