import React from 'react'
import Typography from '../components/Typography'
import { Card } from '../components/Card'

const serviceList = [
  {
    id: 1,
    title: "Installation",
    img: 'gutter-installation.jpeg',
    content: "When it comes to installing new gutters, JA Brothers Construction offers nothing but the best. All of our new gutters are built with aluminium to guarantee durability, looks and an easy maintenance. Prevent floods, pest proliferation, mold, stains and make your property look amazing.",
    alt: ""
  },
  {
    id: 2,
    title: "Repairing",
    img: 'gutter-repair.jpeg',
    content: "There are many ways that gutters can become dysfunctional. Traditional gutters can get worn out after many years of use or can be damaged by bad weather conditions. If you think that with a few arrangements they can work optimally again. We can do that for you.",
    alt: ""
  },
  {
    id: 3,
    title: "Replacement",
    img: 'gutter-installation.jpeg',
    content: "If you commonly see rain gutters leaking, sagging, overflowing, and pooling runoff around the home is a good idea to replace them. Consider a replacement if your gutters are showing significant exterior color fade, if they are installed with spike and ferrule or if they are more than 10 years old. Save time and money and get a replacement with us and the best gutters in the market.",
    alt: ""
  },
  {
    id: 4,
    title: "Cleaning",
    img: 'gutter-cleaning.jpeg',
    content: "Clogging and accumulation of dirt is the most common problem in gutters, so it is recommended to clean them at least twice a year. We clean them for you.",
    alt: ""
  },
  {
    id: 5,
    title: "Gutter filters",
    img: 'gutter-filters.jpeg',
    content: "And if you want to protect your gutters, we install some filters that prevent them from clogging due to the debris that the rain brings.",
    alt: ""
  }
]

export const Services = () => {
  return (
    <div id="services" className='flex flex-col justify-center items-center mt-24 gap-8'>
      <Typography variant='h2' title='Services' className='uppercase text-3xl font-bold text-darkblue' />
      <div className='flex gap-4 flex-wrap justify-evenly'>
        { serviceList.map(service => {
          return <Card key={service.id} props={service} />
        }) }
      </div>
    </div>
  )
}
