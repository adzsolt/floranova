import { r as reactExports, j as jsxRuntimeExports } from "./client-DnTwIhck.js";
import { f as CForm, a as CRow, b as CCol, aw as CFormFloating, j as CFormInput, l as CFormLabel, ax as CFormSelect, aC as CAlert, ar as CLoadingButton, k as CButton, d as CCard, e as CCardBody, ac as CCardTitle } from "./index.es-DQOCfkkb.js";
import { a as axios } from "./axios-fEUzBR8L.js";
import { g as useNavigate, h as useParams } from "./index-XkXksHqM.js";
import "./ProBadge-C_ssrJzR.js";
import "./cil-user-q2NU2AQZ.js";
const EditHeatUnitForm = ({ heat_unit }) => {
  const controller = new AbortController();
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [validated, setValidated] = reactExports.useState(false);
  const [businessId, setBusinessId] = reactExports.useState(0);
  const [businesses, setBusinesses] = reactExports.useState([]);
  const [error, setError] = reactExports.useState("");
  const navigate = useNavigate();
  console.log(heat_unit.business_name);
  const formRef = reactExports.useRef();
  const nameRef = reactExports.useRef();
  const getBusinesses = () => {
    setIsLoading(true);
    setError("");
    axios.get(
      "/get-businesses",
      {
        signal: controller.signal
      }
    ).then((response) => {
      setBusinesses(response.data.businesses);
    }).catch((error2) => {
      console.log("ERROR:: ", error2);
      setError(error2.message);
    }).finally(() => {
      setIsLoading(false);
      setBusinessId(heat_unit.business_id);
    });
  };
  reactExports.useEffect(() => {
    getBusinesses();
    return () => {
      controller.abort();
    };
  }, []);
  const handleBusinessChange = (e) => {
    setBusinessId(e.currentTarget.value);
  };
  const handleSubmit = async () => {
    const form = formRef.current;
    if (form.checkValidity() !== false) {
      setIsLoading(true);
      await axios.post("/update-heat-unit", {
        id: heat_unit.id,
        name: nameRef.current.value,
        business_id: businessId
      }).then((response) => {
      }).catch((error2) => {
        console.log("ERROR:: ", error2);
        setError(error2.message);
      }).finally(() => {
        setIsLoading(false);
        navigate("/heat-units");
      });
    }
    setValidated(true);
  };
  const handleCancel = () => {
    navigate("/heat-units");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CForm, { ref: formRef, className: "needs-validation", noValidate: true, validated, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormFloating, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { ref: nameRef, type: "text", name: "name", id: "name", placeholder: "Fűtőegység neve", disabled: isLoading, defaultValue: heat_unit.name, feedbackInvalid: "A fűtőegység neve kötelező", required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "name", children: "Fűtőegység neve" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CFormSelect, { "aria-label": "Válassz egységet", className: "mb-3", value: heat_unit.business_id, onChange: handleBusinessChange, children: businesses.map((val) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: val.id, children: [
      val.name,
      " "
    ] }, val.id)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CAlert, { color: "danger", visible: error != "", children: error }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { xs: 12, className: "text-right", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CLoadingButton, { className: "me-3", type: "button", color: "primary", loading: isLoading, disabled: isLoading, onClick: handleSubmit, children: "Fűtőegység frissítése" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "light", disabled: isLoading, onClick: handleCancel, className: "mr-1", children: "Mégsem" })
    ] })
  ] }) });
};
const EditHeatUnit = () => {
  const controller = new AbortController();
  const { id } = useParams();
  const [isLoading, setIsLoading] = reactExports.useState(true);
  const [heatUnit, setHeatUnit] = reactExports.useState({});
  const [error, setError] = reactExports.useState("");
  reactExports.useEffect(() => {
    let heat_unit = {};
    axios.post("/get-heat-unit", { id, signal: controller.signal }).then((response) => {
      heat_unit = response.data.heat_unit;
    }).then((response) => {
      setHeatUnit(heat_unit);
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
      "Fűtőegység frissítése #",
      id
    ] }),
    !isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(EditHeatUnitForm, { heat_unit: heatUnit }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CAlert, { color: "danger", visible: error != "", children: error })
  ] }) });
};
export {
  EditHeatUnit as default
};
