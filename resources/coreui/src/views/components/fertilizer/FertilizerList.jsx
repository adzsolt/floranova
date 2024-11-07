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
  CCollapse, CAlert, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CLoadingButton

} from '@coreui/react-pro'

import axios from 'axios'




const FertilizerList = () => {
  const controller = new AbortController();
  const navigate = useNavigate();
  const [fertilizer, setFertilizer] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [condemnedId, setCondemnedId] = useState(null);
  const [activePage, setActivePage] = useState(1)


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
      _style: { width: '20%' },
    },
    {
      label: 'Használat tipusa',
      key: 'using',
      _style: { width: '20%' }
    },
    {
      label: 'Tartalék',
      key: 'provision',
      _style: { width: '20%' }
    },
    {
      label: 'Ár',
      key: 'price',
      _style: { width: '20%' }
    },
    {
      key: 'show_details',
      label: '',
      filter: false,
      sorter: false,
    },
  ]

  const status_columns = [
    {
      label: 'Művelet',
      key: 'action',
      _style: { width: '15%' },
    },
    {
      label: 'Egység',
      key: 'business_name',
      _style: { width: '15%' }
    },
    {
      label: 'Virágcsoport azonosító',
      key: 'name',
      _style: { width: '15%' }
    },
    {
      label: 'Mennyiség',
      key: 'volume',
      _style: { width: '15%' }
    },
    {
      label: 'Ár',
      key: 'price',
      _style: { width: '15%' }
    },
    {
      label: 'Dátum',
      key: 'action_date',
      _style: { width: '15%' }
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
      '/get-fertilizers',
      {
        signal: controller.signal
      }
    )
      .then((response) => {
        // console.log('get-users ', response);
        setFertilizer(response.data.fertilizers);
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
    const id = e.currentTarget.getAttribute('data-id');
    navigate(`/fertilizer-status/add/`+id);
  }

  const handleDelete = () => {
    // console.log('delete ', condemnedId);
    setIsLoading(true);
    axios.post(
      '/delete-fertilizer',
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


  //---------------------------------------------------------
  return (

    < CRow>
      < CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Műtrágya lista</strong> <small></small>
          </CCardHeader>
          <CCardBody>
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
              items={fertilizer}
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
                        <CTable small striped columns={status_columns} items={item['statuses']}/>
                        {/*<p className="text-muted">Felhasználó  {item.registered} óta</p>*/}

                        <CButton   size="sm" color="primary" className="me-md-2" data-id={item.id} onClick={handleAddStatus}>
                          Állapot hozzáadása
                        </CButton>
                        <CButton size="sm" color="info" className="me-md-2" data-id={item.id} onClick={handleEdit}>
                         Műtrágya szerkesztése
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
                <CModalTitle>Műtrágya törlése</CModalTitle>
              </CModalHeader>
              <CModalBody>
                Biztosan akarod törölni ezt a műtrágyát #{condemnedId}?
              </CModalBody>
              <CModalFooter>
                <CButton color="secondary" onClick={spareId}>
                  Bezár
                </CButton>
                <CLoadingButton color="danger" onClick={handleDelete} disabled={isLoading} loading={isLoading}>
                  Műtrágya törlése
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

export default FertilizerList
