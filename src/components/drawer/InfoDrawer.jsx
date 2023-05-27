import React from 'react';
import {Box, Drawer, Typography} from "@mui/material";
import {Component, drawerStyle, Header, Text} from "./infoDrawer.styled";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Profile from "./Profile";


const InfoDrawer = ({open, setOpen}) => {
    const handleClose = () => {
        setOpen(false);

    }
    return (
        <>
            <Drawer
                open={open}
                onClose={handleClose}
                PaperProps={{sx: drawerStyle}}
                style={{zIndex: 1500}}
            >
                <Header>
                    <ArrowBackIcon onClick={() => setOpen(false)}/>
                    <Text>
                        Profile
                    </Text>
                </Header>
                <Component>
                    <Profile/>
                </Component>
            </Drawer>
        </>
    );
};

export default InfoDrawer;
