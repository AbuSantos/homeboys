'use client'
import Image from 'next/image'
import NavbarLink from './NavbarLink'
import logo from '../public/logo.svg'
import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
const links = [
  {
    label: 'Home',
    link: '/home',
  },
  { label: 'Gallery', icon: 'User', link: '/gallery' },
  {
    label: 'Services',
    link: '/services',
  },
  {
    label: 'About Us',
    link: '/about',
  },
]

const Navbar = () => {
  const [nav, setNav] = useState(false)

  return (
    <div className="flex justify-between items-center w-full h-20 px-8 text-white nav">
      <ul className="hidden md:flex flex-1">
        {links.map(
          (link, index) => (
            console.log(link),
            (
              <li
                key={index}
                className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
              >
                <NavbarLink key={index} link={link} />
              </li>
            )
          ),
        )}
      </ul>
      <div className=" flex-1 mr-24">
        <Image src={logo} width={160} height={160} alt="logo" />
      </div>
      <div className="hidden md:inline-block ">
        <button className="text-black border-b-2 border-black">Book Now</button>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-4/5 bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map((link, index) => (
            <>
              <li
                key={index}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link onClick={() => setNav(!nav)} href={link.link}>
                  {link.label}
                </Link>
              </li>
            </>
          ))}
          <div className="">
            <button className="text-gray-100 border-b-2 border-black">
              Book Now
            </button>
          </div>
        </ul>
      )}
    </div>
  )
}

export default Navbar
