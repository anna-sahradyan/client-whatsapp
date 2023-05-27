import React, {useContext} from 'react';
import {GoogleLogin} from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import {AuthContext} from "../../context/AuthProvider";


const GoogleLoginComponent = () => {
    const {setAuth} = useContext(AuthContext);
    const onLoginSuccess = (res) => {
        const decoded = jwt_decode(res.credential);
        console.log(decoded)
        setAuth(decoded);
    }

    const onLoginError =  (res) => {
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
