import { r as reactExports, j as jsxRuntimeExports } from "./client-DnTwIhck.js";
import { f as CForm, a as CRow, b as CCol, aw as CFormFloating, j as CFormInput, l as CFormLabel, au as CDatePicker, ax as CFormSelect, aC as CAlert, ar as CLoadingButton, k as CButton, d as CCard, e as CCardBody, ac as CCardTitle } from "./index.es-DQOCfkkb.js";
import { a as axios } from "./axios-fEUzBR8L.js";
import { g as useNavigate } from "./index-DSp_2-9r.js";
const AddLotForm = () => {
  const controller = new AbortController();
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [validated, setValidated] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const [start_date, setStartDate] = reactExports.useState("");
  const [productiontUnits, setProductionUnits] = reactExports.useState([]);
  const [productiontUnitId, setProductionUnitId] = reactExports.useState([]);
  const [seasons, setSeasons] = reactExports.useState([]);
  const [seasonId, setSeasonId] = reactExports.useState([]);
  const [fertilizers, setFertilizers] = reactExports.useState([]);
  const [fertilizerId, setFertilizerId] = reactExports.useState([]);
  const [layouts, setLayouts] = reactExports.useState([]);
  const [layoutId, setLayoutId] = reactExports.useState([]);
  const [peats, setPeats] = reactExports.useState([]);
  const [peatId, setPeatId] = reactExports.useState([]);
  const [plants, setPlants] = reactExports.useState([]);
  const [plantId, setPlantId] = reactExports.useState([]);
  const [pots, setPots] = reactExports.useState([]);
  const [potId, setPotId] = reactExports.useState([]);
  const navigate = useNavigate();
  const formRef = reactExports.useRef();
  const nameRef = reactExports.useRef();
  const volumeRef = reactExports.useRef();
  const quantityRef = reactExports.useRef();
  const getLotFormData = () => {
    setIsLoading(true);
    setError("");
    axios.post(
      "/get-lot-form-data",
      {
        signal: controller.signal,
        lot_id: 0
      }
    ).then((response) => {
      setProductionUnits(response.data.data.production_units);
      setFertilizers(response.data.data.fertilizers);
      setSeasons(response.data.data.seasons);
      setLayouts(response.data.data.layouts);
      setPeats(response.data.data.peats);
      setPots(response.data.data.pots);
      setPlants(response.data.data.plants);
    }).catch((error2) => {
      console.log("ERROR:: ", error2);
      setError(error2.message);
    }).finally(() => {
      setIsLoading(false);
    });
  };
  reactExports.useEffect(() => {
    getLotFormData();
    return () => {
      controller.abort();
    };
  }, []);
  const handleProductionUnitChange = (e) => {
    setProductionUnitId(e.currentTarget.value);
  };
  const handleSeasonChange = (e) => {
    setSeasonId(e.currentTarget.value);
  };
  const handleLayoutChange = (e) => {
    setLayoutId(e.currentTarget.value);
  };
  const handlePeatChange = (e) => {
    setPeatId(e.currentTarget.value);
  };
  const handlePotChange = (e) => {
    setPotId(e.currentTarget.value);
  };
  const handlePlantChange = (e) => {
    setPlantId(e.currentTarget.value);
  };
  const handleFertilizerChange = (e) => {
    setFertilizerId(e.currentTarget.value);
  };
  const handleSetStartDate = (d) => {
    setStartDate(d);
  };
  const handleSubmit = () => {
    const form = formRef.current;
    if (form.checkValidity() !== false) {
      setIsLoading(true);
      axios.post("/create-lot", {
        name: nameRef.current.value,
        quantity: quantityRef.current.value,
        start_date,
        peat_id: peatId,
        pot_id: potId,
        plant_id: plantId,
        season_id: seasonId,
        production_unit_id: productiontUnitId,
        layout_id: layoutId,
        fertilizer_id: fertilizerId,
        fertilizer_volume: volumeRef.current.value
      }).then((response) => {
        navigate("/lots");
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
    navigate("/lots");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CForm, { ref: formRef, className: "needs-validation", noValidate: true, validated, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormFloating, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { ref: nameRef, type: "text", name: "name", id: "name", placeholder: "Name", disabled: isLoading, feedbackInvalid: "Adj meg egy nevet", required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "name", children: "Név" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormFloating, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { ref: quantityRef, type: "text", name: "quantity", id: "quantity", placeholder: "Darabszám", step: "any", disabled: isLoading, feedbackInvalid: "Add meg a virágcsoport darabszámát", required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "width", children: "Darabszám" })
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      CFormSelect,
      {
        "aria-label": "Válassz szezont",
        className: "mb-3",
        feedbackInvalid: "Válassz szezont",
        required: true,
        onChange: handleSeasonChange,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Válaszz szezont" }),
          seasons.map((val) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: val.id, children: [
            val.name,
            " "
          ] }, val.id))
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      CFormSelect,
      {
        "aria-label": "Válassz cserepet ",
        className: "mb-3",
        feedbackInvalid: "Válassz cserepet",
        required: true,
        onChange: handlePotChange,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Válassz cserepet" }),
          pots.map((val) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: val.id, children: [
            val.name,
            " "
          ] }, val.id))
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      CFormSelect,
      {
        "aria-label": "Válassz tőzeget ",
        className: "mb-3",
        feedbackInvalid: "Válassz tőzeget",
        required: true,
        onChange: handlePeatChange,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Válassz tőzeget" }),
          peats.map((val) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: val.id, children: [
            val.name,
            " "
          ] }, val.id))
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      CFormSelect,
      {
        "aria-label": "Válassz növényt ",
        className: "mb-3",
        feedbackInvalid: "Válassz növényt",
        required: true,
        onChange: handlePlantChange,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Válassz növényt" }),
          plants.map((val) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: val.id, children: [
            val.name,
            " "
          ] }, val.id))
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      CFormSelect,
      {
        "aria-label": "Válassz műtrágyát ",
        className: "mb-3",
        feedbackInvalid: "Válassz műtrágyát",
        required: true,
        onChange: handleFertilizerChange,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Válassz műtrágyát" }),
          fertilizers.map((val) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: val.id, children: [
            val.name,
            " "
          ] }, val.id))
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormFloating, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { ref: volumeRef, type: "text", name: "volume", id: "volume", placeholder: "Műtrágya mennyiseg per köbméter", step: "any", disabled: isLoading, feedbackInvalid: "Adj meg aműtrágya mennyiségét egy köbméterre", required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "volume", children: "Műtrágya mennyiség köbméterenként" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      CFormSelect,
      {
        "aria-label": "Válassz termelőegységet ",
        className: "mb-3",
        feedbackInvalid: "Válassz termelőegységet",
        required: true,
        onChange: handleProductionUnitChange,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Válassz termelőegységet" }),
          productiontUnits.map((val) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: val.id, children: [
            val.name,
            " "
          ] }, val.id))
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      CFormSelect,
      {
        "aria-label": "Válassz elrendezést ",
        className: "mb-3",
        feedbackInvalid: "Válassz Elrendezést",
        required: true,
        onChange: handleLayoutChange,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Válassz elrendezést" }),
          layouts.map((val) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: val.id, children: [
            val.name,
            " "
          ] }, val.id))
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CAlert, { color: "danger", visible: error != "", children: error }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { xs: 12, className: "text-right", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CLoadingButton, { type: "button", color: "primary", loading: isLoading, disabled: isLoading, onClick: handleSubmit, children: "Virágcsoport hozzáadása" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "light", disabled: isLoading, onClick: handleCancel, className: "mr-1 ms-4", children: "Mégsem" })
    ] })
  ] }) });
};
const AddLot = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Virágcsoport hozzáadása" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AddLotForm, {})
  ] }) });
};
export {
  AddLot as default
};
