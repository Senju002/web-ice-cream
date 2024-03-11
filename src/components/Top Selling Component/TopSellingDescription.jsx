import React from "react";
import TopSellingTitle from "./TopSellingTitle";
import TopSellingButton from "./TopSellingButton";

export default function TopSellingDescription() {
  return (
    <div className=" flex items-center justify-center flex-col w-[50rem]">
      <TopSellingTitle />
      <div className="flex flex-row gap-2 justify-between items-center w-full px-5 mt-10">
        <TopSellingButton />
      </div>
    </div>
  );
}
