import React from 'react'
import Typography from '../components/Typography'

export const About = () => {
  return (
    <div id='about' className='flex flex-col justify-center items-center mt-12 mb-12 py-12 bg-[#f2f2f2]'>
      <Typography variant='h2' title='About us' className='uppercase text-3xl font-bold text-darkblue' />
      <div className='grid grid-cols-1 m-8 gap-8 md:grid-cols-2'>
        <div className='m-auto'><img className='max-h-[43rem]' src={require('../assets/about-us-image.jpeg')} alt='ja construction owner installing gutters' /></div>
        <div>
          <Typography variant='h3' title='We live here, we work here!' />
          <Typography variant='p' className='mt-4 text-lg' title='JA Brothers Construction is a family-owned entrepreneurship servicing Davenport and all Central Florida.' />
          <Typography variant='p' className='mt-4 text-lg' title='We live here, we work here!' />
          <Typography variant='p' className='mt-4 text-lg' title='We are committed to the customer satisfaction and exceptional quality services for all of your gutter needs. Our team performs everything from standard gutter repair, maintenance, cleanings, and complete gutter installations for both residential as well as commercial properties.' />
          <Typography variant='p' className='mt-4 text-lg' title='Honesty, Efficiency, and Quality Matter to Us' />
          <Typography variant='p' className='mt-4 text-lg' title='Whether we are installing new seamless gutters, performing a repair, routine maintenance, or doing in-depth clean, you can always trust us to exceed your expectations and keep your gutters operating as it should.' />
        </div>
      </div>
    </div>
  )
}
