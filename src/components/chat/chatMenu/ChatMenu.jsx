import React from 'react';
import Header from "./Header";
import {Box} from "@mui/material";
import Search from "./Search";
import Conversations from "./Conversations";

const ChatMenu = () => {
    return (
        <>
            <Box>
                <Header/>
                <Search/>
                <Conversations/>
            </Box>


        </>
    );
};

export default ChatMenu;
