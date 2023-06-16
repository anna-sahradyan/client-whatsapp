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
    const [file, setFile] = useState();
    const [image, setImage] = useState("");
    const sendText = async (e) => {
        const code = e.keyCode || e.which;
        if (!text.trim()) return
        if (code === 13) {
            let message = {};
            if (!file) {
                message = {
                    senderId: auth.sub,
                    receiverId: person.sub,
                    conversationId: conversation._id,
                    type: "text",
                    text: text,
                    createdAt: new Date()

                };

            }
         else {
            message = {
                senderId: auth.sub,
                conversationId: conversation._id,
                receiverId:person.sub,
                type: 'file',
                text: image,
                createdAt: new Date()
            };

        }
            setMessages((prevMessages) => [...prevMessages, message]);
            await newMessage(message);
            setText(" ");
            setImage("");
            setFile("");


        }

    }
    //?useEffects
    useEffect(() => {
        const getMessageDetails = async () => {
            let data = await getMessages(conversation?._id);
            setMessages(data)
        }
        conversation._id && getMessageDetails();
    }, [person._id, conversation._id])
    return (
        <>
            <Wrapper>
                <MessagesComponent>
                    {messages && messages?.map((message, index) =>
                        (
                            <MessagesContainer>
                                <Message key={`${message}_${index}`} item={message}/></MessagesContainer>
                        ))}
                </MessagesComponent>
                <Footer
                    sendText={sendText}
                    setText={setText}
                    text={text}
                    file={file}
                    setFile={setFile}
                    setImage={setImage}
                    image={image}

                />
            </Wrapper>
        </>
    );
};

export default Messages;
