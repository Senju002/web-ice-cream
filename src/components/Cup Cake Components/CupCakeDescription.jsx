import React from "react";
import CupCakeTitle from "./CupCakeTitle";
import CupCakeButton from "./CupCakeButton";
import CupCakePlayButton from "./CupCakePlayButton";
export default function CupCakeDescription() {
  return (
    <div className=" flex items-center justify-center flex-col w-[50rem]">
      <CupCakeTitle />
      <div className="flex flex-row gap-2 justify-between items-center w-full px-5 mt-10">
        <CupCakePlayButton />
        <CupCakeButton />
      </div>
    </div>
  );
}
