import React from 'react'

const VariantType = ({ variant, title }) => {
  switch (variant) {
    case 'h1':
      return <h1 className='uppercase text-4xl font-bold text-center text-darkblue'>{title}</h1>
    case 'h2':
      return <h2 className='uppercase text-3xl font-bold text-darkblue'>{title}</h2>
    case 'h3':
      return <h3 className='uppercase text-2xl font-bold'>{title}</h3>
    case 'p':
      return <p className='text-base'>{title}</p>
    default:
      break;
  }
}

const Typography = ({variant, title}) => {
  return (
    <div>
      <VariantType variant={variant} title={title} />
    </div>
  )
}

export default Typography;
