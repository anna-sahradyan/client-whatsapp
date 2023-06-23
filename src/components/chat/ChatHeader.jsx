import React, { useContext } from 'react';
import { Box } from "@mui/material";
import { MoreVert, Search } from "@mui/icons-material";
import { ChatHeaderComponent, ChatImage, ChatRight, Name, Status } from "./chat.styled";
import { AuthContext } from "../../context/AuthProvider";

const ChatHeader = ({ person }) => {
    const { activeUsers } = useContext(AuthContext);

    return (
        <ChatHeaderComponent>
            <ChatImage src={person.picture} alt="dp" />
            <Box>
                <Name>{person.name}</Name>
                <Status>{activeUsers?.find(user => user.sub === person.sub) ? "Online" : "Offline"}</Status>
            </Box>
            <ChatRight>
                <Search />
                <MoreVert />
            </ChatRight>
        </ChatHeaderComponent>
    );
};

export default ChatHeader;
