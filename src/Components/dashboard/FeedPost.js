
import {Avatar, Box} from '@mui/material';
import { flexbox } from '@mui/system';
import './FeedPost.css'

function FeedPost({name,username,avatar,story}){
    return(
        <div>
            <Box  className="Post"sx={{ height : 150, backgroundColor:'white',margin:1,display:'flex'}} onClick={{}}> 
                <Box sx={{flex : 0.1}}>
                    <Avatar style={{margin:'auto',marginTop:10}}>{avatar}</Avatar>
                </Box>
                <Box sx={{flex : 0.9,backgroundColor:'white',display:'flex',flexDirection:'column'}}>
                    <Box sx={{flex:0.2,display:'flex',
                    backgroundColor:'yellow'}}>
                        <h3>{name}</h3>
                        <h6 style={{marginLeft:10,color:'pink'}}> {username}</h6>
                    </Box>
                    <Box sx={{flex:0.8,backgroundColor:'pink'}}>
                        <h5 style={{marginTop:0}}>{story}</h5>
                    </Box>
                    
                </Box>
            </Box>
        </div>
    );
}

export default FeedPost;