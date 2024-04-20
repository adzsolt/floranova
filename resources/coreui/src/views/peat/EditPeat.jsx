import { CAlert } from "@coreui/react-pro";
import { CCard, CCardBody, CCardTitle } from "@coreui/react-pro";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditPeatForm from "../components/peat/EditPeatForm";


const EditPeat = () => {
  const controller = new AbortController();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [peat, setPeat] = useState({});
  const [error, setError] = useState('');

  useEffect(()=>{
    let peat = {};
    axios.post('/get-peat', {id: id, signal: controller.signal})
      .then( (response) => {
        // console.log('get-user ', response.data.user);
        peat = response.data.peat;
      })
      .then( (response) => {
        // console.log('get-user-role ', response.data);
        setPeat(peat);
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
          Tőzeg frissítése #{id}
        </CCardTitle>
        {!isLoading && <EditPeatForm peat={peat} />}
        <CAlert color='danger' visible={error != ''}>
          {error}
        </CAlert>
      </CCardBody>
    </CCard>
  );
}

export default EditPeat;
