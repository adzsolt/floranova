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
import {useContext, useEffect, useRef, useState} from "react"
import {useNavigate} from "react-router-dom";
import {GlobalContext} from "../../context/GlobalContext";
// import useMediaQuery from "../../hooks/useMediaQuery";

const AddWorkForm = () => {
  const controller = new AbortController();
  const [isLoading, setIsLoading] = useState(false);
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const date = new Date();

  date.setMinutes(date.getMinutes()-date.getTimezoneOffset());

  const [startDate, setStartDate] = useState(date.toISOString().split('T')[0]);
  const [businesses, setBusinesses] = useState([]);
  const [businessId, setBusinessId] = useState([]);

  const formRef = useRef();
  const spendRef = useRef();

  const getBusinesses = () => {
    // console.log('getList');
    setIsLoading(true);
    setError('');

    axios.get(
      '/get-businesses',
      {
        signal: controller.signal
      }
    )
      .then((response) => {
        // console.log('get-users ', response);
        setBusinesses(response.data.businesses);
      })
      .catch(error => {
        console.log("ERROR:: ", error);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  useEffect(() => {
    getBusinesses();

    return () => {
      controller.abort()
    }
  }, []);


  const handleBusinessChange = (e) => {
    setBusinessId(e.currentTarget.value);
  }

  const handleSubmit = () => {
    const form = formRef.current;
    if (form.checkValidity() !== false) {
      setIsLoading(true);

      axios.post('/store-works', {
        period_input: spendRef.current.value,
        work_date: startDate,
        business_id:businessId
      })
        .then((response) => {
          // console.log('update role success ', response.data);
          navigate('/works');
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
    navigate('/works');
  }

  const handleSetStartDate = (d) => {
    setStartDate(d);
  }



  return (

    <CForm ref={formRef} className="needs-validation" noValidate validated={validated}>
      <CRow>
        <CCol md={4} className='mb-3'>
          <CFormFloating>
            <CFormInput ref={spendRef} type="text" name="spend" id="spend" placeholder="K0ltség" disabled={isLoading}
                        feedbackInvalid='Add meg a költséget' required/>
            <CFormLabel htmlFor="spend">Költség</CFormLabel>
          </CFormFloating>
        </CCol>
        <CCol md={4} className='mb-3'>

          <CDatePicker
            locale="en-US"
            placeholder="Adj meg egy dátumot"
            required
            feedbackInvalid='A  dátum kötelező'
            date={startDate}
            onDateChange={(date) => {
              date.setMinutes(date.getMinutes()-date.getTimezoneOffset())
              handleSetStartDate(date.toISOString().split('T')[0])}
            }
          />
          {/*  <CFormInput ref={emailRef} type="email" name="email" id="email" placeholder="Email" disabled={isLoading} feedbackInvalid='Please provide a valid Email' required />
            <CFormLabel htmlFor="email">E-mail</CFormLabel>*/}
        </CCol>

        <CCol xs={4} className='mb-3'>
          <CFormSelect aria-label="Válassz egységet" className='mb-3' onChange={handleBusinessChange}>
            <option>Nyisd ki ezt a menüt, hogy hozzárendelhesd egy egységhez</option>
            {businesses.map(val => (
              <option value={val.id} key={val.id}>{val.name} </option>
            ))
            }

          </CFormSelect>
        </CCol>

        <CCol xs={12}>
          <CAlert color="danger" visible={error != ''}>
            {error}
          </CAlert>
        </CCol>
        <CCol xs={12} className="text-right">
          <CLoadingButton type="button" color="primary" loading={isLoading} disabled={isLoading} onClick={handleSubmit}>
            Munkaköltség létrehozása
          </CLoadingButton>
          <CButton color='light' disabled={isLoading} onClick={handleCancel} className='mr-1 ms-4'>Mégsem</CButton>
        </CCol>


      </CRow>
    </CForm>
  )
}

export default AddWorkForm;
