import React from 'react';
import {useState,useEffect , useContext} from 'react' ;
import { Box, Typography , Stack , CircularProgress, Pagination } from '@mui/material';
import ExerciseCard from './ExerciseCard';
import {ExerciseContext} from './Context' ;

function Exercises() {
  const {exercises} = useContext(ExerciseContext);
  const [currentPage , setCurrentPage ] =  useState(1);
  const [entrysize , SetEntrysize] = useState(9);
  if(!exercises || exercises.length === 0)return <CircularProgress  /> ;
  let indexOfLastExercise = currentPage * entrysize ;
  let indexOfFirstExercise = indexOfLastExercise - entrysize ;

  const currentExercises = exercises.slice(indexOfFirstExercise , indexOfLastExercise);
  const paginate = (event , value)=>{
    window.scrollTo({top:1000 , behavior:"smooth"})
    setCurrentPage(value);
  }
  return (
    <Box id='exercises'
      mt="50px"
      p="20px"
    >
      <Typography variant='h3' 
        mb='46px'
      >
        Showing Results
      </Typography>
      <Stack  direction='row'
        justifyContent="center"
        flexWrap="wrap"
        sx={{gap:{lg:'110px' , xs:'50px'}
        }}  
      >
      {
        currentExercises.map((exercise , index) => (
          <ExerciseCard exercise={exercise} key={index}></ExerciseCard>
        ))
      }
      </Stack>
      <Stack mt="100px"
        alignItems="center"
      >
        {exercises.length > 9 &&
          (
            <Pagination color='standard'
              shape='rounded'
              defaultPage={1}
              count={Math.ceil(exercises.length / entrysize)}
              page={currentPage}
              onChange={paginate}
              size='large'
            ></Pagination>
          )
        }
      </Stack>
    </Box>
    
  )
}

export default Exercises