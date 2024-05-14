import { CCard, CCardBody, CCardTitle } from "@coreui/react-pro";
import React from "react";
import AddFertilizerForm from '../components/fertilizer/AddFertilizerForm';


const AddFertilizer = () => {

  return(
    <CCard>
      <CCardBody>
        <CCardTitle>
          Műtrágya hozzáadása
        </CCardTitle>
        <AddFertilizerForm />
      </CCardBody>
    </CCard>
  );
}

export default AddFertilizer;
