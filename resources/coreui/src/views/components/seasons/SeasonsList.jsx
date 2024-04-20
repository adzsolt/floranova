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
import { DocsExample } from '../../../components'
import axios from 'axios'
import seasons from "../../seasons/Seasons";




const Tables = () => {
  const controller = new AbortController();
  const navigate = useNavigate();
  const [seasons, setSeasons] = useState([]);
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
      _style: { width: '30%' },
    },
    {
      label: 'Kezdési időpont',
      key: 'start_date',
      _style: { width: '30%' }
    },

    {
      label: 'Befejezési időpont',
      key: 'end_date',
      _style: { width: '30%' }
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


  const getList = () => {
    // console.log('getList');
    setIsLoading(true);
    setError('');

    axios.get(
      '/get-seasons',
      {
        signal: controller.signal
      }
    )
      .then((response) => {
        // console.log('get-users ', response);
        setSeasons(response.data.seasons);
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
    navigate(`/seasons/edit/${id}`);
  }

  const handleDelete = () => {
    // console.log('delete ', condemnedId);
    setIsLoading(true);
    axios.post(
      '/delete-season',
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
  console.log('Render');
  return (

    < CRow>
      < CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Szezon lista</strong> <small></small>
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
              items={seasons}
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
                        <h4>{item.name}</h4>
                        {/*<p className="text-muted">Felhasználó  {item.registered} óta</p>*/}
                        <CButton size="sm" color="info" data-id={item.id} onClick={handleEdit}>
                          Szezon szerkesztése
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
                <CModalTitle>Delete user</CModalTitle>
              </CModalHeader>
              <CModalBody>
                Are you sure you want to delete user #{condemnedId}?
              </CModalBody>
              <CModalFooter>
                <CButton color="secondary" onClick={spareId}>
                  Close
                </CButton>
                <CLoadingButton color="danger" onClick={handleDelete} disabled={isLoading} loading={isLoading}>
                  Delete User
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

export default Tables
