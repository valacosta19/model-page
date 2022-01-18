import React from 'react'
import Typography from '../components/Typography'
import { ContactForm } from '../components/Form'

export const Contact = () => {

  return (
    <div className='flex flex-col gap-8' id='contact'>
      <div className='m-4'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-[1fr_2fr] items-center'>
          <Typography variant='h2' title='Contact us' className="text-center uppercase text-3xl font-bold text-darkblue" />
          <ContactForm className="text-center" />
        </div>
        <Typography variant='p' title="" />
      </div>
      <iframe title="contact map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.3893050334063!2d-81.5833050853039!3d28.225861182580065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd79dfe52e9519%3A0xd789ba28f036021e!2sAnnabelle%20Way%2C%20Florida%2033837%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1642454831854!5m2!1ses-419!2sar" width="100%" height="450" allowFullScreen={true} loading="lazy" className='max-w-full h-auto'></iframe>
    </div>
  )
}
