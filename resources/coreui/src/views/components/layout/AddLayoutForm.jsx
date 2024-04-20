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

const AddLayoutForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const formRef = useRef();
  const nameRef = useRef();
  const  pot_per_m2Ref= useRef();


  const handleSubmit = () => {
    const form = formRef.current;
    if (form.checkValidity() !== false) {
      setIsLoading(true);

      axios.post('/create-layout', {
        name: nameRef.current.value,
        pot_per_m2: pot_per_m2Ref.current.value,
      })
        .then((response) => {
          // console.log('update role success ', response.data);
          navigate('/layouts');
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
    navigate('/layouts');
  }



  return (

    <CForm ref={formRef} className="needs-validation" noValidate validated={validated}>
      <CRow>
        <CCol md={6} className='mb-3'>

          <CFormInput ref={nameRef} type="text" name="name" id="name" placeholder="Name" disabled={isLoading}
                      feedbackInvalid='Adj meg egy nevet' required/>
          <CFormLabel htmlFor="name">Név</CFormLabel>
        </CCol>

        <CCol md={6} className='mb-3'>
          <CFormInput ref={pot_per_m2Ref} type="number" name="pot_per_m2" id="pot_per_m2" placeholder="Cserép per m2" disabled={isLoading} feedbackInvalid='Add meg a cserepek számát egy négyzetméteren' required />
          <CFormLabel htmlFor="pot_per_m2">Cserép darab per m2</CFormLabel>
        </CCol>


        <CCol xs={12}>
          <CAlert color="danger" visible={error != ''}>
            {error}
          </CAlert>
        </CCol>
        <CCol xs={12} className="text-right">
          <CLoadingButton type="button" color="primary" loading={isLoading} disabled={isLoading} onClick={handleSubmit}>
           Elrendezés létrehozása
          </CLoadingButton>
          <CButton color='light' disabled={isLoading} onClick={handleCancel} className='mr-1 ms-4'>Mégsem</CButton>
        </CCol>
      </CRow>
    </CForm>
  )
}

export default AddLayoutForm;
