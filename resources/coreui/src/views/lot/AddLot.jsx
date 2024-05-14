import { CCard, CCardBody, CCardTitle } from "@coreui/react-pro";
import React from "react";
import AddLotForm from "../components/lot/AddLotForm";


const AddLot = () => {

  return(
    <CCard>
      <CCardBody>
        <CCardTitle>
          Virágcsoport hozzáadása
        </CCardTitle>
        <AddLotForm />
      </CCardBody>
    </CCard>
  );
}

export default AddLot;
