import Landing from "@/components/Landing";
import Mission from "@/components/Mission";
import Image from "next/image";
Landing;

export default function Home() {
  return (
    <main>
      <section id="landing">
        <Landing />
      </section>
      <section id="mission">
        <Mission />
      </section>
    </main>
  );
}
