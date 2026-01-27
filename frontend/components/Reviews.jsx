"use client";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/app/AuthProvider";
import { ImPencil } from "react-icons/im";
export default function Reviews() {
  const context = useContext(AuthContext);
  const { user, setUser } = context;
  const [reviews, setReviews] = useState([]);

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
      setReviews(data)
    } catch (err) {
      console.error("Error!", err.message);
    }
  };

  useEffect(() => {
    getReviews();
  }, [reviews]);

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
        {user && (
          <button className="!bg-[#2F4F3E] hover:!bg-primary ">
            <Link
              href="/writeReview"
              className="flex justify-center items-center gap-2"
            >
              <ImPencil /> Write a review
            </Link>
          </button>
        )}
      </div>
      <ul
        className="flex flex-row gap-8 w-full 
            overflow-auto
      "
      >
        {reviews.map((r, index) => (
          <li
            key={index}
            className="h-[28rem] w-[19rem] rounded-2xl
             shrink-0 bg-[#2F4F3E] text-secondary p-6 relative"
          >
            <h1 className="text-xl">{r.name}</h1>
            <p className="text-sm mb-6">{r.location}</p>
            <p className="text-sm mb-6 text-justify">{r.content}</p>
            <p
              className="text-sm
            absolute bottom-4 right-4"
            >
              {r.year}
            </p>
          </li>
        ))}
      </ul>

      {/** ------- bottom border to the next component --------- */}
      <div className="w-full border-t-2 text-black/10 mt-10"></div>
    </div>
  );
}
