import Image from "next/image";
import React from "react";
import Img1 from "./icons/assets/seeker-icon1.png"
import Img2 from "./icons/assets/seeker-icon2.png";

const Two = () => {
  return (
    <>
      <div className="w-full h-[350px]">
        <div className="max-w-6xl mx-auto ">
          <div className="flex gap-7 max-md:flex-col">
            <div className="w-[570px] h-[286px] flex flex-col justify-center items-center gap-5 shadow2xl text-center border-[1px] border-[solid] border-[#eee] p-[25px] max-md:w-full">
              <Image src={Img1} alt="" />
              <p className="text-center font-bold">
                Empower believes in an employee-centric culture where we provide
                flexibility and hold employee preference in high regard.
              </p>
            </div>
            <div className="w-[570px] h-[286px] flex flex-col justify-center items-center gap-5 shadow2xl text-center border-[1px] border-[solid] border-[#eee] p-[25px] max-md:w-full">
              <Image src={Img2} alt="" />
              <p className="text-center font-bold">
                Empower works to cultivate relationships that last. We don’t
                succeed unless you do!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Two;
