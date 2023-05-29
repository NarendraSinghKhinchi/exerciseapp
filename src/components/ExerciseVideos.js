import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
function ExerciseVideos({exerciseVideos , exerciseDetail}) {
   
  if(exerciseVideos.length === 0 || !exerciseDetail)return <></>;
 
  return (
    <Box
        sx={{
            marginTop:{lg:'50px',xs:'10px'},
            p:'20px'
        }}
    >
        <Typography variant='h3' mb='33px'>
            Watch <span style={{color:'#ff2625' , textTransform:'capitalize'}}>{exerciseDetail.name}</span> exercise videos
        </Typography>
        <Stack  justifyContent='flex-start'
            flexWrap='wrap'
            alignItems='center'
            flexDirection={{lg:'row'}}
            gap={{lg:'110px' , xs:"0"}}
            // sx={{
            //     flexDirection:{lg:'row'},
            //     gap:{lg:'110px' , xs:"0"}
            // }}
        >
            {
                exerciseVideos.slice(0,3).map((item , index)=>(
                    <a key={index}
                       className='exercise-video'
                       href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                       target='_blank'
                       rel='noreferrer'
                    >
                        <img src={item.video.thumbnails[0].url} alt={item.video.title}></img>
                        <Typography variant='h5' color="#000" fontWeight="600">
                            {item.video.channelName}
                        </Typography>
                        <Typography variant='h5' color="#000">
                            {item.video.title}
                        </Typography>
                    </a>
                ))
            }
        </Stack>
    </Box>
  )
}

export default ExerciseVideos