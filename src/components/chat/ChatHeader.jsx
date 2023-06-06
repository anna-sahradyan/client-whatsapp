import React from 'react';
import {Box} from "@mui/material";
import {MoreVert, Search} from "@mui/icons-material";
import {ChatHeaderComponent, ChatImage, ChatRight, Name, Status} from "./chat.styled";

const ChatHeader = () => {
    return (

        <>
            <ChatHeaderComponent>
                <ChatImage src="/img/icon3.png" alt="dp"/>
                <Box>
                    <Name>Name</Name>
                    <Status>Online Status</Status>
                </Box>
                <ChatRight>
                    <Search/>
                    <MoreVert/>
                </ChatRight>
            </ChatHeaderComponent>
        </>
    );
};

export default ChatHeader;
