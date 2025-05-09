import { r as reactExports, j as jsxRuntimeExports } from "./client-DnTwIhck.js";
import { f as CForm, a as CRow, b as CCol, a1 as CDatePicker, aw as CFormFloating, j as CFormInput, l as CFormLabel, ax as CFormSelect, aC as CAlert, at as CLoadingButton, k as CButton, d as CCard, e as CCardBody, a0 as CCardTitle } from "./index.es-HjcCfGYB.js";
import { g as useNavigate } from "./index-BIpVExQM.js";
import { a as axios } from "./axios-fEUzBR8L.js";
const AddSpendForm = () => {
  const controller = new AbortController();
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [validated, setValidated] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const navigate = useNavigate();
  const date = /* @__PURE__ */ new Date();
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  const [startDate, setStartDate] = reactExports.useState(date.toISOString().split("T")[0]);
  const [businesses, setBusinesses] = reactExports.useState([]);
  const [businessId, setBusinessId] = reactExports.useState([]);
  const formRef = reactExports.useRef();
  const gasSpendRef = reactExports.useRef();
  const electricitySpendRef = reactExports.useRef();
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
  const handleSubmit = () => {
    formRef.current;
    setIsLoading(true);
    axios.post("/store-spend", {
      work_date: startDate,
      spent_gas_period_input: gasSpendRef.current.value,
      spent_electricity_period_input: electricitySpendRef.current.value,
      business_id: businessId
    }).then((response) => {
      navigate("/spends");
    }).catch((error2) => {
      console.log("ERROR:: ", error2);
      setError(error2.message);
    }).finally(() => {
      setIsLoading(false);
    });
    setValidated(true);
  };
  const handleCancel = () => {
    navigate("/spends");
  };
  const handleSetStartDate = (d) => {
    setStartDate(d);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CForm, { ref: formRef, className: "needs-validation", noValidate: true, validated, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CDatePicker,
      {
        locale: "en-US",
        placeholder: "Adj meg egy dátumot",
        required: true,
        feedbackInvalid: "A  dátum kötelező",
        date: startDate,
        onDateChange: (date2) => {
          date2.setMinutes(date2.getMinutes() - date2.getTimezoneOffset());
          handleSetStartDate(date2.toISOString().split("T")[0]);
        }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormFloating, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CFormInput,
        {
          ref: gasSpendRef,
          type: "text",
          name: "gas",
          id: "gas",
          placeholder: "Gáz",
          disabled: isLoading,
          feedbackInvalid: "Add meg a gázköltséget",
          required: true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "gas", children: "Gázköltség" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormFloating, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CFormInput,
        {
          ref: electricitySpendRef,
          type: "text",
          name: "electricity",
          id: "electricity",
          placeholder: "Villany",
          disabled: isLoading,
          feedbackInvalid: "Add meg a villanyköltséget",
          required: true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "electricity", children: "Villanyköltség" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormSelect, { "aria-label": "Válassz egységet", className: "mb-3", onChange: handleBusinessChange, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Nyisd ki ezt a menüt, hogy hozzárendelhesd egy egységhez" }),
      businesses.map((val) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: val.id, children: [
        val.name,
        " "
      ] }, val.id))
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CAlert, { color: "danger", visible: error != "", children: error }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { xs: 12, className: "text-right", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CLoadingButton, { type: "button", color: "primary", loading: isLoading, disabled: isLoading, onClick: handleSubmit, children: "Fogyasztás létrehozása" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "light", disabled: isLoading, onClick: handleCancel, className: "mr-1 ms-4", children: "Mégsem" })
    ] })
  ] }) });
};
const AddSpend = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Fogyasztás hozzáadása" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AddSpendForm, {})
  ] }) });
};
export {
  AddSpend as default
};
