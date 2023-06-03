import React from 'react';
import {Box, Typography} from "@mui/material";
import {ConComponent, Cimage} from "./chatMenu.styled";

const Conversation = ({item}) => {
    return (
        <>
            <ConComponent>
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
