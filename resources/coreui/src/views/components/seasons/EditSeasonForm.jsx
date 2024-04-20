
import {
  CCol,
  CForm,
  CFormInput,
  CRow,
  CFormLabel,
  CFormFloating,
  CLoadingButton,
  CAlert,
  CButton,
  CButtonGroup,
  CFormCheck,
  CDatePicker
} from "@coreui/react-pro";
import axios from "axios";
import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
// import useMediaQuery from "../../hooks/useMediaQuery";

const EditSeasonForm = ({season}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState('');
 /* const { roles } = useContext(GlobalContext);
  const [roleId, setRoleId] = useState(user.role[0]?.id);*/
  const navigate = useNavigate();

 /* const [start_date, setStartDate] = useState(season.start_date);
  const [end_date, setEndDate] = useState(season.end_date);*/

  const formRef = useRef();
  const nameRef = useRef();
  const startDateRef = useRef(season.start_date);
  const endDateRef = useRef(season.end_date);

  // console.log(user);
/*  const handleRoleChange = (e) => {
    setRoleId(e.currentTarget.value);
  }*/

  const handleSubmit = async () => {
    const form = formRef.current;
    if (form.checkValidity() !== false)  {
      setIsLoading(true);

      await axios.post('/update-season', {
        id: season.id,
        name: nameRef.current.value,
        start_date: startDateRef.current,
        end_date: endDateRef.current,
      })
        .then( (response) => {
          //console.log('update user success ', response.data);

        })
        .catch( error => {
          console.log("ERROR:: ", error);
          setError(error.message);
        })
        .finally( ()=> {
          setIsLoading(false);
          navigate('/seasons');
        });
    }
    setValidated(true);
  }

  const handleCancel = () => {
    navigate('/seasons');
  }

  const handleSetStartDate = (d) => {
    console.log(d)
    startDateRef.current = d;
  }

  const handleSetEndDate = (d) => {

    endDateRef.current = d;
  }

  return (
    <CForm ref={formRef} className="needs-validation" noValidate validated={validated} >
      <CRow>
        <CCol md={6} className='mb-3'>
          <CFormFloating>
            <CFormInput ref={nameRef} type="text" name="name" id="name" placeholder="Szezon neve" disabled={isLoading} defaultValue={season.name} feedbackInvalid='A szezon neve kötelező' required />
            <CFormLabel htmlFor="name">Szezon neve</CFormLabel>
          </CFormFloating>
        </CCol>
        <CCol md={6} className='mb-3'>
          <CDatePicker
            locale="en-US"
            date={startDateRef.current}
            placeholder="Adj mage egy kezdési dátumot"
            required
            feedbackInvalid='A kezdési dátum kötelező'
            onDateChange={(date) => {
              date.setMinutes(date.getMinutes()-date.getTimezoneOffset())
              handleSetStartDate(date.toISOString().split('T')[0])}
            }
          />
        </CCol>
        <CCol md={6} className='mb-3'>
          <CDatePicker
            locale="en-US"
            date={endDateRef.current}
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

          <CLoadingButton className= 'me-3' type="button" color="primary" loading={isLoading} disabled={isLoading} onClick={handleSubmit}>
            Szezon frissítése
          </CLoadingButton>
          <CButton color='light' disabled={isLoading} onClick={handleCancel} className='mr-1'>Mégsem</CButton>
        </CCol>
      </CRow>
    </CForm>
  )
}

export default EditSeasonForm;
