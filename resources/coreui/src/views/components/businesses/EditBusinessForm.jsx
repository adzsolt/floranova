
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
import heatUnit from "../../heat-unit/HeatUnit";
// import useMediaQuery from "../../hooks/useMediaQuery";

const EditBusinessForm = ({business}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();



  const formRef = useRef();
  const nameRef = useRef();



  // console.log(user);
  /*  const handleRoleChange = (e) => {
      setRoleId(e.currentTarget.value);
    }*/

  const handleSubmit = async () => {
    const form = formRef.current;
    if (form.checkValidity() !== false)  {
      setIsLoading(true);

      await axios.post('/update-business', {
        id: business.id,
        name: nameRef.current.value,

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
          navigate('/businesses');
        });
    }
    setValidated(true);
  }

  const handleCancel = () => {
    navigate('/businesses');
  }


  return (
    <CForm ref={formRef} className="needs-validation" noValidate validated={validated} >
      <CRow>
        <CCol md={6} className='mb-3'>
          <CFormFloating>
            <CFormInput ref={nameRef} type="text" name="name" id="name" placeholder="Egység neve" disabled={isLoading} defaultValue={business.name} feedbackInvalid='Egység neve kötelező' required />
            <CFormLabel htmlFor="name">Egység neve</CFormLabel>
          </CFormFloating>
        </CCol>


        <CCol xs={12}>
          <CAlert color="danger" visible={error != ''}>
            {error}
          </CAlert>
        </CCol>
        <CCol xs={12} className="text-right">

          <CLoadingButton className= 'me-3' type="button" color="primary" loading={isLoading} disabled={isLoading} onClick={handleSubmit}>
            Fűtőegység frissítése
          </CLoadingButton>
          <CButton color='light' disabled={isLoading} onClick={handleCancel} className='mr-1'>Mégsem</CButton>
        </CCol>
      </CRow>
    </CForm>
  )
}

export default EditBusinessForm;
