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
                        <li className="textList">Miembros</li>
                        <li className="textList">Calendario Actividades</li>
                        <li className="textList">Actividades</li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Aside