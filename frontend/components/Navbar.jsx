"use client";

import { RxHamburgerMenu } from "react-icons/rx";
import { useState, useContext } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AuthContext } from "../app/AuthProvider";

export default function Navbar() {
  // access authContext
  const context = useContext(AuthContext);
  const { user, setUser } = context;

  const [burger, setBurger] = useState(false);
  const pathname = usePathname();

  function toggleNavbar() {
    setBurger((prev) => !prev);
  }

  async function logOut() {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/logout`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          
        },
       
      });

      
      setUser(false);
      alert("Log out successful!");
    } catch (err) {
      console.error("Logout failed.", err);
    }
  }

  // only render the nav bar when we're on the main page

  if (pathname !== "/") return null;

  return (
    <header
      className="px-6 sm:px-12 py-2 w-full h-[3rem] fixed top-0 bg-primary
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
        <a href="#program">Programs</a>
        {user ? (
          <span
            className="hover:underline cursor-pointer"
            onClick={() => logOut()}
          >
            Log Out
          </span>
        ) : (
          <Link href="/login">Log In</Link>
        )}

        <a href="#reviews">Reviews</a>
        <a href="#cost">Cost</a>
        <a href="#contact">Contact</a>
      </nav>

      {/** --- burger nav bar --- */}
      <div
        onClick={toggleNavbar}
        className="sm:hidden cursor-pointer flex items-center "
      >
        <RxHamburgerMenu />
      </div>

      <div
        className={`fixed sm:hidden bg-orange-50/40 backdrop-blur-sm transform p-4
            h-[100vh] w-[40rem] top-[3rem] right-[-40rem]  duration-300 border-l-2
            ${burger ? `-translate-x-50` : ``}
            `}
      >
        <nav className="flex flex-col gap-4">
          <a href="#mission">Mission</a>
          <a href="#activities">Activities</a>
          <a href="#program">Programs</a>
          {user ? (
            <span
              className="hover:underline cursor-pointer"
              onClick={() => logOut()}
            >
              Log Out
            </span>
          ) : (
            <Link href="/login">Log In</Link>
          )}
          <a href="#reviews">Reviews</a>
          <a href="#cost">Cost</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
