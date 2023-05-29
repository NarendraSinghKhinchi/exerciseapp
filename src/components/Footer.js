import React from 'react'
import Logo from '../assets/images/Logo-1.png'
import { Box, Stack, Typography } from '@mui/material';
function Footer() {
  return (
    <Box mt='80px' bgcolor="#fffcf4">
      <Stack gap='40px' alignItems='center' px='40x' pt='24px'>
        <img src={Logo} style={{width:"200px", height:"40px"}} alt="logo"></img>
        <Typography variant='h5'>
          Made with ❤️ by Narendra Bana
        </Typography>
      </Stack>
    </Box>
    )
}

export default Footer ;