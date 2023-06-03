import React from 'react';
import Messenger from "./components/messenger/Messenger";
import {Route, Routes} from "react-router-dom";
import Chat from "./components/chat/Chat";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <>
            <ToastContainer/>
            <Routes>
                <Route path={"/"} element={<Messenger/>}/>
                <Route path={"/chat"} element={<Chat/>}/>

            </Routes>

        </>
    );
};

export default App;
