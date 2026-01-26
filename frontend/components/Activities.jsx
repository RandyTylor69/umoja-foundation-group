"use client";

import React from "react";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { AiOutlinePlus } from "react-icons/ai";
import { activities } from "@/utils/data";
import Image from "next/image";

import { useRouter } from "next/navigation";

import { useInView } from "react-intersection-observer";

export default function Activities() {
  const [activity, setActivity] = React.useState("Education");
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const [currActivityUrl, setCurrActivityUrl] =
    React.useState("/images/a1.jpg");

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  function delayClick(e, name) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      router.push(`/activities/${name}`);
      setLoading(false);
    }, 1000);
  }

  const currentActivity = activities.map((a) => {
    if (a.name === activity) {
      return (
        <article className="flex flex-col gap-6 text-sm " key={a.name}>
          <h1 className="text-4xl">{a.name}</h1>
          <p className="leading-5">{a.overview}</p>
          <Link
            href={`/activities/${a.name}`}
            onClick={(e) => delayClick(e, a.name)}
            className="!no-underline"
          >
            <button>
              Learn More <GoArrowUpRight />
            </button>
          </Link>
        </article>
      );
    }
  });

  const activityOptionsMapped = activities.map((a) => (
    <div
      key={a.name}
      className={`flex flex-row pb-3 border-b-2 justify-between ${
        a.name === activity ? `text-black` : `text-black/30`
      }
      cursor-pointer hover:text-black duration-300 items-center
    `}
      onClick={() => {
        setActivity(a.name);
        setCurrActivityUrl(a.url);
      }}
    >
      <div>{a.name}</div>
      <AiOutlinePlus />
    </div>
  ));

  console.log(loading);

  return (
    <main
      data-scroll-container
      className="h-[85vh] w-full mt-[5rem] md:mt-[10rem]
      flex flex-col md:flex-row gap-6 px-6 sm:px-12  "
    >
      {/** ----- article div ----- */}
      <div
        ref={ref}
        className={`h-full w-full  ${inView && `animate-scroll-into-view`}
    flex flex-col gap-12 justify-between `}
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
      <div
        className={`h-full w-[75%] md:w-full relative border-2 border-black bg-[url("/images/a-bg.jpg")] bg-cover`}
      >
        <Image
          src={currActivityUrl}
          alt="activity image"
          fill
          className={`object-cover object-center hover:rounded-[50%] hover:scale-90 duration-300 border-2 border-black
          ${loading ? "scale-90 rounded-[50%]" : ""} `}
        />
      </div>
    </main>
  );
}
