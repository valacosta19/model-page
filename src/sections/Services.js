import React from 'react'
import Typography from '../components/Typography'
import { Card } from '../components/Card'

const serviceList = [
  {
    id: 1,
    title: "Installation",
    img: 'gutter-installation.jpeg',
    content: "Velit exercitation Lorem irure cupidatat ad laboris laboris.",
    alt: ""
  },
  {
    id: 2,
    title: "Repairing",
    img: 'gutter-repair.jpeg',
    content: "Elit anim adipisicing eiusmod ad reprehenderit dolor amet incididunt quis duis quis Lorem.",
    alt: ""
  },
  {
    id: 3,
    title: "Replacement",
    img: 'gutter-installation.jpeg',
    content: "Irure anim laboris velit magna ullamco.",
    alt: ""
  },
  {
    id: 4,
    title: "Cleaning",
    img: 'gutter-cleaning.jpeg',
    content: "Irure adipisicing eiusmod do nisi.",
    alt: ""
  },
  {
    id: 5,
    title: "Gutter filters",
    img: 'gutter-filters.jpeg',
    content: "Irure adipisicing eiusmod do nisi.",
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
