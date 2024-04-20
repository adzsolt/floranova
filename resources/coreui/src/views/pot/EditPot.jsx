import { CAlert } from "@coreui/react-pro";
import { CCard, CCardBody, CCardTitle } from "@coreui/react-pro";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditPotForm from "../components/pot/EditPotForm";


const EditPot = () => {
  const controller = new AbortController();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [pot, setPot] = useState({});
  const [error, setError] = useState('');

  useEffect(()=>{
    let pot = {};
    axios.post('/get-pot', {id: id, signal: controller.signal})
      .then( (response) => {
        // console.log('get-user ', response.data.user);
        pot = response.data.pot;
      })
      .then( (response) => {
        // console.log('get-user-role ', response.data);
        setPot(pot);
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
          Cserép frissítése #{id}
        </CCardTitle>
        {!isLoading && <EditPotForm pot={pot} />}
        <CAlert color='danger' visible={error != ''}>
          {error}
        </CAlert>
      </CCardBody>
    </CCard>
  );
}

export default EditPot;
