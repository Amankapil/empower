import Image from "next/image";
import React from "react";
import img from "./assets/solution.jpg";

const Flexible = () => {
  return (
    <>
      <div className="professionals pl-[0] pr-[0] py-[60px]">
        <div className="max-w-6xl mx-auto">
          <div className="col12 flex justify-center items-start gap-10 max-md:w-full max-md:flex-wrap">
            <div className="max-md:p-5 boxw">
              <h2 className="text-[26px] font-bold text-[#000]">
                Providing flexible solutions
              </h2>

              <p className="leading-[24px] text-[#000] mb-[30px] mt-8">
                Founded in 2004, Empower Professionals is an IT services and
                solutions company focused on helping our clients navigate the
                rapidly changing technological landscape and stay ahead of the
                competition.
                <br />
                <br />
                With a globally distributed team, we offer engagement models
                ranging from end-to-end project based work, from consulting,
                design, development, testing, and support, to on-demand staff
                augmentation through delivering top notch onshore talent as well
                as cost-effective but quality offshore talent, whether it be a
                handful of resources or building entire teams from the ground up
              </p>
            </div>
            <Image
              className="max-w-[50%] float-left pt-[0] pr-[30px] pb-[30px] pl-[0] max-md:max-w-full max-md:p-5 servicchomesection"
              src={img}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Flexible;
