import React from 'react'

export const Button = ({ type, disabled, className, children }) => {
  return (
    <button type={type} disabled={disabled} className={className}>
      {children}
    </button>
  )
}
