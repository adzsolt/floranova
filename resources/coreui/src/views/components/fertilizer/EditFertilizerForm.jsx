
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
  CDatePicker, CFormSelect
} from "@coreui/react-pro";
import axios from "axios";
import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
// import useMediaQuery from "../../hooks/useMediaQuery";

const EditFertilizerForm = ({fertilizer}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState('');
  /* const { roles } = useContext(GlobalContext);
   const [roleId, setRoleId] = useState(user.role[0]?.id);*/
  const navigate = useNavigate();

  /* const [start_date, setStartDate] = useState(season.start_date);
   const [end_date, setEndDate] = useState(season.end_date);*/

  const [using, setUsing] = useState(fertilizer.using);
  const formRef = useRef();
  const nameRef = useRef();
  const provisionRef = useRef();
  const priceRef = useRef();


  // console.log(user);
  /*  const handleRoleChange = (e) => {
      setRoleId(e.currentTarget.value);
    }*/

  const handleSubmit = async () => {
    const form = formRef.current;
    if (form.checkValidity() !== false)  {
      setIsLoading(true);

      await axios.post('/update-fertilizer', {
        id:fertilizer.id,
        name: nameRef.current.value,
        using: using,
        provision: provisionRef.current.value,
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
          navigate('/fertilizer');
        });
    }
    setValidated(true);
  }



  const handleUsingChange = (e) => {
    setUsing(e.currentTarget.value);
  }
  const handleCancel = () => {
    navigate('/fertilizer');
  }


  return (
    <CForm ref={formRef} className="needs-validation" noValidate validated={validated} >
      <CRow>
        <CCol md={6} className='mb-3'>
          <CFormFloating>
            <CFormInput ref={nameRef} type="text" name="name" id="name" placeholder="Műtrágya neve" disabled={isLoading} defaultValue={fertilizer.name} feedbackInvalid='A műtrágyaneve kötelező' required />
            <CFormLabel htmlFor="name">Műtrágya neve</CFormLabel>
          </CFormFloating>
        </CCol>


          <CCol md={6} className='mb-3'>
            <CFormSelect  aria-label="Válassz használati formát" className='mb-3' defaultValue={fertilizer.using} onChange={handleUsingChange}>

              <option value='Egyszeri' key='egyszeri'>Egyszeri</option>
              <option value='Tőbbszori' key='tobbszori'>Többszöri</option>
            </CFormSelect>
          </CCol>


        <CCol md={6} className='mb-3'>
          <CFormFloating>
            <CFormInput ref={provisionRef} type="number" name="provision" id="provision" placeholder="Műtrágya tartalék" step='any' disabled={isLoading} defaultValue={fertilizer.provision} feedbackInvalid='A műtrtágya tartalék kötelező' required />
            <CFormLabel htmlFor="provision">Műtrágya tartalék</CFormLabel>
          </CFormFloating>
        </CCol>


        <CCol md={6} className='mb-3'>
          <CFormFloating>
          <CFormInput ref={priceRef} type="number" name="price" id="price" placeholder="Műtrágya  ára" step='any' disabled={isLoading} defaultValue={fertilizer.price} feedbackInvalid='A műtrágya ára kötelező' required />
          <CFormLabel htmlFor="price">Műtrágya ára</CFormLabel>
        </CFormFloating>
      </CCol>

        <CCol xs={12}>
          <CAlert color="danger" visible={error != ''}>
            {error}
          </CAlert>
        </CCol>
        <CCol xs={12} className="text-right">

          <CLoadingButton className= 'me-3' type="button" color="primary" loading={isLoading} disabled={isLoading} onClick={handleSubmit}>
            Műtrágya frissítése
          </CLoadingButton>
          <CButton color='light' disabled={isLoading} onClick={handleCancel} className='mr-1'>Mégsem</CButton>
        </CCol>
      </CRow>
    </CForm>
  )
}

export default EditFertilizerForm;
