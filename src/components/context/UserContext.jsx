import React, { createContext, useContext } from "react";
import usersData from "../../data/user";

const UserContext = createContext();

export const useUsers = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ users: usersData }}>
      {children}
    </UserContext.Provider>
  );
};