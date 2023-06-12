import React, {useContext} from 'react';
import {Own, OwnWrapper, TextMessage, Time} from "./chat.styled";
import {formatDate} from "../../utils";
import {AuthContext} from "../../context/AuthProvider";


const Message = ({item}) => {
    const {auth} = useContext(AuthContext);
    return (

        <>
            {auth.sub === item.senderId ?
                <Own>
                    <TextMessage>{item.text}</TextMessage>
                    <Time>{formatDate(item.createdAt)}</Time>
                </Own>:
                <OwnWrapper>
                    <TextMessage>{item.text}</TextMessage>
                    <Time>{formatDate(item.createdAt)}</Time>
                </OwnWrapper>
            }

        </>
    );
};

export default Message;
