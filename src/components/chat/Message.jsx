import React, {useContext} from 'react';
import {Own, OwnWrapper, TextMessage, Time} from "./chat.styled";
import {downloadMedia, formatDate} from "../../utils";
import {AuthContext} from "../../context/AuthProvider";
import {iconPDF} from "../constants/data";
import {Typography} from "@mui/material";
import { GetApp as GetAppIcon } from '@mui/icons-material';


const Message = ({item}) => {
    const {auth} = useContext(AuthContext);
    return (

        <>
            {auth.sub === item.senderId ?
                <Own>
                    {item.type === "file" ? <ImageMessage item={item}/> : <TextComponentMessage item={item}/>}
                </Own> :
                <OwnWrapper>
                    {item.type === "file" ? <ImageMessage item={item}/>:<TextComponentMessage item={item}/>}
                </OwnWrapper>
            }

        </>
    );
};
const ImageMessage = ({item}) => {
    return (
        <>
            <div style={{ position: 'relative' }}>
                {
                    item?.text?.includes('.pdf') ?
                        <div style={{ display: 'flex' }}>
                            <img src={iconPDF} alt="pdf-icon" style={{ width: 80 }} />
                            <Typography style={{ fontSize: 14 }} >{item.text.split("/").pop()}</Typography>
                        </div>
                        :
                        <img style={{ width: 300, height: '100%', objectFit: 'cover' }} src={item.text} alt={item.text} />
                }
                <Time style={{ position: 'absolute', bottom: 0, right: 0 }}>
                    <GetAppIcon
                        onClick={(e) => downloadMedia(e, item.text)}
                        fontSize='small'
                        style={{ marginRight: 10, border: '1px solid grey', borderRadius: '50%' }}
                    />
                    {formatDate(item.createdAt)}
                </Time>
            </div>
        </>
    )
}
const TextComponentMessage = ({item}) => {
    return (
        <>
            <TextMessage>{item.text}</TextMessage>
            <Time>{formatDate(item.createdAt)}</Time>
        </>
    )
}
export default Message;
