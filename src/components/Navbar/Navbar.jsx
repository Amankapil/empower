'use client'
import React, { useState, useEffect } from 'react'
import './nav.scss'
import Img from './logoo.png'
import log from './logo-blue.png'

import Image from 'next/image'
import Link from 'next/link'

import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

function Navbar () {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    // if (typeof globalThis.window? !== "undefined") {
    const handleScroll = () => {
      if (globalThis.window?.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    // Add scroll event listener
    globalThis.window?.addEventListener('scroll', handleScroll)

    // Clean up event listener on component unmount
    return () => {
      globalThis.window?.removeEventListener('scroll', handleScroll)
    }
    // }
  }, [])

  const [isDropdownOpen, setDropdownOpen] = useState(false)
  let [width, setWidth] = useState(0)

  useEffect(() => {
    // if (typeof window === "undefined") {
    const updateWidth = () => {
      setWidth(globalThis.window?.innerWidth)
    }
    updateWidth()
    globalThis.window?.addEventListener('resize', updateWidth)
    return () => {
      globalThis.window?.removeEventListener('resize', updateWidth)
    }
    // }
  }, [])

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen)
  }
  let [active, setactive] = useState(false)
  const hamburger = () => {
    setactive(!active)
  }

  // const router = useRouter()

  const currentRoutee = usePathname() // Get the current path
  // const isContactPage = currentRoutee === '/contactus'

  const navClass =
    currentRoutee === '/contactus'
      ? 'flex items-center text-black text-xs mt-1 mb-6 gap-8 py-[10px]'
      : 'flex items-center text-white text-xs mt-1 mb-6 gap-8 py-[10px]'

  return (
    <>
      {width <= 900 ? (
        <>
          <header className='bg[#062b43] bg-opacity-50 w-full mx-auto sticky top-0 h[100px] rounded-full z-[9990] h-[76px]'>
            <div
              className={
                isScrolled
                  ? 'bg-[#1d83b3b3] w-full  flex justify-between font-openSans z-[1] sticky top-0  h-[100px] mt8 '
                  : 'w-full  flex justify-between font-openSans z-[1] sticky -top-8 h-[80px] '
              }
            >
              <div className='logo'>
                <Link href='/' className='mt-1 ml-[10px] mb-2 h-full'>
                  {currentRoutee === '/contactus' ? (
                    // <Image src={log} alt='' className='mix-blend-differene' />
                    <>
                      {isScrolled ? (
                        <Image
                          src={Img}
                          alt=''
                          className='mix-blend-differene'
                        />
                      ) : (
                        <Image
                          src={log}
                          alt=''
                          className='mix-blend-differene'
                        />
                      )}
                    </>
                  ) : (
                    <Image src={Img} alt='' className='mix-blend-differene' />
                  )}
                </Link>
              </div>
              <button onClick={hamburger}>
                {currentRoutee === '/contactus' ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='65'
                    height='42'
                    viewBox='0 0 65 42'
                    fill='#000'
                  >
                    <line
                      x1='13.4353'
                      y1='12.1875'
                      x2='51.5647'
                      y2='12.1875'
                      stroke='#000'
                    />
                    <line
                      x1='13.4353'
                      y1='20.3594'
                      x2='51.5647'
                      y2='20.3594'
                      stroke='#000'
                    />
                    <line
                      x1='13.4353'
                      y1='28.813'
                      x2='51.5647'
                      y2='28.813'
                      stroke='#000'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='65'
                    height='42'
                    viewBox='0 0 65 42'
                    fill='#fff'
                  >
                    <line
                      x1='13.4353'
                      y1='12.1875'
                      x2='51.5647'
                      y2='12.1875'
                      stroke='white'
                    />
                    <line
                      x1='13.4353'
                      y1='20.3594'
                      x2='51.5647'
                      y2='20.3594'
                      stroke='white'
                    />
                    <line
                      x1='13.4353'
                      y1='28.813'
                      x2='51.5647'
                      y2='28.813'
                      stroke='black'
                    />
                  </svg>
                )}
              </button>

              <div
                className={`lists flex items-center justify-between flex-col ${
                  active ? 'active ' : ''
                }`}
              >
                <nav className='flex gap-6 text-base font-medium text-black items-center flex-col w-1/2 mt-20'>
                  <Link
                    onClick={hamburger}
                    className='hovertext-[#733e3d] text-white'
                    href='/About'
                  >
                    ABOUT US
                  </Link>
                  {/* <Link
                    onClick={hamburger}
                    className='hovertext-[#733e3d]  text-white'
                    href='/job-seeker'
                  >
                    JOBSEEKER
                  </Link> */}
                  <Link
                    onClick={hamburger}
                    className='hovertext-[#733e3d]  text-white'
                    href='/services'
                  >
                    SERVICES
                  </Link>
                  <Link
                    onClick={hamburger}
                    className='hovertext-[#733e3d]  text-white'
                    href='/employee'
                  >
                    STAFF AUGMENTATION
                  </Link>

                  <Link
                    onClick={hamburger}
                    className='hovertext-[#733e3d] text-white'
                    href='/contactus'
                  >
                    CONTACT
                  </Link>
                </nav>
                <div className='absolute right-20 top-20'>
                  <button
                    type='reset'
                    className='bg-gray-300 text-gray-800 py-2 px-4 rounded-md ml-2'
                    onClick={hamburger}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='#fff'
                    >
                      <path d='M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z' />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </header>
        </>
      ) : (
        <div
          className={
            isScrolled
              ? 'bg-[#1d83b3b3] w-full !text-white  flex justify-between font-openSans z-[1] sticky top-0  h-[80px] mt8 '
              : 'w-full  flex justify-between font-openSans z-[1] sticky top-3 h-[80px] '
          }
        >
          <Link href='/' className='mt-1 ml-[10px] mb-2 h-full'>
            {currentRoutee === '/contactus' ? (
              // <Image src={log} alt='' className='mix-blend-differene' />
              <>
                {isScrolled ? (
                  <Image src={Img} alt='' className='mix-blend-differene' />
                ) : (
                  <Image src={log} alt='' className='mix-blend-differene' />
                )}
              </>
            ) : (
              <Image src={Img} alt='' className='mix-blend-differene' />
            )}
          </Link>

          <div className='mr-11'>
            <ul className={navClass}>
              <Link href='/About'>
                <li
                  className={
                    isScrolled
                      ? 'hover:rounded-full hover:border px-[14px] py-2 text-[#fff]'
                      : 'hover:rounded-full hover:border px-[14px] py-2'
                  }
                >
                  ABOUT US
                </li>
              </Link>
              <Link href='/services'>
                <li
                  className={
                    isScrolled
                      ? 'hover:rounded-full hover:border px-[14px] py-2 text-[#fff]'
                      : 'hover:rounded-full hover:border px-[14px] py-2'
                  }
                >
                  SERVICES
                </li>
              </Link>
              {/* <Link href="/job-seeker">
                <li className="hover:rounded-full hover:border px-[14px] py-2">
                  JOBSEEKER
                </li>
              </Link> */}
              <Link href='/employee'>
                <li
                  className={
                    isScrolled
                      ? 'hover:rounded-full hover:border px-[14px] py-2 text-[#fff]'
                      : 'hover:rounded-full hover:border px-[14px] py-2'
                  }
                >
                  STAFF AUGMENTATION
                </li>
              </Link>

              <Link href='/contactus'>
                <li
                  className={
                    isScrolled
                      ? 'group relative rounded-full border px-[14px] py-2 text-[#fff]'
                      : 'group relative rounded-full border px-[14px] py-2'
                  }
                >
                  CONTACT
                  {/* <!-- Dropdown that appears on hover --> */}
                  <div className='absolute top-0 pt-10 left-0 mt-1 bgwhite text-black hidden group-hover:block rounded shadow-lg'>
                    <ul>
                      <li className='px-[14px] py-2 rounded-full  bg-gray-200'>
                        <Link href='/job-seeker'>CAREERS</Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
