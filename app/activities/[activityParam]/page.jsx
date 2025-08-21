import { activities } from "@/utils/data";
import { GoArrowLeft } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";

export default async function ({ params }) {
  const { activityParam } = await params;
  const activity = activities.find((i) => i.name === activityParam);

  return (
    <main className="h-screen w-full py-12">
      <section className="h-fit w-full ">
        <Link href="/#activities" className="flex flex-row items-center gap-2"><GoArrowLeft />Back to activities</Link>
        <article>
          <div className="relative h-full w-full">
            <Image
              src="/images/edu-placeholder.png"
              alt="ph"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h1>{activity.name}</h1>
            <p>{activity.content}</p>
          </div>
        </article>
      </section>
    </main>
  );
}
