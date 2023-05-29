import React from 'react'
import { createContext } from 'react'

const ExerciseContext = createContext("");
function ContextProvider({children, exercises , setExercises}) {
    
    return (
        <ExerciseContext.Provider value={{exercises , setExercises}}>
            {children}
        </ExerciseContext.Provider>
    );
}

export {ExerciseContext , ContextProvider};