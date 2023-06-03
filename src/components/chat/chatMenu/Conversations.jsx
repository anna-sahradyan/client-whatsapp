import React, {useEffect, useState} from 'react';
import {getUsers} from "../../../service/api";
import {Box} from "@mui/material";
import Conversation from "./Conversation";

const Conversations = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            let response = await getUsers();
            setUsers(response);

        }
        fetchData();

    }, []);
    console.log(users)
    return (
        <>
            <Box>
                {users?.map((item, index) => {
                  return (
                      <Conversation key={`${item}_${index}`} item={item}/>
                  )
                })}


            </Box>

        </>
    );
};

export default Conversations;
