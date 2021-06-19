import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const useStyles = makeStyles((theme) => ({
    logo: {
        flexGrow: 1
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static">
                <Toolbar>

                    <Typography variant="h6" className={classes.logo}>
                        Logo
                    </Typography>

                    <Hidden xsDown>
                        <DesktopNav />
                    </Hidden>

                    <Hidden smUp>
                        <MobileNav />
                    </Hidden>

                </Toolbar>
            </AppBar>
        </div>
    );
}