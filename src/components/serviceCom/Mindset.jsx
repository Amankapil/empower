import Image from 'next/image'
import React from 'react'

const Mindset = () => {
  return (
    <>
      <div className='professionals pl-[0] pr-[0] py-[60px]'>
        <div className='max-w-6xl mx-auto'>
          <div className='col12 flex justify-center items-center gap-10 max-md:w-full max-md:flex-wrap'>
            <div className='max-w-[50%] float-left pt-[0] pr-[30px] pb-[30px] pl-[0] max-md:max-w-full max-md:p-5 '>
              {/* <Image
              className="max-w-[50%] float-left pt-[0] pr-[30px] pb-[30px] pl-[0] max-md:max-w-full max-md:p-5 "
              src={img}
              alt=""
              /> */}
            </div>
            <div className='max-md:p-5 boxw'>
              <h2 className='text-[26px] font-bold text-[#000]'>
                Product Mindset:
              </h2>
              <p className='leading-[24px] text-[#000] mb-[30px] mt-8'>
                Product is in our DNA. The term product engineering gets thrown
                around liberally in the IT Services world, but the majority of
                these technology firms institute a barebones product framework
                and label themselves experts. At Empower, not only does our ma n
                agementc ome from a product background, but we have also
                incubated and successfully launched products, including an
                end-to-end CSR enablement SaaS platform now used by over 40
                clients worldwide. This same team is our core group of experts
                that engage on all new initiatives and bring a deep product
                minded expertise while consulting on client needs.
              </p>
              {/* <Link
                href="/About"
                className="one  text-[#000] font-normal text-[12px] tracking-[1px] inlineblock px-[22px] py-[10px] rounded-[50px] [transition:0.5s] my-[10px] border[1px] bord] border[#ffffff] text-center w-[195px] flex justify-center items-center gap-2 hover:underline hoverborder-[#1d83b3]"
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
        </div>
      </div>
    </>
  )
}

export default Mindset
