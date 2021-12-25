import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { makeStyles } from '@mui/styles';
import Toolbar from '@mui/material/Toolbar';
import { NavLink } from 'react-router-dom';


const useStyle = makeStyles({
    header: {
        background: 'linear-gradient(45deg, #000000 30%, #FF8E53 50%)',
    },
    tabs: {
        color: '#FFFFFF',
        marginRight: 20,
        textDecoration: 'none',
        fontSize: 20
    }
})

const NavBar = () => {
    const classes = useStyle();
    return (
        <AppBar position="static" className={classes.header}>
            <Toolbar>
                <NavLink className={classes.tabs} to="./" exact>VIRTUAL LIBRARY</NavLink>
                <NavLink className={classes.tabs} to="all" exact>NOTICE</NavLink>
                <NavLink className={classes.tabs} to="add" exact>ADD MSG</NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;