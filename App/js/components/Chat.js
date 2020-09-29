import React, {useEffect, useRef, useState} from "react";
import {useParams} from "react-router-dom";
import CloseIcon from '@material-ui/icons/Close';
import {database} from "../../firebase";
import Message from "./Message";
import MessageInput from "./MessageInput";
import {IconButton} from "@material-ui/core";
import {useHistory} from "react-router-dom";

const Chat = () => {
    const {channelId} = useParams();
    const [channelInformation, setChannelInformation] = useState(null);
    const [messages, setMessages] = useState(null);
    const history = useHistory();
    const messageRef = useRef();

    const handleClickReturn = () => {
        history.push("/");
    }

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

    useEffect(() => {
        messageRef.current.scrollIntoView({behavior:"smooth"});
    },[messages])

    return (
        <div className="chat">
            <div className="chat__header">
                <h2>{channelInformation?.name}</h2>
                <IconButton onClick={handleClickReturn}><CloseIcon/></IconButton>
            </div>
            <div className="chat__messages">
                {messages && messages.map(({message, timestamp, user}, index) => {
                    return <Message key={index} message={message} timestamp={timestamp} user={user}/>
                })}
                <div style={{opacity:"1"}} ref={messageRef}/>
            </div>
            <MessageInput name={channelInformation?.name} channelId={channelId}/>
        </div>
    )
}

export default Chat;