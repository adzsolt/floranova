import { r as reactExports, j as jsxRuntimeExports } from "./client-DnTwIhck.js";
import { f as CForm, a as CRow, b as CCol, ax as CFormSelect, au as CDatePicker, aw as CFormFloating, j as CFormInput, l as CFormLabel, aC as CAlert, ar as CLoadingButton, k as CButton, d as CCard, e as CCardBody, ac as CCardTitle } from "./index.es-DQOCfkkb.js";
import { a as axios } from "./axios-fEUzBR8L.js";
import { G as GlobalContext, g as useNavigate, h as useParams } from "./index-4EuCJtbG.js";
import "./ProBadge-BLFbsSbk.js";
import "./cil-user-q2NU2AQZ.js";
const AddTemperatureForm = ({ heat_units1 }) => {
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [validated, setValidated] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  reactExports.useContext(GlobalContext);
  reactExports.useState(1);
  const navigate = useNavigate();
  const [work_date, setWorkDate] = reactExports.useState("");
  const [heatUnits, setHeatUnits] = reactExports.useState(heat_units1);
  const [heatUnitId, setHeatUnitId] = reactExports.useState(heat_units1[0].id);
  const formRef = reactExports.useRef();
  const daytime_temperature = reactExports.useRef();
  const night_temperature = reactExports.useRef();
  const handleSubmit = () => {
    const form = formRef.current;
    if (form.checkValidity() !== false) {
      setIsLoading(true);
      console.log(work_date, daytime_temperature, night_temperature, heatUnitId);
      axios.post("/store-temperature", {
        work_date,
        daytime_temperature: daytime_temperature.current.value,
        night_temperature: night_temperature.current.value,
        heat_unit_id: heatUnitId
      }).then((response) => {
        console.log(response.data);
        navigate("/temperatures");
      }).catch((error2) => {
        console.log("ERROR:: ", error2);
        setError(error2.message);
      }).finally(() => {
        setIsLoading(false);
      });
    }
    setValidated(true);
  };
  const handleHeatUnitChange = (e) => {
    setHeatUnitId(e.currentTarget.value);
  };
  const handleCancel = () => {
    navigate("/temperatures");
  };
  const handleSetWorkDate = (d) => {
    setWorkDate(d);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CForm, { ref: formRef, className: "needs-validation", noValidate: true, validated, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormSelect, { "aria-label": "Válassz fűtőegységet", className: "mb-3", value: heatUnitId, onChange: handleHeatUnitChange, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Fűtőegységek" }),
      heatUnits.map((val) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: val.id, children: [
        val.name,
        " "
      ] }, val.id))
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CDatePicker,
      {
        locale: "en-US",
        placeholder: "Adj meg egy dátumot",
        required: true,
        feedbackInvalid: "A dátum kötelező",
        onDateChange: (date) => {
          date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
          handleSetWorkDate(date.toISOString().split("T")[0]);
        }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormFloating, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CFormInput,
        {
          ref: daytime_temperature,
          type: "text",
          name: "daytime_temperature",
          id: "daytime_temperature",
          placeholder: "Nappali hőmérséklet",
          disabled: isLoading,
          feedbackInvalid: "Add meg a nappali hőmársákletet",
          required: true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "daytime_temperature", children: "Nappali hőmérséklet" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormFloating, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CFormInput,
        {
          ref: night_temperature,
          type: "text",
          name: "night-temperature",
          id: "night-temperature",
          placeholder: "Éjjeli hőmérésklet",
          disabled: isLoading,
          feedbackInvalid: "Add meg az éjjeli hőmérésékletet",
          required: true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "night-temperature", children: "Éjjeli hőmérséklet" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CAlert, { color: "danger", visible: error != "", children: error }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { xs: 12, className: "text-right", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CLoadingButton, { type: "button", color: "primary", loading: isLoading, disabled: isLoading, onClick: handleSubmit, children: "Hőmérséklet létrehozása" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "light", disabled: isLoading, onClick: handleCancel, className: "mr-1 ms-4", children: "Mégsem" })
    ] })
  ] }) });
};
const AddTemperature = () => {
  const controller = new AbortController();
  const { id } = useParams();
  const [isLoading, setIsLoading] = reactExports.useState(true);
  const [heatUnits, setHeatUnits] = reactExports.useState({});
  const [error, setError] = reactExports.useState("");
  reactExports.useEffect(() => {
    let heat_units = {};
    axios.get("/get-heat-units", { id, signal: controller.signal }).then((response) => {
      heat_units = response.data.heat_units;
    }).then((response) => {
      setHeatUnits(heat_units);
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
  console.log(heatUnits);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Hőmérséklet hozzáadása" }),
    !isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(AddTemperatureForm, { heat_units1: heatUnits })
  ] }) });
};
export {
  AddTemperature as default
};
