import {CButton, CFormSelect} from '@coreui/react-pro';
import {
  CCol,
  CForm,
  CFormInput,
  CRow,
  CFormLabel,
  CFormFloating,
  CLoadingButton,
  CAlert,
  CButtonGroup,
  CFormCheck
} from "@coreui/react-pro";
import axios from "axios";
import {CDatePicker} from "@coreui/react-pro";
import React, {useContext, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {GlobalContext} from "../../context/GlobalContext";
// import useMediaQuery from "../../hooks/useMediaQuery";

const AddTemperatureForm = ({heat_units1}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState('');
  const {roles} = useContext(GlobalContext);
  const [roleId, setRoleId] = useState(1);
  const navigate = useNavigate();

  const [work_date, setWorkDate] = useState('');
  const [heatUnits, setHeatUnits] = useState(heat_units1);
  const [heatUnitId, setHeatUnitId] = useState(heat_units1[0].id);

  const formRef = useRef();
  const outside_temperature = useRef();
  const daytime_temperature = useRef();
  const night_temperature = useRef();

  const handleSubmit = () => {
    const form = formRef.current;
    if (form.checkValidity() !== false) {
      setIsLoading(true);
      axios.post('/store-temperature', {
        work_date: work_date,
        outside_temperature: outside_temperature.current.value,
        daytime_temperature: 0,
        night_temperature:0,
        heat_unit_id:heatUnitId

      })
        .then((response) => {

          navigate('/temperatures');
        })
        .catch(error => {
          console.log("ERROR:: ", error);
          setError(error.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }

    setValidated(true);

  }

  const handleHeatUnitChange = (e) => {
    setHeatUnitId(e.currentTarget.value);
  }


  const handleCancel = () => {
    navigate('/temperatures');
  }

  const handleSetWorkDate = (d) => {
    setWorkDate(d);
  }



  return (

    <CForm ref={formRef} className="needs-validation" noValidate validated={validated}>
      <CRow>

        <CCol md={6} className='mb-3'>
          <CFormSelect aria-label="Válassz fűtőegységet" className='mb-3' value={heatUnitId} onChange={handleHeatUnitChange}>
            <option>Fűtőegységek</option>
            {heatUnits.map(val => (
              <option value={val.id} key={val.id} >{val.name} </option>
            ))
            }

          </CFormSelect>
        </CCol>

        <CCol md={6} className='mb-3'>

          <CDatePicker
            locale="en-US"
            placeholder="Adj meg egy dátumot"
            required
            feedbackInvalid='A dátum kötelező'
            onDateChange={(date) => {
              date.setMinutes(date.getMinutes()-date.getTimezoneOffset())
              handleSetWorkDate(date.toISOString().split('T')[0])}
            }
          />
          {/*  <CFormInput ref={emailRef} type="email" name="email" id="email" placeholder="Email" disabled={isLoading} feedbackInvalid='Please provide a valid Email' required />
            <CFormLabel htmlFor="email">E-mail</CFormLabel>*/}
        </CCol>

        <CCol md={6} className='mb-3'>
          <CFormFloating>
            <CFormInput ref={outside_temperature} type="text" name="outside_temperature" id="outside_temperature" placeholder="Benti hőmérséklet" disabled={isLoading}
                        feedbackInvalid='Add meg a benti hőmársákletet' required/>
            <CFormLabel htmlFor="outside_temperature">Benti hőmérséklet</CFormLabel>
          </CFormFloating>
        </CCol>

        {/*<CCol md={6} className='mb-3'>
        <CFormFloating>
          <CFormInput ref={daytime_temperature} type="text" name="daytime_temperature" id="daytime_temperature" placeholder="Nappali hőmérséklet" disabled={isLoading}
                      feedbackInvalid='Add meg a nappali hőmársákletet' required/>
          <CFormLabel htmlFor="daytime_temperature">Nappali hőmérséklet</CFormLabel>
        </CFormFloating>
      </CCol>*/}

        {/*<CCol md={6} className='mb-3'>
          <CFormFloating>
            <CFormInput ref={night_temperature} type="text" name="night-temperature" id="night-temperature" placeholder="Éjjeli hőmérésklet" disabled={isLoading}
                        feedbackInvalid='Add meg az éjjeli hőmérésékletet' required/>
            <CFormLabel htmlFor="night-temperature">Éjjeli hőmérséklet</CFormLabel>
          </CFormFloating>
        </CCol>*/}


        <CCol xs={12}>
          <CAlert color="danger" visible={error != ''}>
            {error}
          </CAlert>
        </CCol>
        <CCol xs={12} className="text-right">
          <CLoadingButton type="button" color="primary" loading={isLoading} disabled={isLoading} onClick={handleSubmit}>
        Hőmérséklet létrehozása
          </CLoadingButton>
          <CButton color='light' disabled={isLoading} onClick={handleCancel} className='mr-1 ms-4'>Mégsem</CButton>
        </CCol>
      </CRow>
    </CForm>
  )
}

export default AddTemperatureForm;
