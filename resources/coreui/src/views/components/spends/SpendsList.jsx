import React from 'react'
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
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
  CCollapse, CAlert, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CLoadingButton, CFormSelect

} from '@coreui/react-pro'
import { DocsExample } from '../../../components'
import axios from 'axios'
import seasons from "../../seasons/Seasons";
import {CDatePicker} from "@coreui/react-pro";
import spends from "../../spends/Spends";




const Spendslist = () => {
  const controller = new AbortController();
  const navigate = useNavigate();
  const [spends, setSpends] = useState([]);
  const [businessId, setBusinessId] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [condemnedId, setCondemnedId] = useState(null);
  const [lastSpendId, setLastSpendId] = useState(null);
  const [activePage, setActivePage] = useState(1);
  const [businesses, setBusinesses] = useState([]);
  const date = new Date();

  const initial_start_date = new Date(date.getFullYear(), date.getMonth(), 1, date.getHours(), date.getMinutes() );
  initial_start_date.setMinutes(initial_start_date.getMinutes()-initial_start_date.getTimezoneOffset());


  const initial_end_date = new Date(date.getFullYear(), date.getMonth() + 1, 0,  date.getHours(), date.getMinutes());
  initial_end_date.setMinutes(initial_end_date.getMinutes()-initial_end_date.getTimezoneOffset());

  const [startDate, setStartDate] = useState(initial_start_date.toISOString().split('T')[0]);
  const [endDate, setEndDate] = useState(initial_end_date.toISOString().split('T')[0]);


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
      label: 'Dátum',
      key: 'work_date',
      _style: { width: '15%' },
    },
    {
      label: 'Gáz',
      key: 'spent_gas',
      _style: { width: '15%' }
    },

    {
      label: 'Villany',
      key: 'spent_electricity',
      _style: { width: '15%' }
    },

    {
      label: 'Gázszámla',
      key: 'spent_gas_period_input',
      _style: { width: '15%' }
    },

    {
      label: 'Villanyszámla',
      key: 'spent_electricity_period_input',
      _style: { width: '15%' }
    },
    {
      key: 'show_details',
      label: '',
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


  const getBusinesses = () => {
    /*  console.log('getList');*/
    setIsLoading(true);
    setError('');

    axios.get('/get-businesses',
      {},
      {
        signal: controller.signal
      })
      .then((response) => {
        console.log(response.data.businesses[0].id);
        setBusinesses(response.data.businesses);
        setBusinessId(response.data.businesses[0].id)
      })
      .catch(error => {
        console.log("ERROR:: ", error);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  //console.log(businesses.businesses[0].id);
  const getList = () => {
    // console.log('getList');
    setIsLoading(true);
    setError('');

    axios.post('/get-spends', {
        start_date: startDate,
        end_date: endDate,
        business_id: businessId
      },
      {
        signal: controller.signal
      })
      .then((response) => {
        // console.log('get-users ', response);
        setSpends(response.data.spends);
        setLastSpendId(response.data.spends[0])
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


  useEffect(() => {

    getList();


    return () => {
      controller.abort()
    }
  }, [startDate, endDate, businessId]);

  const condemnId = (e) => {
    setCondemnedId(e.currentTarget.getAttribute('data-id'));
  }
  const spareId = () => {
    setCondemnedId(null);
  }
  const handleEdit = (e) => {
    const id = e.currentTarget.getAttribute('data-id');
    navigate(`/seasons/edit/${id}`);
  }

  const handleDelete = () => {
    // console.log('delete ', condemnedId);
    setIsLoading(true);
    axios.post(
      '/delete-spend',
      {
        id: condemnedId
      }
    )
      .then( (response) => {
        // console.log('delete-user ', response);
        setCondemnedId(null);
        getList();
      })
      .catch( error => {
        console.log("ERROR:: ", error);
      })
      .finally( ()=> {
        setIsLoading(false);
      });
  }

  const handleSetStartDate = (d) => {
    setStartDate(d);
  }

  const handleSetEndDate = (d) => {
    setEndDate(d);
  }

  const handleBusinessChange = (e) => {
    setBusinessId(e.currentTarget.value);
  }


  //---------------------------------------------------------
  return (

    < CRow>
      < CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Fogyasztás lista</strong> <small></small>
          </CCardHeader>
          <CCardBody>

            <div className="row">
              <div className="col-lg-3">
                <CDatePicker
                  locale="en-US"
                  placeholder="Adj mage egy kezdési dátumot"
                  required
                  feedbackInvalid='A kezdési dátum kötelező'
                  date = {startDate}
                  onDateChange={(date) => {
                    date.setMinutes(date.getMinutes()-date.getTimezoneOffset())
                    handleSetStartDate(date.toISOString().split('T')[0])}
                  }
                />
              </div>

              <div className="col-lg-4">
                <CDatePicker
                  locale="en-US"
                  placeholder="Adj mage egy kezdési dátumot"
                  required
                  feedbackInvalid='A kezdési dátum kötelező'
                  date = {endDate}
                  onDateChange={(date) => {
                    date.setMinutes(date.getMinutes()-date.getTimezoneOffset())
                    handleSetEndDate(date.toISOString().split('T')[0])}
                  }
                />
              </div>
              <div className="col-lg-4">
              <CCol xs={6} className='mb-3'>
                <CFormSelect aria-label="Válassz egységet" className='mb-3' onChange={handleBusinessChange}>
                  {businesses.map(val => (
                    <option value={val.id} key={val.id}>{val.name} </option>
                  ))
                  }

                </CFormSelect>
              </CCol>
            </div>
            </div>
            {/* <p className="text-medium-emphasis small">
              Use <code>striped</code> property to add zebra-striping to any table row within the{' '}
              <code>&lt;CTableBody&gt;</code>.
            </p>*/}
            {/* <DocsExample href="components/table#striped-rows">*/}
            <CSmartTable
              activePage={activePage}
              cleaner
              clickableRows
              columns={columns}
              columnFilter
              columnSorter
              footer
              items={spends}
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
                    //if (item.id === lastSpendId.id) {
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
                            disabled = {item.id === lastSpendId.id?false:true}
                          >
                            {details.includes(item.id) ? 'Elrejt' : 'Mutat'}
                          </CButton>
                        </td>
                      )
                    //}
                  /*else{
                    return (
                      <td>

                      </td>
                    )
                  }*/
                },
                details: (item) => {
                  return (
                    <CCollapse visible={details.includes(item.id)}>
                      <CCardBody className="p-3">
                        <h4>{item.name}</h4>
                        {/*<p className="text-muted">Felhasználó  {item.registered} óta</p>*/}
                       {/* <CButton size="sm" color="info" data-id={item.id} onClick={handleEdit}>
                          Fogyasztás szerkesztése
                        </CButton>*/}
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
                <CModalTitle>Fogyasztás törlése</CModalTitle>
              </CModalHeader>
              <CModalBody>
                Biztosan akarod törölni a ezt a fogyasztást #{condemnedId}?
              </CModalBody>
              <CModalFooter>
                <CButton color="secondary" onClick={spareId}>
                  Bezár
                </CButton>
                <CLoadingButton color="danger" onClick={handleDelete} disabled={isLoading} loading={isLoading}>
                  Fogyasztás törlése
                </CLoadingButton>
              </CModalFooter>
            </CModal>
            {/*</DocsExample>*/}
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CAlert color="danger" className='d-flex justify-content-between' visible={error !== ''}>
          {error} <CButton color="light" disabled={isLoading}>Retry</CButton>
        </CAlert>
      </CCol>
    </CRow>
  );
}

export default Spendslist
