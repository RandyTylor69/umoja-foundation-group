"use client";
import { reviews } from "@/utils/data";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/app/layout";
import { ImPencil } from "react-icons/im";
export default function Reviews() {
  const context = useContext(AuthContext);
  const { user, setUser } = context;

  // fetch all reviews from db

  const getReviews = async () => {
    // 1. Get security token from sanctum
    await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/sanctum/csrf-cookie`, {
      credentials: "include",
    });
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/reviews`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            // present the security token to Laravel
            "X-XSRF-TOKEN": decodeURIComponent(
              document.cookie
                .split("; ")
                .find((row) => row.startsWith("XSRF-TOKEN="))
                ?.split("=")[1],
            ),
          },
        },
      );
      if (!res.ok) {
        throw new Error("Failed fetch!", res.message);
      }

      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error("Error!", err.message);
    }
  };

  useEffect(()=>{
    getReviews()
  }, [])

  return (
    <div
      className="h-fit w-full px-6 sm:px-12 flex flex-col gap-10
    my-20 "
    >
      <div
        className="w-full h-fit py-8 flex flex-col gap-4
       "
      >
        <h1 className="text-2xl md:text-4xl">Hear from our former voluteers</h1>
        <button>
          <Link
            href="/writeReview"
            className="flex justify-center items-center gap-2"
          >
            <ImPencil /> Write a review
          </Link>
        </button>
      </div>
      <ul
        className="flex flex-row gap-20 w-full 
            overflow-auto
      "
      >
        {reviews.map((r, index) => (
          <li
            key={index}
            className="h-[34rem] w-[17rem] shrink-0 bg-secondary p-4 relative"
          >
            <h1 className="text-xl">{r.authorName}</h1>
            <p className="text-sm mb-6">{r.authorInfo}</p>
            <p className="text-sm mb-6 text-justify">{r.content}</p>
            <p
              className="text-sm
            absolute bottom-4 right-4"
            >
              {r.date}
            </p>
          </li>
        ))}
      </ul>
      {/** ------- bottom border to the next component --------- */}
      <div className="w-full border-t-2 text-black/10 mt-10"></div>
    </div>
  );
}
