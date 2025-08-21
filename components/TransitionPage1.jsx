import Image from "next/image";
export default function TransitionPage1() {
  return (
    <main className="my-20 flex justify-center items-center
    py-20">
      <section
        className="relative h-fit w-full max-w-[34.6rem] 
                 flex items-center justify-center "
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
      </section>
    </main>
  );
}
