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
      className="h-screen w-full px-6 sm:px-12 
        flex flex-col justify-center items-center"
    >
      <section
        className="w-full max-w-[60rem] h-[20rem] gap-6
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
            className="text-sm sm:text-lg md:text-xl font-inter"
            repeat={Infinity}
          />
        </div>
      </section>
      <section
        className="relative h-fit w-full max-w-[34.6rem]
      flex items-center justify-center"
      >
        <a
          target="_blank"
          href="https://www.google.com/maps/place/Kakamega,+Kenya/@0.2733658,34.7387298,18420m/data=!3m1!1e3!4m6!3m5!1s0x17803c37cdba7711:0xd7380a06dc908a6a!8m2!3d0.2827307!4d34.7518631!16zL20vMDNnMnNn?entry=ttu&g_ep=EgoyMDI1MDgxOC4wIKXMDSoASAFQAw%3D%3D"
        >
          <img
            src="/images/pin-planet.png"
            alt="globe"
            fill="true"
            className="object-cover hover:scale-110 duration-300"
          />
        </a>

        <div
          className="h-30 w-30 sm:h-40 md:w-40 border-2 drop-shadow-xl/60
        absolute transform rotate-8 left-[50%] sm:left-[60%]"
        >
          <Image src="/images/planet-pair.png" alt="pair" fill className="" />
        </div>
      </section>
    </main>
  );
}
