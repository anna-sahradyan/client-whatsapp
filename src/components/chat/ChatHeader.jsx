import React from 'react';
import {Box} from "@mui/material";
import {MoreVert, Search} from "@mui/icons-material";
import {ChatHeaderComponent, ChatImage, ChatRight, Name, Status} from "./chat.styled";

const ChatHeader = ({person}) => {
    return (

        <>
            <ChatHeaderComponent>
                <ChatImage src={person.picture} alt="dp"/>
                <Box>
                    <Name>{person.name}</Name>
                    <Status>Offline</Status>
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
