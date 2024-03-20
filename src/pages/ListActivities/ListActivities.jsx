import "./ListActivities.css";
import ActivitiesListTable from "../../components/ActivitiesListTable/ActivitiesListTable"


function ListActivities() {
    return (
        <>
            <div className="containerHomePage">
                <section className="containerMemberList">
                    <h2>Listado de Actividades</h2>
                    <button className="buttonAddMember">Añadir Nueva Actividad</button>
                </section>
                <ActivitiesListTable />
            </div>
        </>
    )
}

export default ListActivities