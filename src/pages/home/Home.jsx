import React from 'react';
import { Box, IconButton, Button, Paper } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import mainphoto from '../../assets/11.jpg';
const Home = () => {
    return (
        <>
            <div className='intro'>
                <Box
                    sx={{
                        width: 500,
                        height: 500,
                        border: 1,
                    }}
                >
                    <h2>Welcome to JumpingMinds!</h2>

                    <Button sx={{ borderRadius: '30px', background: 'transparent' }} variant="outlined" endIcon={<SendRoundedIcon />}>
                        See a Demo
                    </Button>
                    <Box style={{ marginTop: '25%' }}
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
                        border: 1,
                    }}
                >
                    <img style={{ height: '100%', width: '100%', objectFit: 'contain' }} src={mainphoto} />
                </Box>
            </div>
            <div className='about' style={{ display: 'flex', flexDirection: 'column' }} id="about" >
                <div style={{ margin: '10%' }}>
                    <h1 style={{ color: "white" }}>About Us</h1>
                    <p style={{ color: 'white' }}>I am undergraduate electronics engineer at Institute of Engineering and Technology.Love to code on different projects in networking domain.
                        My projects on Web3.0 and Web2.0 can be found on my github.
                        My articles on new startups and technologies can be found on my medium.</p>
                    <div style={{ backgroundColor: 'white' }}>
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
        </>
    )
}

export default Home