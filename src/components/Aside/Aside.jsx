import "./Aside.css";
import logo from "../../../public/logo.png";
import { Link } from "react-router-dom";



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
                            <Link to="/">Miembros</Link>
                        </li>

                        <li className="textList">
                            <Link to="/ListActivities">Actividades</Link>
                        </li>

                    </ul>
                </div>
            </section>
        </>
    )
}

export default Aside