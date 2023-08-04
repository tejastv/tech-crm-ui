import { createContext, useState, ReactNode, useEffect } from "react";
import { getLocalStorageData } from "../utils";
import { useNavigate } from "react-router-dom";

import { DASHBOARD } from "../constants";
import { LoginRequest } from "@auth/index";

// Define the type for the context value and state
type AuthContextValue = {
  auth: any; // Replace 'any' with the actual type of your authentication data
  setAuth: React.Dispatch<React.SetStateAction<any>>; // Replace 'any' with the actual type of the state
};

const initialAuthContextValue: AuthContextValue = {
  auth: {},
  setAuth: () => {},
};

// Create the AuthContext
export const AuthContext = createContext<AuthContextValue>(
  initialAuthContextValue
);

// Create the AuthProvider component
type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState(initialAuthContextValue.auth);
  const navigate = useNavigate();

  useEffect(() => {
    const user: LoginRequest = getLocalStorageData("auth", "user");
    if (user) {
      navigate(DASHBOARD, { replace: true });
      setAuth({ user });
    }
  }, []);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
