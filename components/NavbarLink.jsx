'use client'
import Link from 'next/link'
import { Settings, User, Grid, Calendar } from 'react-feather'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import '../styles/globall.css'

const icons = { Settings, User, Grid, Calendar }

const NavbarLink = ({ link }) => {
  const pathName = usePathname()
  let isActive = false

  if (pathName === link.link) {
    isActive = true
  }

  return (
    <Link
      href={link.link}
      className={clsx(
        'stroke-gray-400 hover:text-green-300 transition duration-200 ease-in-out mb-4',
        isActive && 'underline-on-click',
      )}
    >
      {link.label}
    </Link>
  )
}

export default NavbarLink
