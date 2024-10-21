// "use client"
// import React, { SetStateAction, useState } from 'react';

// const FAQ = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const faqs = [
//     {
//       question: "Who can participate?",
//       answer: "This hackathon is open to all high school students across the US."
//     },
//     {
//       question: "How do I sign up?",
//       answer: "You can sign up by clicking the Get Notified button on the home page."
//     },
//     {
//       question: "Q3",
//       answer: "."
//     },
//     {
//       question: "Q4",
//       answer: "."
//     },
//         {
//       question: "Q3",
//       answer: "."
//     },
//     {
//       question: "Q4",
//       answer: "."
//     },
//         {
//       question: "Q3",
//       answer: "."
//     },
//     {
//       question: "Q4",
//       answer: "."
//     },
//   ];

//   const toggleAnswer = (index: any) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section id="faq">
//       <h1 className="text-black font-bold text-2xl p-4 bg-blue-400 mx-auto text-center ">Frequently Asked Questions</h1>
//       <div className="m-5 grid grid-cols-1 md:grid-cols-2 gap-4">
//         {faqs.map((faq, index) => (
//           <div key={index} className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
//             <button 
//               onClick={() => toggleAnswer(index)}
//               className="text-lg w-full font-semibold cursor-pointer hover:text-blue-600 flex justify-between"
//             >
//               {faq.question} <span>{openIndex === index ? '-' : '+'}</span>
              
//             </button>
//             {openIndex === index && <p className="text-gray-700 mt-2">{faq.answer}</p>}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };
"use client"
import React, { SetStateAction, useState, } from 'react';
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    {
      question: "What is a hackathon?",
      answer: "You're not actually hacking! A hackathon is a fun event where you can learn, build, and share your programming skills with other hackers around the nation. Mill City Hacks aims to spark creativity and inspiration in the community through this hackathon."
    },
    {
      question: "Who can participate Mill City Hacks?",
      answer: "This hackathon is open to all high school students across the US."
    },
     {
       question: "How do I sign up?",
       answer: "You can sign up by clicking the Register button at the top of the screen."
     },
      {
      question: "How many people per team?",
       answer: "You may work solo or up to 4 people per team. We will also host a session in the beginning of the hackathon to help you find a team!"
},
  {
  question: "Do I need experience?",
   answer: "Not at all! Mill City Hacks is a hackathon meant for everyone regardless of their experience in programming. It's a beginner-friendly event and we'll also have some workshops throughout the hackathon that you can learn from!"
 },
 {
   question: "Is this an online or in-person event?",
       answer: "Mill-City Hacks 2024-2025 is a virtual event. We will be hosting this event on November 16th through Discord and Zoom."
    },
    {
      question:"Can I start on the project before the hackathon",
      answer:"All projects are to be during the hackathon and not before it. Disqualification will be given if you start your project before the hackathon."
    },
     {
       question: "How much does it cost?",
        answer: "Mill City Hacks is absolutely free! There is no cost or anything to sign up!"
        },
      {
       question: "Who organized this?",
       answer: "This hackathon was organized by students at Lowell High School located in Massachusetts where our goal is to spark creativity and innovation through this hackathon, providing a platform for students to collaborate, learn, and showcase their skills"
              },
  ];
  const toggleAnswer = (index: number) => {
    setOpenIndex(prevOpenIndex => (prevOpenIndex === index ? null : index));
  };
  return (
    <section id="faq">
      <h1 className="text-black font-bold text-2xl p-4 bg-blue-400 mx-auto text-center ">Frequently Asked Questions</h1>
      <div className="m-5 flex flex-col gap-4"> {/* Use flex for single column */}
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
            <button 
              onClick={() => toggleAnswer(index)}
              className="text-lg w-full font-semibold cursor-pointer hover:text-blue-600 flex justify-between"
            >
              {faq.question} <span>{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && <p className="text-gray-700 mt-2">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};
export default FAQ;