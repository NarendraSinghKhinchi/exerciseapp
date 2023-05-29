import React,{useState , useEffect} from 'react'
import { Box } from '@mui/material'
import {useParams} from 'react-router-dom'
import { fetchData , fetchVideos } from '../utils/api'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'
function ExerciseDetail() {
  const [exerciseDetail , setExerciseDetail] = useState("");
  const [exerciseVideos , setExerciseVideos] = useState("");
  const [targetMuscleExercises , setTargetMuscleExercises] = useState("");
  const [equipmentExercises , setEquipmentExercises] = useState("");
  const {id} = useParams();
  
  useEffect(()=>{
    const fetchExerciseData = async()=>{
      const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}` ;
      const fetchedData = await fetchData(url);
      setExerciseDetail(fetchedData.data);
      // console.log(fetchedData.data);
    }
    fetchExerciseData();
  }, [id]);
  // the above useffect runs when your comes to the page ones the data is received from api then the below useEffect will run
  // the below useeffect will change the states that will cause re-render but id will not change so above useeffect won't run again
  // so bellow will also not run again it means above runs total 1 time and below runs total 2 times ;
  useEffect(()=>{
    
    if(!exerciseDetail)return ;
    const fetchExerciseVideos = async()=>{
      const fetchedData = await fetchVideos(`${exerciseDetail.name} exercise`);
      setExerciseVideos(fetchedData.data.contents);
    }
    fetchExerciseVideos();
    
    const fetchtargetMuscleExercises = async()=>{
      const url  = `https://exercisedb.p.rapidapi.com/exercises/target/${exerciseDetail.target}` ;
      const fetchedData = await fetchData(url);
      setTargetMuscleExercises(fetchedData.data);
    }
    fetchtargetMuscleExercises();
    const fetchEquipmentExercises = async()=>{
      const url = `https://exercisedb.p.rapidapi.com/exercises/equipment/${exerciseDetail.equipment}` ;
      const fetchedData = await fetchData(url);
      setEquipmentExercises(fetchedData.data);
    }
    fetchEquipmentExercises();
  },[exerciseDetail]);
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}></Detail>
      <ExerciseVideos exerciseVideos={exerciseVideos} exerciseDetail={exerciseDetail}></ExerciseVideos>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}></SimilarExercises>
    </Box>
  )
}

export default ExerciseDetail