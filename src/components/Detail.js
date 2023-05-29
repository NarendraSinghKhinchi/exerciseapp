import React from 'react'
import { Box , Stack , Typography,Button } from '@mui/material'
import bodyPartImg from '../assets/icons/body-part.png' ;
import targetImg from '../assets/icons/target.png' ;
import equipmentImg from '../assets/icons/equipment.png' ;
function Detail({exerciseDetail}) {
  if(!exerciseDetail)return <></> ;
  const {bodyPart, gifUrl, name, target, equipment } = exerciseDetail ; 
  return (
    <Stack gap="60px" 
        sx={{
            flexDirection:{lg:'row' , xs:'column'},
            p:'20px',
            alignItems:'center'
        }}
    >
        <img src={gifUrl} alt={name} loading='lazy' className='detail-image'></img>
        <Stack
            sx={{gap:{lg:"35px" , xs:"20px"}}}
        >
            <Typography fontWeight='600' fontSize="40px">{name}</Typography>
            <Typography variant='h5'>
                I don’t count my sit-ups. I only start counting when it starts hurting because they’re the only ones that count.
                <Typography fontWeight='600' fontSize='22px'>Muhammad Ali</Typography>
            </Typography>
            <Stack direction='row' gap='24px' alignItems='center'>
                <Button sx={{background:"#fff2db" , borderRadius:"50%" , width:"100px" , height:'100px'}}>
                    <img src={bodyPartImg} alt='bodyPart'  style={{width:'50px' , height:'50px'}}></img>
                </Button>
                <Typography variant='h5' textTransform='capitalize'>
                    {bodyPart}
                </Typography>
            </Stack>
            <Stack direction='row' gap='24px' alignItems='center'>
                <Button sx={{background:"#fff2db" , borderRadius:"50%" , width:"100px" , height:'100px'}}>
                    <img src={targetImg} alt='bodyPart'  style={{width:'50px' , height:'50px'}}></img>
                </Button>
                <Typography variant='h5' textTransform='capitalize'>
                    {target}
                </Typography>
            </Stack><Stack direction='row' gap='24px' alignItems='center'>
                <Button sx={{background:"#fff2db" , borderRadius:"50%" , width:"100px" , height:'100px'}}>
                    <img src={equipmentImg} alt='bodyPart'  style={{width:'50px' , height:'50px'}}></img>
                </Button>
                <Typography variant='h5' textTransform='capitalize'>
                    {equipment}
                </Typography>
            </Stack>
        </Stack>
    </Stack>
  )
}

export default Detail ;