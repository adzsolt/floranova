import React, {useRef} from 'react'
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CForm,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CSmartTable,
  CAvatar,
  CBadge,
  CButton,
  CCollapse,
  CAlert,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CLoadingButton,
  CFormSelect,
  CDatePicker,
  CCallout,
  CSpinner

} from '@coreui/react-pro'

import axios from 'axios'


const LotList = () => {
  const controller = new AbortController();
  const navigate = useNavigate();
  const [lots, setLots] = useState([]);
  const [validated, setValidated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [condemnedId, setCondemnedId] = useState(null);
  const [activePage, setActivePage] = useState(1);
  const [visible, setVisible] = useState(false);
  const [visibleAdd, setVisibleAdd] = useState(false);
  const [visibleCalculation, setVisibleCalculation] = useState(false);
  const [layouts, setLayouts] = useState([]);
  const [layoutId, setLayoutId] = useState([]);
  const [addLayoutId, setAddLayoutId] = useState([]);
  const [productiontUnits, setProductionUnits] = useState([]);
  const [productiontUnitId, setProductionUnitId] = useState([]);
  const [addProductiontUnitId, setAddProductionUnitId] = useState([]);
  const [status, setStatus] = useState([]);
  const [lotId, setLotId] = useState('');
  const [lotStatusId, setLotStatusId] = useState('');
  const [priceInfo, setPriceInfo] = useState("invisible");
  const [priceResponse, setPriceResponse] = useState([]);

  const [editStartDate, setEditStartDate] = useState('');
  const [addStartDate, setAddStartDate] = useState('');
  const [addEndDate, setAddEndDate] = useState('');


  const formRef = useRef();
  const formAddRef = useRef();
  const formCalculationRef = useRef();
  const formatNumber = (number) => number?number.toFixed(2):0;
  /*useEffect(() => {
    axios.get("/get-seasons")
      .then((response) => {
        setSeasons(response.data.seasons);
        //console.log(response.data.seasons);
      })
  }, []);*/

  //-----------------------------
  const [details, setDetails] = useState([])
  const columns = [
    {
      label: 'Név',
      key: 'name',
      _style: {width: '10%'},
    },
    {
      label: 'Darab',
      key: 'quantity',
      _style: {width: '5%'}
    },
    {
      label: 'Ültetés',
      key: 'start_date',
      _style: {width: '10%'}
    },
    {
      label: 'Befejezés',
      key: 'end_date',
      _style: {width: '10%'}
    },
    {
      label: 'Növény ára',
      key: 'plant_price',
      _style: {width: '5%'},
      _props: {className: 'custom-value-cell'},
    },

    {
      label: 'Tőzeg',
      key: 'peat_name',
      _style: {width: '5%'}

    },
    {
      label: 'Cserép',
      key: 'pot_name',
      _style: {width: '5%'}
    },
    {
      label: 'Növény',
      key: 'plant_name',
      _style: {width: '5%'}
    },

    {
      label: 'Szezon',
      key: 'season_name',
      _style: {width: '10%'}
    },
    {
      label: 'Termelőegység',
      key: 'production_unit_name',
      _style: {width: '5%'}
    },

    {
      label: 'Elrendezés',
      key: 'layout_name',
      _style: {width: '5%'}
    },
    {
      label: 'Műtrágya',
      key: 'fertilizer_name',
      _style: {width: '5%'}
    },
    {
      key: 'show_details',
      label: '',
      _style: {width: '1%'},
      filter: false,
      sorter: false,
    },
  ]

  const status_columns = [
    {
      label: 'Állapot kezdete',
      key: 'start_date',
      _style: {width: '20%'},
    },
    {
      label: 'Termelőegység',
      key: 'production_unit_name',
      _style: {width: '20%'}
    },
    {
      label: 'Elrendezés',
      key: 'layout_name',
      _style: {width: '20%'}
    },

    {
      key: 'action',
      label: '',
      _style: {width: '1%'},
      filter: false,
      sorter: false,
    },
  ]


  const toggleDetails = (index) => {
    const position = details.indexOf(index)
    let newDetails = details.slice()
    if (position !== -1) {
      newDetails.splice(position, 1)
    } else {
      newDetails = [...details, index]
    }
    setDetails(newDetails)
  }


  const getList = () => {
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

  const getLotStatusFormData = () => {
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
        setLayouts(response.data.data.layouts);
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
    getList();
    getLotStatusFormData();

    return () => {
      controller.abort()
    }
  }, []);


  const condemnId = (e) => {
    setCondemnedId(e.currentTarget.getAttribute('data-id'));
  }
  const spareId = () => {
    setCondemnedId(null);
  }
  const handleEdit = (e) => {
    const id = e.currentTarget.getAttribute('data-id');
    navigate(`/fertilizer/edit/${id}`);
  }

  const handleAddStatus = (e) => {

    setVisibleAdd(true);
    const id = e.currentTarget.getAttribute('data-id');
    setLotId(id);
  }

  const handleProductionUnitChange = (e) => {
    setProductionUnitId(e.currentTarget.value);
  }

  const handleAddProductionUnitChange = (e) => {
    setAddProductionUnitId(e.currentTarget.value);
  }

  const handleLayoutChange = (e) => {
    setLayoutId(e.currentTarget.value);
  }

  const handleAddLayoutChange = (e) => {
    setAddLayoutId(e.currentTarget.value);
  }


  const handleDelete = () => {
    // console.log('delete ', condemnedId);
    setIsLoading(true);
    axios.post(
      '/delete-lot',
      {
        id: condemnedId
      }
    )
      .then((response) => {
        // console.log('delete-user ', response);
        setCondemnedId(null);
        getList();
      })
      .catch(error => {
        console.log("ERROR:: ", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const handleLotStatusSubmit = () => {
    const form = formRef.current;
    if (form.checkValidity() !== false) {
      axios.post(
        '/update-lot-status',
        {
          lot_status_id: lotStatusId,
          start_date: editStartDate,
          production_unit_id: productiontUnitId,
          layout_id: layoutId
        }
      )
        .then((response) => {
          // console.log('delete-user ', response);
          setCondemnedId(null);
          getList();
        })
        .catch(error => {
          console.log("ERROR:: ", error);
        })
        .finally(() => {
          setIsLoading(false);
          setVisible(false);
        });
    }
  }


  const handleAddLotStatusSubmit = () => {
    const form = formAddRef.current;
    if (form.checkValidity() !== false) {
      axios.post(
        '/create-lot-status',
        {
          lot_id: lotId,
          start_date: addStartDate,
          production_unit_id: addProductiontUnitId,
          layout_id: addLayoutId
        }
      )
        .then((response) => {
          // console.log('delete-user ', response);
          setCondemnedId(null);
          getList();
        })
        .catch(error => {
          console.log("ERROR:: ", error);
        })
        .finally(() => {
          setIsLoading(false);
          setVisibleAdd(false);
        });
    }
  }

  const handleSetEditStartDate = (d) => {
    setEditStartDate(d);
  }

  const handleSetAddStartDate = (d) => {
    setAddStartDate(d);
  }

  const handleSetEndDate = (d) => {
    setAddEndDate(d);
  }

  const handleCalculation = (e) => {
    setIsLoading(false);
    setVisibleCalculation(true);
    const id = e.currentTarget.getAttribute('data-id');
    setLotId(id);
  }

  const handleCalculationSubmit = () => {
    setIsLoading(true);
    axios.post(
      '/get-price',
      {
        lot_id: lotId,
        start_date: addStartDate,
        end_date: addEndDate
      }
    )
      .then((response) => {
         console.log(response.data);
        setPriceResponse(response.data);
      })
      .catch(error => {
        console.log("ERROR:: ", error);
      })
      .finally(() => {
        setIsLoading(false);
        setPriceInfo("visible");
      });

  }


  //---------------------------------------------------------
  return (

    < CRow>
      < CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Virágcsoport lista</strong> <small></small>
          </CCardHeader>
          <CCardBody>
            {/*EDIT STATUS*/}
            <CModal
              visible={visible}
              onClose={() => setVisible(false)}
              aria-labelledby="LiveDemoExampleLabel"
            >
              <CModalHeader onClose={() => setVisible(false)}>
                <CModalTitle id="LiveDemoExampleLabel">Állapot modosítása</CModalTitle>
              </CModalHeader>
              <CModalBody>
                <CForm ref={formRef} className="needs-validation" noValidate validated={validated}>
                  <CRow>
                    <CCol md={6} className='mb-3'>

                      <CDatePicker
                        locale="en-US"
                        placeholder="Adj meg egy kezdési dátumot"
                        date={status.start_date}
                        required
                        feedbackInvalid='A kezdési dátum kötelező'
                        onDateChange={(date) => {
                          date.setMinutes(date.getMinutes() - date.getTimezoneOffset())
                          handleSetEditStartDate(date.toISOString().split('T')[0])
                        }
                        }
                      />
                      {/*  <CFormInput ref={emailRef} type="email" name="email" id="email" placeholder="Email" disabled={isLoading} feedbackInvalid='Please provide a valid Email' required />
            <CFormLabel htmlFor="email">E-mail</CFormLabel>*/}
                    </CCol>

                    <CCol md={6} className='mb-3'>
                      <CFormSelect aria-label="Válassz termelőegységet " className='mb-3'
                                   feedbackInvalid="Válassz termelőegységet"
                                   required onChange={handleProductionUnitChange}
                                   defaultValue={status.production_unit_id}>
                        <option value="">Válassz termelőegységet</option>
                        {productiontUnits.map(val => (
                          <option value={val.id} key={val.id}>{val.name} </option>
                        ))
                        }

                      </CFormSelect>

                    </CCol>
                    <CCol md={6} className='mb-3'>
                      <CFormSelect aria-label="Válassz elrendezést " className='mb-3'
                                   feedbackInvalid="Válassz Elrendezést"
                                   required onChange={handleLayoutChange} defaultValue={status.layout_id}>
                        <option value="">Válassz elrendezést</option>
                        {layouts.map(val => (
                          <option value={val.id} key={val.id}>{val.name} </option>
                        ))
                        }

                      </CFormSelect>
                    </CCol>

                    <CCol xs={12} className="text-right">
                      <CButton type="button" color="primary"
                               onClick={handleLotStatusSubmit}>
                        Virágcsoport állapot modosítása
                      </CButton>
                    </CCol>
                  </CRow>
                </CForm>

              </CModalBody>
              <CModalFooter>
                <CButton color="secondary" onClick={() => setVisible(false)}>
                  Close
                </CButton>
                {/* <CButton color="primary">Save changes</CButton>*/}
              </CModalFooter>
            </CModal>

            {/* ADD STATUS___________________________*/}

            <CModal
              visible={visibleAdd}
              onClose={() => setVisibleAdd(false)}
              aria-labelledby="ModalAdd"
            >
              <CModalHeader onClose={() => setVisible(false)}>
                <CModalTitle id="ModalAdd">Állapot Hozzáadása</CModalTitle>
              </CModalHeader>
              <CModalBody>
                <CForm ref={formAddRef} className="needs-validation" noValidate validated={validated}>
                  <CRow>
                    <CCol md={6} className='mb-3'>

                      <CDatePicker
                        locale="en-US"
                        placeholder="Adj meg egy kezdési dátumot"
                        required
                        feedbackInvalid='A kezdési dátum kötelező'
                        onDateChange={(date) => {
                          date.setMinutes(date.getMinutes() - date.getTimezoneOffset())
                          handleSetAddStartDate(date.toISOString().split('T')[0])
                        }
                        }
                      />
                      {/*  <CFormInput ref={emailRef} type="email" name="email" id="email" placeholder="Email" disabled={isLoading} feedbackInvalid='Please provide a valid Email' required />
            <CFormLabel htmlFor="email">E-mail</CFormLabel>*/}
                    </CCol>

                    <CCol md={6} className='mb-3'>
                      <CFormSelect aria-label="Válassz termelőegységet " className='mb-3'
                                   feedbackInvalid="Válassz termelőegységet"
                                   required onChange={handleAddProductionUnitChange}>
                        <option value="">Válassz termelőegységet</option>
                        {productiontUnits.map(val => (
                          <option value={val.id} key={val.id}>{val.name} </option>
                        ))
                        }

                      </CFormSelect>

                    </CCol>
                    <CCol md={6} className='mb-3'>
                      <CFormSelect aria-label="Válassz elrendezést " className='mb-3'
                                   feedbackInvalid="Válassz Elrendezést"
                                   required onChange={handleAddLayoutChange}>
                        <option value="">Válassz elrendezést</option>
                        {layouts.map(val => (
                          <option value={val.id} key={val.id}>{val.name} </option>
                        ))
                        }

                      </CFormSelect>
                    </CCol>

                    <CCol xs={12} className="text-right">
                      <CButton type="button" color="primary"
                               onClick={handleAddLotStatusSubmit}>
                        Virágcsoport állapot létrehozása
                      </CButton>
                    </CCol>
                  </CRow>
                </CForm>

              </CModalBody>
              <CModalFooter>
                <CButton color="secondary" onClick={() => setVisibleAdd(false)}>
                  Close
                </CButton>
                {/* <CButton color="primary">Save changes</CButton>*/}
              </CModalFooter>
            </CModal>

            {/*Calculation---------------------------------------------*/}


            <CModal
              visible={visibleCalculation}
              onClose={() => {
                setVisible(false);
                setVisibleCalculation(false);
                setPriceInfo("invisible");
                  }
              }
              //size="xl"
              aria-labelledby="ModalAdd"
            >
              <CModalHeader onClose={() => setVisibleCalculation(false)}>
                <CModalTitle id="ModalAdd">Ár számítása</CModalTitle>
              </CModalHeader>
              <CModalBody>
                <CForm ref={formCalculationRef} className="needs-validation" noValidate validated={validated}>
                  <CRow>
                    <CCol md={6} className='mb-3'>

                      <CDatePicker
                        locale="en-US"
                        placeholder="Adj meg egy kezdési dátumot"
                        required
                        feedbackInvalid='A kezdési dátum kötelező'
                        onDateChange={(date) => {
                          date.setMinutes(date.getMinutes() - date.getTimezoneOffset())
                          handleSetAddStartDate(date.toISOString().split('T')[0])
                        }
                        }
                      />
                      {/*  <CFormInput ref={emailRef} type="email" name="email" id="email" placeholder="Email" disabled={isLoading} feedbackInvalid='Please provide a valid Email' required />
            <CFormLabel htmlFor="email">E-mail</CFormLabel>*/}
                    </CCol>

                    <CCol md={6} className='mb-3'>

                      <CDatePicker
                        locale="en-US"
                        placeholder="Adj meg egy befejezési dátumot"
                        required
                        feedbackInvalid='A befejezési dátum kötelező'
                        onDateChange={(date) => {
                          date.setMinutes(date.getMinutes() - date.getTimezoneOffset())
                          handleSetEndDate(date.toISOString().split('T')[0])
                        }
                        }
                      />
                      {/*  <CFormInput ref={emailRef} type="email" name="email" id="email" placeholder="Email" disabled={isLoading} feedbackInvalid='Please provide a valid Email' required />
            <CFormLabel htmlFor="email">E-mail</CFormLabel>*/}
                    </CCol>


                    <CCol xs={12} className="text-right">
                      <CButton type="button" color="primary"
                               onClick={handleCalculationSubmit}>
                        Számítás
                      </CButton>

                      {isLoading ? <div className='text-center'><CSpinner color='primary'/></div>:''}
                    </CCol>
                  </CRow>
                </CForm>
                <CCallout color="primary" className={priceInfo}>

                  <CAlert color="primary">
                    Ár számítása a következő virágcsoportnak: {priceResponse.lot_name}
                  </CAlert>
                  <CAlert color="info">
                    {priceResponse.start_date} / {priceResponse.end_date} közőtt
                  </CAlert>
                  <CAlert color="info">
                    Növény ára:  {formatNumber(priceResponse.plant)}
                  </CAlert>
                  <CAlert color="info">
                   Cserép ára:  {formatNumber(priceResponse.pot_price)}
                  </CAlert>
                  <CAlert color="info">
                    Tőzeg ára:  {formatNumber(priceResponse.peat_price)}
                  </CAlert>
                  <CAlert color="info">
                    Műtrágya:  {formatNumber(priceResponse.fertilizer_price)}
                  </CAlert>
                  <CAlert color="info">
                    Munkaköltség ára:  {formatNumber(priceResponse.work_price)}
                  </CAlert>
                  <CAlert color="info">
                    Hőmérséklet ára: xxxxxx
                  </CAlert>
                  <CAlert color="warning">
                     Összesen:  {formatNumber(priceResponse.total_price)}
                  </CAlert>
                </CCallout>
              </CModalBody>
              <CModalFooter>
                <CButton color="secondary" onClick={() => setVisibleCalculation(false)}>
                  Close
                </CButton>
                {/* <CButton color="primary">Save changes</CButton>*/}
              </CModalFooter>
            </CModal>


            <CSmartTable
              activePage={activePage}
              cleaner
              clickableRows
              columns={columns}
              columnFilter
              columnSorter
              footer
              items={lots}
              itemsPerPageSelect
              itemsPerPage={5}
              pagination

              onFilteredItemsChange={(items) => {
                //console.log(items)
              }}

              onSelectedItemsChange={(items) => {
                // console.log(items)
              }}
              /* onActivePageChange={(activePage) => setActivePage(activePage)}*/
              scopedColumns={{
                plant_price: (item) => <td>{formatNumber(item.plant_price)}</td>,
                /*avatar: (item) => (
                  <td>
                    <CAvatar src={`/images/avatars/${item.avatar}`} />
                  </td>
                ),
                status: (item) => (
                  <td>
                    <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
                  </td>
                ),*/
                show_details: (item) => {
                  return (
                    <td className="py-2">
                      <CButton
                        color="primary"
                        variant="outline"
                        shape="square"
                        size="sm"
                        onClick={() => {
                          toggleDetails(item.id)
                        }}
                      >
                        {details.includes(item.id) ? 'Elrejt' : 'Mutat'}
                      </CButton>
                    </td>
                  )
                },
                details: (item) => {
                  return (
                    <CCollapse visible={details.includes(item.id)}>
                      <CCardBody className="p-3">
                        <h5>{item.name} állapotok</h5>
                        <CSmartTable
                          columns={status_columns}
                          items={item['statuses']}
                          scopedColumns={{
                            action: (status) => {
                              return (
                                <td className="py-2">
                                  <CButton
                                    color="primary"
                                    variant="outline"
                                    shape="square"
                                    size="sm"
                                    onClick={() => {
                                      setVisible(!visible);
                                      setStatus(status);
                                      setLayoutId(status.layout_id);
                                      setProductionUnitId(status.production_unit_id);
                                      setEditStartDate(status.start_date);
                                      setLotStatusId(status.id)
                                    }}
                                  >
                                    Szerkesztés
                                  </CButton>
                                </td>
                              )
                            }
                          }}

                        />
                        {/*<p className="text-muted">Felhasználó  {item.registered} óta</p>*/}

                        <CButton size="sm" color="primary" className="me-md-2" data-id={item.id}
                                 onClick={handleAddStatus}>
                          Állapot hozzáadása
                        </CButton>
                        <CButton size="sm" color="info" className="me-md-2" data-id={item.id} disabled
                                 onClick={handleEdit}>
                          Virágcsoport szerkesztése
                        </CButton>

                        <CButton size="sm" color="warning" className="me-md-2" data-id={item.id}
                                 onClick={handleCalculation}>
                          Ár számítása
                        </CButton>
                        <CButton size="sm" color="danger" className="ml-1" data-id={item.id} variant='outline'
                                 onClick={condemnId}>
                          Törlés
                        </CButton>
                      </CCardBody>
                    </CCollapse>
                  )
                },
              }}
              selectable
              sorterValue={{column: 'status', state: 'asc'}}
              tableFilter
              tableProps={{
                className: 'add-this-class',
                responsive: true,
                striped: true,
                hover: true,
              }}
              tableBodyProps={{
                className: 'align-middle'
              }}
            />
            <CModal visible={condemnedId !== null} onClose={spareId}>
              <CModalHeader onClose={() => setVisible(false)}>
                <CModalTitle>Virágcsoport törlése</CModalTitle>
              </CModalHeader>
              <CModalBody>
                Biztosan akarod törölni ezt a virágcsoportot #{condemnedId}?
              </CModalBody>
              <CModalFooter>
                <CButton color="secondary" onClick={spareId}>
                  Bezár
                </CButton>
                <CLoadingButton color="danger" onClick={handleDelete} disabled={isLoading} loading={isLoading}>
                  Virágcsoport törlése
                </CLoadingButton>
              </CModalFooter>
            </CModal>
            {/*</DocsExample>*/
            }
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CAlert color="danger" className='d-flex justify-content-between' visible={error !== ''}>
          {error} <CButton color="light" disabled={isLoading}>Retry</CButton>
        </CAlert>
      </CCol>
    </CRow>
  )
    ;
}

export default LotList
