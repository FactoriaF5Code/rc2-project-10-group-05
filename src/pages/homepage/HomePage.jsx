import "./HomePage.css";
import ListMember from "../../components/ListMember/ListMember";
import ButtonAddMember from "../../components/AddUser/ButtonAddMember";
import Search from "../../components/Search/Search";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useDataContext } from "../../components/DataContext/DataContest";

function HomePage() {
  const { alertMessage, alertSeverity, setAlertMessage } = useDataContext();

  return (
    <>
      <div className="containerHomePage">
        <section className="containerSearch">
          <div className="containerTitleSearch">
            <h2>Buscador de Miembros por Nombre</h2>
          </div>
          <Search />
        </section>
        <section className="containerMemberList">
          <h2>Listado de todos los Miembros</h2>
          <ButtonAddMember />
        </section>
        <ListMember />
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

export default HomePage;
