import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const App = () => {
    return (
        <>
        <Header/>
        <div className="app__body">
        <Sidebar/>
        </div>
        </>
        //Chat window - Router
    )
}

export default App;