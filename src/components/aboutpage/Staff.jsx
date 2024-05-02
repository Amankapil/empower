import Image from "next/image";
import React from "react";
import img from "./assets/rightarrowhite.png";
import Link from "next/link";

const Staff = () => {
  return (
    <>
      <section className="pro-home-staff overflow-hidden py-28">
        <div className="max-w-6xl mx-auto ">
          <div className="main flex justify-center items-center w-[100%] max-md:w-full max-md:text-center max-md:p-4">
            {/* <p className="text-[#fff] max-w-[450px] w-full text-center">
              Our time-tested staff comprises of elite talent from the fields of
              HR and recruitment, client services, and technology.
            </p> */}
          </div>
          <div className="button-hero flex justify-center items-center max-md:flex-wrap">
            <Link
              href="/services"
              className="one  text-[#fff] font-normal text-[12px] tracking-[1px] inlin-block px-[22px] py-[10px] rounded-[50px] [transition:0.5s] m-[10px] border-[1px] border-[solid] border-[#1d83b3] bg-[#1d83b3] text-center w-[165px]  flex justify-center items-center gap-2 hover:bg-[transparent] hover:border-[#fff]"
            >
              <Image className="align-middle border-none" src={img} alt="" />
              <span>Services</span>
            </Link>
            <Link
              href="/employee"
              className="one  text-[#fff] font-normal text-[12px] tracking-[1px] inlineblock px-[22px] py-[10px] rounded-[50px] [transition:0.5s] m-[10px] border-[1px] border-[solid] border-[#ffffff] text-center w-[265px] flex justify-center items-center gap-2 hover:bg-[#1d83b3] hover:border-[#1d83b3]"
            >
              <Image src={img} alt="" />
              <span>Staff Augmentation</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Staff;
