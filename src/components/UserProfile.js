
import React,{useContext,useState} from 'react'
import { Avatar , Tooltip,IconButton,Button,Box,Menu,MenuItem, Divider,Typography } from '@mui/material'
import { AuthContext } from './AuthContext';
import { Logout } from '@mui/icons-material';
function UserProfile() {
    const {user,logOut} = useContext(AuthContext);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogOut = ()=>{
      logOut();
    }
    return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title={user.displayName}>
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{backgroundColor:"#FF2625",fontSize:"26px"}} 
                src={user ? user.photoURL:"#"}
            >N</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar sizes='large' sx={{backgroundColor:"#FF2625",fontSize:"26px",height: '70px', width: '70px'}} 
            src={user ? user.photoURL:"#"}
          >N</Avatar>
        </MenuItem>
        <MenuItem alignItems='center' justifyContent='center'>
          <Typography>{user.displayName}</Typography>
        </MenuItem>
        <MenuItem>
          <Typography>{user.email}</Typography>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <Button variant="contained"
            color="error"
            sx={{backgroundColor:"#FF2625"}}
            onClick={handleLogOut}
          >Log Out</Button>
        </MenuItem>
      </Menu>
    </>
  )
}

export default UserProfile

// The ::before selector inserts something before the content of each selected element(s).
// Use the content property to specify the content to insert.
// Use the ::after selector to insert something after the content.