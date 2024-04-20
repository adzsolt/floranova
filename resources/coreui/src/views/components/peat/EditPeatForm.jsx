
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

const EditPeatForm = ({peat}) => {
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
  const priceRef = useRef();


  // console.log(user);
  /*  const handleRoleChange = (e) => {
      setRoleId(e.currentTarget.value);
    }*/

  const handleSubmit = async () => {
    const form = formRef.current;
    if (form.checkValidity() !== false)  {
      setIsLoading(true);

      await axios.post('/update-peat', {
        id: peat.id,
        name: nameRef.current.value,
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
          navigate('/peat');
        });
    }
    setValidated(true);
  }

  const handleCancel = () => {
    navigate('/peat');
  }


  return (
    <CForm ref={formRef} className="needs-validation" noValidate validated={validated} >
      <CRow>
        <CCol md={6} className='mb-3'>
          <CFormFloating>
            <CFormInput ref={nameRef} type="text" name="name" id="name" placeholder="Tőzeg neve" disabled={isLoading} defaultValue={peat.name} feedbackInvalid='A tüzeg neve kötelező' required />
            <CFormLabel htmlFor="name">Tőzeg neve</CFormLabel>
          </CFormFloating>
        </CCol>
        <CCol md={6} className='mb-3'>

          <CFormFloating>
            <CFormInput ref={priceRef} type="number" name="price" id="price" placeholder="Tőzeg ára" disabled={isLoading} defaultValue={peat.price} feedbackInvalid='A Tőzeg ára kötelező' required />
            <CFormLabel htmlFor="name">Tőzeg ára</CFormLabel>
          </CFormFloating>
        </CCol>

        <CCol xs={12}>
          <CAlert color="danger" visible={error != ''}>
            {error}
          </CAlert>
        </CCol>
        <CCol xs={12} className="text-right">

          <CLoadingButton className= 'me-3' type="button" color="primary" loading={isLoading} disabled={isLoading} onClick={handleSubmit}>
            Tőzeg frissítése
          </CLoadingButton>
          <CButton color='light' disabled={isLoading} onClick={handleCancel} className='mr-1'>Mégsem</CButton>
        </CCol>
      </CRow>
    </CForm>
  )
}

export default EditPeatForm;
