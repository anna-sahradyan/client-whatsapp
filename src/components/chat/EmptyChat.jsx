import React from 'react';
import { Divider} from "@mui/material";
import {emptyChatImage} from "../constants/data";
import {DividerStyle, EmptyComponent, EmptyContainer, Image, SubTitle, Title} from "./chat.styled";

const EmptyChat = () => {
    return (
        <>

    <EmptyComponent>
        <EmptyContainer>
        <Image src={emptyChatImage} alt="empty"/>
        <Title>WhatsApp Web</Title>
        <SubTitle>Now send and receive messages without your phone online</SubTitle>
        <SubTitle>Use WhatsApp or Web Desktop, and other devices</SubTitle>
            <DividerStyle/>
        </EmptyContainer>
    </EmptyComponent>

        </>
    );
};

export default EmptyChat;
