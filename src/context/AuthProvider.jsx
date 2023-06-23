import React, {createContext, useEffect, useRef, useState} from 'react';
import {io} from 'socket.io-client';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState();
    const [person, setPerson] = useState({});
    const [activeUsers, setActiveUsers] = useState([]);
    const socket = useRef();

    useEffect(() => {
        socket.current = io('ws://localhost:9000');
    }, []);

    return (
        <>
            <AuthContext.Provider
                value={{
                    auth,
                    setAuth,
                    person,
                    setPerson,
                    socket,
                    activeUsers,
                    setActiveUsers
                }}
            >
                {children}
            </AuthContext.Provider>
        </>
    );
};

export default AuthProvider;
