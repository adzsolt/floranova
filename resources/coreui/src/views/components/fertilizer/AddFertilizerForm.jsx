import {CButton, CFormSelect} from '@coreui/react-pro';
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

const AddFertilizerForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const [start_date, setStartDate] = useState('');
  const [using, setUsing] = useState('');
  const formRef = useRef();
  const nameRef = useRef();
  const provisionRef = useRef();
  const priceRef = useRef();



  const handleSubmit = () => {
    const form = formRef.current;
    if (form.checkValidity() !== false) {
      setIsLoading(true);

      axios.post('/create-fertilizer', {
        name: nameRef.current.value,
        using: using,
        provision: provisionRef.current.value,
        price: priceRef.current.value,
        action_date: start_date,
      })
        .then((response) => {
          // console.log('update role success ', response.data);
          navigate('/fertilizer');
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
    navigate('/fertilizer');
  }

  const handleSetStartDate = (d) => {
    setStartDate(d);
  }

  const handleUsingChange = (e) => {
    setUsing(e.currentTarget.value);
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
            placeholder="Adj meg egy kezdési dátumot"
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
          <CFormSelect aria-label="Válassz használati formát" className='mb-3' onChange={handleUsingChange}>
            <option>Válassz használati formát</option>
              <option value='Egyszeri' key='egyszeri'>Egyszeri</option>
              <option value='Tőbbszori' key='tobbszori'>Többszöri</option>
          </CFormSelect>
        </CCol>

        <CCol md={6} className='mb-3'>
          <CFormFloating>
            <CFormInput ref={provisionRef} type="text" name="provision" id="provision" placeholder="Tartalék" disabled={isLoading}
                        feedbackInvalid='Add meg a kezdő tartalékot' required/>
            <CFormLabel htmlFor="provision">Tartalék</CFormLabel>
          </CFormFloating>
        </CCol>


        <CCol md={6} className='mb-3'>
          <CFormFloating>
            <CFormInput ref={priceRef} type="text" name="price" id="price" placeholder="Ár" disabled={isLoading}
                        feedbackInvalid='Add meg az árat' required/>
            <CFormLabel htmlFor="price">Ár</CFormLabel>
          </CFormFloating>
        </CCol>


        <CCol xs={12}>
          <CAlert color="danger" visible={error != ''}>
            {error}
          </CAlert>
        </CCol>
        <CCol xs={12} className="text-right">
          <CLoadingButton type="button" color="primary" loading={isLoading} disabled={isLoading} onClick={handleSubmit}>
            Műtrágya létrehozása
          </CLoadingButton>
          <CButton color='light' disabled={isLoading} onClick={handleCancel} className='mr-1 ms-4'>Mégsem</CButton>
        </CCol>
      </CRow>
    </CForm>
  )
}

export default AddFertilizerForm;
