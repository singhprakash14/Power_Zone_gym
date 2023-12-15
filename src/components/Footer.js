import React from 'react'
import {Box, Stack, Typography} from '@mui/material'

import Logo from '../assets/images/Logo.png'

export const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4'>
      <Stack gap='40px'  alignItems='center' px='40px' pt='24px'>
        <img  src={Logo} alt='logo' width='70px' height='30px'/>
        <Typography variant='h5' pb='40px' mt='10px'>
         PowerZone Fitness
        </Typography>
      </Stack>
    </Box>
  )
}
