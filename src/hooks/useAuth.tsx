import { useContext } from "react";
import { AuthContext } from "../context";

// Create a custom hook to consume the AuthContext in components
export const useAuth = () => {
  return useContext(AuthContext);
};
