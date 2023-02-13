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
  const [user, setUser] = useState(initialUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
