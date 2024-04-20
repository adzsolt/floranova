import { CAlert } from "@coreui/react-pro";
import { CCard, CCardBody, CCardTitle } from "@coreui/react-pro";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditUserForm from "../components/users/EditUserForm";


const EditUser = () => {
    const controller = new AbortController();
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    useEffect(()=>{
        let user = {};
        axios.post('/get-user', {id: id, signal: controller.signal})
            .then( (response) => {
                // console.log('get-user ', response.data.user);
                user = response.data.user;
                user.role = [];
                return axios.post('/get-user-role', {user_id: id, signal: controller.signal})
            })
            .then( (response) => {
                // console.log('get-user-role ', response.data);
                user.role = response.data.roles;
                setUser(user);
            })
            .catch( error => {
                console.log("ERROR:: ", error);
                setError(error.message);
            })
            .finally( ()=> {
                setIsLoading(false);
            });

        return () => {
            controller.abort()
        }
    },[]);



    return(
        <CCard>
            <CCardBody>
                <CCardTitle>
                    Felhasználó frissítése #{id}
                </CCardTitle>
                {!isLoading && <EditUserForm user={user} />}
                <CAlert color='danger' visible={error != ''}>
                    {error}
                </CAlert>
            </CCardBody>
        </CCard>
    );
}

export default EditUser;
