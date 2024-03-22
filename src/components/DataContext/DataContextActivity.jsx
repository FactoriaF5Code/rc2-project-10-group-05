/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";


const DataContextActivity = createContext();

export const DataProviderActivity = ({ children }) => {
  const [activity, setActivity] = useState([]);
  const [needsReload, setNeedsReload] = useState(true);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("");
  const URL_ACTIVITY = "http://localhost:8080/api/activities"

  const fetchDataActivity = async (URL_ACTIVITY) => {
    try {
      const response = await fetch(URL_ACTIVITY);
      if (response.ok) {
        const data = await response.json();
        setActivity(data);
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
      fetchDataActivity(URL_ACTIVITY);
    }
  }, [needsReload]);

 
  const postActivity = async (URL_ACTIVITY, newActivity) => {
    try {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newActivity),
      };

      const response = await fetch(URL_ACTIVITY, options);

      if (response.ok) {
        setActivity([]);
        setNeedsReload(true);
        setAlertMessage(`Enhorabuena, ${newActivity.name} se ha registrado correctamente`);
        setAlertSeverity("success");
      } else {
        setAlertMessage("Error al realizar la operación");
        setAlertSeverity("error");
      }
    } catch (error) {
      console.error("Error de red", error);
    }
  };

  const value = {
    postActivity,
    activity,
    URL,
    alertSeverity,
    alertMessage,
    setAlertMessage,
    URL_ACTIVITY
  };

  return <DataContextActivity.Provider value={value}>{children}</DataContextActivity.Provider>;
};

export const useDataContextActivity = () => {
  return useContext(DataContextActivity);
};
