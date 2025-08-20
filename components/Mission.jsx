"use client";
import { TypeAnimation } from "react-type-animation";
import { Observer } from "tailwindcss-intersect";
import React from "react";
import Image from "next/image";

export default function About() {
  React.useEffect(() => {
    Observer.start();
  }, []);

  return (
    <main
      className="h-screen w-full
        flex flex-col gap-4 justify-center items-center"
    >
      <section
        className="w-full max-w-[60rem] h-[20rem]
         flex flex-col justify-center items-center"
      >
        <h1 className="border-b-1 text-2xl text-black/30">Our Mission</h1>
        <div className="text-center">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "To help vulnerable children and families to live a sustainable life.",
              4000, // wait 1s before replacing "Mice" with "Hamsters"
              "To empower families living better economically, socially and spiritually.",
              4000,
              "To improve the economic and social status of our people.",
              4000,
            ]}
            wrapper="span"
            speed={100}
            className="text-sm sm:text-lg md:text-2xl"
            repeat={Infinity}
          />
        </div>
      </section>
      <section
        className="relative h-fit w-full max-w-[34.6rem] relative
      flex items-center justify-center"
      >
        <img
          src="/images/pin-planet.png"
          alt="globe"
          fill="true"
          className="object-cover"
        />
        <div className="h-30 w-30 sm:h-40 md:w-40 border-2 drop-shadow-xl/60
        absolute transform rotate-8 left-[50%] sm:left-[60%]">
          <Image
            src="/images/planet-pair.png"
            alt="pair"
            fill
            className=""
          />
        </div>
      </section>
    </main>
  );
}
