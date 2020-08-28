import React from "react";

const Message = ({message, timestamp, user}) => {
    const date = new Date(timestamp?.toDate());
    return (
        <div className="message">
            <div className="message__info">
                <span className="message__info-date">{date.toDateString()}</span>
                <hr/>
                <h3>
                    {user} <span className="message__info-date">{date.toLocaleTimeString()}</span>
                </h3>
                <p>{message}</p>
            </div>
        </div>
    )
}


export default Message;