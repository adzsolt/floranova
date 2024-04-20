import {CButton} from '@coreui/react-pro';
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
import {useContext, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {GlobalContext} from "../../context/GlobalContext";
// import useMediaQuery from "../../hooks/useMediaQuery";

const AddSeasonForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState('');
  const {roles} = useContext(GlobalContext);
  const [roleId, setRoleId] = useState(1);
  const navigate = useNavigate();

  const [start_date, setStartDate] = useState('');
  const [end_date, setEndDate] = useState('');

  const formRef = useRef();
  const datePicker1Ref = useRef();
  const nameRef = useRef();
  const start_dateRef = useRef();
  const end_dateRef = useRef();

  const handleRoleChange = (e) => {
    /* setRoleId(e.currentTarget.value);*/
  }

  //console.log(roles[0]);

  const handleSubmit = () => {
    const form = formRef.current;
    if (form.checkValidity() !== false) {
      setIsLoading(true);

      axios.post('/create-season', {
        name: nameRef.current.value,
        start_date: start_date,
        end_date: end_date,
      })
        .then((response) => {
          // console.log('update role success ', response.data);
          navigate('/seasons');
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

  const handleCancel = () => {
    navigate('/seasons');
  }

  const handleSetStartDate = (d) => {
    setStartDate(d);
  }

  const handleSetEndDate = (d) => {
    setEndDate(d);
  }


  return (

    <CForm ref={formRef} className="needs-validation" noValidate validated={validated}>
      <CRow>
        <CCol md={6} className='mb-3'>
          <CFormFloating>
            <CFormInput ref={nameRef} type="text" name="name" id="name" placeholder="Name" disabled={isLoading}
                        feedbackInvalid='Adj meg egy nevet' required/>
            <CFormLabel htmlFor="name">Név</CFormLabel>
          </CFormFloating>
        </CCol>
        <CCol md={6} className='mb-3'>

              <CDatePicker
                           locale="en-US"
                           placeholder="Adj mage egy kezdési dátumot"
                           required
                           feedbackInvalid='A kezdési dátum kötelező'
                           onDateChange={(date) => {
                             date.setMinutes(date.getMinutes()-date.getTimezoneOffset())
                             handleSetStartDate(date.toISOString().split('T')[0])}
              }
                />
            {/*  <CFormInput ref={emailRef} type="email" name="email" id="email" placeholder="Email" disabled={isLoading} feedbackInvalid='Please provide a valid Email' required />
            <CFormLabel htmlFor="email">E-mail</CFormLabel>*/}
        </CCol>
        <CCol md={6} className='mb-3'>
          <CDatePicker
                       locale="en-US"
                       placeholder="Adj meg egy befejezési dátumot"
                       required
                       feedbackInvalid='A befejezési dátum kötelező'
                       onDateChange={(date) => {
                         date.setMinutes(date.getMinutes()-date.getTimezoneOffset())
                         handleSetEndDate(date.toISOString().split('T')[0])}
          }/>
        </CCol>
        <CCol xs={12}>
          <CAlert color="danger" visible={error != ''}>
            {error}
          </CAlert>
        </CCol>
        <CCol xs={12} className="text-right">
          <CLoadingButton type="button" color="primary" loading={isLoading} disabled={isLoading} onClick={handleSubmit}>
           Szezon létrehozása
          </CLoadingButton>
          <CButton color='light' disabled={isLoading} onClick={handleCancel} className='mr-1 ms-4'>Mégsem</CButton>
        </CCol>
      </CRow>
    </CForm>
  )
}

export default AddSeasonForm;
