import React, {useContext, useEffect, useState} from 'react';
import {getUsers} from "../../../service/api";
import Conversation from "./Conversation";
import {AuthContext} from "../../../context/AuthProvider";
import {ConsComponent, StyledDivider} from "./chatMenu.styled";


const Conversations = () => {
    const [users, setUsers] = useState([]);
    const {auth} = useContext(AuthContext);

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
