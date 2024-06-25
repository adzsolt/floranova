import { CAlert } from "@coreui/react-pro";
import { CCard, CCardBody, CCardTitle } from "@coreui/react-pro";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditBusinessForm from "../components/businesses/EditBusinessForm";


const EditBusiness = () => {
  const controller = new AbortController();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [business, setBusiness] = useState({});
  const [error, setError] = useState('');

  useEffect(()=>{
    let business = {};
    axios.post('/get-business', {id: id, signal: controller.signal})
      .then( (response) => {
        // console.log('get-user ', response.data.user);
        business = response.data.business;
      })
      .then( (response) => {
        // console.log('get-user-role ', response.data);
        setBusiness(business);
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
          Egység frissítése #{id}
        </CCardTitle>
        {!isLoading && <EditBusinessForm business={business} />}
        <CAlert color='danger' visible={error != ''}>
          {error}
        </CAlert>
      </CCardBody>
    </CCard>
  );
}

export default EditBusiness;
