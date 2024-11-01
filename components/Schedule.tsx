"use client"
import { useState } from "react";

export function Schedule() {
  const [scheduleData] = useState([
    {
      time: "8:00 AM - 8:30 AM",
      event: "Opening Ceremony",
      description: "Kick off the event with exciting announcements and introductions.",
    },
    {
      time: "8:30 AM",
      event: "Hacking begins!",
      description: "Time to put your coding skills to the test and build amazing projects!",
    },
    {
      time: "8:30 AM - 9:00 AM",
      event: "Team Formation",
      description: "Form your teams and get ready to hack!",
    },
    {
      time: "9:30 AM - 10:30 AM",
      event: "Workshop #1: Basic Python",
      description: "Learn the fundamentals of Python programming.",
    },
    {
      time: "10:30 AM - 11:30 AM",
      event: "Workshop #2: Intro to Web Development",
      description: "Learn basic web development with this introductory workshop.",
    },
    // {
    //   time: "12:00 PM - 7:00 PM",
    //   event: "Hacking Begins!",
    //   description: "Time to put your coding skills to the test and build amazing projects.",
    // },
    {
      time: "6:00 - 7:30 PM",
      event: "Project Deadline",
      description: "Submit your projects for a chance to win amazing prizes.",
    },
    {
      time: "6:00 - 8:00 PM",
      event: "Judging",
      description: "Our judges will evaluate your projects.",
    },
    {
      time: "8:30 PM - 9:00 PM",
      event: "Closing Ceremony and Prizes",
      description: "Join us for the final ceremony where we announce the winners and celebrate the amazing work of our participants.",
    },
  ]);

  return (
    <section id="schedule" className="border-2 border-blue-800 text-slate-800 mx-10 p-5 shadow-xl rounded-xl">
      <h2 className="text-3xl font-bold mb-4 text-center bg-lmain rounded-3xl">Schedule</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <h3 className="text-xl font-bold mb-2 ">EST Timezone</h3>
          <ul className="list-none">
            {scheduleData.map((item, index) => (
              <li key={index} className="mb-2">
                <span className="font-bold">{item.time}</span>
                <br />
                {item.event}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="text-xl font-bold mb-2">Activities</h3>
          <ul className="list-none">
            {scheduleData.map((item, index) => (
              <li key={index} className="mb-2">
                {item.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}