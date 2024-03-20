/* eslint-disable react/prop-types */
import "./AddMembersModal.css";
import cross from "../../assets/cross.png";
import { useDataContext } from "../DataContext/DataContest";
import { useState } from "react";

export default function AddMembersModal({ onClose }) {
  const { postMember, URL } = useDataContext();
  const [newMember, setNewMember] = useState({ name: "", lastName: "", contact: "" });

  const handlePost = () => {
    postMember(newMember, URL);
    setNewMember({ name: "", lastName: "", contact: "" })
  };

  return (
    <>
      <section className="overlay">
        <section className="contenedorModal">
          <div className="contenedorModal__content">
            <div className="contenedorButton__cerrar">
              <button className="cerrarModal" onClick={() => { onClose(); handlePost(); }}>
                <img src={cross} alt="x" />
              </button>
            </div>
            <div className="contenedorInformación">
              <div className="pAñadir">
                <p>AÑADIR MIEMBRO</p>
              </div>
              <div>
                <input type="text" placeholder="Nombre" />
              </div>
              <div>
                <input type="text" placeholder="Apellido" />
              </div>
              <div>
                <input type="text" placeholder="Contacto" />
              </div>
              <div>
                <button className="finalizarButton">FINALIZAR</button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
