// src/contexts/UsersContext.jsx
import { createContext, useState, useEffect } from "react";
import { getUsers } from "../services/userService";

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : getUsers();
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const updateUserById = (id, newData) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === id ? { ...user, ...newData } : user))
    );
  };

  const toggleBlockUser = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => {
        if (user.id === id) {
          return {
            ...user,
            status: user.status === "active" ? "blocked" : "active",
          };
        }
        return user;
      })
    );
  };

  const removeUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  const addUser = (newUser) => {
    newUser.id = users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1;
    setUsers((prevUsers) => [
      ...prevUsers,
      { ...newUser, status: "active", role: newUser.role || "user" },
    ]);
  };

  return (
    <UsersContext.Provider
      value={{ users, updateUserById, removeUser, addUser, toggleBlockUser }}
    >
      {children}
    </UsersContext.Provider>
  );
};
