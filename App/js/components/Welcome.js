import React from "react";
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import {Typography} from "@material-ui/core";

const Welcome = () => {
    return (
        <div className="welcome">
            <div className="welcome__title">
                <Typography variant="h3">
                    Welcome! Please choose or create a channel<EmojiEmotionsIcon style={{fontSize: "3.5rem"}}/>
                </Typography>
            </div>
        </div>
    )
}


export default Welcome;