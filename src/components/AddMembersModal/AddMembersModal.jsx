/* eslint-disable react/prop-types */
import "./AddMembersModal.css";
import cross from "../../assets/cross.png";
import { useDataContext } from "../DataContext/DataContest";
import { useState } from "react";

export default function AddMembersModal({ onClose }) {
  const { postMember, URL } = useDataContext();
  const [newMember, setNewMember] = useState({
    name: "",
    lastName: "",
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMember((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePost = () => {
    postMember(URL, newMember);
    setNewMember({ name: "", lastName: "", contact: "" });
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
                <p>AÑADIR MIEMBRO</p>
              </div>
              <div>
                <input
                  type="text"
                  name="name"
                  value={newMember.name}
                  placeholder="Nombre"
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  value={newMember.lastName}
                  placeholder="Apellido"
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="contact"
                  value={newMember.contact}
                  placeholder="Contacto"
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
