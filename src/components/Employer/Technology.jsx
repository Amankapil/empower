import Image from "next/image";
import Link from "next/link";
import React from "react";

const Technology = () => {
  return (
    <>
      <section className="e-home overflow-hidden py-16">
        <div className="max-w-6xl mx-auto ">
          <div className="main justify-center items-center w-[90%] max-md:w-full max-md:text-center max-md:p-4">
            <h1 className="text-[#000] text-[28px] font-bold max-w-[455px]">
              Understanding and Leveraging Technology
            </h1>
            <p className="text-[#000] max-w[950px] w-full font-normal">
              Empower is committed to investing in a deep stack of tools and
              technologies to create a reliable, repeatable, and quality
              delivery offering to our clients. We continue to iterate on our
              workflow, incorporating the latest tools and creating new
              methodologies that elevate our offering. The result is high
              quality at lower price points.
              <br />
              While we have expanded to support a variety of non-IT recruiting
              needs, we started with IT and because of this the core of our
              recruiting staff come from technical backgrounds. Much like our
              investment in tools and technology, Empower invests in its people
              by regularly facilitating training in their specific recruiting
              domains. In tech, we want to ensure Empower recruiters understand
              the differences between what a microservices and monolithic
              architecture are, what a true agile practice looks like, what
              upgrades angular 17 has made to previous versions, and more.
            </p>
          </div>
        </div>
      </section>

      <section className="px-[0] py-[30px] bg[#000] overflow-hidden bg-[#1c9cd2] text-[#FFFFFF] text-[12px]">
        <div className="max-w-6xl mx-auto">
          <div className="w-full">
            <div className=" w[50%] flex justify-center items-center max-md:flex-col max-md:justify-center max-md:gap-12 max-md:text-center">
              {/* <div class="w-[20%]">
                <Image src={imgd} alt="" title="" />
              </div> */}
              <div className=" w-[60%] max-md:w-full max-md:p-4 text-center">
                <h3 class=" text-[28px] font-bold text-[#fff]">
                  Multi-layered Talent Vetting Workflow
                </h3>
                <p className="cta- text-[18px] mt-4 text-center">
                  We are constantly refining and iterating on its multi-step
                  recruiting and screening process. Firstly, our team of
                  hand-picked recruiters go beyond standard industry practices
                  of utilizing a database and keyword matching, and instead
                  understand technology at a deeper level.
                </p>
              </div>
              {/* <div class="Emp-Adv- w-[20%]">
               
                <Image src={imgdb} alt="" title="" />
              
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Technology;
