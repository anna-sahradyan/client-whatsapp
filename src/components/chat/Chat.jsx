import React from 'react';
import { Dialog} from "@mui/material";
import {Component, dialog, Left, Right} from "./chat.styled";
import ChatMenu from "./chatMenu/ChatMenu";
import EmptyChat from "./EmptyChat";


const Chat = () => {
    return (
        <>
            <Dialog open={true}
                    BackdropProps={{style: {backgroundColor: 'unset'}}}
                    maxWidth={'md'}
                    PaperProps={{sx: dialog}}>
                <Component>
                    <Left>
                        <ChatMenu/>
                    </Left>
                    <Right>
                        <EmptyChat/>
                    </Right>
                </Component>
            </Dialog>
        </>

    );
};

export default Chat;
