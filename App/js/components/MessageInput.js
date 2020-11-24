import React, {useState} from 'react';
import {database} from "../../firebase";
import {useStateValue} from "../StateProvider";
import firebase from "firebase";

const MessageInput = ({name, channelId}) => {

    const [userInput, setUserInput] = useState(null);
    const [{user}] = useStateValue();

    const sendMessage = (e) => {
        e.preventDefault();
        if (channelId) {
            database.collection("channels").doc(channelId).collection("messages").add({
                message: userInput,
                timestamp: new Date(),
                user: user.displayName,
            })
        }
        setUserInput("");
    }

    return (
        <div className="chat__input">
            <form>
                <input value={userInput || ""} onChange={(e) => (setUserInput(e.target.value))}
                       placeholder={`Message #${name?.toLowerCase()}`}/>
                <button type="submit" onClick={sendMessage}>Send message</button>
            </form>
        </div>
    );
};

export default MessageInput;
