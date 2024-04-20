
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

const EditLayoutForm = ({layout}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();



  const formRef = useRef();
  const nameRef = useRef();
  const pot_per_m2Ref = useRef();


  // console.log(user);
  /*  const handleRoleChange = (e) => {
      setRoleId(e.currentTarget.value);
    }*/

  const handleSubmit = async () => {
    const form = formRef.current;
    if (form.checkValidity() !== false)  {
      setIsLoading(true);

      await axios.post('/update-layout', {
        id: layout.id,
        name: nameRef.current.value,
        pot_per_m2: pot_per_m2Ref.current.value,

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
          navigate('/layouts');
        });
    }
    setValidated(true);
  }

  const handleCancel = () => {
    navigate('/layouts');
  }


  return (
    <CForm ref={formRef} className="needs-validation" noValidate validated={validated} >
      <CRow>
        <CCol md={6} className='mb-3'>
          <CFormFloating>
            <CFormInput ref={nameRef} type="text" name="name" id="name" placeholder="Elrendezés neve" disabled={isLoading} defaultValue={layout.name} feedbackInvalid='Az elrendezés neve kötelező' required />
            <CFormLabel htmlFor="name">Elrendezés neve</CFormLabel>
          </CFormFloating>
        </CCol>

        <CCol md={6} className='mb-3'>
          <CFormFloating>
            <CFormInput ref={pot_per_m2Ref} type="number" name="pot_per_m2" id="pot_per_m2" placeholder="Elrendezés neve" disabled={isLoading} defaultValue={layout.pot_per_m2} feedbackInvalid='A cserép darab per m2 kötelező' required />
            <CFormLabel htmlFor="name">Cserép darab per m2</CFormLabel>
          </CFormFloating>
        </CCol>


        <CCol xs={12}>
          <CAlert color="danger" visible={error != ''}>
            {error}
          </CAlert>
        </CCol>
        <CCol xs={12} className="text-right">

          <CLoadingButton className= 'me-3' type="button" color="primary" loading={isLoading} disabled={isLoading} onClick={handleSubmit}>
            Elrendezés frissítése
          </CLoadingButton>
          <CButton color='light' disabled={isLoading} onClick={handleCancel} className='mr-1'>Mégsem</CButton>
        </CCol>
      </CRow>
    </CForm>
  )
}

export default EditLayoutForm;
