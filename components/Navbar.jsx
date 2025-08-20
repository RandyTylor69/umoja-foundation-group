"use client";

import { RxHamburgerMenu } from "react-icons/rx";
import React from "react";

export default function Navbar() {
  const [burger, setBurger] = React.useState(false);

  function toggleNavbar() {
    setBurger((prev) => !prev);
  }

  return (
    <header
      className="px-6 sm:px-12 py-2 w-full h-[3rem] fixed top-0 bg-orange-50
        flex flex-row justify-between border-b-2 z-999
        "
    >
      <a href="#landing">UMOJA</a>

      {/** --- full nav bar --- */}
      <nav
        className="hidden sm:flex
            flex-row gap-4 text-sm items-center 
            "
      >
        <a href="#mission">Mission</a>
        <a href="#activities">Activities</a>
        <a href="#program">Our Program</a>
        <a href="#cost">Cost</a>
        <a href="#contact">Contact us</a>
      </nav>

      {/** --- burger nav bar --- */}
      <div onClick={toggleNavbar} className="sm:hidden cursor-pointer flex items-center ">
        <RxHamburgerMenu />
      </div>

      <div
        className={`fixed sm:hidden bg-orange-50/40 backdrop-blur-sm transform p-4
            h-[100vh] w-[40rem] top-[3rem] right-[-40rem]  duration-300 border-l-2
            ${burger ? `-translate-x-50`:``}
            `}
      >
        <nav className="flex flex-col gap-4">
          <a href="#mission">Mission</a>
          <a href="#activities">Activities</a>
          <a href="#program">Our Program</a>
          <a href="#cost">Cost</a>
          <a href="#contact">Contact us</a>
        </nav>
      </div>
    </header>
  );
}
