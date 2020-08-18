import React from "react";
import {Typography} from "@material-ui/core";
import SidebarItem from "./SidebarItem";
import AddIcon from '@material-ui/icons/Add';


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Typography>
                    Jerzy Rojek
                </Typography>
            </div>
            <hr/>
            <div className="sidebar__options">
                <Typography>Channels</Typography>
                <AddIcon style={{cursor:"pointer"}}/>
                <SidebarItem title="Sample"/>
            </div>
        </div>
    )
}


export default Sidebar;