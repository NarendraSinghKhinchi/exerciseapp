import React from 'react'
import { Box , Typography , Button } from '@mui/material' 
import herobannerimg from '../assets/images/banner.png' 


function HeroBanner() {
  return (
    <Box sx={{
            mt:{lg:'212px' , xs:'70px'},
            ml:{sm:'50px'}
        }}
        position='relative'
        p = '20px'
    >
        <Typography color="#FF2625" fontWeight="600" fontSize="26px">Fitness Club</Typography>
        <Typography fontWeight="700" fontSize="36px" mb='23px' mt='30px'>
            Sweat, Smile <br /> and Repeat
        </Typography>
        <Typography fontWeight="600" fontSize="22px" lineHeight='35px' mb={2}>
            Check out the most effective exercises
        </Typography>
        <Button href="#exercises" variant='contained' color="error" sx={{padding:"10px" , backgroundColor:"#FF2625"}}>Explore Exercises</Button>
        <Typography color="#FF2625" fontWeight="600" fontSize="150px" sx={{opacity:"0.1" , display:{lg:'block' ,  xs:'none'}}} >Exercises</Typography>
        <img src={herobannerimg} alt='banner' className='hero-banner-img'></img>
    </Box>
  )
}

export default HeroBanner
