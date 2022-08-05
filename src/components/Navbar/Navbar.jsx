import { 
    PhotoCamera,
    SearchOutlined,
    Mail,
    NotificationImportant,
 } from "@mui/icons-material";
import {
     AppBar,
     Typography,
     Avatar,
     Badge,
     Menu,
     MenuItem,
     Box,
     InputBase
 } from "@mui/material";
import { useState } from "react";
import { 
    StyledToolbar,
    StyledInputBox,
 } from "./Styles";

const Navbar = () => {
    const [open,setOpen]=useState(false)
    return (  
        <div className="Navbar">
            <AppBar position="fixed">
                <StyledToolbar>
                    <PhotoCamera sx={{display:{xs:'block',sm:'none'}}} />
                    <Typography variant="h5" sx={{display:{xs:'none',sm:'block'}}}>Ram-mit</Typography>
                    <StyledInputBox display='flex' sx={{backgroundColor:'white'}} >
                    <SearchOutlined color="primary"/>
                    <InputBase placeholder="search...."/>
                    </StyledInputBox>
                    <Box display='flex'>
                        <Badge badgeContent={4} color='error'><Mail /></Badge>
                        <Badge badgeContent={3} color='error'><NotificationImportant /></Badge>
                        <Avatar src='https://source.unsplash.com/beach' alt='beach' onClick={(e)=>setOpen(true
                        )} />
                    </Box>
                </StyledToolbar>
                <Menu
                open={open}
                onClose={(e)=>setOpen(false)}
                anchorOrigin={{
                    vertical:'top',
                    horizontal:'right'
                }}
                transformOrigin={{
                    vertical:'top',
                    horizontal:'right'
                }}
                >
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>My Account</MenuItem>
                    <MenuItem>Log Out</MenuItem>
                </Menu>
            </AppBar>
        </div>
    );
}
 
export default Navbar;