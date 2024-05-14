import { CAlert } from "@coreui/react-pro";
import { CCard, CCardBody, CCardTitle } from "@coreui/react-pro";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditFertilizerForm from "../components/fertilizer/EditFertilizerForm";


const EditFertilizer = () => {
  const controller = new AbortController();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [fertilizer, setFertilizer] = useState({});
  const [error, setError] = useState('');

  useEffect(()=>{
    let fertilizer = {};
    axios.post('/get-fertilizer', {id: id, signal: controller.signal})
      .then( (response) => {
        // console.log('get-user ', response.data.user);
        fertilizer = response.data.fertilizer;
      })
      .then( (response) => {
        // console.log('get-user-role ', response.data);
        setFertilizer(fertilizer);
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
          Műtrágya frissítése #{id}
        </CCardTitle>
        {!isLoading && <EditFertilizerForm fertilizer={fertilizer} />}
        <CAlert color='danger' visible={error != ''}>
          {error}
        </CAlert>
      </CCardBody>
    </CCard>
  );
}

export default EditFertilizer;
