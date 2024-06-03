import { CCard, CCardBody, CCardTitle } from "@coreui/react-pro";
import React from "react";
import AddWorkForm from "../components/works/AddWorkForm";


const AddWork = () => {

  return(
    <CCard>
      <CCardBody>
        <CCardTitle>
          Munkaköltség hozzáadása
        </CCardTitle>
        <AddWorkForm />
      </CCardBody>
    </CCard>
  );
}

export default AddWork;
