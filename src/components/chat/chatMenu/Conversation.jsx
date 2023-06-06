import React, {useContext} from 'react';
import {Box, Typography} from "@mui/material";
import {ConComponent, Cimage} from "./chatMenu.styled";
import {AuthContext} from "../../../context/AuthProvider";


const Conversation = ({item}) => {
    const {setPerson} = useContext(AuthContext);
    const getUser = () => {
        setPerson(item);
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
