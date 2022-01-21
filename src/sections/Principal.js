import React from 'react'
import Typography from '../components/Typography';

export const Principal = () => {

  return (
    <div id='home' className={`flex flex-col justify-center items-center h-screen bg-principal-image bg-cover gap-8 lg:px-8 lg:pt-16`}>
      <Typography variant='h1' title='JA Brothers Construction LLC' className="uppercase text-4xl font-bold text-center text-white md:text-4xl lg:text-5xl"/>
      <Typography variant='h2' title='Eiusmod duis et non sint do.' className='uppercase text-2xl font-bold text-center text-white md:text-2xl lg:text-4xl' />
      <a href='#contact' className='bg-green rounded py-4 px-8 mx-auto text-white text-lg font-bold text-center cursor-pointer transition-all ease-in-out hover:text-xl bg-gradient-to-r hover:from-lightblue hover:to-green hover:gradient-x md:py-4 md:px-10 md:text-lg lg:text-base lg:py-4 lg:px-8'>GET A FREE ESTIMATE</a>
    </div>
  )
}
