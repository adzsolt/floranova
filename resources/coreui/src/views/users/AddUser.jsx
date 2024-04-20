import { CCard, CCardBody, CCardTitle } from "@coreui/react-pro";
import React from "react";
import AddUserForm from "../components/users/AddUserForm";


const AddUser = () => {

    return(
        <CCard>
            <CCardBody>
                <CCardTitle>
                    Felhasználó hozzáadása
                </CCardTitle>
                <AddUserForm />
            </CCardBody>
        </CCard>
    );
}

export default AddUser;
