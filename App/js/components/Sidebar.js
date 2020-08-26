import React, {useEffect, useState} from "react";
import {Typography} from "@material-ui/core";
import SidebarItem from "./SidebarItem";
import AddIcon from '@material-ui/icons/Add';
import {database} from "../../firebase";


const Sidebar = () => {
    const [channels, setChannels] = useState([]);

    const addChannel = () => {
        const channelName = prompt("Enter the channel name");

        if(channelName) {
            database.collection("channels").add({
                name:channelName,
            })
        }
    }

    useEffect(() => {
        database.collection("channels").onSnapshot(snapshot => (
            setChannels(snapshot.docs.map(doc => ({
                id: doc.id,
                name: doc.data().name
            })))
        ))
    }, [])

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
                <AddIcon onClick={addChannel} style={{cursor: "pointer"}}/>
                {channels.map(channel => (
                    <SidebarItem title={channel.name} id={channel.id} key={channel.id}/>
                ))}
            </div>
        </div>
    )
}


export default Sidebar;