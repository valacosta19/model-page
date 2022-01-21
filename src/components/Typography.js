import React from 'react'

const VariantType = ({ variant, title, className }) => {
  switch (variant) {
    case 'h1':
      return <h1 className={className}>{title}</h1>
    case 'h2':
      return <h2 className={className}>{title}</h2>
    case 'h3':
      return <h3 className={`uppercase text-2xl font-bold ${className}`}>{title}</h3>
    case 'p':
      return <p className={`text-base ${className}`}>{title}</p>
    default:
      break;
  }
}

const Typography = ({variant, title, className}) => {
  return (
    <VariantType variant={variant} title={title} className={className} />
  )
}

export default Typography;
