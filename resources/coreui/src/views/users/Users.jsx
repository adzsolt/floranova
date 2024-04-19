import React, {useContext, useEffect, useState} from 'react'
import {cilUserPlus} from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import {CAlert, CButton, CCard, CCardBody, CCardTitle, CCol, CRow} from '@coreui/react-pro';
//import useStore from "/resources/js/Pages/src/zustand1";
import UsersList from '../components/users/UsersList';
import {CSpinner} from '@coreui/react-pro';
import {useNavigate} from 'react-router-dom';
import {GlobalContext} from '../context/GlobalContext';
//import useIsAdmin from '../../hooks/useIsAdmin';


const Users = () => {

/*  const { user, users } = useContext(GlobalContext);*/

  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  //const isAdmin = useIsAdmin();
  // const showAddButton = isAdmin || user?.permissions?.includes('add_users');

  const handleAdd = () => {
    navigate('/users/add');
  }



  // const permissions = useStore((state) => state.permissions);
  // console.log(permissions);

  return (
    <CCard className='mb-3'>
      <CCardBody>
        <CRow>
          <CCol className='d-flex justify-content-between mb-3'>
            <CCardTitle>
              Felhasználók
            </CCardTitle>

            <CButton color='light' onClick={handleAdd}>
              <CIcon icon={cilUserPlus} className='btn-icon mr-2'/> Felhszasználó hozzáadása
            </CButton>
          </CCol>
          <CCol xs={12}>

              <UsersList/>
          </CCol>

        </CRow>
      </CCardBody>
    </CCard>
  );
}

export default Users;
