import Image from "next/image";
import React from "react";
import "./style.scss";

import img from "./assets/rightarrowhite.png";
import Link from "next/link";

const AboutHero = () => {
  return (
    <>
      <>
        <div className="hero-about w-full h-[280px] reative">
          <div className="text-white flex flex-col font-openSans gap-1 justify-center items-center mx-auto my-[131px] w-[1110px] h-[100px] max-md:w-full">
            <h1 className="text-[40px] font-bold font-mono">
              The Empower advantage
            </h1>
            <p className="w-[550px] h-[72] text-center text-[16px] mb-[15px] max-md:w-full">
              Quality, Transparency, Integrity
            </p>
            <div className="text-center mt-1 wfull">
              <Link
                href="/contactus"
                className="one text-[#fff] font-normal text-[12px] tracking-[1px] inlin-block px-[22px] py-[10px] rounded-[50px] [transition:0.5s] m-[10px] border-[1px] border-[solid] border-[#1d83b3] bg-[#1d83b3] text-center w-[165px]  flex justify-center items-center gap-2 hover:bg-[transparent] hover:border-[#fff]"
              >
                {/* <span></span> */}
                <Image className="align-middle border-none" src={img} alt="" />
                <span> CONTACT US</span>
              </Link>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default AboutHero;
