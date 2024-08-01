"use client";
import { TypewriterEffect } from "./ui/typewriter-effect";

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
    <div className="flex flex-col items-center justify-center h-[20rem] ">
      <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
        The Programming Initiative presents...
      </p>
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Get Notified
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Register
        </button>
      </div>
    </div>
  );
}
