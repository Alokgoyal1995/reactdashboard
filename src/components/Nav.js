import React from 'react';
import Grid from '@material-ui/core/Grid';
import { NavLink } from 'react-router-dom';



const Nav = () => {
    return (
        <Grid item md={2} sm={3} xs={3}>
            <div className="sidebar">
                {/* <Grid container> */}

                <ul className="navigation">
                    <li className="tt"><NavLink to="/home"> Home</NavLink></li>
                    <li className="tt"><NavLink to="/contact">Contact</NavLink></li>
                    <li className="tt"><NavLink to="/about">About</NavLink></li>
                    <li className="tt"><NavLink to="/test">Test</NavLink></li>

                </ul>
                {/* </Grid> */}

            </div>
        </Grid >
    )
}
export default Nav;