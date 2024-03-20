import "./HomePage.css";
import ListMember from "../../components/ListMember/ListMember"
import ButtonAddMember from "../../components/AddUser/ButtonAddMember";


function HomePage() {
    return (
        <>
            <div className="containerHomePage">
                <section className="containerSearch">
                    <div className="containerTitleSearch">
                    <h2>Buscador de Miembros por Nombre</h2>
                    </div>
                    <form className="search">
                        <input type="text" placeholder="Buscar..." />
                        <button type="submit">Buscar</button>
                    </form>
                </section>
                <section className="containerMemberList">
                    <h2>Listado de todos los Miembros</h2>
                    <ButtonAddMember/>
                </section>
                <ListMember />
            </div>
        </>
    )
}

export default HomePage;
