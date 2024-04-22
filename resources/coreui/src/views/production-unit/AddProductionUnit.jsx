import { CCard, CCardBody, CCardTitle } from "@coreui/react-pro";
import React from "react";
import AddProductionUnitForm from "../components/production-unit/AddProductionUnitForm";


const AddProductionUnit = () => {

  return(
    <CCard>
      <CCardBody>
        <CCardTitle>
          Termelőegység hozzáadása
        </CCardTitle>
        <AddProductionUnitForm />
      </CCardBody>
    </CCard>
  );
}

export default AddProductionUnit;
