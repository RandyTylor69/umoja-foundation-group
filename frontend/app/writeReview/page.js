"use client";
import { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";
export default function () {
  const router = useRouter();
  const handleSubmit = async (formData) => {
    const input = Object.fromEntries(formData.entries());

    try {
      // 1. GET the CSRF cookie first
      await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/sanctum/csrf-cookie`,
        {
          credentials: "include",
        },
      );
      // 2. POST the review
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/reviews`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "X-XSRF-TOKEN": decodeURIComponent(
              document.cookie
                .split("; ")
                .find((row) => row.startsWith("XSRF-TOKEN="))
                ?.split("=")[1],
            ),
          },

          body: JSON.stringify(input),
          credentials: "include",
        },
      );
      if (!res.ok) {
        throw new Error("Failed Fetch!", res.message);
      }
      const data = await res.json();
      alert("Your review is posted!");
      console.log(data);
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <main
      className="w-screen h-screen
    flex justify-center items-center"
    >
      <form
        action={handleSubmit}
        className="min-h-180  w-120 rounded-2xl bg-secondary relative
        flex flex-col justify-center items-center gap-4 px-8"
      >
        <button
          type="button"
          onClick={() => router.back()}
          className="absolute top-2 left-2 !bg-secondary !text-black !border-secondary"
        >
          <IoMdArrowBack />
        </button>
        <label>Name</label>
        <input
          placeholder="Sophie"
          className="w-full !p-[0.4rem]"
          name="name"
          required
        />
        <label>Volunteering Year</label>
        <input
          placeholder="2023"
          name="year"
          className="w-full !p-[0.4rem]"
          required
        />
        <label>Where do you come from</label>
        <input
          placeholder="Shanghai, China"
          name="location"
          className="w-full !p-[0.4rem]"
          required
        />
        <label>Tell us about your experience</label>
        <textarea
          placeholder="..."
          name="content"
          className="w-full min-h-40 max-h-80 !p-[0.4rem]"
          required
        />

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
