import type { Metadata } from "next";
import { Inter, Roboto, Source_Code_Pro, Poiret_One } from "next/font/google";
import "./globals.css";
import { NavigationBar } from "@/components/NavigationBar";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });
const codepro = Source_Code_Pro({ weight: "400", subsets: ["latin"] });
const poi = Poiret_One({ weight: "400", subsets: ["latin"] });



export const metadata: Metadata = {
  title: "Mill City Hacks | Lowell's Premier High School Hackathon",
  description: "Join us for Mill City Hacks, a thrilling hackathon designed specifically for high school students across the US.  Get ready to code, collaborate, and create innovative projects!",
  keywords: "hackathon, Lowell, high school, coding, technology, innovation, competition, prizes, Mill City Hacks, The Programming Initiative",
  openGraph: {
    title: "Mill City Hacks | Lowell's Premier High School Hackathon",
    description: "Join us for Mill City Hacks, a thrilling hackathon designed specifically for high school students across the US.  Get ready to code, collaborate, and create innovative projects!",
    url: "https://mill-city-hacks.vercel.app", 
    images: [
      {
        url: "/images/svgs/mill_city.svg", 
        alt: "Mill City Hacks Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mill City Hacks | Lowell's High School Hackathon",
    description: "Join us for Mill City Hacks, a thrilling hackathon designed specifically for high school students across the US.  Get ready to code, collaborate, and create innovative projects!",
    images: ["/images/svgs/mill_city.svg"], // Replace with your actual image URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={codepro.className + " bg-lime-200 scroll-smooth"}>
        <NavigationBar className={"bg-green-500 font-extrabold " + codepro.className} />
        {children}<Analytics/></body>
    </html>
  );
}
