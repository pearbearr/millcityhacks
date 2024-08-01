"use client";
import { TypewriterEffect } from "./ui/typewriter-effect";
import Link from "next/link";

export function HeroTaglineWriter() {
  const words = [
    {
      text: "A",
    },
    {
      text: "hackathon",
    },
    {
      text: "for",
    },
    {
      text: "high",
    },
    {
      text: "schoolers",
    },
    {
      text: "by",
    },
    {
      text: "high",
      className: "text-green-500 dark:text-blue-500",
    },
    {
      text: "schoolers.",
      className: "text-green-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="shadow-2xl border-2 border-green-500 rounded-xl mx-10 flex flex-col items-center justify-center h-[20rem] ">
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfof7bVLGS0_VfHOpx8iuDRd0_qM29cdmiyYW8LAH8HQdeFvw/viewform" className="text-center flex items-center justify-center w-40 h-10 rounded-xl bg-emerald-900 border dark:border-white border-transparent text-white text-sm">
          Get Notified
        </Link>
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfof7bVLGS0_VfHOpx8iuDRd0_qM29cdmiyYW8LAH8HQdeFvw/viewform" className="text-center flex items-center justify-center w-40 h-10 rounded-xl bg-emerald-100 text-black border border-black  text-sm">
          Register
        </Link>
      </div>
    </div>
  );
}
