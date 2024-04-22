
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
  CFormSelect
} from "@coreui/react-pro";
import axios from "axios";
import {useContext, useEffect, useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
// import useMediaQuery from "../../hooks/useMediaQuery";

const EditProductionUnitForm = ({production_unit}) => {
  const controller = new AbortController();
  const [isLoading, setIsLoading] = useState(false);
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState('');
  const [heatUnits, setHeatUnits] = useState([]);

  const [heatUnitId, setHeatUnitId] = useState(production_unit.heat_unit_id);
  const navigate = useNavigate();

  const formRef = useRef();
  const nameRef = useRef();
  const lengthRef = useRef();
  const widthRef = useRef();

  // console.log(user);
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

  const handleSubmit = async () => {
    const form = formRef.current;
    if (form.checkValidity() !== false)  {
      setIsLoading(true);

      await axios.post('/update-production-unit', {
        id: production_unit.id,
        name: nameRef.current.value,
        length: lengthRef.current.value,
        width: widthRef.current.value,
        heat_unit_id: heatUnitId
      })
        .catch( error => {
          console.log("ERROR:: ", error);
          setError(error.message);
        })
        .finally( ()=> {
          setIsLoading(false);
          navigate('/production-units');
        });
    }
    setValidated(true);
  }

  const handleCancel = () => {
    navigate('/production-units');
  }

  return (
    <CForm ref={formRef} className="needs-validation" noValidate validated={validated} >
      <CRow>
        <CCol md={6} className='mb-3'>
          <CFormFloating>
            <CFormInput ref={nameRef} type="text" name="name" id="name" defaultValue={production_unit.name}  placeholder="Name" disabled={isLoading} feedbackInvalid='Adj meg egy nevet' required />
            <CFormLabel htmlFor="name">Név</CFormLabel>
          </CFormFloating>
        </CCol>
        <CCol md={6} className='mb-3'>
          <CFormFloating>
            <CFormInput ref={lengthRef} type="text" name="length" id="length" placeholder="Hosszúság" defaultValue={production_unit.length} disabled={isLoading} feedbackInvalid='Adj meg egy hosszúságot' required />
            <CFormLabel htmlFor="length">Hosszúság</CFormLabel>
          </CFormFloating>
        </CCol>

        <CCol md={6} className='mb-3'>
          <CFormFloating>
            <CFormInput ref={widthRef} type="text" name="width" id="width" placeholder="Szélesség" defaultValue={production_unit.width} disabled={isLoading} feedbackInvalid='Adj meg egyá szélességet' required />
            <CFormLabel htmlFor="width">Szélesség</CFormLabel>
          </CFormFloating>
        </CCol>
        <CCol xs={6} className='mb-3'>
          <CFormLabel htmlFor="heat-unit">Fűtőegység</CFormLabel>
          <CFormSelect aria-label="Válassz fűtőegységet" id ='heat-unit' className='mb-3' defaultValue={production_unit.heat_unit} onChange={handleHeatUnitChange}>

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

          <CLoadingButton className= 'me-3' type="button" color="primary" loading={isLoading} disabled={isLoading} onClick={handleSubmit}>
            Termelőegység frissítése
          </CLoadingButton>
          <CButton color='light' disabled={isLoading} onClick={handleCancel} className='mr-1'>Mégsem</CButton>
        </CCol>
      </CRow>
    </CForm>
  )
}

export default EditProductionUnitForm;
