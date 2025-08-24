import { activities } from "@/utils/data";
import { GoArrowLeft } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";

export default async function ({ params }) {
  const { activityParam } = await params;
  const activity = activities.find((i) => i.name === activityParam);
  return (
    <main className="h-screen w-full py-6 md:py-12
    ">
      <section className="h-fit w-full px-12 flex flex-col gap-12">
        <Link href="/#activities" className="flex flex-row items-center gap-2">
          <GoArrowLeft />
          Back to activities
        </Link>
        <article className=" flex flex-col gap-6">
          <div className="relative h-[20rem] w-full border-black border-2">
            <Image
              src={`${activity.url}`}
              alt="ph"
              fill
              className="object-cover"
            />
          </div>

          <h1 className="text-2xl md:text-4xl">{activity.name}</h1>
          <p>{activity.content}</p>
        </article>
      </section>
    </main>
  );
}
