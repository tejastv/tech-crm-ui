import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

// Create a custom hook to consume the AuthContext in components
export const useAuth = () => {
    return useContext(AuthContext);
  };

export default useAuth;
  