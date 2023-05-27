import React, {useState} from 'react';
import {MoreVert} from "@mui/icons-material";
import Menu from '@mui/material/Menu';
import {MenuOption} from "./chatMenu.styled"

const HeaderMenu = ({setOpenDrawer}) => {
    const [open, setOpen] = useState(null);
    const handleClose = () => {
        setOpen(null)
    }
    const handleClick = (e) => {
        setOpen(e.currentTarget)
    }
    return (
        <>
            <MoreVert onClick={handleClick}/>
            <Menu
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuOption onClick={() => {
                    handleClose();setOpenDrawer(true)
                }}>Profile</MenuOption>

            </Menu>
        </>
    );
};

export default HeaderMenu;
