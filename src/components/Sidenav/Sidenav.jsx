import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Switch
} from '@mui/material'
import {
    Home,
    Bookmark,StoreMallDirectory,Person,TabletMac,PlayCircleOutline,Settings,ExitToApp,ListAltOutlined, ModeNight
} from '@mui/icons-material'
import {
    StyledListBox
} from "./Styles"
const Sidenav = () => {
    return ( 
        <div className="sidenav" style={{
            backgroundColor:"blue"
        }}>
            <StyledListBox >
                <Box position='fixed'>
            <List>
                 {/*list item*/}
                 <ListItem>
                    <ListItemButton component='a' href='#'>
                        <ListItemIcon><Home /></ListItemIcon>
                        <ListItemText primary="Home" sx={{display:{xs:'none',sm:"block"}}}/>
                    </ListItemButton>
                </ListItem>
                 {/*list item*/}
                 <ListItem>
                    <ListItemButton component='a' href='#'>
                        <ListItemIcon><ListAltOutlined /></ListItemIcon>
                        <ListItemText primary="Lists" sx={{display:{xs:'none',sm:"block"}}}/>
                    </ListItemButton>
                </ListItem>
                {/*list item*/}
                <ListItem>
                    <ListItemButton component='a' href='#'>
                        <ListItemIcon><Bookmark /></ListItemIcon>
                        <ListItemText primary="Collection"  sx={{display:{xs:'none',sm:"block"}}}/>
                    </ListItemButton>
                </ListItem>
                 {/*list item*/}
                 <ListItem>
                    <ListItemButton component='a' href='#'>
                        <ListItemIcon><StoreMallDirectory /></ListItemIcon>
                        <ListItemText primary="Market"  sx={{display:{xs:'none',sm:"block"}}}/>
                    </ListItemButton>
                </ListItem>
                 {/*list item*/}
                 <ListItem>
                    <ListItemButton component='a' href='#'>
                        <ListItemIcon><Person /></ListItemIcon>
                        <ListItemText primary="Friends" sx={{display:{xs:'none',sm:"block"}}}/>
                    </ListItemButton>
                </ListItem>
                 {/*list item*/}
                 <ListItem>
                    <ListItemButton component='a' href='#'>
                        <ListItemIcon><TabletMac /></ListItemIcon>
                        <ListItemText primary="Apps" sx={{display:{xs:'none',sm:"block"}}}/>
                    </ListItemButton>
                </ListItem>
                 {/*list item*/}
                 <ListItem>
                    <ListItemButton component='a' href='#'>
                        <ListItemIcon><PlayCircleOutline /></ListItemIcon>
                        <ListItemText primary="Videos" sx={{display:{xs:'none',sm:"block"}}}/>
                    </ListItemButton>
                </ListItem>
                 {/*list item*/}
                 <ListItem>
                    <ListItemButton component='a' href='#'>
                        <ListItemIcon><Settings /></ListItemIcon>
                        <ListItemText primary="settings" sx={{display:{xs:'none',sm:"block"}}}/>
                    </ListItemButton>
                </ListItem>
                 {/*list item*/}
                 <ListItem>
                    <ListItemButton>
                        <ListItemIcon  sx={{display:{xs:'none',sm:"block"}}}><ModeNight /></ListItemIcon>
                        <Switch sx={{
                            marginRight:{xs:'1vw'}
                        }}/>
                    </ListItemButton>
                </ListItem>
                {/*listItem*/}
                 <ListItem>
                    <ListItemButton component='a' href='#'>
                        <ListItemIcon><ExitToApp /></ListItemIcon>
                        <ListItemText primary="LogOut"  sx={{display:{xs:'none',sm:"block"}}}/>
                    </ListItemButton>
                </ListItem>
            </List>
            </Box>
            </StyledListBox>
        </div>
     );
}
 
export default Sidenav;