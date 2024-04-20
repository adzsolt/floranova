import { CAlert } from "@coreui/react-pro";
import { CCard, CCardBody, CCardTitle } from "@coreui/react-pro";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditSeasonForm from "../components/seasons/EditSeasonForm";


const EditSeason = () => {
  const controller = new AbortController();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [season, setSeason] = useState({});
  const [error, setError] = useState('');

  useEffect(()=>{
    let season = {};
    axios.post('/get-season', {id: id, signal: controller.signal})
      .then( (response) => {
        // console.log('get-user ', response.data.user);
        season = response.data.season;
      })
      .then( (response) => {
        // console.log('get-user-role ', response.data);
        setSeason(season);
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
          Szezon frissítése #{id}
        </CCardTitle>
        {!isLoading && <EditSeasonForm season={season} />}
        <CAlert color='danger' visible={error != ''}>
          {error}
        </CAlert>
      </CCardBody>
    </CCard>
  );
}

export default EditSeason;
