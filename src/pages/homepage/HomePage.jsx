import ListItems from "../../components/ListItems/ListItems";
import MemberList from "../../components/MemberList/MemberList";
import "./HomePage.css";

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
        </section>
        <ListItems />
        <MemberList/>
      </div>
    </>
  );
}

export default HomePage;
