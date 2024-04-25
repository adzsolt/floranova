import { r as reactExports, j as jsxRuntimeExports } from "./client-DnTwIhck.js";
import { f as CForm, a as CRow, b as CCol, aw as CFormFloating, j as CFormInput, l as CFormLabel, ax as CFormSelect, aC as CAlert, ar as CLoadingButton, k as CButton, d as CCard, e as CCardBody, ac as CCardTitle } from "./index.es-DQOCfkkb.js";
import { a as axios } from "./axios-fEUzBR8L.js";
import { g as useNavigate } from "./index-C_UkVuKZ.js";
const AddProductionUnitForm = () => {
  const controller = new AbortController();
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [validated, setValidated] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const [heatUnitId, setHeatUnitId] = reactExports.useState(1);
  const [heatUnits, setHeatUnits] = reactExports.useState([]);
  const navigate = useNavigate();
  const formRef = reactExports.useRef();
  const nameRef = reactExports.useRef();
  const lengthRef = reactExports.useRef();
  const widthRef = reactExports.useRef();
  const getHeatUnits = () => {
    setIsLoading(true);
    setError("");
    axios.get(
      "/get-heat-units",
      {
        signal: controller.signal
      }
    ).then((response) => {
      setHeatUnits(response.data.heat_units);
    }).catch((error2) => {
      console.log("ERROR:: ", error2);
      setError(error2.message);
    }).finally(() => {
      setIsLoading(false);
    });
  };
  reactExports.useEffect(() => {
    getHeatUnits();
    return () => {
      controller.abort();
    };
  }, []);
  const handleHeatUnitChange = (e) => {
    setHeatUnitId(e.currentTarget.value);
  };
  const handleSubmit = () => {
    const form = formRef.current;
    if (form.checkValidity() !== false) {
      setIsLoading(true);
      axios.post("/create-production-unit", {
        name: nameRef.current.value,
        length: lengthRef.current.value,
        width: widthRef.current.value,
        heat_unit_id: heatUnitId
      }).then((response) => {
        navigate("/production-units");
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
    navigate("/production-units");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CForm, { ref: formRef, className: "needs-validation", noValidate: true, validated, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormFloating, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { ref: nameRef, type: "text", name: "name", id: "name", placeholder: "Name", disabled: isLoading, feedbackInvalid: "Adj meg egy nevet", required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "name", children: "Név" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormFloating, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { ref: lengthRef, type: "text", name: "length", id: "length", placeholder: "Hosszúság", step: "any", disabled: isLoading, feedbackInvalid: "Adj meg egy hosszúságot", required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "length", children: "Hosszúság" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormFloating, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { ref: widthRef, type: "text", name: "width", id: "width", placeholder: "Szélesség", step: "any", disabled: isLoading, feedbackInvalid: "Adj meg egyá szélességet", required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "width", children: "Szélesség" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormSelect, { "aria-label": "Válassz fűtőegységet", className: "mb-3", onChange: handleHeatUnitChange, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Open this select menu" }),
      heatUnits.map((val) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: val.id, children: [
        val.name,
        " "
      ] }, val.id))
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CAlert, { color: "danger", visible: error != "", children: error }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { xs: 12, className: "text-right", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CLoadingButton, { type: "button", color: "primary", loading: isLoading, disabled: isLoading, onClick: handleSubmit, children: "Termelőegység frissítése" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "light", disabled: isLoading, onClick: handleCancel, className: "mr-1 ms-4", children: "Mégsem" })
    ] })
  ] }) });
};
const AddProductionUnit = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Termelőegység hozzáadása" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AddProductionUnitForm, {})
  ] }) });
};
export {
  AddProductionUnit as default
};
