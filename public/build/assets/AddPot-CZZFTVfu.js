import { r as reactExports, j as jsxRuntimeExports } from "./client-DnTwIhck.js";
import { f as CForm, a as CRow, b as CCol, j as CFormInput, l as CFormLabel, aC as CAlert, at as CLoadingButton, k as CButton, d as CCard, e as CCardBody, a0 as CCardTitle } from "./index.es-HjcCfGYB.js";
import { a as axios } from "./axios-fEUzBR8L.js";
import { g as useNavigate } from "./index-BIpVExQM.js";
const AddPotForm = () => {
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [validated, setValidated] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const navigate = useNavigate();
  const formRef = reactExports.useRef();
  const nameRef = reactExports.useRef();
  const sizeRef = reactExports.useRef();
  const priceRef = reactExports.useRef();
  const handleSubmit = () => {
    const form = formRef.current;
    if (form.checkValidity() !== false) {
      setIsLoading(true);
      axios.post("/create-pot", {
        name: nameRef.current.value,
        size: sizeRef.current.value,
        price: priceRef.current.value
      }).then((response) => {
        navigate("/pot");
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
    navigate("/pot");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CForm, { ref: formRef, className: "needs-validation", noValidate: true, validated, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { md: 6, className: "mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CFormInput,
        {
          ref: nameRef,
          type: "text",
          name: "name",
          id: "name",
          placeholder: "Name",
          disabled: isLoading,
          feedbackInvalid: "Adj meg egy nevet",
          required: true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "name", children: "Név" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { md: 6, className: "mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { ref: sizeRef, type: "number", name: "size", id: "size", placeholder: "Méret", step: "any", disabled: isLoading, feedbackInvalid: "Adj meg egy méretet", required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "size", children: "Méret" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { md: 6, className: "mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { ref: priceRef, type: "number", name: "price", id: "price", placeholder: "Ár", step: "any", disabled: isLoading, feedbackInvalid: "Adj meg egy árat", required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "price", children: "Ár" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CAlert, { color: "danger", visible: error != "", children: error }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { xs: 12, className: "text-right", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CLoadingButton, { type: "button", color: "primary", loading: isLoading, disabled: isLoading, onClick: handleSubmit, children: "Cserép létrehozása" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "light", disabled: isLoading, onClick: handleCancel, className: "mr-1 ms-4", children: "Mégsem" })
    ] })
  ] }) });
};
const AddPot = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Cserép hozzáadása" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AddPotForm, {})
  ] }) });
};
export {
  AddPot as default
};
