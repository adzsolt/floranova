import { r as reactExports, j as jsxRuntimeExports } from "./client-DineUaZJ.js";
import { f as CForm, a as CRow, b as CCol, j as CFormInput, a7 as CFormLabel, ae as CAlert, a2 as CLoadingButton, k as CButton, d as CCard, e as CCardBody, u as CCardTitle } from "./index.es-CuBG9yLS.js";
import { a as axios } from "./axios-fEUzBR8L.js";
import { u as useNavigate } from "./index-DOY0rKmI.js";
const AddLayoutForm = () => {
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [validated, setValidated] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const navigate = useNavigate();
  const formRef = reactExports.useRef();
  const nameRef = reactExports.useRef();
  const pot_per_m2Ref = reactExports.useRef();
  const handleSubmit = () => {
    const form = formRef.current;
    if (form.checkValidity() !== false) {
      setIsLoading(true);
      axios.post("/create-layout", {
        name: nameRef.current.value,
        pot_per_m2: pot_per_m2Ref.current.value
      }).then((response) => {
        navigate("/layouts");
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
    navigate("/layouts");
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { ref: pot_per_m2Ref, type: "number", name: "pot_per_m2", id: "pot_per_m2", placeholder: "Cserép per m2", disabled: isLoading, feedbackInvalid: "Add meg a cserepek számát egy négyzetméteren", required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "pot_per_m2", children: "Cserép darab per m2" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CAlert, { color: "danger", visible: error != "", children: error }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { xs: 12, className: "text-right", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CLoadingButton, { type: "button", color: "primary", loading: isLoading, disabled: isLoading, onClick: handleSubmit, children: "Elrendezés létrehozása" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "light", disabled: isLoading, onClick: handleCancel, className: "mr-1 ms-4", children: "Mégsem" })
    ] })
  ] }) });
};
const AddLayout = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Elrendezés hozzáadása" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AddLayoutForm, {})
  ] }) });
};
export {
  AddLayout as default
};
