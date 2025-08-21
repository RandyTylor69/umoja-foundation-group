"use client";

import React from "react";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { AiOutlinePlus } from "react-icons/ai";
import { activities } from "@/utils/data";

import { useInView } from "react-intersection-observer";

export default function Activities() {
  const [activity, setActivity] = React.useState("Education");

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const currentActivity = activities.map((a) => {
    if (a.name === activity)
      return (
        <article className="flex flex-col gap-6 text-sm " key={a.name}>
          <h1 className="text-4xl">{a.name}</h1>
          <p className="leading-5">{a.overview}</p>
          <Link href={`/activities/${a.name}`} className="!no-underline">
            <button>
              Learn More <GoArrowUpRight />
            </button>
          </Link>
        </article>
      );
  });

  const activityOptionsMapped = activities.map((a) => (
    <div
      key={a.name}
      className={`flex flex-row pb-3 border-b-2 justify-between ${
        a.name === activity ? `text-black` : `text-black/30`
      }
      cursor-pointer hover:text-black duration-300 items-center
    `}
      onClick={() => setActivity(a.name)}
    >
      <div>{a.name}</div>
      <AiOutlinePlus />
    </div>
  ));

  return (
    <main
      data-scroll-container
      className="h-[85vh] w-full sm:mt-[5rem] md:mt-[10rem]
  flex flex-col md:flex-row gap-6"
    >
      {/** ----- article div ----- */}
      <div
      ref={ref}
        className={`h-full w-full  ${
          inView && `animate-scroll-into-view`
        }
    flex flex-col gap-12 justify-between`}
      >
        <section
          className="w-full md:max-w-[50%] 
        flex flex-col gap-6"
        >
          <h3 className="text-sm">We concern ourself with...</h3>
          {currentActivity}
        </section>
        <div
          className="h-fit w-full max-w-[75%]
        flex flex-col gap-2"
        >
          {activityOptionsMapped}
        </div>
      </div>
      {/** ----- img div ----- */}
      <div className="h-full w-[75%] md:w-ful relative bg-green-300"></div>
    </main>
  );
}
