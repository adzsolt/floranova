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
import React, {useContext, useEffect, useRef, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {GlobalContext} from "../../context/GlobalContext";
// import useMediaQuery from "../../hooks/useMediaQuery";

const AddFertilizerStatusForm = () => {
  const controller = new AbortController();
  let { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const [start_date, setStartDate] = useState('');
  const [action, setAction] = useState('');
  const [lots, setLots] = useState([]);
  const [lotId, setLotId] = useState('');
  const formRef = useRef();
  const lotRef = useRef();

  const volumeRef = useRef();
  const priceRef = useRef();


  const getFertilizerStatusFormData = () => {
    // console.log('getList');
    setIsLoading(true);
    setError('');

    axios.get(
      '/get-lots',
      {
        signal: controller.signal
      }
    )
      .then((response) => {
        // console.log('get-users ', response);
        setLots(response.data.lots);
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
    getFertilizerStatusFormData();

    return () => {
      controller.abort()
    }
  }, []);


  const handleSubmit = () => {
    const form = formRef.current;
    if (form.checkValidity() !== false) {
      setIsLoading(true);

      axios.post('/add-fertilizer-status', {
        id: id,
        action: 'All',
        lot_id: 0,
        volume: volumeRef.current.value,
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

  const handleActionChange = (e) => {
    setAction(e.currentTarget.value);
  }
  const handleLotChange = (e) => {
    setLotId(e.currentTarget.value);
  }

  return (

    <CForm ref={formRef} className="needs-validation" noValidate validated={validated}>
      <CRow>

        <CCol md={6} className='mb-3'>
          <CFormSelect aria-label="Használat vagy hozzáadás" className='mb-3' onChange={handleActionChange}>
            <option>Válassz Hozzáadás és használat között</option>
            <option value='Hozzáadás' key='hozzaadas'>Hozzáadás</option>
            <option value='Használat' key='hasznalat'>Használat</option>
          </CFormSelect>
        </CCol>

       {/* <CCol md={6} className='mb-3'>

         { <CFormSelect aria-label="Válassz virágcsoportot" className='mb-3'
                       feedbackInvalid="Válassz virágcsoportot"
                       required onChange={handleLotChange}
          >
            <option value="">Válassz virágcsoportot</option>
            {lots.map(val => (
              <option value={val.id} key={val.id}>{val.name} </option>
            ))
            }

          </CFormSelect>}
        </CCol>*/}


        <CCol md={6} className='mb-3'>
          <CFormFloating>
            <CFormInput ref={volumeRef} type="text" name="volume" id="volume" placeholder="Mennyiség"
                        disabled={isLoading}
                        feedbackInvalid='Adj meg ehy mennyiséget' required/>
            <CFormLabel htmlFor="volume">Mennyiség</CFormLabel>
          </CFormFloating>
        </CCol>


        <CCol md={6} className='mb-3'>
          <CFormFloating>
            <CFormInput ref={priceRef} type="text" name="price" id="price" placeholder="Ár"
                        feedbackInvalid='Add meg a bejövő árat' required
                        disabled={action == 'Használat' ? true : false}
            />
            <CFormLabel htmlFor="price">Ár</CFormLabel>
          </CFormFloating>
        </CCol>

        <CCol md={6} className='mb-3'>
          <CDatePicker
            locale="en-US"
            placeholder="Adj meg egy kezdési dátumot"
            required
            feedbackInvalid='A kezdési dátum kötelező'
            onDateChange={(date) => {
              date.setMinutes(date.getMinutes() - date.getTimezoneOffset())
              handleSetStartDate(date.toISOString().split('T')[0])
            }
            }
          />
          {/*  <CFormInput ref={emailRef} type="email" name="email" id="email" placeholder="Email" disabled={isLoading} feedbackInvalid='Please provide a valid Email' required />
            <CFormLabel htmlFor="email">E-mail</CFormLabel>*/}
        </CCol>


        <CCol xs={12}>
          <CAlert color="danger" visible={error != ''}>
            {error}
          </CAlert>
        </CCol>
        <CCol xs={12} className="text-right">
          <CLoadingButton type="button" color="primary" loading={isLoading} disabled={isLoading} onClick={handleSubmit}>
            Műtrágya állapot létrehozása
          </CLoadingButton>
          <CButton color='light' disabled={isLoading} onClick={handleCancel} className='mr-1 ms-4'>Mégsem</CButton>
        </CCol>
      </CRow>
    </CForm>
  );
}

export default AddFertilizerStatusForm;
