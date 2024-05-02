import React from "react";
import AboutHero from "@/components/aboutpage/AboutHero";
import Expertise from "@/components/aboutpage/Expertise";
import Flexible from "@/components/aboutpage/Flexible";
import MBE from "@/components/aboutpage/MBE";
import Process from "@/components/aboutpage/Process";
import Staff from "@/components/aboutpage/Staff";
import Teamabout from "@/components/aboutpage/Teamabout";

const page = () => {
  return (
    <>
      <AboutHero />
      <Teamabout />
      <Flexible />
      {/* <Expertise /> */}
      {/* <Process /> */}
      <MBE />
      <Staff />
    </>
  );
};

export default page;
