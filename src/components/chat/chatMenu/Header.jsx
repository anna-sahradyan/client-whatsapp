import React, {useContext, useState} from 'react';
import {AuthContext} from "../../../context/AuthProvider";
import {Component, Image, Wrapper} from "./chatMenu.styled";
import {Chat as MessageIcon} from "@mui/icons-material";
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../drawer/InfoDrawer";

const Header = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const {auth} = useContext(AuthContext);
    const toggleDrawer = () => {
        setOpenDrawer(true);
    }
    return (
        <>
            <Component>
                <Image src={auth.picture} alt="dp" onClick={() => toggleDrawer()}/>
                <Wrapper>
                    <MessageIcon/>
                    <HeaderMenu setOpenDrawer={setOpenDrawer}/>
                </Wrapper>
            </Component>
            <InfoDrawer open={openDrawer} setOpen={setOpenDrawer}/>

        </>
    );
};

export default Header;
