import { useState } from "react";
import "./ButtonAddMember.css"
import AddMembersModal from "../AddMembersModal/AddMembersModal";

export default function ButtonAddMember() {
  const [addMember, setAddMember] = useState(false);

  const openModal = () => {
    setAddMember(true);
  };

  const closeModal = () => {
    setAddMember(false);
  };
  
  return (
    <section>
      <button className="buttonAddMember" onClick={() => openModal()}>Añadir</button>
     {addMember && <AddMembersModal onClose={closeModal}/>}
    </section>
  );
}
