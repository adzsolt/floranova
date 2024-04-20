import { CAlert } from "@coreui/react-pro";
import { CCard, CCardBody, CCardTitle } from "@coreui/react-pro";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditHeatUnitForm from "../components/heat-unit/EditHeatUnitForm";


const EditHeatUnit = () => {
  const controller = new AbortController();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [heatUnit, setHeatUnit] = useState({});
  const [error, setError] = useState('');

  useEffect(()=>{
    let heat_unit = {};
    axios.post('/get-heat-unit', {id: id, signal: controller.signal})
      .then( (response) => {
        // console.log('get-user ', response.data.user);
        heat_unit = response.data.heat_unit;
      })
      .then( (response) => {
        // console.log('get-user-role ', response.data);
        setHeatUnit(heat_unit);
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
          Fűtőegység frissítése #{id}
        </CCardTitle>
        {!isLoading && <EditHeatUnitForm heat_unit={heatUnit} />}
        <CAlert color='danger' visible={error != ''}>
          {error}
        </CAlert>
      </CCardBody>
    </CCard>
  );
}

export default EditHeatUnit;
