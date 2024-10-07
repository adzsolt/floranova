import { r as reactExports, j as jsxRuntimeExports } from "./client-DnTwIhck.js";
import { f as CForm, a as CRow, b as CCol, aw as CFormFloating, j as CFormInput, l as CFormLabel, ax as CFormSelect, aC as CAlert, ar as CLoadingButton, k as CButton, d as CCard, e as CCardBody, ac as CCardTitle } from "./index.es-DQOCfkkb.js";
import { a as axios } from "./axios-fEUzBR8L.js";
import { g as useNavigate, h as useParams } from "./index-CohQ1QJD.js";
const EditProductionUnitForm = ({ production_unit }) => {
  const controller = new AbortController();
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [validated, setValidated] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const [heatUnits, setHeatUnits] = reactExports.useState([]);
  const [heatUnitId, setHeatUnitId] = reactExports.useState(production_unit.heat_unit_id);
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
  const handleSubmit = async () => {
    const form = formRef.current;
    if (form.checkValidity() !== false) {
      setIsLoading(true);
      await axios.post("/update-production-unit", {
        id: production_unit.id,
        name: nameRef.current.value,
        length: lengthRef.current.value,
        width: widthRef.current.value,
        heat_unit_id: heatUnitId
      }).catch((error2) => {
        console.log("ERROR:: ", error2);
        setError(error2.message);
      }).finally(() => {
        setIsLoading(false);
        navigate("/production-units");
      });
    }
    setValidated(true);
  };
  const handleCancel = () => {
    navigate("/production-units");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CForm, { ref: formRef, className: "needs-validation", noValidate: true, validated, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormFloating, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { ref: nameRef, type: "text", name: "name", id: "name", defaultValue: production_unit.name, placeholder: "Name", disabled: isLoading, feedbackInvalid: "Adj meg egy nevet", required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "name", children: "Név" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormFloating, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { ref: lengthRef, type: "text", name: "length", id: "length", placeholder: "Hosszúság", defaultValue: production_unit.length, disabled: isLoading, feedbackInvalid: "Adj meg egy hosszúságot", required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "length", children: "Hosszúság" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormFloating, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { ref: widthRef, type: "text", name: "width", id: "width", placeholder: "Szélesség", defaultValue: production_unit.width, disabled: isLoading, feedbackInvalid: "Adj meg egyá szélességet", required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "width", children: "Szélesség" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { xs: 6, className: "mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "heat-unit", children: "Fűtőegység" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormSelect, { "aria-label": "Válassz fűtőegységet", id: "heat-unit", className: "mb-3", value: production_unit.heat_unit_id, onChange: handleHeatUnitChange, children: heatUnits.map((val) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: val.id, children: [
        val.name,
        " "
      ] }, val.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CAlert, { color: "danger", visible: error != "", children: error }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { xs: 12, className: "text-right", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CLoadingButton, { className: "me-3", type: "button", color: "primary", loading: isLoading, disabled: isLoading, onClick: handleSubmit, children: "Termelőegység frissítése" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "light", disabled: isLoading, onClick: handleCancel, className: "mr-1", children: "Mégsem" })
    ] })
  ] }) });
};
const EditProductionUnit = () => {
  const controller = new AbortController();
  const { id } = useParams();
  const [isLoading, setIsLoading] = reactExports.useState(true);
  const [productionUnit, setProductionUnit] = reactExports.useState({});
  const [error, setError] = reactExports.useState("");
  reactExports.useEffect(() => {
    let production_unit = {};
    axios.post("/get-production-unit", { id, signal: controller.signal }).then((response) => {
      production_unit = response.data.production_unit;
      setProductionUnit(production_unit);
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
      "Termelőegység frissítése #",
      id
    ] }),
    !isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(EditProductionUnitForm, { production_unit: productionUnit }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CAlert, { color: "danger", visible: error != "", children: error })
  ] }) });
};
export {
  EditProductionUnit as default
};
