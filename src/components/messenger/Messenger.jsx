import React, {useContext} from 'react';
import Login from "../auth/Login";
import {Header, Component, LoginHeader} from "./messenjer.styled";
import {Toolbar} from "@mui/material";
import {AuthContext} from "../../context/AuthProvider";
import Chat from "../chat/Chat";


const Messenger = () => {
    const {auth} = useContext(AuthContext);
    return (
        <>
            <Component>
                {auth ?
                    <>
                        <Header>
                            <Toolbar>
                            </Toolbar>
                        </Header>
                        <Chat/>
                    </> :
                    <>
                        <LoginHeader>
                            <Toolbar>
                            </Toolbar>
                        </LoginHeader>
                        <Login/>
                    </>

                }
            </Component>
        </>
    );
};

export default Messenger;
