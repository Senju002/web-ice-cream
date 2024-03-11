import React from "react";
import Nav from "../components/Nav";
import Home from "../section/Home";
import CupCake from "../section/CupCake";
import TopSelling from "../section/TopSelling";

export default function MainLayout() {
  return (
    <>
      <div className="bg-backgroundColor h-[280rem] flex items-center font-body flex-col">
        <Nav />
        <Home />
        <CupCake />
        <TopSelling />
      </div>
    </>
  );
}
