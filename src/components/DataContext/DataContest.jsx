
import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext;

export const DataProvider = ({ children }) => {
  const [member, setmember] = useState([]);
  const [needsReload, setNeedsReload] = useState(true);
  const URL = "http://localhost:8080/api/users";

  const fetchData = async (URL) => {
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        setmember(data);
        setNeedsReload(false);
      } else {
        console.error("Error al obtener datos");
      }
    } catch (error) {
      console.error("Error de red", error);
    }
  };

  useEffect(() => {
    if (needsReload) {
      fetchData(URL);
    }
  }, [needsReload]);

  const postMember = async (URL, newMember) => {
    try {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newMember),
      };

      const response = await fetch(URL, options);

      if (response.ok) {
        setmember([]);
        setNeedsReload(true);
        alert("Realizado con éxito");
      } else {
        alert("Error al realizar la operación");
      }
    } catch (error) {
      console.error("Error de red", error);
    }
  };

  const value = {
    postMember,
    member,
    URL
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};


export const useDataContext = () => {
  return useContext(DataContext);
};
