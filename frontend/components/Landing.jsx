"use client";

import { GoArrowUpRight } from "react-icons/go";
import { FaFacebook, FaLink, FaLinkedin } from "react-icons/fa";
import React from "react";
import { useInView } from "react-intersection-observer";

export default function Landing() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <main
      className="h-screen w-full flex justify-baseline relative border-b-2
        bg-[url(/images/landing.jpg)] bg-cover md:bg-center px-6 sm:px-12"
    >
      <div
        ref={ref}
        className={`absolute bottom-20 w-[14rem] sm:w-[22rem] 
        ${inView && `animate-scroll-into-view`}
        
        `}
      >
        <article className="flex flex-col gap-6 text-sm text-white text-shadow-lg/10">
          <h1 className={`text-4xl`}>Extend your kindness with us</h1>
          <p className="leading-5">
            Umoja Foundation Group is a grassroot community based organization
            located in Kakamega county in the Republic of Kenya.
          </p>
          <div className="flex flex-row gap-2">
            <a href="#contact">
              <button>
                Let's Connect <GoArrowUpRight />
              </button>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61576054684669&locale=en_GB">
              <button className="!bg-primary !text-black ">
                <FaFacebook size={20} />
              </button>
            </a>
            <a href="https://www.linkedin.com/in/umoja-foundation-group-93a53120a/">
              <button className="!bg-primary !text-black">
                <FaLinkedin size={20}/>
              </button>
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}
