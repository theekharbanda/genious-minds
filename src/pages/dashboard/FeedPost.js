import React from "react";
import {Avatar, Box} from '@mui/material';
import { flexbox } from '@mui/system';

function FeedPost(){
    return(
        <div>
            <Box sx={{ height : 150, backgroundColor:'white',margin:1,display:'flex'}} onClick={{}}> 
                <Box sx={{flex : 0.15,backgroundColor:'red'}}>
                    <Avatar style={{margin:'auto',marginTop:10}}/>
                </Box>
                <Box sx={{flex : 0.85,backgroundColor:'yellow'}}>

                </Box>
            </Box>
        </div>
    );
}

export default FeedPost;