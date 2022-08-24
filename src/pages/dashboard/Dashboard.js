
import{Box, CssBaseline,Divider} from '@mui/material';
import { blue } from '@mui/material/colors';
import './dashboard.css'
import FeedPost from './FeedPost.js';


function Dashboard(){
    return(
        <div className='dashboard' >
            {/* <Box className='nav'>
                <h2>hooooooooooooooooooo</h2>
            </Box> */}
        {/* // First left Side */}
        <Box className="rest">

            <Box className="Sidebar" 
            sx={{
                
                backgroundColor: 'blue',
                flex:0.2,
                }}> 
                <h2>Dashboard</h2>
                <h2>Dashboard</h2>
                <h2>Dashboard</h2>
                <h2>Dashboard</h2>
            </Box>
            <Box className="Feed" 
            sx={{ 
                    backgroundColor:'pink',
                    flex:0.6,
                    
            }}>
                <h2 style={{textAlign:'center'}}>Home</h2>

                <Divider style = {{backgroundColor: "white"}}/>
                <FeedPost name={"Naman Kharbanda"} username={"@thee_kharbanda"} avatar={"N"} story={"hey yaa"} />
                <FeedPost name={"Naman Kharbanda"} username={"@thee_kharbanda"} avatar={"N"} story={"hey yaa"} />
                <FeedPost name={"Naman Kharbanda"} username={"@thee_kharbanda"} avatar={"N"} story={"hey yaa"} />
                <FeedPost name={"Naman Kharbanda"} username={"@thee_kharbanda"} avatar={"N"} story={"hey yaa"} />
                <FeedPost name={"Naman Kharbanda"} username={"@thee_kharbanda"} avatar={"N"} story={"hey yaa"} />
                <FeedPost name={"Naman Kharbanda"} username={"@thee_kharbanda"} avatar={"N"} story={"hey yaa"} />
               
            </Box>
            <Box className="Widgets" sx={{
                
                backgroundColor:'yellow',
                flex:0.2
            }}>
                <Box sx={{}}>
                    <h2 style={{textAlign:'center'}}>Chats</h2>
                </Box>
            </Box>
        </Box>
            
    
        </div>
        
    );
}
export default Dashboard;