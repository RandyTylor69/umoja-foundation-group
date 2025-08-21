import {programs} from "@/utils/data"

export default function Program() {

const programsMapped = programs.map(p=>(
    <div className="h-[15rem] basis-58 shrink-0 bg-green-300 
    flex flex-col gap-4" key={p.name}>
        <h1>{p.name}</h1>
        <p className="text-xs">{p.description}</p>
    </div>
))

  return (
    <main className="h-screen w-full mt-30 flex flex-col justify-between pb-40">
        {/** ------- top div --------- */}
      <article className="w-full flex flex-col gap-6 md:flex-row justify-between">
        <h1 className="text-2xl">We offer a variety of programs.</h1>
        <p className="text-xs w-full max-w-[15rem] md:text-right">
          Collaborating directly with the local project in a respectful way,
          working as a team, dialoguing and internalizing the ways of doing
          local culture,the volunteer becomes an agent of Change upon their
          return.
        </p>
      </article>
      {/** ------- bottom div (scroll) --------- */}
      <section className="w-full h-fit flex gap-6
      overflow-x-scroll">
        {programsMapped}
      </section>
    </main>
  );
}
