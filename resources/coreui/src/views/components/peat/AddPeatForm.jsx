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

const AddPeatForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState('');
  const {roles} = useContext(GlobalContext);
  const [roleId, setRoleId] = useState(1);
  const navigate = useNavigate();

  const [start_date, setStartDate] = useState('');
  const [end_date, setEndDate] = useState('');

  const formRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();


  const handleSubmit = () => {
    const form = formRef.current;
    if (form.checkValidity() !== false) {
      setIsLoading(true);

      axios.post('/create-peat', {
        name: nameRef.current.value,
        price: priceRef.current.value,
      })
        .then((response) => {
          // console.log('update role success ', response.data);
          navigate('/peat');
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
    navigate('/peat');
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
            <CFormInput ref={priceRef} type="number" name="price" id="price" placeholder="Ár" step='any' disabled={isLoading} feedbackInvalid='Adj meg egy árat' required />
            <CFormLabel htmlFor="price">Ár</CFormLabel>
        </CCol>

        <CCol xs={12}>
          <CAlert color="danger" visible={error != ''}>
            {error}
          </CAlert>
        </CCol>
        <CCol xs={12} className="text-right">
          <CLoadingButton type="button" color="primary" loading={isLoading} disabled={isLoading} onClick={handleSubmit}>
            Tőzeg létrehozása
          </CLoadingButton>
          <CButton color='light' disabled={isLoading} onClick={handleCancel} className='mr-1 ms-4'>Mégsem</CButton>
        </CCol>
      </CRow>
    </CForm>
  )
}

export default AddPeatForm;
