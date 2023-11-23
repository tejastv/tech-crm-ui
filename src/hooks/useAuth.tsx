import { useEffect } from "react";
import { useUser, useLocalStorage } from "@hooks/index";
import { User } from "./useUser";

export const useAuth = () => {
  const { user, addUser, removeUser } = useUser();
  const { getItem } = useLocalStorage();

  useEffect(() => {
    const user = getItem("user");
    if (user) {
      addUser(JSON.parse(user) as User);
    }
  }, []);

  const login = (user: User) => {
    addUser(user);
  };

  const logout = () => {
    removeUser();
  };

  return { user, login, logout };
};
