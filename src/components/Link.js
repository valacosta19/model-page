import React from 'react'

export const Link = ({id, name, url}) => {
  return (
    <a href={url} key={id} className='list-none font-bold border-b-2 border-darkblue w-full py-5 text-center hover:text-green lg:border-0'>
      <li className='uppercase'>{name}</li>
    </a>
  )
}
