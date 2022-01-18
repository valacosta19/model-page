import React from 'react'
import Typography from '../components/Typography';

export const Principal = () => {

  return (
    <div className={`flex flex-col justify-center items-center h-screen bg-principal-image bg-cover gap-4`}>
      <Typography variant='h1' title='JA Brothers Construction LLC' />
      <a href='#contact' className='bg-green rounded py-2 px-3 w-1/2 mx-auto text-white font-bold text-center cursor-pointer transition-all ease-in-out delay-150 hover:bg-gradient-to-r from-lightblue to-green hover:gradient-x md:w-1/4' >GET A FREE ESTIMATE</a>
    </div>
  )
}
