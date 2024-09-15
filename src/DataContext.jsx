import { createContext } from "react";

export const DataContextAPI = createContext();

export const DataProvider = ({ children }) => {
  const ring = "💍";
  return <DataContextAPI.Provider value={ring}>{children}</DataContextAPI.Provider>;
};
