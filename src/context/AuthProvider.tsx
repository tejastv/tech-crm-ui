import { useLocalStorage } from "@hooks/useLocalStorage";
import { User } from "@hooks/useUser";
import { ReactNode, createContext, useState } from "react";

interface AuthContext {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const AuthContext = createContext<AuthContext>({
  user: null,
  setUser: () => {},
});

// Create the AuthProvider component
type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { getItem } = useLocalStorage();
  const [user, setUser] = useState<User | null>(getItem("user") as User | null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
