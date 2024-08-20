"use client"
import React, { SetStateAction, useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Who can participate?",
      answer: "This hackathon is open to all high school students across the US."
    },
    {
      question: "How do I sign up?",
      answer: "You can sign up by clicking the Get Notified button on the home page."
    },
    {
      question: "Q3",
      answer: "."
    },
    {
      question: "Q4",
      answer: "."
    },
        {
      question: "Q3",
      answer: "."
    },
    {
      question: "Q4",
      answer: "."
    },
        {
      question: "Q3",
      answer: "."
    },
    {
      question: "Q4",
      answer: "."
    },
  ];

  const toggleAnswer = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq">
      <h1 className="text-black font-bold text-2xl p-4 bg-blue-400 mx-auto text-center ">Frequently Asked Questions</h1>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 gap-4">
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
