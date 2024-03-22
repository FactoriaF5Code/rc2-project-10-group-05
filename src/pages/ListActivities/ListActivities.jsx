import "./ListActivities.css";
import ActivitiesListTable from "../../components/ActivitiesListTable/ActivitiesListTable"
import ButtonAddActivity from "../../components/ButtonAddActivity/ButtonAddActivity";


function ListActivities() {
    return (
        <>
            <div className="containerHomePage">
                <section className="containerMemberList">
                    <h2>Listado de Actividades</h2>
                   <ButtonAddActivity/>
                </section>
                <ActivitiesListTable />
            </div>
        </>
    )
}

export default ListActivities