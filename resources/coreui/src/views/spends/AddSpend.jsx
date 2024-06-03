import { CCard, CCardBody, CCardTitle } from "@coreui/react-pro";
import React from "react";
import AddWorkForm from "../components/works/AddWorkForm";
import AddSpendForm from "../components/spends/AddSpendForm";


const AddSpend = () => {

  return(
    <CCard>
      <CCardBody>
        <CCardTitle>
          Fogyasztás hozzáadása
        </CCardTitle>
        <AddSpendForm />
      </CCardBody>
    </CCard>
  );
}

export default AddSpend;
