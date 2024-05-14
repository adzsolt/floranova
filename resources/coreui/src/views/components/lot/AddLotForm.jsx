
import {CButton, CDatePicker} from '@coreui/react-pro';
import { CCol, CForm, CFormInput, CRow, CFormLabel, CFormFloating, CLoadingButton, CAlert, CButtonGroup, CFormCheck, CFormSelect } from "@coreui/react-pro";
import axios from "axios";
import {useContext, useEffect, useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";


// import useMediaQuery from "../../hooks/useMediaQuery";

const AddLotForm = () => {
  const controller = new AbortController();
  const [isLoading, setIsLoading] = useState(false);
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState('');
  const [start_date, setStartDate] = useState('');
  const [productiontUnits, setProductionUnits] = useState([]);
  const [productiontUnitId, setProductionUnitId] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [seasonId, setSeasonId] = useState([]);
  const [fertilizers, setFertilizers] = useState([]);
  const [fertilizerId, setFertilizerId] = useState([]);
  const [layouts, setLayouts] = useState([]);
  const [layoutId, setLayoutId] = useState([]);
  const [peats, setPeats] = useState([]);
  const [peatId, setPeatId] = useState([]);
  const [plants, setPlants] = useState([]);
  const [plantId, setPlantId] = useState([]);
  const [pots, setPots] = useState([]);
  const [potId, setPotId] = useState([]);
  const navigate = useNavigate();

  const formRef = useRef();
  const nameRef = useRef();
  const volumeRef = useRef();
  const quantityRef = useRef();


  const getLotFormData = () => {
    // console.log('getList');
    setIsLoading(true);
    setError('');

    axios.get(
      '/get-lot-form-data',
      {
        signal: controller.signal
      }
    )
      .then((response) => {
        // console.log('get-users ', response);
        setProductionUnits(response.data.data.production_units);
        setFertilizers(response.data.data.fertilizers);
        setSeasons(response.data.data.seasons);
        setLayouts(response.data.data.layouts);
        setPeats(response.data.data.peats);
        setPots(response.data.data.pots);
        setPlants(response.data.data.plants);
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
    getLotFormData();

    return () => {
      controller.abort()
    }
  }, []);

  const handleProductionUnitChange = (e) => {
    setProductionUnitId(e.currentTarget.value);
  }

  const handleSeasonChange = (e) => {
    setSeasonId(e.currentTarget.value);
  }

  const handleLayoutChange = (e) => {
    setLayoutId(e.currentTarget.value);
  }

  const handlePeatChange = (e) => {
    setPeatId(e.currentTarget.value);
  }

  const handlePotChange = (e) => {
    setPotId(e.currentTarget.value);
  }

  const handlePlantChange = (e) => {
    setPlantId(e.currentTarget.value);
  }

  const handleFertilizerChange = (e) => {
    setFertilizerId(e.currentTarget.value);
  }

  const handleSetStartDate = (d) => {
    setStartDate(d);
  }


  const handleSubmit = () => {
    const form = formRef.current;
    if (form.checkValidity() !== false)  {
      setIsLoading(true);

      axios.post('/create-lot', {
        name: nameRef.current.value,
        quantity: quantityRef.current.value,
        start_date: start_date,
        peat_id: peatId,
        pot_id: potId,
        plant_id: plantId,
        season_id: seasonId,
        production_unit_id: productiontUnitId,
        layout_id: layoutId,
        fertilizer_id: fertilizerId,
        fertilizer_volume: volumeRef.current.value
      })
        .then( (response) => {
          navigate('/lots');

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
            <CFormInput ref={quantityRef} type="text" name="quantity" id="quantity" placeholder="Darabszám" step='any' disabled={isLoading} feedbackInvalid='Add meg a virágcsoport darabszámát' required />
            <CFormLabel htmlFor="width">Darabszám</CFormLabel>
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


        <CCol xs={6} className='mb-3'>
          <CFormSelect aria-label="Válassz szezont" className='mb-3' feedbackInvalid="Válassz szezont"
                       required onChange={handleSeasonChange}>
            <option  value="">Válaszz szezont</option>
            {seasons.map(val => (
              <option value={val.id} key={val.id}>{val.name} </option>
            ))
            }

          </CFormSelect>
        </CCol>

        <CCol xs={6} className='mb-3'>
          <CFormSelect aria-label="Válassz cserepet " className='mb-3' feedbackInvalid="Válassz cserepet"
                       required onChange={handlePotChange}>
            <option  value="" >Válassz cserepet</option>
            {pots.map(val => (
              <option value={val.id} key={val.id}>{val.name} </option>
            ))
            }

          </CFormSelect>
        </CCol>

        <CCol xs={6} className='mb-3'>
          <CFormSelect aria-label="Válassz tőzeget " className='mb-3' feedbackInvalid="Válassz tőzeget"
                       required onChange={handlePeatChange}>
            <option  value="">Válassz tőzeget</option>
            {peats.map(val => (
              <option value={val.id} key={val.id}>{val.name} </option>
            ))
            }

          </CFormSelect>
        </CCol>


        <CCol xs={6} className='mb-3'>
          <CFormSelect aria-label="Válassz növényt " className='mb-3' feedbackInvalid="Válassz növényt"
                       required onChange={handlePlantChange}>
            <option  value="">Válassz növényt</option>
            {plants.map(val => (
              <option value={val.id} key={val.id}>{val.name} </option>
            ))
            }

          </CFormSelect>
        </CCol>

        <CCol xs={6} className='mb-3'>
          <CFormSelect aria-label="Válassz műtrágyát " className='mb-3' feedbackInvalid="Válassz műtrágyát"
                       required onChange={handleFertilizerChange}>
            <option  value="">Válassz műtrágyát</option>
            {fertilizers.map(val => (
              <option value={val.id} key={val.id}>{val.name} </option>
            ))
            }

          </CFormSelect>
        </CCol>

        <CCol md={6} className='mb-3'>
          <CFormFloating>
            <CFormInput ref={volumeRef} type="text" name="volume" id="volume" placeholder="Műtrágya mennyiseg per köbméter" step='any' disabled={isLoading} feedbackInvalid='Adj meg aműtrágya mennyiségét egy köbméterre' required />
            <CFormLabel htmlFor="volume">Műtrágya mennyiség köbméterenként</CFormLabel>
          </CFormFloating>
        </CCol>


        <CCol xs={6} className='mb-3'>
          <CFormSelect aria-label="Válassz termelőegységet " className='mb-3' feedbackInvalid="Válassz termelőegységet"
                       required onChange={handleProductionUnitChange}>
            <option  value="">Válassz termelőegységet</option>
            {productiontUnits.map(val => (
              <option value={val.id} key={val.id}>{val.name} </option>
            ))
            }

          </CFormSelect>
        </CCol>


        <CCol xs={6} className='mb-3'>
          <CFormSelect aria-label="Válassz elrendezést " className='mb-3' feedbackInvalid="Válassz Elrendezést"
                       required onChange={handleLayoutChange}>
            <option  value="">Válassz elrendezést</option>
            {layouts.map(val => (
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
           Virágcsoport hozzáadása
          </CLoadingButton>
          <CButton   color='light' disabled={isLoading} onClick={handleCancel} className='mr-1 ms-4'>Mégsem</CButton>
        </CCol>
      </CRow>
    </CForm>
  )
}

export default AddLotForm;
