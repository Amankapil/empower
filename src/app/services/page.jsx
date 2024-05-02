import Process from "@/components/aboutpage/Process";
import Cards from "@/components/serviceCom/Cards";
import Casestudy from "@/components/serviceCom/Casestudy";
import Mindset from "@/components/serviceCom/Mindset";
import ServiceHero from "@/components/serviceCom/ServiceHero";
import React from "react";

const page = () => {
  return (
    <>
      <ServiceHero />
      <Cards />
      <Mindset />
      <Casestudy />
      {/* <Process /> */}
    </>
  );
};

export default page;
