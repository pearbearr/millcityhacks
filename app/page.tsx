import { HeroTaglineWriter } from "../components/HomeTypewriter";
import Countdown from "@/components/Countdown";

export default function Home() {
  return (
    <main>
      <header>
        <p className="my-5 text-5xl uppercase font-bold text-center">Mill City Hacks</p>
      </header>
      <section id="section">
        <HeroTaglineWriter />
        <Countdown targetDate="11/09/2024 08:00" />
      </section>

      <footer></footer>
    </main>
  );
}
