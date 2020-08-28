import React, {useEffect, useState} from "react";
import {Typography} from "@material-ui/core";
import SidebarItem from "./SidebarItem";
import AddIcon from '@material-ui/icons/Add';
import {database} from "../../firebase";
import {useStateValue} from "../StateProvider";


const Sidebar = () => {
    const [{user}] = useStateValue();
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
                    {user?.displayName}
                </Typography>
            </div>
            <hr/>
            <div className="sidebar__options">
                <div className="sidebar__channel-title">
                    <Typography variant="h5">Channels</Typography>
                    <div className="sidebar__channel-add" onClick={addChannel}>
                        <p>Add Channel</p>
                        <AddIcon  style={{color:"white"}}/>

                    </div>
                </div>
                <hr/>
                {channels.map(channel => (
                    <SidebarItem title={channel.name} id={channel.id} key={channel.id}/>
                ))}
            </div>
        </div>
    )
}


export default Sidebar;