import React from 'react'
import { useState , useEffect } from 'react'
import { Box, Button, Typography, TextField, Stack } from '@mui/material' 
import { fetchData } from '../utils/api';
import HorizontalScrollBar from './HorizontalScrollBar';

function SearchExercises(){
  
  const[search , setsearch] = useState([]);
  const[bodyPartsList , setBodyPartsList] = useState([]);
  
  // this fetches the body parts for which we have exercises available as soon as the component loads
  useEffect(()=>{
    const fetchBodyParts = async()=>{
      const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList' ;
      const fetchedData = await fetchData(url);
      const bodyParts = ['All' , ...fetchedData.data];
      setBodyPartsList(bodyParts);
    }
    fetchBodyParts();
  } , []);


  const handleSearch = async()=>{
    if(search){
      // const exercisesData = await fetchData();
      console.log("search button doesn't work");
    }
  }

  return (
      <Stack
        alignItems='center'
        justifyContent='center'
        p = '20px'
        mt='35px'
      >
        <Typography fontWeight='700' mb ='50px' textAlign='center' sx={{fontSize:{lg:'44px' , xs:"30px"}}}>Awesome Exercises You <br /> Should Know</Typography>
        <Box position='relative' mb='60px'>
            <TextField 
              height='76px'
              value={search}
              onChange={(e)=>{setsearch(e.target.value.toLowerCase())}}
              placeholder='Search Exercises'
              type='text'
              sx={{
                input:{fontWeight:'700', 
                  border:'none',
                  borderRadius:'14px'
                },
                width:{lg:'800px', xs:'350px'},
                backgroundColor:'#fff',
                borderRadius:"40px"
                }}
            ></TextField>
            <Button className='search-btn'
              sx={{
                bgcolor:"#FF2625",
                color:"#fff",
                textTransform:'none',
                width:{lg:'175px' , xs:"80px"},
                fontSize:{lg:'20px' , xs:"14px"},
                position:'absolute',
                height:'56px',
                right:"0"
              }}
              onClick={handleSearch}
            >
              Search
            </Button>
        </Box>
        <Box sx={{position:'relative' , width:"100%" , padding:"20px"}}>
          <HorizontalScrollBar  listOfBodyParts={bodyPartsList}></HorizontalScrollBar>
        </Box>
      </Stack>
  )
}

export default SearchExercises