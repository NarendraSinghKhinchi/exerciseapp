import React from 'react' ;
import { useState , useEffect } from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import {ContextProvider} from '../components/Context';
import { fetchData } from '../utils/api';

function Home() {
  const [exercises , setExercises] = useState([]);
  const [loading , setLoading] = useState(true);
  useEffect(()=>{
    const fetchExercises = async()=>{
      const url = 'https://exercisedb.p.rapidapi.com/exercises' ;
      const fetchedData = await fetchData(url);
      setExercises(fetchedData.data);
      setLoading(false);
    }
    fetchExercises();
  },[])
  return (
    !loading &&
    <Box>
      <HeroBanner></HeroBanner>
      {/* <SearchExercises exercises={exercises} setExercises={setExercises}></SearchExercises>
      <Exercises exercises={exercises} setExercises={setExercises}></Exercises> */}
      <ContextProvider exercises={exercises} setExercises={setExercises} >
        <SearchExercises></SearchExercises>
        <Exercises></Exercises> 
      </ContextProvider>
    </Box>
  )
}

export default Home ;
// previously passed exercises and setExercises as props now using useContext hook

