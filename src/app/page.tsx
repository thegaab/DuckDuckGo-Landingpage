import Content from "@/components/content/content";
import Main from "@/components/main/main";
import Navbar from "@/components/navbar/navbar";
import { CircleArrowDown } from "lucide-react";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Main/>
      <div className="flex justify-center flex-col items-center font-normal text-sm">
        <a href="#" className="flex justify-center items-center flex-col">Explore our features <CircleArrowDown size={38} strokeWidth={0.5} className="mt-2"/></a>
      </div>
      <Content/>
    </div>
  );
}
