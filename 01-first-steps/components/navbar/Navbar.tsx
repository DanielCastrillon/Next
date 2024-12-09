import { HomeIcon } from '@primer/octicons-react'
import Link from 'next/link'
import React from 'react'
import { ActiveLink } from '../active-link/ActiveLink'

const navItems = [
  {path: '/about', text: 'About'},
  {path: '/pricing', text: 'Pricing'},
  {path: '/contact', text: 'Contact'}
]

export const Navbar = async () => {
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
      <Link className='flex items-centers' href={'/'}>
        <HomeIcon className='mr-2'/>
        Home
      </Link>
      <div className="flex flex-1">

      </div>
      {
        navItems.map((nav) => (
          <ActiveLink key={nav.path} {...nav} />
        ))
      }
    </nav>
  )
}
