import { HeroTaglineWriter } from "../components/HomeTypewriter";
import Countdown from "@/components/Countdown";

export default function Home() {
  return (
    <main>
      <header>
        <nav className="flex space-x-[10%] justify-center p-4 bg-gray-100 border-4">
          <a href="#section">Home</a>
          <a href="">About</a>
          <a href="">Tracks</a>
          <a href="">Contact</a>
        </nav>
      </header>
      <section id="section">
        <Countdown targetDate="11/09/2024 08:00" />
        <HeroTaglineWriter />
      </section>

      <footer></footer>
    </main>
  );
}
