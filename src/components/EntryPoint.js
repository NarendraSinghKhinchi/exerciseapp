import React,{useContext}from 'react'
import { Button } from '@mui/material'
import { AuthContext } from './AuthContext';
import UserProfile from './UserProfile'

function EntryPoint(){
  const {user,logIn, logOut} = useContext(AuthContext) ;
  const handleLogin = ()=>{
    logIn();
  }
  const handleLogOut =()=>{
    logOut();
  }
  return (
    
    user ?
        // <Button variant="contained"
        //     color="error"
        //     sx={{backgroundColor:"#FF2625"}}
        //     onClick={handleLogOut}
        // >Log out</Button>
        <UserProfile></UserProfile>
    :
    <Button variant="contained"
        color="error"
        sx={{backgroundColor:"#FF2625"}}
        onClick={handleLogin}
    >Log in</Button>
    
  )
}

export default EntryPoint