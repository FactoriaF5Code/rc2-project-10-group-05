import "./AddMembersModal.css";
import cross from "../../assets/cross.png"
// import { useState } from "react";

export default function AddMembersModal() {
    // const [addMember, setAddMember] = useState(null);

    // const openModal = (Member) => {
    //   setAddMember(Member);
    // };
  
    // const closeModal = () => {
    //   setAddMember(null);
    // };

  return (
    <>
      <section className="overlay">
        <section className="contenedorModal">
          <div className="contenedorModal__content">
            <div className="contenedorButton__cerrar">
              <img
                className="cerrarModal"
                onClick={onclose}
                src={cross}
                alt="x"
              />
            </div>
            <div className="contenedorInformación">
              <div>
                <h2>Title</h2>
                <p>hola</p>
              </div>
              <div>
                <h2>Member</h2>
                <p>hola</p>
              </div>
              <div>
                <h2>Member</h2>
                <p>hola</p>
              </div>
              <div>
                <button className="ReturnButton">FINALIZAR</button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
