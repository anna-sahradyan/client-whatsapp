import React from 'react';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import {Container, Search, InputField} from "./chat.styled";




const Footer = () => {
    return (
        <>
         <Container>
<EmojiEmotionsOutlinedIcon/>
             <AttachFileOutlinedIcon style={{ transform: "rotate(30deg)" }}/>
             <Search>
                 <InputField
                     placeholder={"type a message"}
                 />
             </Search>

                 <MicOutlinedIcon/>
         </Container>
        </>
    );
};

export default Footer;