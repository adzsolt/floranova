import { CCard, CCardBody, CCardTitle } from "@coreui/react-pro";
import React from "react";
import AddPlantForm from '../components/plant/AddPlantForm';


const AddPlant = () => {

  return(
    <CCard>
      <CCardBody>
        <CCardTitle>
          Növény hozzáadása
        </CCardTitle>
        <AddPlantForm />
      </CCardBody>
    </CCard>
  );
}

export default AddPlant;
