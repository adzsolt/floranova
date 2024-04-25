import { CAlert } from "@coreui/react-pro";
import { CCard, CCardBody, CCardTitle } from "@coreui/react-pro";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditPlantForm from "../components/plant/EditPlanForm";


const EditPlant = () => {
  const controller = new AbortController();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [plant, setPlant] = useState({});
  const [error, setError] = useState('');

  useEffect(()=>{
    let plant = {};
    axios.post('/get-plant', {id: id, signal: controller.signal})
      .then( (response) => {
        // console.log('get-user ', response.data.user);
        plant = response.data.plant;
      })
      .then( (response) => {
        // console.log('get-user-role ', response.data);
        setPlant(plant);
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
          Növény frissítése #{id}
        </CCardTitle>
        {!isLoading && <EditPlantForm plant={plant} />}
        <CAlert color='danger' visible={error != ''}>
          {error}
        </CAlert>
      </CCardBody>
    </CCard>
  );
}

export default EditPlant;
