import React from "react";

const Message = ({message, timestamp, user}) => {
    return (
        <div className="message">
            <div className="message__info">
                <h3>
                    {user} {new Date(timestamp?.toDate()).toLocaleTimeString()}
                </h3>
                <p>{message}</p>
            </div>
        </div>
    )
}


export default Message;