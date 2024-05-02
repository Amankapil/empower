import About from "@/components/homepage/About";
import Hero from "@/components/homepage/Hero";
import Professionals from "@/components/homepage/Professionals";
import Seeker from "@/components/homepage/Seeker";

export default function Home() {
  return (
    <>
      {/* <div className="homepage"> */}
        <Hero />
        <Seeker />
        <About />
        <Professionals />
      {/* </div> */}
    </>
  );
}



