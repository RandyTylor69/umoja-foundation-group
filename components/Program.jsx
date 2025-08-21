import { programs } from "@/utils/data";

export default function Program() {
  const programsMapped = programs.map((p) => (
    <div
      className="h-[15rem] 
    flex flex-col gap-2 "
      key={p.name}
    >
      <div className="w-full h-[12rem] bg-green-300 relative rounded-[2rem]">
        <h1 className="absolute bottom-4 left-4 text-2xl">{p.name}</h1>
      </div>

      <p className="text-xs text-black/40 ml-4">{p.description}</p>
    </div>
  ));

  return (
    <main className="h-fit w-full flex flex-col justify-around gap-12">
      {/** ------- top border --------- */}
      <div className="w-full border-t-2 text-black/10"></div>
      {/** ------- top div --------- */}
      <article className="w-full flex flex-col gap-6 md:flex-row justify-between">
        <h1 className="text-2xl md:text-4xl">
          We offer a variety of programs.
        </h1>
        <p className="text-xs w-full max-w-[15rem] md:text-right">
          Collaborating directly with the local project in a respectful way,
          working as a team, dialoguing and internalizing the ways of doing
          local culture,the volunteer becomes an agent of Change upon their
          return.
        </p>
      </article>

      {/** ------- bottom div (flex grid (what a name!)) --------- */}
      <section
        className="w-full h-fit gap-6 
      grid  grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] "
      >
        {programsMapped}
      </section>
      {/** ------- top border --------- */}
      <div className="w-full border-t-2 text-black/10"></div>
    </main>
  );
}
