/* eslint-disable react/prop-types */
import { useState } from "react";
import cross from "../../assets/cross.png";
import { useDataContextActivity } from "../DataContext/DataContextActivity";

export default function AddActivityModal({onClose}) {
  const { postActivity, URL_ACTIVITY } = useDataContextActivity();

  const [newActivity, setNewActivity] = useState({
    name: "",
    day: "",
    max_member: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewActivity((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePost = () => {
    postActivity(URL_ACTIVITY, newActivity);
    setNewActivity({ name: "", day: "", max_member: "" });
  };

  return (
    <>
      <section className="overlay">
        <section className="contenedorModal">
          <div className="contenedorModal__content">
            <div className="contenedorButton__cerrar">
              <button className="cerrarModal" onClick={() => onClose()}>
                <img src={cross} alt="x" />
              </button>
            </div>
            <div className="contenedorInformación">
              <div className="pAñadir">
                <p>AÑADIR ACTIVIDAD</p>
              </div>
              <div>
                <input
                  type="text"
                  name="name"
                  value={newActivity.name}
                  placeholder="Nombre"
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="day"
                  value={newActivity.day}
                  placeholder="Día"
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="max_member"
                  value={newActivity.max_member}
                  placeholder="Máximo de miembros permitidos"
                  onChange={handleChange}
                />
              </div>
              <div>
                <button
                  className="finalizarButton"
                  onClick={() => {
                    onClose();
                    handlePost();
                  }}
                >
                  FINALIZAR
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
