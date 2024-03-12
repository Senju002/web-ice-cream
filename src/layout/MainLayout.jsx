import React from "react";
import Nav from "../components/Nav";
import Home from "../section/Home";
import CupCake from "../section/CupCake";
import TopSelling from "../section/TopSelling";
import Banner from "../section/Banner";

export default function MainLayout() {
  return (
    <>
      <div className="bg-backgroundColor h-[280rem] flex items-center font-body flex-col mobile:gap-28">
        <Nav />
        <Home />
        <CupCake />
        <TopSelling />
        <Banner />
      </div>
    </>
  );
}
