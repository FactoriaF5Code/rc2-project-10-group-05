import "./HomePage.css";
import ListMember from "../../components/ListMember/ListMember"
import ButtonAddMember from "../../components/AddUser/ButtonAddMember";
import Search from "../../components/Search/Search"


function HomePage() {
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
                    <ButtonAddMember/>
                </section>
                <ListMember />
            </div>
        </>
    )
}

export default HomePage;
