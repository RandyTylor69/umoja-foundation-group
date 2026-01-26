import { TfiArrowTopRight } from "react-icons/tfi";
export default function Footer() {
  const scrollTexts = [
    { id: 1, text: "Interested? Get in touch with us today" },
    { id: 2, text: "Interested? Get in touch with us today" },
    { id: 3, text: "Interested? Get in touch with us today" },
  ];

  const scrollTextsMapped = scrollTexts.map((i) => (
    <li
      className="text-2xl flex gap-2 items-center
    w-[30rem] whitespace-nowrap"
      key={i.id}
    >
      {i.text}
      <TfiArrowTopRight />
    </li>
  ));

  return (
    <footer className="h-40 w-full flex flex-col">
      {/** ------ infinite scroll ------- */}
      <section  
        className="h-15 w-full
       py-4 flex overflow-hidden"
      >
        <ul className="flex gap-10 animate-loop-scroll flex-nowrap">{scrollTextsMapped}</ul>
        <ul className="flex gap-10 animate-loop-scroll flex-nowrap">{scrollTextsMapped}</ul>
      </section>
      {/** ------ other details ------- */}
      <section className="h-25 w-full bg-black/30 flex justify-center items-center">
      <p className="text-black/30 text-xs">
        © 2025 All right reserved by Umoja Foudantion Group
      </p>
      </section>
    </footer>
  );
}
