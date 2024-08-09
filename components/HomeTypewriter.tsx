"use client";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { LinkPreview } from "@/components/ui/link-preview";
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form } from "./ui/form";
import confetti from "canvas-confetti";



const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
});

export function HeroTaglineWriter() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [congrats, setCongrats] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setCongrats(true)
    // Trigger confetti animation
    confetti({
      particleCount: 30,
      spread: 70,
      origin: { y: 0.8 },
    });
  };
  
  const handleSubmit = async (e: any) => {
    // Handle form submission logic here
    e.preventDefault()
    setIsOpen(false);
    // Access the values from the form


    // Now you can use 'name' and 'email' variables
    console.log("Name:", name);
    console.log("Email:", email);
    const response = await fetch("https://script.google.com/macros/s/AKfycbyzKSSrdCwagfJGQ_5Jc_3tOmaR1kLiR0rpotLRtqXYoIqx36e6zplmJolycQ2g15xc/exec" + "?name=" + name + "&email=" + email)
    if (response.ok) {
      console.log('Form submitted successfully');
      handleClose();
    } else {
      console.error('Error submitting form');
    }
    console.log('Form submitted');
    handleClose();
  };



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
    <div className="shadow-2xl border-2 border-blue-800 rounded-xl mx-10 flex flex-col items-center justify-center h-[20rem] ">
      <TypewriterEffect words={words}/>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <button onClick={handleOpen} className="hover:bg-dheaders text-center flex items-center justify-center w-40 h-10 rounded-xl bg-lfooterandtimer border dark:border-white border-transparent text-white text-sm">
              Get Notified
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] bg-[#d5ffdc]">
            <DialogHeader>
              <DialogTitle>Join our email listserv!</DialogTitle>
              <DialogDescription className="text-gray-900">
                Interested in participating? Sign up for reminders and possible goodies!
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Hackathon Participant"
                    className="col-span-3"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="youremail@example.com"
                    className="col-span-3"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              
              <DialogFooter>
                <Button type="submit">Submit</Button>
              </DialogFooter>
            </form>
              
          </DialogContent>
        </Dialog>
        <Dialog open={congrats} onOpenChange={setCongrats}>
          <DialogContent className="sm:max-w-[425px] bg-[#d5ffdc]">
            <DialogHeader>
              <DialogTitle>Congratulations!</DialogTitle>
              <DialogDescription className="text-gray-900">
                You have signed up for the hackathon! You will receive more information via email as the date approaches.
              </DialogDescription>
            </DialogHeader>
            </DialogContent>
        </Dialog>
        
        <LinkPreview url="https://docs.google.com/forms/d/e/1FAIpQLSfof7bVLGS0_VfHOpx8iuDRd0_qM29cdmiyYW8LAH8HQdeFvw/viewform" className="text-center flex items-center justify-center w-40 h-10 rounded-xl bg-emerald-100 text-black border border-black  text-sm">
          Register
        </LinkPreview>
      </div>
    </div>
  );
}
