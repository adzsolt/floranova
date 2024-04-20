import { CAlert } from "@coreui/react-pro";
import { CCard, CCardBody, CCardTitle } from "@coreui/react-pro";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditLayoutForm from "../components/layout/EditLayoutForm";
import EditLayout from "./EditLayout";


const EditPot = () => {
  const controller = new AbortController();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [layout, setLayout] = useState({});
  const [error, setError] = useState('');

  useEffect(()=>{
    let layout = {};
    axios.post('/get-layout', {id: id, signal: controller.signal})
      .then( (response) => {
        // console.log('get-user ', response.data.user);
        layout = response.data.layout;
      })
      .then( (response) => {
        // console.log('get-user-role ', response.data);
        setLayout(layout);
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
         Elrendezés frissítése #{id}
        </CCardTitle>
        {!isLoading && <EditLayoutForm layout={layout} />}
        <CAlert color='danger' visible={error != ''}>
          {error}
        </CAlert>
      </CCardBody>
    </CCard>
  );
}

export default EditPot;
