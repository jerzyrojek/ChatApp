import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ChatIcon from "@material-ui/icons/Chat"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#1a237e",
        borderBottom: "1px solid #2C3034",
    },
    icon: {
        marginRight:"1rem",
    },
    toolBar: {
        minHeight: "64px",
    },
    title: {
        flexGrow: 1,
    },
}));

const Header = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar className={classes.root} position="absolute">
                <Toolbar className={classes.toolBar}>
                    <ChatIcon className={classes.icon}/>
                    <Typography variant="h6" className={classes.title}>
                        ChatApp
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar/>
        </div>
    )
}


export default Header;