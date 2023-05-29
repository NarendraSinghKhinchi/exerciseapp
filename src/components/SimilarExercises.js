import { Box, Typography,Stack } from '@mui/material'
import React from 'react'
import ExerciseCard from './ExerciseCard'
function SimilarExercises({targetMuscleExercises ,equipmentExercises }) {
  if(!targetMuscleExercises || !equipmentExercises)return <></> ;
  targetMuscleExercises = targetMuscleExercises.slice(0, 10);
  equipmentExercises = equipmentExercises.slice(0,10);
  return (
    <Stack
      sx={{mt:{lg:'50px', xs:"10px"}}}
      gap = '50px'
        
    >
      <Box>
        <Typography  variant='h3' mb='33px'>Exercises that target the same muscle group</Typography>
        <div style={{
            padding:"20px",
            height: '480px',
            display:"flex",
            flexDirection:"row",
            gap:"40px",
            overflow: 'auto',
            overflowY: 'hidden',
            whiteSpace: 'nowrap',
          }}
          className="hideScrollBar"
        >
          {
            targetMuscleExercises.map((item)=>(
              <ExerciseCard exercise={item} key ={item.id}></ExerciseCard>
            ))
          }
        </div>
      </Box>
      <Box>
        <Typography  variant='h3' mb='33px'>Exercises that uses the same equipment</Typography>
        <div style={{
            padding:"20px",
            height: '480px',
            display:"flex",
            flexDirection:"row",
            overflow: 'auto',
            overflowY: 'hidden',
            whiteSpace: 'nowrap',
            gap:"40px"
          }}
          className="hideScrollBar"
        >
          {
            equipmentExercises.map((item)=>(
              <ExerciseCard exercise={item} key ={item.id}></ExerciseCard>
            ))
          }
        </div>
      </Box>
    </Stack>
  )
}

export default SimilarExercises