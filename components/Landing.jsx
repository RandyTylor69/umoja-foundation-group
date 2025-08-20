import { GoArrowUpRight } from "react-icons/go";

export default function Landing() {
  return (
    <main
      className="h-screen w-full bg-green-300
        flex justify-baseline relative"
    >
      <div className="absolute bottom-20 w-[14rem] sm:w-[22rem] ">
        <article className="flex flex-col gap-6 text-sm">
          <h1 className="text-4xl">Extend your kindness with us</h1>
          <p className="leading-5">
            Umoja Foundation Group is a grassroot community based organization
            located in Kakamega county in the Republic of Kenya.
          </p>
          <button>
            Let's Connect <GoArrowUpRight />
          </button>
        </article>
      </div>
    </main>
  );
}
