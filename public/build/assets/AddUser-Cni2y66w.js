import { r as reactExports, j as jsxRuntimeExports } from "./client-DnTwIhck.js";
import { f as CForm, a as CRow, b as CCol, aw as CFormFloating, j as CFormInput, l as CFormLabel, n as CButtonGroup, V as CFormCheck, aC as CAlert, ar as CLoadingButton, k as CButton, d as CCard, e as CCardBody, ac as CCardTitle } from "./index.es-DQOCfkkb.js";
import { a as axios } from "./axios-fEUzBR8L.js";
import { G as GlobalContext, g as useNavigate } from "./index-YJs6c4fe.js";
const AddUserForm = () => {
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [validated, setValidated] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const { roles } = reactExports.useContext(GlobalContext);
  const [roleId, setRoleId] = reactExports.useState(1);
  const navigate = useNavigate();
  const formRef = reactExports.useRef();
  const nameRef = reactExports.useRef();
  const emailRef = reactExports.useRef();
  const passwordRef = reactExports.useRef();
  const handleRoleChange = (e) => {
  };
  const handleSubmit = () => {
    const form = formRef.current;
    if (form.checkValidity() !== false) {
      setIsLoading(true);
      axios.post("/create-user", {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value
      }).then((response) => {
        return axios.post("/add-role", {
          user_id: response.data.id,
          role_id: roleId
        });
      }).then((response) => {
        navigate("/users");
      }).catch((error2) => {
        console.log("ERROR:: ", error2);
        setError(error2.message);
      }).finally(() => {
        setIsLoading(false);
      });
    }
    setValidated(true);
  };
  const handleCancel = () => {
    navigate("/users");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CForm, { ref: formRef, className: "needs-validation", noValidate: true, validated, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormFloating, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { ref: nameRef, type: "text", name: "name", id: "name", placeholder: "Name", disabled: isLoading, feedbackInvalid: "Adj meg egy nevet", required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "name", children: "Név" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormFloating, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { ref: emailRef, type: "email", name: "email", id: "email", placeholder: "Email", disabled: isLoading, feedbackInvalid: "Adj meg egy érvényes email címet", required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "email", children: "E-mail" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormFloating, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { ref: passwordRef, type: "password", name: "password", id: "password", disabled: isLoading, feedbackInvalid: "Adj meg egy jelszót", required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "password", children: "Jelszó" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { xs: 12, className: "mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "role", className: "mr-3", children: "Jog" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CButtonGroup,
        {
          className: "flex-wrap ms-3",
          children: roles.map(
            (val, key) => {
              return /* @__PURE__ */ jsxRuntimeExports.jsx(CFormCheck, { button: { color: "primary", variant: "outline" }, type: "radio", name: "role", id: val.name, value: val.id, autoComplete: "off", label: val.name, disabled: isLoading, defaultChecked: key == 0, onChange: handleRoleChange }, key);
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CAlert, { color: "danger", visible: error != "", children: error }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { xs: 12, className: "text-right", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CLoadingButton, { type: "button", color: "primary", loading: isLoading, disabled: isLoading, onClick: handleSubmit, children: "Felhasználó létrehozása" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "light", disabled: isLoading, onClick: handleCancel, className: "mr-1 ms-4", children: "Mégsem" })
    ] })
  ] }) });
};
const AddUser = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Felhasználó hozzáadása" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AddUserForm, {})
  ] }) });
};
export {
  AddUser as default
};
