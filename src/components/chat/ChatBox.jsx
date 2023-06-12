import React, {useContext, useEffect, useState} from 'react';
import {Box} from "@mui/material";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import {AuthContext} from "../../context/AuthProvider";
import {getConversation} from "../../service/api";

const ChatBox = () => {
    const {person, auth} = useContext(AuthContext);
    const [conversation, setConversation] = useState({});

    useEffect(() => {
        const getConversationDetails = async () => {
            let data = await getConversation({senderId: auth?.sub, receiverId: person?.sub});
            setConversation(data);
console.log(conversation)
        }
        getConversationDetails();
    }, [person?.sub]);

    return (
        <>
            <Box style={{height: '75%'}}>
                <ChatHeader person={person}/>
                <Messages person={person} conversation={conversation}/>
            </Box>
        </>
    );
};

export default ChatBox;
