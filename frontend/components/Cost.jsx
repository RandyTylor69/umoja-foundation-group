import { GoArrowRight } from "react-icons/go";

export default function Cost() {
  return (
    <main className="px-6 sm:px-12 min-h-screen max-h-fit w-full flex flex-col gap-12 justify-center items-center">
      <h1 className="flex flex-row gap-1 items-center text-2xl md:text-4xl">
        Plan your stay <GoArrowRight />{" "}
      </h1>
      {/** -------- grid background --------------- */}
      <div className="bg-[url('/images/grid-bg.png')] bg-cover border-gray-500 border-[1.5px]
       min-h-[60vh] h-fit w-full p-6 flex flex-col lg:flex-row gap-6">
        
        <section
          className="bg-primary h-full w-fit  border-gray-500 border-[1.5px]
                    flex flex-col p-6 md:p-12"
        >
          {/** -------- benefits --------------- */}
          <article className="flex flex-col gap-2 basis-40">
            <h1 className="text-xl border-b-2 w-fit">Benefits</h1>
            <p className=" text-[0.7rem] md:text-sm">
              Volunteers will be awarded with a certificate of completion and
              recommendation letters and gifts as they leave.
            </p>
          </article>

          <article className="flex flex-col gap-2  basis-40">
            <h1 className="text-xl border-b-2 w-fit">Orientation</h1>
            <p className="  text-[0.7rem] md:text-sm">
              Volunteers will be acquainted with the history of the Umoja
              foundation, the campus environment and be given an overview of our
              project.
            </p>
          </article>

          <article className="flex flex-col gap-2  basis-40">
            <h1 className="text-xl border-b-2 w-fit">Accomondation</h1>
            <p className="  text-[0.7rem] md:text-sm">
              We have three Houses, containing 3 / 4 / 6 volunteers each. They
              feature:
            </p>
            <ul className="  text-[0.7rem] md:text-sm list-disc">
              <li>A bathroom, a toilet and a latrine</li>
              <li>Fresh running water</li>
              <li>Electricity (with a backup generator)</li>
              <li>Internet, LED TV, a laptop</li>
              <li>Spotlight in case of blackouts</li>
              <li>Fences with security lights</li>
            </ul>
          </article>
        </section>
        {/** -------- cost --------------- */}
        <section className="flex flex-col h-full w-full justify-between gap-12 ">
          <article className="flex flex-col gap-2 bg-primary p-10 md:p-18 w-fit border-gray-500 border-[1.5px]">
            <h1 className="text-2xl">
              $250/<span className="text-sm">2 weeks</span>
            </h1>
            <h1 className="text-2xl">
              $100/<span className="text-sm">extra week</span>
            </h1>
          </article>
          <p className="text-sm bg-primary p-16 w-fit border-gray-500 border-[1.5px] hidden lg:block">
            Including: Orientation, Accommodation, 3 Meals Daily, Airport pick up,
            in-country support
          </p>
        </section>
      </div>
    </main>
  );
}