import React from 'react';
import {Box} from "@mui/material";
import {MessagesComponent, Wrapper} from "./chat.styled";
import Footer from "./Footer";

const Messages = () => {
    return (
        <>
         <Wrapper>
             <MessagesComponent>

             </MessagesComponent>
             <Footer/>
         </Wrapper>
        </>
    );
};

export default Messages;
