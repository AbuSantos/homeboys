import Image from 'next/image'
import NavbarLink from './NavbarLink'
import logo from '../public/images/logo'
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
    <div className="flex justify-between p-4">
      <div className=" space-x-6 ">
        {links.map((link, index) => {
          return <NavbarLink key={index} link={link} />
        })}
      </div>
      <div>
        <Image src={logo} />
      </div>
      <div>
        <button>Book Now</button>
      </div>
    </div>
  )
}

export default Navbar
