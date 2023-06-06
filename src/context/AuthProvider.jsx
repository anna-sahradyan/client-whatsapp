import React, {createContext, useState} from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState();
    const [person, setPerson] = useState({});

    return (
        <>
            <AuthContext.Provider value={{
                auth,
                setAuth,
                person,
                setPerson
            }}>
                {children}
            </AuthContext.Provider>
        </>
    )
}
export default AuthProvider;
