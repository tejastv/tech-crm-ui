import { createContext, useState, ReactNode, useContext } from "react";

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
const AuthContext = createContext<AuthContextValue>(initialAuthContextValue);

// Create the AuthProvider component
type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState(initialAuthContextValue.auth);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;