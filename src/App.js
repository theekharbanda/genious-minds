import './App.css';
import Grid from '@mui/material/Grid'
import { color } from '@mui/system';
import { CardContent, Divider,Avatar } from '@mui/material';
// import Divider from '@mui/material/Divider';
import {Box,IconButton,Stack,Card,Button,Paper} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import DataObjectIcon from '@mui/icons-material/DataObject';
import DataObject from '@mui/icons-material/DataObject';
import CodeIcon from '@mui/icons-material/Code';
import CreateIcon from '@mui/icons-material/Create';
import GroupsIcon from '@mui/icons-material/Groups';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { Link, animateScroll as scroll } from "react-scroll";
import mainphoto from './assets/11.jpg';



function App() {

  return (
    <div className="App">
        <div className='NaviBar'style = {{color: "white"}}>
          <Grid container spacing={2} >
            <Grid item xs={4} >
              {/* <Item>xs=8</Item> */}
              <h  style={{cursor:"pointer"}}>Speak your heart out !</h>
            </Grid>
            <Grid item xs={1}>
              <h style={{cursor:"pointer"}}>Home</h>{/* <Item>xs=4</Item> */}
            </Grid>
            <Grid item xs={1}>
              <h style={{cursor:"pointer"}}><Link
                                                activeClass="active"
                                                to="about"
                                                spy={true}
                                                smooth={true}
                                                offset={-100}
                                                duration={500}>
                                                  About
                                              </Link></h>{/* <Item>xs=4</Item> */}
            </Grid>

            <Grid item xs={4}>
              <h  style = {{display:"flex",justifyContent:"flex-end",cursor:"pointer"}}>Contact Us</h>{/* <Item>xs=4</Item> */}
            </Grid>
          </Grid>
          <br></br>
          <Divider style = {{backgroundColor: "white"}}/>
        </div>
        <div className='intro'>
          <Box 
            sx={{
              width: 500,
              height: 500,
              border:1,
            }}
          >
            <h2>Welcome to JumpingMinds!</h2>

            <Button sx={{borderRadius:'30px',background:'transparent'}} variant="outlined" endIcon={<SendRoundedIcon />}>
              See a Demo
            </Button>
            <Box style={{marginTop:'25%'}}
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                
                '& > :not(style)': {
                  m: 1,
                  width: 200,
                  height: 128,
                },
              }}
            >
              <Paper><h2>Join a team + </h2></Paper>
              <Paper ><h2>Create a team +</h2></Paper>
            </Box>
          </Box>
          <Box
            sx={{
              width: 400,
              height: 400,
              border:1,
            }}
          >
          <img style={{height: '100%', width: '100%', objectFit: 'contain' }} src={mainphoto}/>
          </Box>
        </div>
        <div className='about' style={{display:'flex',flexDirection:'column'}} id="about" >
          <div style={{margin:'10%'}}>
            <h1 style={{color: "white"}}>About Us</h1>
            <p style={{color:'white'}}>I am undergraduate electronics engineer at Institute of Engineering and Technology.Love to code on different projects in networking domain.
  My projects on Web3.0 and Web2.0 can be found on my github.
  My articles on new startups and technologies can be found on my medium.</p>
              <div style={{backgroundColor:'white'}}>
                <p>Visit us at</p>
                <IconButton aria-label="LinkedIn">
                  <LinkedInIcon />
                </IconButton>
                <IconButton aria-label="Github">
                  <GitHubIcon />
                </IconButton>
                <IconButton aria-label="Medium">
                  <AutoStoriesIcon />
                </IconButton>
              </div>
          </div>
        </div>
    </div>
  );
}

export default App;
