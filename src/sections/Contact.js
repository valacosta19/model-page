import React from 'react'
import Typography from '../components/Typography'

export const Contact = () => {

  return (
    <div className='flex flex-col m-4 gap-8'>
      <Typography variant='h2' title='Contact us' className="text-center grow-0" />
      <iframe title="contact map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.3893050334063!2d-81.5833050853039!3d28.225861182580065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd79dfe52e9519%3A0xd789ba28f036021e!2sAnnabelle%20Way%2C%20Florida%2033837%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1642454831854!5m2!1ses-419!2sar" width="600" height="450" allowFullScreen={true} loading="lazy"></iframe>
    </div>
  )
}
