import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./style.scss";

const Process = () => {
  return (
    <>
      <section className="pro-home overflow-hidden py-12">
        <div className="max-w-6xl mx-auto ">
          <div className="main justify-center items-center w-[50%] max-md:w-full max-md:text-center max-md:p-4">
            <h1 className="text-[#000] text-[28px] font-bold max-w-[455px]">
              Pre-screening process
            </h1>
            <p className="text-[#000] max-w-[450px] w-full">
              Empower utilizes a thorough pre-screening process, including
              technical evaluations and video assessments, to ensure we have the
              specialized expertise our clients are seeking to successfully
              match each candidate to an employer opening and/or project. Our
              recruiters are involved every step of the way, and continuously
              monitor performance (even post-placement) to enhance business
              satisfaction.
            </p>
            {/* <Link
              href="/"
              className="one text-[#000] font-normal text-[12px] tracking-[1px] inlineblock px-[22px] py-[10px] rounded-[50px] [transition:0.5s] my-[10px] border[1px] bord] border[#ffffff] text-center w-[195px] flex justify-center items-center gap-2 hover:underline hoverborder-[#1d83b3]"
            >
              <Image
                src="https://www.empowerprofessionals.com/img/ico_right.svg"
                width={15}
                height={15}
                alt=""
              />
              <span>FIND OUT MORE</span>
            </Link> */}
          </div>
        </div>
      </section>

      <section className="px-[0] py-[30px] bg[#000] overflow-hidden bg-[#1c9cd2] text-[#FFFFFF] text-[12px]">
        <div className="max-w-xl mx-auto">
          <div className="w-full">
            <div className=" w[50%] flex justify-between items-center max-md:flex-col max-md:justify-center max-md:gap-12 max-md:text-center">
              <div className=" w-[100%] about-top">
                {/* <h3 className=" text-[28px] font-bold text-[#fff]">
                  The Empower Advantage{" "}
                </h3> */}
                <p className="cta- text-[18px] mt-4 text-center">
                  We strive to do more than just fill requirements - Empower
                  customizes our delivery and recruiting approach with the goal
                  of finding top notch talent fully committed and excited to be
                  a part of your company!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Process;
