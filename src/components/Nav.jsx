import React from "react";
import Logo from "../images/logo.png";
import Burger from "../assets/burger.svg";
import { ReactSVG } from "react-svg";

const links = [
  { text: "Home", href: "/" },
  { text: "Menu", href: "/" },
  { text: "Order Type", href: "/" },
  { text: "Contact", href: "/" },
];

export default function Nav() {
  return (
    <>
      <div className=" text-primaryTextColor font-extrabold flex flex-row  h-14 justify-between px-8 items-center w-full text-xs">
        <img src={Logo} alt="logo" className="h-5 " />
        <div className="flex gap-10 mobile:hidden">
          {links.map((link, index) => (
            <a
              className="transition duration-300  hover:text-quaternary hover:shadow-md"
              key={index}
              href={link.href}
            >
              {link.text}
            </a>
          ))}
        </div>
        <ReactSVG src={Burger} />
      </div>
    </>
  );
}
