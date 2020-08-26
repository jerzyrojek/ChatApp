import React from 'react';
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {authorization, provider} from "../../firebase";
import {useStateValue} from "../StateProvider";
import {actionTypes} from "../reducer";

const LoginPage = () => {
    const [state, dispatch] = useStateValue();

    const loginIn = () => {
        authorization.signInWithPopup(provider).then((response) => {
            dispatch({
                type:actionTypes.SET_USER,
                user: response.user,
            });
        }).catch((error) => {
            alert(error.message);
        });
    };

    return (
        <div className="login">
            <div className="login__container">
                <img alt= "logo" src= "../../assets/logo.png"/>
                <Typography variant="h3">Sign in to the ChatApp</Typography>
                <Button onClick={loginIn}>Google sign in</Button>
            </div>
        </div>
    );
};

export default LoginPage;
