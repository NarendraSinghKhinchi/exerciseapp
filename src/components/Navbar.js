import React from 'react' ;
import { Link } from 'react-router-dom' ;
import {Stack} from '@mui/material';
import logo from '../assets/images/Logo.png';
// import EntryPoint from './EntryPoint';

function Navbar() {
  return (
    <Stack
        direction='row'
        justifyContent="none"
        sx={{gap:{sm:'122px', xs:'40px'} , mt:{sm:'32px' , xs:'20px'}}}
        px='20px'
    >
    {/* px means padding x axis for "above stack" */}
        <Link to="/">
            <img src={logo} className='logo' alt='logo' style={{width:'48px' , height:"48px" , margin:"0 20px"}}></img>
        </Link>
        <Stack 
            direction="row"
            gap="40px"
            fontSize="24px"
            alignItems="flex-end"
        >
            <Link to="/" style={{textDecoration:"none", color:"#3A1212" , borderBottom:"3px solid #FF2625"}}>Home</Link>
            <a href="#exercises" style={{textDecoration:'none' , color:"#3A1212"}}>Exercises</a>
            {/* <EntryPoint></EntryPoint> */}
        </Stack>
    </Stack>
  )
}

export default Navbar ;
// The Stack component manages layout of immediate children along the vertical or 
// horizontal axis with optional spacing and/or dividers between each child.


// Note: Use the NavLink or Link when you need links that are routing to pages that belong to your application. 
// For external links, a is preferrable. The anchor tag a : This is used for links outside your webpage.


// The NavLink is used when you want to highlight a link as active. So, on every routing to a page, the link is highlighted according to the activeClassName. 
// Link is for links that need no highlighting.
// a is for external links.
