import React from 'react'
import Typography from '../components/Typography'
import { ContactForm } from '../components/Form'
import {  Link } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useTheme } from '@mui/material/styles';

export const Contact = () => {
  const theme = useTheme();

  return (
    <div className='flex flex-col gap-8' id='contact'>
      <div className='m-4'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-[1fr_2fr] items-center'>
          <div className='flex flex-col gap-6'>
            <Typography variant='h2' title='Contact us' className="uppercase text-3xl font-bold text-darkblue text-center " />
            <Typography variant='p' title='Contact us and we will be in touch briefly.' className="text-center text-lg" />
            <Typography variant='p' title='We are located in all Central Florida.' className="text-center text-lg" />
            <div className="flex flex-col items-center gap-4">
              <Link href="tel:4077798641" className="flex gap-4 hover:text-green" sx={{ color: theme.palette.primary.dark, textDecoration: 'none', '&:hover': { color: theme.palette.secondary.main, fontWeight: 500 } }}>
                <PhoneIcon />
                <p>Give us a call!</p>
              </Link>
              <Link href="https://www.instagram.com/jabrothersconstruction/" className="flex gap-4 hover:text-green" sx={{ color: theme.palette.primary.dark, textDecoration: 'none', '&:hover': { color: theme.palette.secondary.main, fontWeight: 500 } }}>
                <InstagramIcon />
                <p>Follow us on Instagram</p>
              </Link>
            </div>
          </div>
          <ContactForm className="text-center" />
        </div>
        <Typography variant='p' title="" />
      </div>
      <iframe title="contact map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.3893050334063!2d-81.5833050853039!3d28.225861182580065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd79dfe52e9519%3A0xd789ba28f036021e!2sAnnabelle%20Way%2C%20Florida%2033837%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1642454831854!5m2!1ses-419!2sar" width="100%" height="450" allowFullScreen={true} loading="lazy" className='max-w-full h-auto'></iframe>
    </div>
  )
}
