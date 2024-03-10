import React from "react";
import Nav from "../components/Nav";
import Home from "../section/Home";

export default function MainLayout() {
  return (
    <>
      <div className="bg-backgroundColor h-screen flex items-center font-body flex-col">
        <Nav />
        <Home />
      </div>
    </>
  );
}
