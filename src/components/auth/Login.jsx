import React from 'react';
import {Box, Dialog, ListItem} from "@mui/material";
import {Component, Container, dialog, ListStyle, QRCode, Title} from "./login.styled";
import {qrCodeImage} from "../constants/data";
import GoogleLoginComponent from "./GoogleLogin";

const Login = () => {
    const handleClose = () => {

    }
    return (
        <>
            <Dialog onClose={handleClose} open={true}
                    PaperProps={{sx: dialog}}>
                <Component>
                    <Container><Title>Use WhatsApp on your computer:</Title>
                        <ListStyle>
                            <ListItem>1.Open WhatsApp on your phone</ListItem>
                            <ListItem>2.Tap <strong>Menu</strong> or <strong> Settings</strong>and select <strong>Linked
                                Devices</strong></ListItem>
                            <ListItem>3. Tap on <strong>Link a device</strong></ListItem>
                            <ListItem>4.Point your phone to this screen to capture the QR code</ListItem>
                        </ListStyle>
                    </Container>
                    <Box style={{position:`relative`}}>
                        <QRCode src={qrCodeImage} alt="qr-code" className="qr_code"/>
                        <Box style={{position:`absolute`,top:`50%`,transform:`translateX(25%)`}}>
                            <GoogleLoginComponent/>
                        </Box>

                    </Box>
                </Component>
            </Dialog>
        </>
    );
};

export default Login;
