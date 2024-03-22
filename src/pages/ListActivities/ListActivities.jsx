import "./ListActivities.css";
import ActivitiesListTable from "../../components/ActivitiesListTable/ActivitiesListTable";
import ButtonAddActivity from "../../components/ButtonAddActivity/ButtonAddActivity";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useDataContextActivity } from "../../components/DataContext/DataContextActivity";

function ListActivities() {
  const { alertMessage, alertSeverity, setAlertMessage } = useDataContextActivity();
  return (
    <>
      <div className="containerHomePage">
        <section className="containerMemberList">
          <h2>Listado de Actividades</h2>
          <ButtonAddActivity />
        </section>
        <ActivitiesListTable />
        {alertMessage && (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert
              variant="outlined"
              severity={alertSeverity} // Usa el estado alertSeverity para determinar el nivel de severidad
              onClose={() => setAlertMessage("")}
            >
              {alertMessage}
            </Alert>
          </Stack>
        )}
      </div>
    </>
  );
}

export default ListActivities;
