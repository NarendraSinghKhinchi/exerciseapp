import React from 'react'
import {Link} from 'react-router-dom'
import { Button, Stack, Typography} from '@mui/material'
function ExerciseCard({exercise}) {
  
  return (
    <Link to={`/exercise/${exercise.id}`} className='exercise-card'>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy"></img>
      <Stack
        direction='row'
      >
        <Button
          sx={{
            ml:'21px',
            color:'#fff',
            background:"#ffa9a9",
            fontSize:'14px',
            borderRadius:'20px',
            textTransform:'capitalize'
          }}
        >{exercise.bodyPart}</Button>
        <Button
          sx={{
            ml:'21px',
            background:"#fcc757",
            color:'#fff',
            fontSize:'14px',
            borderRadius:'20px',
            textTransform:'capitalize'
          }}
        >{exercise.target}</Button>
      </Stack>
      <Typography
        paragraph
        sx={{
          ml:'21px',
          color:"#000",
          fontWeight:"bold",
          mt:"11px",
          fontSize:"22px",
          textTransform:"capitalize",
          whiteSpace:"pre-wrap"
        }}
      >{exercise.name}</Typography>
    </Link>
  )
}
// The loading attribute specifies whether a browser should load an image immediately or to defer loading
//  of off-screen images until for example the user scrolls near them.
export default ExerciseCard