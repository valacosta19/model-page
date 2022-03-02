import React from 'react';
import { useTheme } from '@mui/material/styles';
import {  Link } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const WhatsappButton = () => {
  const theme = useTheme();

  return (
    <Link href="https://wa.link/p2tk6d" target="_blank" className='fixed bottom-4 right-4 bg-green rounded-[50%] p-2 transition-all ease-in-out hover:bg-lightblue'>
      <WhatsAppIcon style={{color: theme.palette.common.white, fontSize: 50}} />
    </Link>
  )
};
