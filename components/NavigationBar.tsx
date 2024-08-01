
import { cn } from "@/lib/utils";
// import { usePathname } from "next/navigation";

export function NavigationBar(props: any) {
    return (
    <nav className={"flex space-x-[4rem] text-2xl justify-center p-4 uppercase bg-green-200 border-4 border-green-800 " + props.className}>
      
      <a
        href="#about"
        className={cn(
          "text-black font-bold",
        )}
      >
        About
      </a>
      <a
        href="#tracks"
        className={cn(
          "text-black font-bold",
        )}
      >
        Tracks
        </a>
      <a
        href="#schedule"
        className={cn(
          "text-black font-bold",
        )}
      >
        Schedule
      </a>
      <a
        href="#contact"
        className={cn(
          "text-black font-bold",
        )}
      >
        Contact
      </a>
    </nav>
  );
};