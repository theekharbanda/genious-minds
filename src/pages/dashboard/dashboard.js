import React from "react";
import { Box, CssBaseline, Divider } from '@mui/material';
import { blue } from '@mui/material/colors';
import './dashboard.css'
import FeedPost from './FeedPost.js';


function dashboard() {
    return (
        <div className='dashboard'>
            <Box sx={{ flexGrow: 1, height: 80, postion: 'absolute' }} className='nav'>

            </Box>
            {/* // First left Side */}
            <Box className="rest">

                <Box className="Sidebar"
                    sx={{

                        backgroundColor: 'blue',
                        flex: 0.2,
                    }}>
                    <h2>Dashboard</h2>
                    <h2>Dashboard</h2>
                    <h2>Dashboard</h2>
                    <h2>Dashboard</h2>
                </Box>
                <Box className="Feed"
                    sx={{
                        backgroundColor: 'pink',
                        flex: 0.6,
                    }}>
                    <h2 style={{ textAlign: 'center' }}>Home</h2>
                    <Divider style={{ backgroundColor: "white" }} />
                    <FeedPost />

                </Box>
                <Box className="Widgets" sx={{

                    backgroundColor: 'yellow',
                    flex: 0.2
                }}>

                </Box>
            </Box>


        </div>

    );
}
export default dashboard;