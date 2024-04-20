import { CCard, CCardBody, CCardTitle } from "@coreui/react-pro";
import React from "react";
import AddPotForm from '../components/pot/AddPotForm';


const AddPot = () => {

  return(
    <CCard>
      <CCardBody>
        <CCardTitle>
          Cserép hozzáadása
        </CCardTitle>
        <AddPotForm />
      </CCardBody>
    </CCard>
  );
}

export default AddPot;
