"use client";

import { createContext, useContext } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ currentUser, children }) {
    return (
        <AuthContext.Provider value={currentUser}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
