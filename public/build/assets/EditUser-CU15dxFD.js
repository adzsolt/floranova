import { r as reactExports, j as jsxRuntimeExports } from "./client-DnTwIhck.js";
import { f as CForm, a as CRow, b as CCol, aw as CFormFloating, j as CFormInput, l as CFormLabel, n as CButtonGroup, V as CFormCheck, aC as CAlert, ar as CLoadingButton, k as CButton, d as CCard, e as CCardBody, ac as CCardTitle } from "./index.es-DQOCfkkb.js";
import { a as axios } from "./axios-fEUzBR8L.js";
import { G as GlobalContext, g as useNavigate, h as useParams } from "./index-DVynkEBp.js";
const EditUserForm = ({ user }) => {
  var _a;
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [validated, setValidated] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const { roles } = reactExports.useContext(GlobalContext);
  const [roleId, setRoleId] = reactExports.useState((_a = user.role[0]) == null ? void 0 : _a.id);
  const navigate = useNavigate();
  const formRef = reactExports.useRef();
  const nameRef = reactExports.useRef();
  const emailRef = reactExports.useRef();
  const passwordRef = reactExports.useRef();
  const handleRoleChange = (e) => {
    setRoleId(e.currentTarget.value);
  };
  const handleSubmit = async () => {
    const form = formRef.current;
    if (form.checkValidity() !== false) {
      setIsLoading(true);
      await axios.post("/update-user", {
        id: user.id,
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value
      }).then((response) => {
        var _a2, _b;
        if (((_a2 = user.role[0]) == null ? void 0 : _a2.id) != roleId && roleId) {
          return axios.post("update-role", {
            user_id: user.id,
            role_id_remove: (_b = user.role[0]) == null ? void 0 : _b.id,
            role_id_add: roleId
          }).then((response2) => {
          }).catch((error2) => {
            console.log("ERROR:: ", error2);
            setError(error2.message);
          });
        }
      }).catch((error2) => {
        console.log("ERROR:: ", error2);
        setError(error2.message);
      }).finally(() => {
        setIsLoading(false);
        navigate("/users");
      });
    }
    setValidated(true);
  };
  const handleCancel = () => {
    navigate("/users");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CForm, { ref: formRef, className: "needs-validation", noValidate: true, validated, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormFloating, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { ref: nameRef, type: "text", name: "name", id: "name", placeholder: "Name", disabled: isLoading, defaultValue: user.name, feedbackInvalid: "Please provide a Name", required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "name", children: "Név" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormFloating, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { ref: emailRef, type: "email", name: "email", id: "email", placeholder: "Email", disabled: isLoading, defaultValue: user.email, feedbackInvalid: "Please provide an Email", required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "email", children: "E-mail" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormFloating, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { ref: passwordRef, type: "password", name: "password", id: "password", disabled: isLoading, defaultValue: user.password }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "password", children: "Jelszó" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { xs: 12, className: "mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "role", className: "mr-3", children: "Jog" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CButtonGroup,
        {
          className: "flex-wrap ms-3",
          children: roles.map((val, key) => {
            var _a2;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(CFormCheck, { button: { color: "primary", variant: "outline" }, type: "radio", name: "role", id: val.name, value: val.id, autoComplete: "off", label: val.name, disabled: isLoading, defaultChecked: ((_a2 = user.role[0]) == null ? void 0 : _a2.id) == val.id, onChange: handleRoleChange }, key);
          })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CAlert, { color: "danger", visible: error != "", children: error }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { xs: 12, className: "text-right", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CLoadingButton, { className: "me-3", type: "button", color: "primary", loading: isLoading, disabled: isLoading, onClick: handleSubmit, children: "Felhsználó frissítése" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "light", disabled: isLoading, onClick: handleCancel, className: "mr-1", children: "Mégsem" })
    ] })
  ] }) });
};
const EditUser = () => {
  const controller = new AbortController();
  const { id } = useParams();
  const [isLoading, setIsLoading] = reactExports.useState(true);
  const [user, setUser] = reactExports.useState({});
  const [error, setError] = reactExports.useState("");
  reactExports.useEffect(() => {
    let user2 = {};
    axios.post("/get-user", { id, signal: controller.signal }).then((response) => {
      user2 = response.data.user;
      user2.role = [];
      return axios.post("/get-user-role", { user_id: id, signal: controller.signal });
    }).then((response) => {
      user2.role = response.data.roles;
      setUser(user2);
    }).catch((error2) => {
      console.log("ERROR:: ", error2);
      setError(error2.message);
    }).finally(() => {
      setIsLoading(false);
    });
    return () => {
      controller.abort();
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardTitle, { children: [
      "Felhasználó frissítése #",
      id
    ] }),
    !isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(EditUserForm, { user }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CAlert, { color: "danger", visible: error != "", children: error })
  ] }) });
};
export {
  EditUser as default
};
