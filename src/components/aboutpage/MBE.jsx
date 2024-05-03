import Image from 'next/image'
import React from 'react'
import img from './assets/mbe_logo.png'
const MBE = () => {
  return (
    <div className='mbeed mb-20'>
      <div className='max-w-5xl mx-auto bg-[#dcecf2] p-10'>
        <div className='flex justify-center items-center gap-4 max-md:flex-wrap'>
          <div className='img'>
            <Image src={img} alt='kl' />
          </div>
          <p className='font-bold text-[1.25rem]'>
            We are also extremely proud to be a certified Minority Owned
            Business Enterprise (MBE) in both New Jersey & New York committed to
            diversity.
          </p>
        </div>
      </div>
    </div>
  )
}

export default MBE
