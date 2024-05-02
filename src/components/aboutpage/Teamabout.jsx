import Image from "next/image";
import React from "react";
import img from "./assets/team.jpg";
import Link from "next/link";

const Teamabout = () => {
  return (
    <>
      <div className="professionals pl-[0] pr-[0] py-[60px]">
        <div className="max-w-6xl mx-auto">
          <div className="col12 flex justify-center items-start gap-10 max-md:w-full max-md:flex-wrap">
            <Image
              className="max-w-[50%] float-left pt-[0] pr-[30px] pb-[30px] pl-[0] max-md:max-w-full max-md:p-5 servicchomesection"
              src={img}
              alt=""
            />
            <div className="max-md:p-5 boxw">
              <h2 className="text-[26px] font-bold text-[#000]">The Team</h2>

              <p className="leading-[24px] text-[#000] mb-[30px] mt-8">
                Our executive team brings over three decades of experience in
                the IT enabled services domain. They bring a history of product
                leadership experience and this product and customer mindset can
                be seen in the fabric of everything we do.
              </p>
              <Link
                href="/contactus"
                className="one  text-[#000] font-normal text-[12px] tracking-[1px] inlineblock px-[22px] py-[10px] rounded-[50px] [transition:0.5s] my-[10px] border[1px] bord] border[#ffffff] text-center w-[195px] flex justify-center items-center gap-2 hover:underline hoverborder-[#1d83b3]"
              >
                <Image
                  src="https://www.empowerprofessionals.com/img/ico_right.svg"
                  width={15}
                  height={15}
                  alt=""
                />
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teamabout;
