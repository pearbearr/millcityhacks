import { HeroTaglineWriter } from "../components/HomeTypewriter";
import Countdown from "@/components/Countdown";
import Image from "next/image";


export default function Home() {
  return (
    <main>
      <Countdown targetDate="11/09/2024 08:00" />
      <header className="grid grid-cols-2 items-center justify-center gap-x-32 ">
        <Image src="/images/svgs/mill_city.svg" alt="Mill City Hacks Logo" className="m-10 border-8 border-black rounded-[500px] w-[500px] hover:scale-[105%] hover:border-none ease-in ease-out transition-all duration-500 shadow-2xl backdrop-invert bg-white/30 origin-center rotate-[15deg] hover:rotate-[-15deg] hover:scale-[105%]" width={ 500 } height={ 500 } />
        <div className="grid-rows-subgrid row-span-2 mr-20">
          <p className="shadow-lg my-5 lg:text-9xl md:text-7xl sm:text-5xl uppercase font-bold text-center">Mill City Hacks</p>
          <p className="shadow-lg text-neutral-600 dark:text-neutral-200 sm:text-sm md:text-lg lg:text-3xl text-center sm:mt-10 md:mt-20 lg:mt-32">
        The Programming Initiative presents...
      </p>
        </div>
              
      </header>
      <section id="section">
        <HeroTaglineWriter />
        
      </section>

      <footer className="bg-emerald-800 text-white py-10 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">About Us</h3>
            <p className="text-gray-300">
              A team of students from Lowell High working to bring a hackathon to you!
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">Contact</h3>
            <ul className="list-none text-gray-300">
              <li className="mb-2">
                <a href="mailto:lowellhigh.tpi@gmail.com" className="hover:underline">
                  lowellhigh.tpi@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/place/Lowell"
                  className="hover:underline"
                >
                  Lowell, MA
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">Social</h3>
            <ul className="list-none text-gray-300">
              <li className="mb-2">
                <a
                  href="https://www.facebook.com/millcityhacks"
                  className="hover:underline"
                >
                  Facebook
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.twitter.com/millcityhacks"
                  className="hover:underline"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/millcityhacks"
                  className="hover:underline"
                >
                  Instagram
                </a>
              </li>
            </ul>
            </div>

        </div>
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} The Programming Initiative. All rights
            reserved.<br></br><br></br>WORK IN PROGRESS
          </p>
        </div>
      </div>
    </footer>

    </main>
  );
}
