import Image from 'next/image'
import NavbarLink from './NavbarLink'
import logo from '@/public/logo.svg'
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
  return (
    <div className="flex justify-around p-4 pl-8 pr-8 ml-10">
      <div className=" space-x-6 flex-1">
        {links.map((link, index) => {
          return <NavbarLink key={index} link={link} />
        })}
      </div>
      <div className="flex-1 mr-36">
        <Image src={logo} width={160} height={160} alt="logo" />
      </div>
      <div className="">
        <button className="text-black">Book Now</button>
      </div>
    </div>
  )
}

export default Navbar
