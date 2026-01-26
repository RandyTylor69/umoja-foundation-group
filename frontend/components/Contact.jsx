"use client";

import {
  MdOutlinePhone,
  MdOutlineEmail,
  MdOutlinePinDrop,
} from "react-icons/md";

export default function Contact() {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "084c5de8-febb-493d-8246-1b5228cc71a6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    console.log("it's cliedk");
    if (result.success) {
      alert("Your email is sent!");
    }
  }
  return (
    <main
      className="min-h-screen w-full bg-secondary px-6 sm:px-12
    flex justify-center items-center  rounded-[4rem] md:rounded-[6rem] lg:rounded-[8rem] p-6 my-20 flex-col gap-12"
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 w-full max-w-[40rem]"
      >
        <h1 className="text-4xl mx-auto">Talk to us!</h1>
        <p className="mx-auto">
          Have questions or ideas? We’d love to hear from you! Reach out and
          let’s work together to make a difference.
        </p>
        <label className="text-black/40 text-xs flex flex-col gap-2">
          Name
          <input name="name" type="text" placeholder="Mark Scout" required />
        </label>
        <label className="text-black/40 text-xs flex flex-col gap-2">
          Email
          <input
            name="email"
            type="text"
            placeholder="mark@gmail.com"
            required
          />
        </label>
        <label className="text-black/40 text-xs flex flex-col gap-2">
          Message
          <input
            name="message"
            type="text"
            placeholder="Write your message"
            required
          />
        </label>

        <button type="submit" className="mx-auto mt-6">
          Send Message
        </button>
      </form>

      <section
        className="flex flex-col md:flex-row gap-2 text-black/40 text-xs
      w-full max-w-[40rem] justify-center items-center md:justify-between "
      >
        <p className="flex gap-2 items-center">
          <MdOutlineEmail /> foundationumoja@gmail.com
        </p>{" "}
        <p className="flex gap-2 items-center ">
          <MdOutlinePhone /> 25-471-311-6453
        </p>
        <p className="flex gap-2 items-center">
          <MdOutlinePinDrop /> Box 8 30205 Matunda Kenya
        </p>
      </section>
    </main>
  );
}
