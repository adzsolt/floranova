import { CCard, CCardBody, CCardTitle } from "@coreui/react-pro";
import React from "react";
import AddHeatUnitForm from '../components/heat-unit/AddHeatUnitForm';


const AddHeatUnit = () => {

  return(
    <CCard>
      <CCardBody>
        <CCardTitle>
          Fűtőegység hozzáadása
        </CCardTitle>
        <AddHeatUnitForm />
      </CCardBody>
    </CCard>
  );
}

export default AddHeatUnit;
