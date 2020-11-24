import React, {useState} from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Welcome from "./components/Welcome";
import LoginPage from "./components/LoginPage";
import {useStateValue} from "./StateProvider";


const App = () => {
    const [{user}, dispatch] = useStateValue();

    return (
        <div className="app">
            <BrowserRouter basename="/ChatApp">
                {!user ? (
                    <LoginPage/>
                ) : (
                    <>
                        <Header/>
                        <div className="app__body">
                            <Sidebar/>
                            <Switch>
                                <Route exact path="/" component={Welcome}/>
                                <Route path="/:channelId">
                                    <Chat/>
                                </Route>
                            </Switch>
                        </div>

                    </>
                )}
            </BrowserRouter>
        </div>
    )
}

export default App;