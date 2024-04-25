
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

const EditPlantForm = ({plant}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();



  const formRef = useRef();
  const nameRef = useRef();
  const colorRef = useRef();
  const priceRef = useRef();


  // console.log(user);
  /*  const handleRoleChange = (e) => {
      setRoleId(e.currentTarget.value);
    }*/

  const handleSubmit = async () => {
    const form = formRef.current;
    if (form.checkValidity() !== false)  {
      setIsLoading(true);

      await axios.post('/update-plant', {
        id: plant.id,
        name: nameRef.current.value,
        color: colorRef.current.value,
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
          navigate('/plant');
        });
    }
    setValidated(true);
  }

  const handleCancel = () => {
    navigate('/plant');
  }


  return (
    <CForm ref={formRef} className="needs-validation" noValidate validated={validated} >
      <CRow>
        <CCol md={6} className='mb-3'>
          <CFormFloating>
            <CFormInput ref={nameRef} type="text" name="name" id="name" placeholder="Cserép neve" disabled={isLoading} defaultValue={plant.name} feedbackInvalid='A Növény neve kötelező' required />
            <CFormLabel htmlFor="name">Növény neve</CFormLabel>
          </CFormFloating>
        </CCol>

        <CCol md={6} className='mb-3'>
          <CFormFloating>
            <CFormInput ref={colorRef} type="text" name="color" id="color" placeholder="Növény színe"  disabled={isLoading} defaultValue={plant.color} feedbackInvalid='A növény színe kötelező' required />
            <CFormLabel htmlFor="color">Növény színe</CFormLabel>
          </CFormFloating>
        </CCol>

        <CCol md={6} className='mb-3'>

          <CFormFloating>
            <CFormInput ref={priceRef} type="number" name="price" id="price" placeholder="Növény ára" step='any' disabled={isLoading} defaultValue={plant.price} feedbackInvalid='A növény ára kötelező' required />
            <CFormLabel htmlFor="name">Növény ára</CFormLabel>
          </CFormFloating>
        </CCol>

        <CCol xs={12}>
          <CAlert color="danger" visible={error != ''}>
            {error}
          </CAlert>
        </CCol>
        <CCol xs={12} className="text-right">

          <CLoadingButton className= 'me-3' type="button" color="primary" loading={isLoading} disabled={isLoading} onClick={handleSubmit}>
           Növény frissítése
          </CLoadingButton>
          <CButton color='light' disabled={isLoading} onClick={handleCancel} className='mr-1'>Mégsem</CButton>
        </CCol>
      </CRow>
    </CForm>
  )
}

export default EditPlantForm;
