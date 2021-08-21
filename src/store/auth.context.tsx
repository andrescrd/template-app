import React from "react";
import { useState } from "react";

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token: string) => { },
    logout: () => { }
});

export const AuthContextProvider = (props: { children: React.ReactChild }) => {
    const [token, setToken] = useState<string>('');
    const userIsLoggedIn = !!token;

    const loginHandler = (token: string) => {
        setToken(token);
    };

    const logoutHandler = () => {
        setToken('');
    }

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext;