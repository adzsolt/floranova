import { r as reactExports, j as jsxRuntimeExports } from "./client-DnTwIhck.js";
import { f as CForm, a as CRow, b as CCol, ax as CFormSelect, aw as CFormFloating, j as CFormInput, l as CFormLabel, a1 as CDatePicker, aC as CAlert, at as CLoadingButton, k as CButton, d as CCard, e as CCardBody, a0 as CCardTitle } from "./index.es-HjcCfGYB.js";
import { a as axios } from "./axios-fEUzBR8L.js";
import { h as useParams, g as useNavigate } from "./index-BIpVExQM.js";
const AddFertilizerStatusForm = () => {
  const controller = new AbortController();
  let { id } = useParams();
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [validated, setValidated] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const navigate = useNavigate();
  const [start_date, setStartDate] = reactExports.useState("");
  const [action, setAction] = reactExports.useState("");
  const [lots, setLots] = reactExports.useState([]);
  reactExports.useState("");
  const [businesses, setBusinesses] = reactExports.useState([]);
  const [businessId, setBusinessId] = reactExports.useState(0);
  const formRef = reactExports.useRef();
  reactExports.useRef();
  const volumeRef = reactExports.useRef();
  const priceRef = reactExports.useRef();
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
  const getFertilizerStatusFormData = () => {
    setIsLoading(true);
    setError("");
    axios.get(
      "/get-lots",
      {
        signal: controller.signal
      }
    ).then((response) => {
      setLots(response.data.lots);
    }).catch((error2) => {
      console.log("ERROR:: ", error2);
      setError(error2.message);
    }).finally(() => {
      setIsLoading(false);
    });
  };
  reactExports.useEffect(() => {
    getFertilizerStatusFormData();
    getBusinesses();
    return () => {
      controller.abort();
    };
  }, []);
  const handleSubmit = () => {
    const form = formRef.current;
    if (form.checkValidity() !== false) {
      setIsLoading(true);
      axios.post("/add-fertilizer-status", {
        id,
        action,
        lot_id: 0,
        volume: volumeRef.current.value,
        price: priceRef.current.value,
        action_date: start_date,
        business_id: businessId
      }).then((response) => {
        navigate("/fertilizer");
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
    navigate("/fertilizer");
  };
  const handleSetStartDate = (d) => {
    setStartDate(d);
  };
  const handleActionChange = (e) => {
    setAction(e.currentTarget.value);
  };
  const handleBusinessChange = (e) => {
    setBusinessId(e.currentTarget.value);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CForm, { ref: formRef, className: "needs-validation", noValidate: true, validated, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormSelect, { "aria-label": "Használat vagy hozzáadás", className: "mb-3", onChange: handleActionChange, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Válassz Hozzáadás és használat között" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Hozzáadás", children: "Hozzáadás" }, "hozzaadas"),
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "All", children: "Használat" }, "All")
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormFloating, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CFormInput,
        {
          ref: volumeRef,
          type: "text",
          name: "volume",
          id: "volume",
          placeholder: "Mennyiség",
          disabled: isLoading,
          feedbackInvalid: "Adj meg ehy mennyiséget",
          required: true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "volume", children: "Mennyiség" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormFloating, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CFormInput,
        {
          ref: priceRef,
          type: "text",
          name: "price",
          id: "price",
          placeholder: "Ár",
          feedbackInvalid: "Add meg a bejövő árat",
          required: true,
          disabled: action == "All" ? true : false
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "price", children: "Ár" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormSelect, { "aria-label": "Válassz egységet", className: "mb-3", onChange: handleBusinessChange, disabled: action == "All" ? false : true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Nyisd ki ezt a menüt, hogy hozzárendelhesd egy egységhez" }),
      businesses.map((val) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: val.id, children: [
        val.name,
        " "
      ] }, val.id))
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CDatePicker,
      {
        locale: "en-US",
        placeholder: "Adj meg egy kezdési dátumot",
        required: true,
        feedbackInvalid: "A kezdési dátum kötelező",
        onDateChange: (date) => {
          date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
          handleSetStartDate(date.toISOString().split("T")[0]);
        }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CAlert, { color: "danger", visible: error != "", children: error }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { xs: 12, className: "text-right", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CLoadingButton, { type: "button", color: "primary", loading: isLoading, disabled: isLoading, onClick: handleSubmit, children: "Műtrágya állapot létrehozása" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "light", disabled: isLoading, onClick: handleCancel, className: "mr-1 ms-4", children: "Mégsem" })
    ] })
  ] }) });
};
const AddFertilizerStatus = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Műtrágya állapot hozzáadása" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AddFertilizerStatusForm, {})
  ] }) });
};
export {
  AddFertilizerStatus as default
};
