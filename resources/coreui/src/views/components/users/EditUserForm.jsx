
import { CCol, CForm, CFormInput, CRow, CFormLabel, CFormFloating, CLoadingButton, CAlert, CButton, CButtonGroup, CFormCheck } from "@coreui/react-pro";
import axios from "axios";
import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
// import useMediaQuery from "../../hooks/useMediaQuery";

const EditUserForm = ({user}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [validated, setValidated] = useState(false);
    const [error, setError] = useState('');
    const { roles } = useContext(GlobalContext);
    const [roleId, setRoleId] = useState(user.role[0]?.id);
    const navigate = useNavigate();

    const formRef = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    // console.log(user);

    const handleRoleChange = (e) => {
        setRoleId(e.currentTarget.value);
    }

    const handleSubmit = async () => {
        const form = formRef.current;
        if (form.checkValidity() !== false)  {
            setIsLoading(true);

            await axios.post('/update-user', {
                id: user.id,
                name: nameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value,
            })
            .then( (response) => {
                // console.log('update user success ', response.data);
                if( user.role[0]?.id != roleId && roleId ) {
                    return axios.post('update-role', {
                        user_id: user.id,
                        role_id_remove: user.role[0]?.id,
                        role_id_add: roleId
                    })
                    .then( (response) => {
                        // console.log('update role success ', response);
                    })
                    .catch( error => {
                        console.log("ERROR:: ", error);
                        setError(error.message);
                    })
                }
            })
            .catch( error => {
                console.log("ERROR:: ", error);
                setError(error.message);
            })
            .finally( ()=> {
                setIsLoading(false);
                navigate('/users');
            });
        }
        setValidated(true);
    }

    const handleCancel = () => {
        navigate('/users');
    }

    return (
        <CForm ref={formRef} className="needs-validation" noValidate validated={validated} >
            <CRow>
                <CCol md={6} className='mb-3'>
                    <CFormFloating>
                        <CFormInput ref={nameRef} type="text" name="name" id="name" placeholder="Name" disabled={isLoading} defaultValue={user.name} feedbackInvalid='Please provide a Name' required />
                        <CFormLabel htmlFor="name">Név</CFormLabel>
                    </CFormFloating>
                </CCol>
                <CCol md={6} className='mb-3'>
                    <CFormFloating>
                        <CFormInput ref={emailRef} type="email" name="email" id="email" placeholder="Email" disabled={isLoading} defaultValue={user.email} feedbackInvalid='Please provide an Email' required />
                        <CFormLabel htmlFor="email">E-mail</CFormLabel>
                    </CFormFloating>
                </CCol>
                <CCol md={6} className='mb-3'>
                    <CFormFloating>
                        <CFormInput ref={passwordRef} type="password" name="password" id="password" disabled={isLoading} defaultValue={user.password} />
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
                                return <CFormCheck button={{ color: 'primary', variant: 'outline' }} type="radio" name="role" key={key} id={val.name} value={val.id} autoComplete="off" label={val.name} disabled={isLoading} defaultChecked={user.role[0]?.id == val.id} onChange={handleRoleChange} />
                            })
                        }
                    </CButtonGroup>
                </CCol>
                <CCol xs={12}>
                    <CAlert color="danger" visible={error != ''}>
                        {error}
                    </CAlert>
                </CCol>
                <CCol xs={12} className="text-right">

                    <CLoadingButton className= 'me-3' type="button" color="primary" loading={isLoading} disabled={isLoading} onClick={handleSubmit}>
                        Felhsználó frissítése
                    </CLoadingButton>
                  <CButton color='light' disabled={isLoading} onClick={handleCancel} className='mr-1'>Mégsem</CButton>
                </CCol>
            </CRow>
        </CForm>
    )
}

export default EditUserForm;
