import { CCard, CCardBody, CCardTitle } from "@coreui/react-pro";
import React, {useEffect, useState} from "react";
import AddSeasonForm from "../components/seasons/AddSeasonForm";
import AddTemperatureForm from "../components/temperatures/AddTemperatureForm";
import {useParams} from "react-router-dom";
import axios from "axios";
import EditHeatUnitForm from "../components/heat-unit/EditHeatUnitForm";


const AddTemperature = () => {
  const controller = new AbortController();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [heatUnits, setHeatUnits] = useState({});
  const [error, setError] = useState('');

  useEffect(()=>{
    let heat_units = {};
    axios.get('/get-heat-units', {id: id, signal: controller.signal})
      .then( (response) => {
        // console.log('get-user ', response.data.user);
        heat_units = response.data.heat_units;
      })
      .then( (response) => {
        // console.log('get-user-role ', response.data);
        setHeatUnits(heat_units);
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

  console.log(heatUnits)
  return(
    <CCard>
      <CCardBody>
        <CCardTitle>
          Hőmérséklet hozzáadása
        </CCardTitle>
        {!isLoading && <AddTemperatureForm heat_units1={heatUnits} />}
      </CCardBody>
    </CCard>
  );
}

export default AddTemperature;
