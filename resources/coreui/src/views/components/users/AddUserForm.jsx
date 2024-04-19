
import { CButton } from '@coreui/react-pro';
import { CCol, CForm, CFormInput, CRow, CFormLabel, CFormFloating, CLoadingButton, CAlert, CButtonGroup, CFormCheck } from "@coreui/react-pro";
import axios from "axios";
import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
// import useMediaQuery from "../../hooks/useMediaQuery";

const AddUserForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState('');
  const { roles } = useContext(GlobalContext);
  const [roleId, setRoleId] = useState(1);
  const navigate = useNavigate();

  const formRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleRoleChange = (e) => {
   /* setRoleId(e.currentTarget.value);*/
  }

  //console.log(roles[0]);

  const handleSubmit = () => {
    const form = formRef.current;
    if (form.checkValidity() !== false)  {
      setIsLoading(true);

      axios.post('/create-user', {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
        .then( (response) => {
          // console.log('create user success ', response.data);
          return axios.post('/add-role', {
            user_id: response.data.id,
            role_id: roleId
          });
        })
        .then( (response) => {
          // console.log('update role success ', response.data);
          navigate('/users');
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
    navigate('/users');
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
            <CFormInput ref={emailRef} type="email" name="email" id="email" placeholder="Email" disabled={isLoading} feedbackInvalid='Adj meg egy érvényes email címet' required />
            <CFormLabel htmlFor="email">E-mail</CFormLabel>
          </CFormFloating>
        </CCol>
        <CCol md={6} className='mb-3'>
          <CFormFloating>
            <CFormInput ref={passwordRef} type="password" name="password" id="password" disabled={isLoading} feedbackInvalid='Adj meg egy jelszót' required />
            <CFormLabel htmlFor="password">Jelszó</CFormLabel>
          </CFormFloating>
        </CCol>
        <CCol xs={12} className='mb-3'>
          <CFormLabel htmlFor="role" className="mr-3">Jog</CFormLabel>
          <CButtonGroup
            className="flex-wrap ms-3"
            // vertical={useMediaQuery('(max-width: 768px)')}
          >
            {roles.map((val, key) => {
                return <CFormCheck button={{ color: 'primary', variant: 'outline' }} type="radio" name="role" key={key} id={val.name} value={val.id} autoComplete="off" label={val.name} disabled={isLoading} defaultChecked={key==0} onChange={handleRoleChange} />
              }
            )}
          </CButtonGroup>
        </CCol>
        <CCol xs={12}>
          <CAlert color="danger" visible={error != ''}>
            {error}
          </CAlert>
        </CCol>
        <CCol xs={12} className="text-right">
          <CLoadingButton type="button" color="primary" loading={isLoading} disabled={isLoading} onClick={handleSubmit}>
            Felhasználó létrehozása
          </CLoadingButton>
          <CButton   color='light' disabled={isLoading} onClick={handleCancel} className='mr-1 ms-4'>Mégsem</CButton>
        </CCol>
      </CRow>
    </CForm>
  )
}

export default AddUserForm;
