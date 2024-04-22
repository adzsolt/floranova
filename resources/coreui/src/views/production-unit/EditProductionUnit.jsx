import { CAlert } from "@coreui/react-pro";
import { CCard, CCardBody, CCardTitle } from "@coreui/react-pro";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditProductionUnitForm from "../components/production-unit/EditProductionUnitForm";


const EditProductionUnit = () => {
  const controller = new AbortController();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [productionUnit, setProductionUnit] = useState({});
  const [error, setError] = useState('');

  useEffect(()=>{
    let production_unit = {};
    axios.post('/get-production-unit', {id: id, signal: controller.signal})
      .then( (response) => {
        // console.log('get-user ', response.data.user);
        production_unit = response.data.production_unit;
        setProductionUnit(production_unit);
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
          Termelőegység frissítése #{id}
        </CCardTitle>
        {!isLoading && <EditProductionUnitForm production_unit={productionUnit} />}
        <CAlert color='danger' visible={error != ''}>
          {error}
        </CAlert>
      </CCardBody>
    </CCard>
  );
}

export default EditProductionUnit;
