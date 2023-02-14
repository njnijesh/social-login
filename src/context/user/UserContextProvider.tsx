import React, { createContext, useState } from "react";
import * as types from "./types";

// Initial context values
const initialUser: types.User = {
  name: "",
  id: 0,
  email: "",
  loggedInBy: "",
};

// Create context
export const UserContext = createContext<types.UserContextProps>({
  user: initialUser,
  setUser: () => {},
});

// Create provider
export const UserProvider = ({ children }: types.Props) => {
  const localStorageUser = localStorage.getItem("user");
  const parsedUser = localStorageUser ? JSON.parse(localStorageUser) : null;
  const [user, setUser] = useState(parsedUser || initialUser);

  const setNPersistUser = (userData: types.User) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };
  return (
    <UserContext.Provider value={{ user, setUser: setNPersistUser }}>
      {children}
    </UserContext.Provider>
  );
};
