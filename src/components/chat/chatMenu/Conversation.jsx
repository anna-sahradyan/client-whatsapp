import React, {useContext, useEffect, useState} from 'react';
import {Box, Typography} from "@mui/material";
import {ConComponent, Cimage, Timestamp, Text, Container} from "./chatMenu.styled";
import {AuthContext} from "../../../context/AuthProvider";
import {setConversation, getConversation} from "../../../service/api";
import {formatDate} from "../../../utils";
import {emptyProfilePicture} from "../../constants/data";
const Conversation = ({item}) => {
    const url = item.picture || emptyProfilePicture;
    const {setPerson, auth,newMessageFlag} = useContext(AuthContext);
    const [message, setMessage] = useState({});
    const getUser = async () => {
        if (item && item.sub){
            setPerson(item);
            await setConversation({senderId: auth.sub, receiverId: item.sub})
        }

    }
    //?useEffects
    useEffect(() => {
        const getConversationMessage = async() => {
            const data = await getConversation({ senderId: auth.sub, receiverId: item.sub });
            setMessage({ text: data?.message, timestamp: data?.updatedAt });
        }
        getConversationMessage();
    }, [newMessageFlag]);

    return (
        <>
            <ConComponent onClick={() => getUser()}>
                <Box>
                    <Cimage src={url} alt="db"/>
                </Box>
                <Box style={{width:"100%"}}>
                    <Container >
                        <Typography>
                            {item.name}
                        </Typography>
                        {message?.text &&
                        <Timestamp>{formatDate(message?.timestamp)}</Timestamp>}
                    </Container>
                    <Box>
                        <Text>{message?.text?.includes('localhost') ? 'media' : message.text}</Text>
                    </Box>
                </Box>
            </ConComponent>
        </>
    );
};

export default Conversation;
