import { CCard, CCardBody, CCardTitle } from "@coreui/react-pro";
import React from "react";
import AddBusinessForm from '../components/businesses/AddBusinessForm';


const AddBusiness = () => {

  return(
    <CCard>
      <CCardBody>
        <CCardTitle>
          Egység hozzáadása
        </CCardTitle>
        <AddBusinessForm />
      </CCardBody>
    </CCard>
  );
}

export default AddBusiness;
