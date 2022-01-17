import React from 'react'

export const Link = ({id, name, url}) => {
  return (
    <a href={url} key={id} className='list-none border-b-2 border-cyan-900 w-full px-5 py-4'>
      <li className='uppercase'>{name}</li>
    </a>
  )
}
