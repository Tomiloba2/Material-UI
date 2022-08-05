import {
    Avatar,TextField,Typography,Modal,
    Fab,Tooltip,Box,Container,Button,ButtonGroup
} from '@mui/material';
 import{Add, Delete, PersonAdd, Send} from '@mui/icons-material'
 import { useState } from 'react';


const Other = () => {
    const [open,setOpen]=useState(false)
    const handleModal=(e)=>{
        setOpen(true)
    }
    return ( 
        <div className="Other">
             <Tooltip title="display Modal">
            <Fab sx={{position:"fixed",bottom:"0.5vw", right:"4vw"}} color='primary' aria-label='add feeds'
            onClick={handleModal}>
                <Add/>
            </Fab>
           </Tooltip>
          <Modal
          open={open}
          onClose={e=>setOpen(false)}
          sx={{ 
            display:'flex',
            justifyContent:'center',
            alignItems:"center"
        }}
          >
            <Box sx={{
                width:"50vw",
                height:'40vh',
                borderRadius:'20px',
                background:"white",
            }} >
                <Container>
                    <Box display='flex' mt={3}>
                <Avatar src="" alt='John doe' />
                <Typography ml={3} variant='h5'>Ram-mit</Typography>
                </Box>
                <Box sx={{
                    margin:"2vw"
                }}>
                    <TextField multiline fullWidth rows={3} placeholder="Post your feeds"/>
                </Box>
                <Box>
                    <ButtonGroup fullWidth>
                        <Button>
                            <Tooltip title="Add person">
                                <PersonAdd color='primary'/>
                            </Tooltip>
                        </Button>
                        <Button>
                        <Tooltip title="Send">
                            <Send color='success'/>
                            </Tooltip>
                        </Button>
                        <Button>
                        <Tooltip title="Delete">
                            <Delete color='error' />
                            </Tooltip>
                        </Button>
                    </ButtonGroup>
                </Box>
                </Container>
            </Box>
          </Modal>
        </div>
     );
}
 
export default Other;