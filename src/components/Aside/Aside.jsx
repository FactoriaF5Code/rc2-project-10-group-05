import "./Aside.css";
import logo from "../../../public/logo.png";

function Aside() {
    return (
        <>
            <section className="containerAside">
                <div className="containerLogo">
                    <img className="logo" src={logo} alt="Logo Gym Manager" />
                </div>
                <div className="containerListAside">
                    <ul className="listAside">
                        <li className="textList">
                            <a href="HomePage.jsx" style={{ textDecoration: "none" }}>Miembros</a>
                        </li>
                        <li className="textList">
                            <a href="HomePage.jsx" style={{ textDecoration: "none" }}>Calendario de Actividades</a>
                        </li>
                        <li className="textList">
                            <a href="HomePage.jsx" style={{ textDecoration: "none" }}>Actividades</a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Aside