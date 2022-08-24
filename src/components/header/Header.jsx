import React from 'react'
import Grid from '@mui/material/Grid'
import { Divider } from '@mui/material';
import { Link } from "react-scroll";
import { Link as A } from "react-router-dom"
const Header = () => {
    return (
        <div className='NaviBar' style={{ color: "white" }}>
            <Grid container spacing={2} >
                <Grid item xs={4} >
                    {/* <Item>xs=8</Item> */}
                    <h style={{ cursor: "pointer" }}>Speak your heart out !</h>
                </Grid>
                <Grid item xs={1}>
                    <A to="/"> <h style={{ cursor: "pointer" }}>Home</h></A>{/* <Item>xs=4</Item> */}
                </Grid>
                <Grid item xs={1}>
                    <h style={{ cursor: "pointer" }}><Link
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
                    <h style={{ display: "flex", justifyContent: "flex-end", cursor: "pointer" }}>Contact Us</h>{/* <Item>xs=4</Item> */}
                </Grid>
            </Grid>
            <br></br>
            <Divider style={{ backgroundColor: "white" }} />
        </div>
    )
}

export default Header