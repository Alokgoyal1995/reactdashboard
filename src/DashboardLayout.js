
import React from "react";

import {
    NavLink,
    Link,
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Nav from './components/Nav';
import NavBar from './components/NavBar';

const layoutwrapper = Component => {
    class layoutwrapper extends React.Component {
        render() {
            return (
                <div>
                    <NavBar />
                    <div className='wrapper'>
                        <Grid container spacing={12}>
                            <Nav />
                            <Grid item md={10} sm={9} xs={9}>
                                <Component {...this.props} />
                            </Grid>
                        </Grid>
                    </div>
                </div>
            )
        }
    }
    return layoutwrapper;
};
export default layoutwrapper;