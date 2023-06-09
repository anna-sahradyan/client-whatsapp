import React, {useContext} from 'react';
import {Box} from "@mui/material";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import {AuthContext} from "../../context/AuthProvider";

const ChatBox = () => {
    const {person} = useContext(AuthContext);

    return (
        <>
            <Box style={{height: '75%'}}>
                <ChatHeader person={person}/>
                <Messages person={person}/>
            </Box>
        </>
    );
};

export default ChatBox;
