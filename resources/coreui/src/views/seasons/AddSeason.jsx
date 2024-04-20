import { CCard, CCardBody, CCardTitle } from "@coreui/react-pro";
import React from "react";
import AddSeasonForm from "../components/seasons/AddSeasonForm";


const AddSeason = () => {

  return(
    <CCard>
      <CCardBody>
        <CCardTitle>
          Szezon hozzáadása
        </CCardTitle>
        <AddSeasonForm />
      </CCardBody>
    </CCard>
  );
}

export default AddSeason;
