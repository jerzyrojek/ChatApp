import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChatIcon from "@material-ui/icons/Chat"
import {AccountCircle} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#1a237e",
        borderBottom:"1px solid #2C3034",
    },
    title: {
        flexGrow: 1,
    },
}));

const Header = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar className={classes.root} position="static">
                <Toolbar>
                    <ChatIcon style={{marginRight:"1rem"}}/>
                    <Typography variant="h6" className={classes.title}>
                        ChatApp
                    </Typography>
                    <IconButton color="inherit">
                        <AccountCircle/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}



export default Header;