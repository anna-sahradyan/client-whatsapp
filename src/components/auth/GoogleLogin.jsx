import React, {useContext} from 'react';
import {GoogleLogin} from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import {AuthContext} from "../../context/AuthProvider";
import {addUser} from "../../service/api";


const GoogleLoginComponent = () => {
    const {setAuth} = useContext(AuthContext);
    const onLoginSuccess = async    (res) => {
        const decoded = jwt_decode(res.credential);
        setAuth(decoded);
         await  addUser(decoded);
    }

    const onLoginError = (res) => {
        console.log(`Login Failed:`, res);
    }
    return (
        <>
            <GoogleLogin
                onSuccess={onLoginSuccess}
                onError={onLoginError}
            />
        </>
    );
};

export default GoogleLoginComponent;
