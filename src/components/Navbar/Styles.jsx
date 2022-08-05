import { 
    Box,
    styled,
    Toolbar
     } from "@mui/material";


const StyledToolbar=styled(Toolbar)(({theme})=>({
    display:'flex',
    justifyContent:'space-between',
}))
//SyledInputBase;
const StyledInputBox=styled(Box)(({theme})=>({
    backgroundColor:'white',
    width:'40vw',
    borderRadius:theme.shape.borderRadius,
    opacity:'0.6',
    backdropFilter:'blur(3px)'
}))


export {StyledToolbar,StyledInputBox}