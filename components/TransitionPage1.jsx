import Image from "next/image";
export default function TransitionPage1() {
  return (
    <main className="mt-10 flex flex-col justify-center items-center px-6 sm:px-12 
    ">
      {/** ------- top border --------- */}
      <div className="w-full border-t-2 text-black/10 mb-12"></div>
      <section
        className="relative h-fit w-full max-w-[34.6rem] 
                 flex flex-col"
      >
        <div
          className="h-20 w-20 md:h-50 md:w-50 drop-shadow-xl/40 z-15
                   absolute transform rotate-8 -right-4 md:-right-20 -bottom-2 "
        >
          <Image src="/images/logo.png" alt="pair" fill />
        </div>

        <img
          src="/images/cert-placeholder.png"
          alt="globe"
          fill="true"
          className="object-cover z-10 border-2"
        />
        <p className="text-xs text-black/60 w-[60%] md:w-[80%] absolute z-20
        -bottom-18 md:-bottom-10 left-0">Mimi Cavelier is from France, she had recently completed her volunteer program at Umoja Foundation Group.</p>
      </section>
      {/** ------- bottom border --------- */}
      <div className="w-full border-t-2 mt-20 text-black/10 mb-12"></div>
    </main>
  );
}
