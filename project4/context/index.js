"use client";
import { createContext, useState } from "react";

export const UserContext = createContext(null);

export default function UserState({ children }) {
  const [currentEditedID, setCurrentEditedID] = useState(null);
  return (
    <UserContext.Provider value={{ currentEditedID, setCurrentEditedID }}>
      {children}
    </UserContext.Provider>
  );
}
