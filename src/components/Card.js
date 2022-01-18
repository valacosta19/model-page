import React from 'react'
import Typography from './Typography'

export const Card = ({props}) => {

  const imageLink = () => {
    const imageName = props.img;
    return require(`../assets/${imageName}`)
  }

  return (
    <div key={props.id} className='max-w-xs bg-white rounded shadow-lg shadow-darkblue/50'>
      <div>
        <img src={imageLink()} alt={props.alt} className='rounded' />
      </div>

      <div className='p-3'>
        <Typography variant='h3' title={props.title} />

        <Typography variant='p' title={props.content} />
      </div>
    </div>
  )
}
