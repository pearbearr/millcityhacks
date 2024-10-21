"use client"
import { useState } from "react";

export function Tracks() {
  const [tracksData] = useState([
    // {
    //   title: "Web Development",
    //   description: "Build innovative web applications using HTML, CSS, and JavaScript.",
    // },
    // {
    //   title: "Mobile App Development",
    //   description: "Create engaging mobile apps for Android or iOS.",
    // },
    // {
    //   title: "Data Science",
    //   description: "Analyze data and build predictive models using Python and machine learning.",
    // },
    // {
    //   title: "Game Development",
    //   description: "Develop exciting games using Unity or other game engines.",
    // },
    // {
    //   title: "Hardware Hacking",
    //   description: "Experiment with electronics and build innovative hardware projects.",
    // },
    {
      title: "Social Impact",
      description: "Use technology to address real-world problems and make a positive impact on society.",
    },
  ]);
  return (
    <section id="tracks" className="border-2 border-blue-800 text-slate-800 mx-10 p-5 shadow-xl rounded-xl flex flex-col items-center ">
      <h2 className="text-3xl font-bold mb-4 text-center bg-lmain rounded-3xl">Tracks</h2>
      <div className="flex justify-center">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center"> */}
        {tracksData.map((track, index) => (
          <div key={index} className="bg-white rounded-xl p-4 shadow-md ">
            <h3 className="text-xl font-bold mb-2 text-center">{track.title}</h3>
            <p className="text-gray-700 text-center">{track.description}</p>
          </div>
        ))}
      {/* </div> */}
      </div>
    </section>
  );
}