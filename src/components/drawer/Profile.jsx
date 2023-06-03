import React, {useContext} from 'react';
import {Box, Typography} from "@mui/material";
import {AuthContext} from "../../context/AuthProvider";
import {ImageContainer, Image, BoxWrapper, Desc} from "./infoDrawer.styled";

const Profile = () => {
    const {auth} = useContext(AuthContext);

    return (
        <>
            <ImageContainer>
                < Image src={auth.picture} alt="dp"/>
            </ImageContainer>
            <BoxWrapper>
                <Typography>{auth.name}</Typography>
                <Typography>Anna</Typography>
            </BoxWrapper>
            <Desc>
                <Typography>This is not  your username or pin. This name will be visible to your Whatsap contacts </Typography>
            </Desc>
            <BoxWrapper>
                <Typography>About</Typography>
                <Typography>Go To Bed </Typography>

            </BoxWrapper>

        </>
    );
};

export default Profile;
