import { CCard, CCardBody, CCardTitle } from "@coreui/react-pro";
import React from "react";
import AddLayoutForm from '../components/layout/AddLayoutForm';


const AddLayout = () => {

  return(
    <CCard>
      <CCardBody>
        <CCardTitle>
          Elrendezés hozzáadása
        </CCardTitle>
        <AddLayoutForm />
      </CCardBody>
    </CCard>
  );
}

export default AddLayout;
