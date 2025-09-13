import Landing from "@/components/Landing";
import Mission from "@/components/Mission";
import Activities from "@/components/Activities";
import Image from "next/image";
import Program from "@/components/Program";
import TransitionPage1 from "@/components/TransitionPage1";
import Cost from "@/components/Cost";
import Contact from "@/components/Contact";
import Scenary from "@/components/Scenary";
import Reviews from "@/components/Reviews";
Landing;

export default function Home() {
  return (
    <main>
      <section id="landing">
        <Landing />
      </section>
      {/** ------- bottom border to the next component --------- */}
      <div className="w-full border-t-2 text-black/10"></div>
      <section id="mission">
        <Mission />
      </section>
      {/** ------- bottom border to the next component --------- */}
      <div className="w-full border-t-2 text-black/10"></div>
      <section id="activities" className="scroll-m-20">
        <Activities />
      </section>

      <section>
        <TransitionPage1 />
      </section>
      <section id="program" className="scroll-m-20">
        <Program />
      </section>
      <section id="scenary" className="scroll-m-10">
        <Scenary />
      </section>
      <section id="reviews" className="scroll-m-10">
        <Reviews />
      </section>
      <section id="cost">
        <Cost />
      </section>
      <section id="contact" className="scroll-m-10">
        <Contact />
      </section>
    </main>
  );
}
