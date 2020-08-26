import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import CloseIcon from '@material-ui/icons/Close';
import {database} from "../../firebase";
import Message from "./Message";

const Chat = () => {
    const {channelId} = useParams();
    const [channelInformation, setChannelInformation] = useState(null);
    const [messages, setMessages] = useState(null);

    useEffect(() => {
        if (channelId) {
            database.collection("channels").doc(channelId)
                .onSnapshot((snapshot) =>
                    setChannelInformation(snapshot.data())
                );
        }

        database.collection("channels").doc(channelId).collection("messages")
            .orderBy("timestamp", "asc")
            .onSnapshot(snapshot => {
                setMessages(snapshot.docs.map(doc => doc.data()))
            });

    }, [channelId]);

    console.log(channelInformation);
    console.log(messages);

    return (
        <div className="chat">
            <div className="chat__header">
                <h2>{channelInformation?.name}</h2>
                <CloseIcon style={{cursor: "pointer"}}/>
            </div>
            <div className="chat__messages">
                {messages && messages.map(({message, timestamp, user},index) => {
                    return <Message key={index} message={message} timestamp={timestamp} user={user}/>
                })}
            </div>
        </div>
    )
}

export default Chat;