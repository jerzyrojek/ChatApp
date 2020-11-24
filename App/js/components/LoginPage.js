import React from 'react';
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {authorization, provider} from "../../firebase";
import {useStateValue} from "../StateProvider";
import {actionTypes} from "../reducer";
import logo from "../../assets/logo.png";

const LoginPage = () => {
    const [state, dispatch] = useStateValue();

    const logIn = () => {
        authorization.signInWithPopup(provider).then((response) => {
            dispatch({
                type:actionTypes.SET_USER,
                user: response.user,
            })
        }).catch((error) => {
            alert(error.message);
        });
    };

    return (
        <div className="login">
            <div className="login__container">
                <img alt= "logo" src={logo}/>
                <Typography variant="h3">Sign in to the ChatApp</Typography>
                <Button onClick={logIn}>Google sign in</Button>
            </div>
        </div>
    );
};

export default LoginPage;
