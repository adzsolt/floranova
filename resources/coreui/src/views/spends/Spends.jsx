import React, {useContext, useEffect, useState} from 'react'
import {cilUserPlus} from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import {CAlert, CButton, CCard, CCardBody, CCardTitle, CCol, CRow} from '@coreui/react-pro';
//import useStore from "/resources/js/Pages/src/zustand1";
import {CSpinner} from '@coreui/react-pro';
import {useNavigate} from 'react-router-dom';
import {GlobalContext} from '../context/GlobalContext';
import SeasonsList from "../components/seasons/SeasonsList";
import WorksList from "../components/works/WorksList";
import TemperatureList from "../components/temperatures/TemperatureList";
import Spendslist from "../components/spends/SpendsList";
import axios from "axios";
//import useIsAdmin from '../../hooks/useIsAdmin';


const Spends = () => {

  const controller = new AbortController();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  //const isAdmin = useIsAdmin();
  // const showAddButton = isAdmin || user?.permissions?.includes('add_users');

  const handleAdd = () => {
    navigate('/spends/add');
  }




  // const permissions = useStore((state) => state.permissions);


  return (
    <CCard className='mb-3'>
      <CCardBody>
        <CRow>
          <CCol className='d-flex justify-content-between mb-3'>
            <CCardTitle>
              Fogyasztás
            </CCardTitle>

            <CButton color='light' onClick={handleAdd}>
              <CIcon icon={cilUserPlus} className='btn-icon mr-2'/> Fogyasztás hozzáadása
            </CButton>
          </CCol>
          <CCol xs={12}>
            {/* {isLoading ? <div className='text-center'><CSpinner color='primary'/></div> :*/}
           <Spendslist/>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  );
}

export default Spends;
