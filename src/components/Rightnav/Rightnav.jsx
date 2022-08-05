import {
    AvatarGroup,
    Avatar,
    ImageList,
    ImageListItem,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    Box,
    Container
} from '@mui/material'
const Rightnav = () => {
    const items=[1,2,3,4,5]
    return ( 
        <div className="Rightnav" sx={{marginTop:'1vw'}} >
            <Box>
                <Box position='fixed'>
                    <Container>
            <AvatarGroup max={4}>
                <Avatar src='https://material-ui.com/static/images/avatar/1.jpg' alt='random' />
                <Avatar src='https://material-ui.com/static/images/avatar/2.jpg' alt='random' />
                <Avatar src='https://material-ui.com/static/images/avatar/3.jpg' alt='random' />
                <Avatar src='https://material-ui.com/static/images/avatar/4.jpg' alt='random' />
                <Avatar src='https://material-ui.com/static/images/avatar/5.jpg' alt='random' />
            </AvatarGroup>
            {/*end of Avatar*/}
            <ImageList cols={3} rowHeight='100'>
                <ImageListItem>
                    <img src="https:/material-ui.com/static/images/image-list/breakfast.jpg" alt="random" />
                </ImageListItem>
                <ImageListItem>
                    <img src="https:/material-ui.com/static/images/image-list/camera.jpg" alt="random" />
                </ImageListItem>
                <ImageListItem>
                    <img src="https:/material-ui.com/static/images/image-list/breakfast.jpg" alt="random" />
                </ImageListItem>
                <ImageListItem>
                <img src="https:/material-ui.com/static/images/image-list/breakfast.jpg" alt="random" />
                </ImageListItem>
                <ImageListItem>
                    <img src="https:/material-ui.com/static/images/image-list/breakfast.jpg" alt="random" />
                </ImageListItem>
                <ImageListItem>
                    <img src="https:/material-ui.com/static/images/image-list/breakfast.jpg" alt="random" />
                </ImageListItem>
            </ImageList>
            {/*end of image list*/}
            <List>
                {items.map((item)=>{
                    return(
                     <ListItem>
                     <ListItemButton>
                          <ListItemAvatar>
                             <Avatar  alt="u" src="https://material-ui.com/static/images/avatar/4.jpg"/>
                          </ListItemAvatar>
                         <ListItemText primary="lorem
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde minima dolo "/>
                     </ListItemButton>
                 </ListItem>
                    )
                })}
               
            </List>
            </Container>
            </Box>
            </Box>
        </div>
     );
}
 
export default Rightnav;