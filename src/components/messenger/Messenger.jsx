import React, {useContext} from 'react';
import Login from "../auth/Login";
import {Header, Component} from "./messenjer.styled";
import {Toolbar} from "@mui/material";
import {AuthContext} from "../../context/AuthProvider";
import Chat from "../chat/Chat";


const Messenger = () => {
    const {auth} = useContext(AuthContext);
    return (
        <>
            <Component>
                {auth ? <Chat/>:
                    <> <Header>
                        <Toolbar>

                        </Toolbar>
                    </Header>
                        <Login/>

                    </>

                }
            </Component>
        </>
    );
};

export default Messenger;
