import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {GoogleOAuthProvider} from "@react-oauth/google";
import AuthProvider from "./context/AuthProvider";
import {CLIENTID} from "./clientID";
import {BrowserRouter as Router} from "react-router-dom";

const clientId = CLIENTID;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
    <GoogleOAuthProvider clientId={clientId}>
        <AuthProvider>
            <App/>
        </AuthProvider>
    </GoogleOAuthProvider>
    </Router>
);
