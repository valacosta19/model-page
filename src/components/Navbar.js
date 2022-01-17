import React, { useState } from 'react'
import { Link } from './Link'
import { Cross as Hamburger } from 'hamburger-react'

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
    <>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      <ul className='flex flex-col justify-evenly items-center fixed w-full'>
        {navlinks.map(link => 
          <Link
            key={link.id}
            id={link.id}
            name={link.name} 
            url={link.url} 
          />
        )}
      </ul>
    </>
  )
}
