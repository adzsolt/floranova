import React from 'react'
import {useState, useEffect, useContext} from "react";
import {useNavigate} from "react-router-dom";
import {
  CAlert,
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
  CCollapse, CImage, CButtonGroup, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CLoadingButton


} from '@coreui/react-pro'
import { DocsExample } from '../../../components'
import axios from 'axios'
import {GlobalContext} from "../../context/GlobalContext";


const Tables = () => {
  const navigate = useNavigate();
  /*const [users, setUsers] = useState([]);*/
  const [isLoading, setIsLoading] = useState(false);
  const [condemnedId, setCondemnedId] = useState(null);
  const controller = new AbortController();
  const {users, setUsers} = useContext(GlobalContext);
  const [error, setError] = useState('');
  /*useEffect(() => {
    axios.get("/get-users")
      .then((response) => {
        setUsers(response.data['users']);
        //console.log(response.data);
      })
  }, [user]);*/

  //-----------------------------
  const [details, setDetails] = useState([])
  const columns = [
    {
      key: 'avatar',
      label: '',
      filter: false,
      sorter: false,
    },
    {
      label: 'Név',
      key: 'name',
      _style: { width: '20%' },
    },
    {
      label: 'Regisztráció',
      key: 'registered',
      _style: { width: '20%' }
    },

    {
      label: 'Jog',
      key: 'role',
      _style: { width: '20%' }
    },
    {
      label: 'Státus',
      key: 'status',
      _style: { width: '20%' }
    },
    {
      key: 'show_details',
      label: '',
      filter: false,
      sorter: false,
    },
  ]

  const getList = () => {
    // console.log('getList');
    setIsLoading(true);
    setError('');

    axios.get(
      '/get-users',
      {
        signal: controller.signal
      }
    )
      .then( (response) => {
        setUsers(response.data.users);
      })
      .catch(error => {
        console.log("ERROR:: ", error);
        setError(error.message);
      })
      .finally( () => {
        setIsLoading(false);
      });
  }
  useEffect(()=>{
    getList();

    return () => {
      controller.abort()
    }
  },[]);

  const getBadge = (status) => {
    switch (status) {
      case 'Active':
        return 'success'
      case 'Inactive':
        return 'secondary'
      case 'Pending':
        return 'warning'
      case 'Banned':
        return 'danger'
      default:
        return 'primary'
    }
  }
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

  const condemnId = (e) => {
    setCondemnedId(e.currentTarget.getAttribute('data-id'));
  }
  const spareId = () => {
    setCondemnedId(null);
  }
  const handleEdit = (e) => {
    const id = e.currentTarget.getAttribute('data-id');
    navigate(`/users/edit/${id}`);
  }


  const handleDelete = () => {
    // console.log('delete ', condemnedId);
    setIsLoading(true);
    axios.post(
      '/delete-user',
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

    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Felhasználói lista</strong> <small></small>
          </CCardHeader>
          <CCardBody>
           {/* <p className="text-medium-emphasis small">
              Use <code>striped</code> property to add zebra-striping to any table row within the{' '}
              <code>&lt;CTableBody&gt;</code>.
            </p>*/}
           {/* <DocsExample href="components/table#striped-rows">*/}
              <CSmartTable
                items={users}
                activePage={1}
                cleaner
                clickableRows
                columns={columns}
                columnFilter
                columnSorter
                footer
                itemsPerPageSelect
                itemsPerPage={5}
                pagination
                onFilteredItemsChange={(items) => {
                  //console.log(items)
                }}
                onSelectedItemsChange={(items) => {
                 // console.log(items)
                }}
                scopedColumns={{
                  avatar: (item) => (
                    <td>
                      <CAvatar src={`/images/avatars/${item.avatar}`} />
                    </td>
                  ),
                  status: (item) => (
                    <td>
                      <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
                    </td>
                  ),
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
                          <h4>{item.username}</h4>
                          <p className="text-muted">Felhasználó  {item.registered} óta</p>
                          <CButton size="sm" color="info"  data-id={item.id} onClick={handleEdit}>
                            Felhasználó szerkesztése
                          </CButton>
                          <CButton size="sm" color="danger" className="ml-1" data-id={item.id} variant='outline' onClick={condemnId}>
                            Törlés
                          </CButton>
                        </CCardBody>
                      </CCollapse>
                    )
                  },
                }}
                selectable
                sorterValue={{ column: 'status', state: 'asc' }}
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
                <CLoadingButton color="danger" onClick={handleDelete} disabled={isLoading} loading={isLoading} >
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
          {error} <CButton color="light" onClick={() => getList()} disabled={isLoading}>Retry</CButton>
        </CAlert>
      </CCol>
    </CRow>

  )
}

export default Tables
