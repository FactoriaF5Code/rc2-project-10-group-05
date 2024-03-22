import { useState } from "react";
import AddActivityModal from "../AddActivityModal/AddActivityModal"

export default function ButtonAddActivity() {
    const [addActivity, setAddActivity] = useState(false);

    const openModal = () => {
      setAddActivity(true);
    };
  
    const closeModal = () => {
      setAddActivity(false);
    };

  return (
   <>
    <button className="buttonAddMember" onClick={() => openModal()}>Añadir Nueva Actividad</button>
    {addActivity && <AddActivityModal onClose={closeModal}/>}
    </>
  )
}
