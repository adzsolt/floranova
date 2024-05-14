import { CCard, CCardBody, CCardTitle } from "@coreui/react-pro";
import React from "react";
import AddFertilizerStatusForm from '../components/fertilizer-status/AddFertilezerStatusForm';


const AddFertilizerStatus = () => {

  return(
    <CCard>
      <CCardBody>
        <CCardTitle>
          Műtrágya állapot hozzáadása
        </CCardTitle>
        <AddFertilizerStatusForm />
      </CCardBody>
    </CCard>
  );
}

export default AddFertilizerStatus;
