"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavigationBar(props: any) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className={"md:hidden p-2 uppercase bg-dnav border-2 border-b-0 border-blue-800  flex " + (open ? "items-center justify-center" : "")}>
        <button
          className={"stroke-blue-500 p-1 rounded-2xl border-2 hover:bg-blue-400" + (open ? " bg-blue-400" : "")}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <Image
            alt="Mill City Hacks Hackathon Lowell MA"
            src="/images/svgs/navmenu.svg"
            width={30}
            height={30}
          ></Image>
          {open && <nav
        className={
          "w-[90vw] flex md:text-xl lg:text-2xl flex-col justify-center items-center p-2 space-y-2  uppercase   " +
          props.className + (open ? " bg-blue-400" : "")
        }
      >
        <Link href="#about" className={cn("text-black font-bold hover:underline ")}>
          About
        </Link>
        <Link href="#tracks" className={cn("text-black font-bold hover:underline ")}>
          Tracks
        </Link>
        <Link href="#schedule" className={cn("text-black font-bold hover:underline ")}>
          Schedule
        </Link>
        <Link href="#contact" className={cn("text-black font-bold hover:underline ")}>
          Contact
        </Link>
        <Link href="#faq" className={cn("text-black font-bold hover:underline ")}>
          FAQ
        </Link>
        <Link href="#team" className={cn("text-black font-bold hover:underline ")}>
          Team
        </Link>
        <Link href="#sponsors" className={cn("text-black font-bold hover:underline ")}>
          Sponsors
        </Link>
      </nav> }
        </button>
      </div>
      
      <nav
        className={
          "hidden md:block flex space-x-[2rem] md:text-xl lg:text-2xl justify-center items-center p-4 uppercase border-2 border-b-0 border-blue-800 " +
          props.className
        }
      >
        <Link href="#about" className={cn("hover:underline text-black font-bold")}>
          About
        </Link>
        <Link href="#tracks" className={cn("hover:underline text-black font-bold")}>
          Tracks
        </Link>
        <Link href="#schedule" className={cn("hover:underline text-black font-bold")}>
          Schedule
        </Link>
        <Link href="#contact" className={cn("hover:underline text-black font-bold")}>
          Contact
        </Link>
        <Link href="#faq" className={cn("hover:underline text-black font-bold")}>
          FAQ
        </Link>
        <Link href="#team" className={cn("hover:underline text-black font-bold")}>
          Team
        </Link>
        <Link href="#sponsors" className={cn("hover:underline text-black font-bold")}>
          Sponsors
        </Link>
      </nav>
    </>
  );
}
