import React from 'react'
import Typography from '../components/Typography'

export const About = () => {
  return (
    <div id='about' className='flex flex-col justify-center items-center mt-12 mb-12 py-12 bg-[#f2f2f2]'>
      <Typography variant='h2' title='About us' className='uppercase text-3xl font-bold text-darkblue' />
      <div className='grid grid-cols-1 m-8 gap-8 md:grid-cols-2'>
        <div><img src={require('../assets/about-us-image.jpeg')} alt='ja construction owner installing gutters' /></div>
        <div>
          <Typography variant='h3' title='Ullamco dolor amet minim aliqua.' />
          <Typography variant='p' title='Lorem cillum deserunt laborum cillum anim sit id officia aliqua elit ipsum consectetur laboris ipsum. Dolore occaecat irure sint eiusmod consectetur dolore voluptate eiusmod labore. Ex anim labore culpa ea occaecat sunt ullamco elit incididunt officia esse amet occaecat deserunt. Nostrud proident cillum tempor fugiat consectetur consequat et commodo sint ipsum laboris non incididunt id. Deserunt officia officia voluptate dolore et veniam laboris laborum velit duis adipisicing mollit. Culpa esse tempor voluptate sit. Eiusmod minim Lorem dolor sunt excepteur.' />
        </div>
      </div>
    </div>
  )
}
