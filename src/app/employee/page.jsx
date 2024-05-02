import React from "react";
import Core from "@/components/Employer/Core";
import EHero from "@/components/Employer/EHero";
import Network from "@/components/Employer/Network";
import Technology from "@/components/Employer/Technology";
import Expertise from "@/components/aboutpage/Expertise";

const page = () => {
  return (
    <>
      <EHero />
      <Network />
      <Technology />

      {/* <Core /> */}
      <Expertise />
      {/* <div className="pages">page employe</div> */}
    </>
  );
};

export default page;
