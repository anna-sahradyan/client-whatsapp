import React, {useContext} from 'react';
import {Box, Typography} from "@mui/material";
import {ConComponent, Cimage} from "./chatMenu.styled";
import {AuthContext} from "../../../context/AuthProvider";
import {setConversation} from "../../../service/api";


const Conversation = ({item}) => {
    const {setPerson, auth} = useContext(AuthContext);
    const getUser = async () => {
        setPerson(item);
        await setConversation({senderId: auth.sub, receiverId:item.sub})
    }
    return (
        <>
            <ConComponent onClick={() => getUser()}>
                <Box>
                    <Cimage src={item.picture} alt="db"/>
                </Box>
                <Box>
                    <Box>
                        <Typography>
                            {item.name}
                        </Typography>
                    </Box>
                </Box>
            </ConComponent>
        </>
    );
};

export default Conversation;
