import React, { useState } from 'react'
import Logo from '../assets/logo-blue2.svg'
import { Link } from './Link'
import { Fade as Hamburger } from 'hamburger-react'

const navlinks = [
  {
    id: 1,
    name: "Home",
    url: "#home"
  },
  {
    id: 2,
    name: "Services",
    url: "#services"
  },
  {
    id: 3,
    name: "About us",
    url: "#about"
  },
  {
    id: 4,
    name: "Contact us",
    url: "#contact"
  }
]

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className={`fixed w-full bg-white ${isOpen ? 'h-100' : 'h-0' }`}>
      <div className='flex justify-between items-center bg-white border-b-2 border-darkblue px-5 p-3 z-50'>
        <img src={Logo} alt='logo' className='max-w-[100px]' />
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <ul className={`flex flex-col justify-evenly items-center ${isOpen ? 'translate-x-0' : 'translate-x-full' } transition duration-300 z-50`}>
        {navlinks.map(link => 
          <Link
            key={link.id}
            id={link.id}
            name={link.name} 
            url={link.url} 
          />
        )}
      </ul>
    </div>
  )
}
