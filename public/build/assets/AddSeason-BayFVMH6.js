import { r as reactExports, j as jsxRuntimeExports } from "./client-DnTwIhck.js";
import { f as CForm, a as CRow, b as CCol, aw as CFormFloating, j as CFormInput, l as CFormLabel, au as CDatePicker, aC as CAlert, ar as CLoadingButton, k as CButton, d as CCard, e as CCardBody, ac as CCardTitle } from "./index.es-DQOCfkkb.js";
import { a as axios } from "./axios-fEUzBR8L.js";
import { G as GlobalContext, g as useNavigate } from "./index-DVynkEBp.js";
const AddSeasonForm = () => {
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [validated, setValidated] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  reactExports.useContext(GlobalContext);
  reactExports.useState(1);
  const navigate = useNavigate();
  const [start_date, setStartDate] = reactExports.useState("");
  const [end_date, setEndDate] = reactExports.useState("");
  const formRef = reactExports.useRef();
  reactExports.useRef();
  const nameRef = reactExports.useRef();
  reactExports.useRef();
  reactExports.useRef();
  const handleSubmit = () => {
    const form = formRef.current;
    if (form.checkValidity() !== false) {
      setIsLoading(true);
      axios.post("/create-season", {
        name: nameRef.current.value,
        start_date,
        end_date
      }).then((response) => {
        navigate("/seasons");
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
    navigate("/seasons");
  };
  const handleSetStartDate = (d) => {
    setStartDate(d);
  };
  const handleSetEndDate = (d) => {
    setEndDate(d);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CForm, { ref: formRef, className: "needs-validation", noValidate: true, validated, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormFloating, { children: [
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
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CDatePicker,
      {
        locale: "en-US",
        placeholder: "Adj mage egy kezdési dátumot",
        required: true,
        feedbackInvalid: "A kezdési dátum kötelező",
        onDateChange: (date) => {
          date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
          handleSetStartDate(date.toISOString().split("T")[0]);
        }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CDatePicker,
      {
        locale: "en-US",
        placeholder: "Adj meg egy befejezési dátumot",
        required: true,
        feedbackInvalid: "A befejezési dátum kötelező",
        onDateChange: (date) => {
          date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
          handleSetEndDate(date.toISOString().split("T")[0]);
        }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CAlert, { color: "danger", visible: error != "", children: error }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { xs: 12, className: "text-right", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CLoadingButton, { type: "button", color: "primary", loading: isLoading, disabled: isLoading, onClick: handleSubmit, children: "Szezon létrehozása" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "light", disabled: isLoading, onClick: handleCancel, className: "mr-1 ms-4", children: "Mégsem" })
    ] })
  ] }) });
};
const AddSeason = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Szezon hozzáadása" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AddSeasonForm, {})
  ] }) });
};
export {
  AddSeason as default
};
