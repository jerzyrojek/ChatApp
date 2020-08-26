import React from "react";
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import {Typography} from "@material-ui/core";

const Welcome = () => {
    return (
        <div style={{flex:"1",width:"100%",display:"flex",justifyContent:"center", alignItems:"center"}}>
            <div style={{display:"flex", alignItems:"center", color:"#1a237e"}}>
                <Typography variant="h2">
                    Welcome! Please choose or create a channel
                </Typography>
                <EmojiEmotionsIcon style={{fontSize:"3.5rem"}}/>
            </div>
        </div>
    )
}



export default Welcome;