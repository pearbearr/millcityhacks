import { HeroTaglineWriter } from "../components/HomeTypewriter";
import Countdown from "@/components/Countdown";
import { Footer } from "@/components/Footer";
import { Schedule } from "@/components/Schedule";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Tracks } from "@/components/Tracks";

export default function Home() {
  return (
    <main>
      <Countdown targetDate="11/09/2024 08:00" />
      <p className="p-5 bg-lfooterandtimer border-2 border-black border-b-0 text-white text-[2em] font-bold text-center">
        November, 1st, 2024
      </p>
      <header className="grid grid-cols-2 items-center justify-center gap-x-32 ">
        <Image
          src="/images/svgs/Mill City Hacks (1).svg"
          alt="Mill City Hacks Logo"
          className="m-10  border-lfooterandtimer rounded-[500px]  hover:scale-[105%] hover:border-none ease-in ease-out transition-all duration-500 shadow-2xl backdrop-invert bg-white/30 origin-center hover:scale-[105%] object-fill"
          width={450}
          height={450}
        />
        <div className="grid-rows-subgrid row-span-2 mr-20">
          <p className="shadow-lg my-5 lg:text-9xl md:text-7xl sm:text-5xl uppercase font-bold text-center">
            Mill City Hacks
          </p>
          <p className="shadow-lg text-neutral-600 dark:text-neutral-200 sm:text-sm md:text-lg lg:text-3xl text-center sm:mt-10 md:mt-20 lg:mt-32">
            The Programming Initiative presents...
          </p>
        </div>
      </header>
      <section id="about">
        <HeroTaglineWriter />
      </section>
      <Separator className="my-10 mx-10 w-[91%] h-1 bg-lmain"></Separator>
      <Tracks />
      <Separator className="my-10 mx-10 w-[91%] h-1 bg-lmain"></Separator>
      <Schedule />

      <Footer />
    </main>
  );
}
