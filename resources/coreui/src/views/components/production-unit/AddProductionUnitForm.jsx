
import { CButton } from '@coreui/react-pro';
import { CCol, CForm, CFormInput, CRow, CFormLabel, CFormFloating, CLoadingButton, CAlert, CButtonGroup, CFormCheck, CFormSelect } from "@coreui/react-pro";
import axios from "axios";
import {useContext, useEffect, useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";


// import useMediaQuery from "../../hooks/useMediaQuery";

const AddProductionUnitForm = () => {
  const controller = new AbortController();
  const [isLoading, setIsLoading] = useState(false);
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState('');
  const [heatUnitId, setHeatUnitId] = useState(1);
  const [heatUnits, setHeatUnits] = useState([]);
  const navigate = useNavigate();

  const formRef = useRef();
  const nameRef = useRef();
  const lengthRef = useRef();
  const widthRef = useRef();


  const getHeatUnits = () => {
    // console.log('getList');
    setIsLoading(true);
    setError('');

    axios.get(
      '/get-heat-units',
      {
        signal: controller.signal
      }
    )
      .then((response) => {
        // console.log('get-users ', response);
        setHeatUnits(response.data.heat_units);
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
    getHeatUnits();

    return () => {
      controller.abort()
    }
  }, []);

  const handleHeatUnitChange = (e) => {
     setHeatUnitId(e.currentTarget.value);
  }

  //console.log(roles[0]);

  const handleSubmit = () => {
    const form = formRef.current;
    if (form.checkValidity() !== false)  {
      setIsLoading(true);

      axios.post('/create-production-unit', {
        name: nameRef.current.value,
        length: lengthRef.current.value,
        width: widthRef.current.value,
        heat_unit_id: heatUnitId,
      })
        /*.then( (response) => {
          // console.log('create user success ', response.data);
          return axios.post('/add-role', {
            user_id: response.data.id,
            role_id: roleId
          });
        })*/
        .then( (response) => {
          // console.log('update role success ', response.data);
          navigate('/production-units');
        })
        .catch( error => {
          console.log("ERROR:: ", error);
          setError(error.message);
        })
        .finally( ()=> {
          setIsLoading(false);
        });
    }
    setValidated(true);
  }

  const handleCancel = () => {
    navigate('/production-units');
  }

  return (
    <CForm ref={formRef} className="needs-validation" noValidate validated={validated}>
      <CRow>
        <CCol md={6} className='mb-3'>
          <CFormFloating>
            <CFormInput ref={nameRef} type="text" name="name" id="name" placeholder="Name" disabled={isLoading} feedbackInvalid='Adj meg egy nevet' required />
            <CFormLabel htmlFor="name">Név</CFormLabel>
          </CFormFloating>
        </CCol>
        <CCol md={6} className='mb-3'>
          <CFormFloating>
            <CFormInput ref={lengthRef} type="text" name="length" id="length" placeholder="Hosszúság"  step='any' disabled={isLoading} feedbackInvalid='Adj meg egy hosszúságot' required />
            <CFormLabel htmlFor="length">Hosszúság</CFormLabel>
          </CFormFloating>
        </CCol>

        <CCol md={6} className='mb-3'>
          <CFormFloating>
            <CFormInput ref={widthRef} type="text" name="width" id="width" placeholder="Szélesség" step='any' disabled={isLoading} feedbackInvalid='Adj meg egyá szélességet' required />
            <CFormLabel htmlFor="width">Szélesség</CFormLabel>
          </CFormFloating>
        </CCol>

        <CCol xs={6} className='mb-3'>
          <CFormSelect aria-label="Válassz fűtőegységet" className='mb-3' onChange={handleHeatUnitChange}>
            <option>Nyisd ki ezt a menüt</option>
            {heatUnits.map(val => (
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
           Termelőegység frissítése
          </CLoadingButton>
          <CButton   color='light' disabled={isLoading} onClick={handleCancel} className='mr-1 ms-4'>Mégsem</CButton>
        </CCol>
      </CRow>
    </CForm>
  )
}

export default AddProductionUnitForm;
