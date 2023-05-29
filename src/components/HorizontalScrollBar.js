import React from 'react'
import { useContext , useEffect , useState } from 'react';
import { Stack , Box, Typography } from '@mui/material';
import bodypartpng from '../assets/icons/body-part.png' ;
import { fetchData } from '../utils/api';
import { ExerciseContext } from './Context';

const HorizontalScrollBar = ({listOfBodyParts}) => {

   const {setExercises} = useContext(ExerciseContext) ;
   const [selectedBodyPart , setSelectedBodyPart] = useState("All");
   //this hooks helps to remove and add the upper red color border u can see on the card
   //we can't use hooks conditionally in react it means u can't place line 11 after 14
   if(!listOfBodyParts)return <></> ;
    
    const handleBodyPartSearch = async (bodyPart)=>{
        // if bodyPart is "",null,undefined or any falsy value it will it equal to "all"
        
        const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}` ;
        if(!bodyPart ||  bodyPart === 'ALL'){
            url = 'https://exercisedb.p.rapidapi.com/exercises' ;
        }
        const fetchedExercises = await fetchData(url);
        setSelectedBodyPart(bodyPart);
        setExercises(fetchedExercises.data);
    }
    return (
      
      <div style={{
                overflow: 'auto',
                overflowY: 'hidden',
                whiteSpace: 'nowrap',
                height: '282px',
                paddingTop:"20px"
            }}
            className="hideScrollBar"
        >
        {listOfBodyParts.map((item) => (
            <Box 
                borderTop= {item===selectedBodyPart ? "4px solid #FF2625" : "4px solid #fff" }
                key={item.id || item}
                m="0 40px"
                textAlign='center'
                className="bodyPart-card"
                sx={{ 
                    display:"inline-block", 
                    background: '#fff',
                    borderBottomLeftRadius: '20px',
                    width: '270px', height: '270px',
                    cursor: 'pointer', 
                } }
                onClick={(e)=>handleBodyPartSearch(item)}
            >
                <img src={bodypartpng} alt="dumbbell" style={{ width: '40px', height: '40px' , marginTop:"100px"  }} />
                <Typography  fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
            </Box>
        ))}
    </div>
    )
}

export default HorizontalScrollBar ;

// make sure to revise postion, overflow, useRef
// The useRef Hook can also be used to keep track of previous state values.
// This is because we are able to persist useRef values between renders.
