import React from 'react';
import {Box} from "@mui/material";
import {ChatBoxHeader} from "./chat.styled";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";

const ChatBox = () => {
    return (
        <>
            <Box style={{height: '75%'}}>
              <ChatHeader/>
                <Messages/>
            </Box>
        </>
    );
};

export default ChatBox;
