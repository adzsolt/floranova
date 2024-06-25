
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
import {useContext, useEffect, useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import heatUnit from "../../heat-unit/HeatUnit";
// import useMediaQuery from "../../hooks/useMediaQuery";

const EditHeatUnitForm = ({heat_unit}) => {
  const controller = new AbortController();
  const [isLoading, setIsLoading] = useState(false);
  const [validated, setValidated] = useState(false);
  const [businessId, setBusinessId] = useState(0);
  const [businesses, setBusinesses] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  console.log(heat_unit.business_name);


  const formRef = useRef();
  const nameRef = useRef();



  // console.log(user);
  /*  const handleRoleChange = (e) => {
      setRoleId(e.currentTarget.value);
    }*/


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
        setBusinessId(heat_unit.business_id)
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



  const handleSubmit = async () => {
    const form = formRef.current;
    if (form.checkValidity() !== false)  {
      setIsLoading(true);

      await axios.post('/update-heat-unit', {
        id: heat_unit.id,
        name: nameRef.current.value,
        business_id: businessId

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
          navigate('/heat-units');
        });
    }
    setValidated(true);
  }

  const handleCancel = () => {
    navigate('/heat-units');
  }


  return (
    <CForm ref={formRef} className="needs-validation" noValidate validated={validated} >
      <CRow>
        <CCol md={6} className='mb-3'>
          <CFormFloating>
            <CFormInput ref={nameRef} type="text" name="name" id="name" placeholder="Fűtőegység neve" disabled={isLoading} defaultValue={heat_unit.name} feedbackInvalid='A fűtőegység neve kötelező' required />
            <CFormLabel htmlFor="name">Fűtőegység neve</CFormLabel>
          </CFormFloating>
        </CCol>

        <CCol xs={6} className='mb-3'>
          <CFormSelect aria-label="Válassz egységet" className='mb-3' value={heat_unit.business_id} onChange={handleBusinessChange}>
            {businesses.map(val => (
              <option value={val.id} key={val.id} /*{val.id === heat_unit.business_name ? 'selected':'' }*/>{val.name} </option>
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
            Fűtőegység frissítése
          </CLoadingButton>
          <CButton color='light' disabled={isLoading} onClick={handleCancel} className='mr-1'>Mégsem</CButton>
        </CCol>
      </CRow>
    </CForm>
  )
}

export default EditHeatUnitForm;
