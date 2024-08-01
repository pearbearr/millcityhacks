"use client";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

export default function Countdown(props: { targetDate: string }) {
  const countDownDate = new Date(props.targetDate).getTime();
  let timeDelta = countDownDate - new Date().getTime();
  const [countDown, setCountDown] = useState(timeDelta);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      let timeDelta = countDownDate - new Date().getTime();
      setCountDown(timeDelta);
    }, 1000);

    return () => clearInterval(interval);
  }, [countDown]);

  return (
    <div className="transition-all duration-500 flex items-center justify-center  p-5 bg-green-900 border-2 border-black   text-white text-[2em] font-bold">
      <div className="flex flex-row space-x-10">
        {isClient ? (
          getReturnValues(countDown)
            .map((x) => String(x).padStart(2, "0"))
            .map((x, i) => (
              <span key={i} className="  rounded-xl lg:text-7xl md:text-5xl sm:text-4xl flex flex-wrap items-center justify-center lg:flex-colmd:flex-col sm:flex-row">
                <p className="text-center">{x}</p>
                <p className="text-xs sm:text-sm md:text-md lg:text-lg uppercase text-center">{i === 0 && "days"}
                {i === 1 && "hours"}
                {i === 2 && "minutes"}
                {i === 3 && "seconds"}</p>
              </span>
            ))
        ) : (
          <div className="space-x-5 flex items-center justify-center">
            <Skeleton className="h-12 w-[90px]" />
            <Skeleton className="h-12 w-[90px]" />
            <Skeleton className="h-12 w-[90px]" />
            <Skeleton className="h-12 w-[90px]" />
          </div>
        )}
      </div>
    </div>
  );
}

function getReturnValues(countDown: number) {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
}
