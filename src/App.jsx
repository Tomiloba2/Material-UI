import Navbar from './components/Navbar/Navbar';
import Feeds from './components/Feeds/Feeds';
import Rightnav from './components/Rightnav/Rightnav'
import Sidenav from './components/Sidenav/Sidenav';
import Other from './components/Other/Other';
import {
    Grid,
    CssBaseline,
    Container,
} from '@mui/material';
const App = () => {
    return (
        <div className="App">
            <CssBaseline />
             <Navbar />
            <Grid container spacing={1}>
                <Grid item xs={2} sm={4} md={3} bgcolor='primary' 
                sx={{
                    display:{xs:'block',sm:'block'},
                    marginTop:{sm:'5vw',md:'4vw'},
                }}
                >
                    <Sidenav />
                </Grid>
                <Grid item sm={8} md={6} xs={10} sx={{marginTop:{xs:'10vw',sm:'6vw',md:'4vw'}}}>
                    <Container>
                    <Feeds/>
                    </Container>
                </Grid>
                <Grid item md={3} sx={{display:{xs:'none',sm:'none',md:'block'},marginTop:'5vw'}}><Rightnav /></Grid>
            </Grid>
          <Other />
         
        </div>
      );
}
 
export default App;