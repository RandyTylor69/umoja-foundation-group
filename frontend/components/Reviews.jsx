import { reviews } from "@/utils/data";

export default function Reviews() {
    
  return (
    <div
      className="h-fit w-full px-6 sm:px-12 flex flex-col gap-10
    my-20 "
    >
      <div className="w-full h-fit py-8 flex ">
        <h1 className="text-2xl md:text-4xl">
          Hear from our former voluteers
        </h1>
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
