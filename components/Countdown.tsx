"use client";
import { useEffect, useState } from "react";

export default function Countdown(props: { targetDate: string }) {
  const countDownDate = new Date(props.targetDate).getTime();
  let timeDelta = countDownDate - new Date().getTime();
  const [countDown, setCountDown] = useState(timeDelta);
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  useEffect(() => {
    const interval = setInterval(() => {
      let timeDelta = countDownDate - new Date().getTime();
      setCountDown(timeDelta);
    }, 1000);

    return () => clearInterval(interval);
  }, [countDown]);

  return (
    <div className="flex items-center justify-center m-[10%] p-5 bg-black text-white text-[4em] font-bold rounded-xl">
      <div className="">
        {isClient && getReturnValues(countDown)
          .map((x) => String(x).padStart(2, "0"))
          .join(":")}
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
