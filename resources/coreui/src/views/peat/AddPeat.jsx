import { CCard, CCardBody, CCardTitle } from "@coreui/react-pro";
import React from "react";
import AddPeatForm from '../components/peat/AddPeatForm';


const AddPeat = () => {

  return(
    <CCard>
      <CCardBody>
        <CCardTitle>
          Tőzeg hozzáadása
        </CCardTitle>
        <AddPeatForm />
      </CCardBody>
    </CCard>
  );
}

export default AddPeat;
