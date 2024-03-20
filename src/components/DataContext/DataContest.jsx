import { createContext, useContext } from "react";

const DataContext = createContext;

export const DataProvider = ({ children }) => {


  const value = {
   
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useDataContext = () => {
  return useContext(DataContext);
};
