import React, {useContext} from 'react';
import {Dialog} from "@mui/material";
import {Component, dialog, Left, Right} from "./chat.styled";
import ChatMenu from "./chatMenu/ChatMenu";
import EmptyChat from "./EmptyChat";
import ChatBox from "./ChatBox";
import {AuthContext} from "../../context/AuthProvider";


const Chat = () => {
    const {person} = useContext(AuthContext);
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
                        {Object.keys(person).length ? <ChatBox/>:<EmptyChat/>}
                    </Right>
                </Component>
            </Dialog>
        </>

    );
};

export default Chat;
