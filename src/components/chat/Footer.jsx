import React, {useEffect, useState} from 'react';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import {Container, Search, InputField} from "./chat.styled";
import {uploadFile} from "../../service/api";


const Footer = ({sendText, setText, text, file, setFile, setImage}) => {
    const FileSend = (e) => {
        setFile(e.target.files[0]);
        setText(e.target.files[0].name)
    }
    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
                console.log(data.append("name", file.name))
                let response = await uploadFile(data);
                setImage(response.data);
            }
        }
        getImage();

    }, [file])
    return (
        <>
            <Container>
                <EmojiEmotionsOutlinedIcon/>
                <label for="fileInput">
                    <AttachFileOutlinedIcon style={{transform: "rotate(30deg)"}}/>
                    <input type="file" id={"fileInput"} style={{display: "none"}}
                           onChange={(e) => FileSend(e)}

                    />
                </label>
                <Search>
                    <InputField
                        placeholder={"type a message"}
                        onChange={(e) => setText(e.target.value)}
                        onKeyPress={(e) => sendText(e)}
                        value={text}
                    />
                </Search>

                <MicOutlinedIcon/>
            </Container>
        </>
    );
};

export default Footer;
