import {createContext, useState} from "react";

export const AuthContext = createContext();

export function AuthContextProvider({children}){
    const [isLoggedIn, setIsLoggedIn] = useState({
        login: false,
        user: ""
    });

    const login = (user) => setIsLoggedIn({login: true, user})

    const logOut = () => setIsLoggedIn({login: false, user: ""});

    return(
        <AuthContext.Provider value={{isLoggedIn,login,logOut}}>
            {children}
        </AuthContext.Provider>
    )
}