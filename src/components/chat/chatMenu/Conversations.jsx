import React, {useContext, useEffect, useState} from 'react';
import {getUsers} from "../../../service/api";
import Conversation from "./Conversation";
import {AuthContext} from "../../../context/AuthProvider";
import {ConsComponent, StyledDivider} from "./chatMenu.styled";


const Conversations = ({text}) => {
    const [users, setUsers] = useState([]);
    const {auth, socket, setActiveUsers} = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            let response = await getUsers();
            const filteredData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()))
            setUsers(filteredData);
        }
        fetchData();
    }, [text]);
    useEffect(() => {
        socket.current.emit("addUsers", auth);
        socket.current.on("getUsers", users => {
            setActiveUsers(users)
        })
    }, [auth])

    return (
        <>
            <ConsComponent>
                {users?.map((item, index) =>
                    (
                        item.sub !== auth.sub &&
                        <>
                            <Conversation key={`${item}_${index}`} item={item}/>
                            <StyledDivider/>
                        </>

                    )
                )}


            </ConsComponent>

        </>
    );
};

export default Conversations;
