
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

const EditPotForm = ({pot}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();



  const formRef = useRef();
  const nameRef = useRef();
  const sizeRef = useRef();
  const priceRef = useRef();


  // console.log(user);
  /*  const handleRoleChange = (e) => {
      setRoleId(e.currentTarget.value);
    }*/

  const handleSubmit = async () => {
    const form = formRef.current;
    if (form.checkValidity() !== false)  {
      setIsLoading(true);

      await axios.post('/update-pot', {
        id: pot.id,
        name: nameRef.current.value,
        size: sizeRef.current.value,
        price: priceRef.current.value,

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
          navigate('/pot');
        });
    }
    setValidated(true);
  }

  const handleCancel = () => {
    navigate('/pot');
  }


  return (
    <CForm ref={formRef} className="needs-validation" noValidate validated={validated} >
      <CRow>
        <CCol md={6} className='mb-3'>
          <CFormFloating>
            <CFormInput ref={nameRef} type="text" name="name" id="name" placeholder="Cserép neve" disabled={isLoading} defaultValue={pot.name} feedbackInvalid='A cserép neve kötelező' required />
            <CFormLabel htmlFor="name">Cserép neve</CFormLabel>
          </CFormFloating>
        </CCol>

        <CCol md={6} className='mb-3'>
          <CFormFloating>
            <CFormInput ref={sizeRef} type="number" name="size" id="size" placeholder="Cserép mérete" step='any' disabled={isLoading} defaultValue={pot.size} feedbackInvalid='A cserép mérete kötelező' required />
            <CFormLabel htmlFor="name">Cserép mérete</CFormLabel>
          </CFormFloating>
        </CCol>

        <CCol md={6} className='mb-3'>

          <CFormFloating>
            <CFormInput ref={priceRef} type="number" name="price" id="price" placeholder="Cseráp ára" step='any' disabled={isLoading} defaultValue={pot.price} feedbackInvalid='A cserép ára kötelező' required />
            <CFormLabel htmlFor="name">Cserép ára</CFormLabel>
          </CFormFloating>
        </CCol>

        <CCol xs={12}>
          <CAlert color="danger" visible={error != ''}>
            {error}
          </CAlert>
        </CCol>
        <CCol xs={12} className="text-right">

          <CLoadingButton className= 'me-3' type="button" color="primary" loading={isLoading} disabled={isLoading} onClick={handleSubmit}>
            Cserép frissítése
          </CLoadingButton>
          <CButton color='light' disabled={isLoading} onClick={handleCancel} className='mr-1'>Mégsem</CButton>
        </CCol>
      </CRow>
    </CForm>
  )
}

export default EditPotForm;
