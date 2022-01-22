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
                <p>Give us a call! <br/> (407) 779 8641</p>
              </Link>
              <Link href="https://www.instagram.com/jabrothersconstruction/" className="flex gap-4 hover:text-green" sx={{ color: theme.palette.primary.dark, textDecoration: 'none', '&:hover': { color: theme.palette.secondary.main, fontWeight: 500 } }}>
                <InstagramIcon />
                <p>Follow us on Instagram <br/> @jabrothersconstruction</p>
              </Link>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
