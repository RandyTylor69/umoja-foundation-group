"use client";

import { scenaries } from "@/utils/data";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import React from "react";
import { useInView } from "react-intersection-observer";

export default function Scenary() {
  const {ref, inView} = useInView({
    triggerOnce:true
  })
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
    <main ref={ref} className={`\ px-6 sm:px-12 h-screen w-full flex flex-col justify-around items-center gap-12 ${inView&&`animate-scroll-into-view`}`}>

      {/** ------ title section (1/2) ----- */}

      <div className="w-full h-fit py-8 flex justify-center items-center  ">
        <h1 className="text-2xl md:text-4xl">Around our campus, you will discover:</h1>
      </div>

      {/** ------ carousel section (2/2) ----- */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
        {/** ------ scene name wrapper ----- */}
        <section
          className="w-full max-w-[22rem] justify-center items-center underline
          text-xl md:text-2xl p-6"
        >
          <h1>{scenaries[curr].name}</h1>
        </section>

        {/** ------ carousel ----- */}
        <section className="relative min-w-[18rem] w-full max-w-[40rem] rounded-2xl border-2 overflow-hidden">
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
      </div>
            {/** ------- bottom border to the next component --------- */}
      <div className="w-full border-t-2 text-black/10"></div>
    </main>
  );
}
