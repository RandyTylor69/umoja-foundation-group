"use client";

import { scenaries } from "@/utils/data";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import React from "react";
export default function Scenary() {
  const [curr, setCurr] = React.useState(0); // 1st item

  function goPrev() {
    setCurr((prev) => (prev === 0 ? scenaries.length - 1 : curr - 1)); // move to the last item if curr is the 1st item
  }

  function goNext() {
    setCurr((prev) => (prev === scenaries.length - 1 ? 0 : curr + 1)); // move to the first item if curr is the last item
  }

  const scenePicsMapped = scenaries.map((s) => (
    <img src={s.url} alt="s" key={s.name} />
  ));

  return (
    <main className="h-screen w-full flex flex-col md:flex-row justify-center items-center">


      {/** ------ scene name wrapper ----- */}
      <section
        className="w-full max-w-[22rem] justify-center items-center 
      text-2xl md:text-4xl p-6"
      >
        <h1>{scenaries[curr].name}</h1>
      </section>

      {/** ------ carousel ----- */}
      <section className="relative w-[18rem] md:w-[21rem] rounded-2xl border-2 overflow-hidden">
        {/** ------ btn wrapper ----- */}
        <div className="absolute w-full h-full flex items-center p-2 z-50 justify-between">
          <FaArrowCircleLeft
            onClick={goPrev}
            className="size-8 text-white cursor-pointer"
          />

          <FaArrowCircleRight
            onClick={goNext}
            className="size-8 text-white cursor-pointer"
          />
        </div>
        {/** ------ carousel wrapper ----- */}
        <div
          className={`transition-transform ease-out duration-500 flex flex-row z-20`}
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {scenePicsMapped}
        </div>
      </section>
      {/** ------ scene desctiprion wrapper ----- */}
      <section className="w-full max-w-[22rem] p-6 ">
        <p>{scenaries[curr].description}</p>
      </section>
    </main>
  );
}
