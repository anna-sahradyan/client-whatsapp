import React, {useContext, useEffect, useState} from 'react';
import {MessagesComponent, MessagesContainer, Wrapper} from "./chat.styled";
import Footer from "./Footer";
import {AuthContext} from "../../context/AuthProvider";
import {getMessages, newMessage} from "../../service/api";
import Message from "./Message";



const Messages = ({person, conversation}) => {
    const {auth} = useContext(AuthContext);
    const [text, setText] = useState("");
    const [messages, setMessages] = useState([]);
    const sendText = async (e) => {
        const code = e.keyCode || e.which;
        if (!text.trim()) return
        if (code === 13) {
            let message = {
                senderId: auth?.sub,
                receiverId: person?.sub,
                conversationId: conversation?._id,
                type: "text",
                text: text

            }
            await newMessage(message);
            setText(" ")

        }

    }
    //?useEffects
    useEffect(() => {
        const getMessageDetails = async () => {
            let data = await getMessages(conversation?._id);
            setMessages(data)
        }
        getMessageDetails()
    }, [person._id, conversation._id])
    return (
        <>
            <Wrapper>
                <MessagesComponent>
                    {messages && messages?.map((message,index)=>
                        (
                            <MessagesContainer>
                            <Message key={`${message}_${index}`} item={message}/></MessagesContainer>
                        ))}
                </MessagesComponent>
                <Footer sendText={sendText} setText={setText} text={text}/>
            </Wrapper>
        </>
    );
};

export default Messages;
