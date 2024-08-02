
"use client"
import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";
// import { usePathname } from "next/navigation";

export function NavigationBar(props: any) {
  const [open, setOpen] = useState(false);
  return (
    <>
    <div className="md:hidden p-2 uppercase bg-green-500 border-4 border-green-800">
        <button
            className="stroke-green-500 p-2 rounded-2xl border-2 hover:bg-emerald-400"
            onClick={() => {
              setOpen(!open);
            }}
          >
          <Image alt="Mill City Hacks Hackathon Lowell MA" src="/images/svgs/navmenu.svg" width={ 30 } height={ 30 }>

          </Image>
        </button>
        </div>
    <nav className={"hidden md:block flex space-x-[4rem] text-2xl justify-center p-4 uppercase bg-green-200 border-4 border-green-800 " + props.className}>
      
      <a
        href="#about"
        className={cn(
          "text-black font-bold",
        )}
      >
        About
      </a>
      <a
        href="#tracks"
        className={cn(
          "text-black font-bold",
        )}
      >
        Tracks
        </a>
      <a
        href="#schedule"
        className={cn(
          "text-black font-bold",
        )}
      >
        Schedule
      </a>
      <a
        href="#contact"
        className={cn(
          "text-black font-bold",
        )}
      >
        Contact
      </a>
      </nav>
     </>
  );
};