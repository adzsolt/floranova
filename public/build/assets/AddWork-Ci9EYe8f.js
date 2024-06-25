import { r as reactExports, j as jsxRuntimeExports } from "./client-DnTwIhck.js";
import { f as CForm, a as CRow, b as CCol, aw as CFormFloating, j as CFormInput, l as CFormLabel, au as CDatePicker, aC as CAlert, ar as CLoadingButton, k as CButton, d as CCard, e as CCardBody, ac as CCardTitle } from "./index.es-DQOCfkkb.js";
import { a as axios } from "./axios-fEUzBR8L.js";
import { g as useNavigate } from "./index-DICdOvpl.js";
const AddWorkForm = () => {
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [validated, setValidated] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const navigate = useNavigate();
  const date = /* @__PURE__ */ new Date();
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  const [startDate, setStartDate] = reactExports.useState(date.toISOString().split("T")[0]);
  const formRef = reactExports.useRef();
  const spendRef = reactExports.useRef();
  const handleSubmit = () => {
    const form = formRef.current;
    if (form.checkValidity() !== false) {
      setIsLoading(true);
      axios.post("/store-works", {
        period_input: spendRef.current.value,
        work_date: startDate
      }).then((response) => {
        navigate("/works");
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
    navigate("/works");
  };
  const handleSetStartDate = (d) => {
    setStartDate(d);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CForm, { ref: formRef, className: "needs-validation", noValidate: true, validated, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormFloating, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CFormInput,
        {
          ref: spendRef,
          type: "text",
          name: "spend",
          id: "spend",
          placeholder: "K0ltség",
          disabled: isLoading,
          feedbackInvalid: "Add meg a költséget",
          required: true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "spend", children: "Költség" })
    ] }) }),
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CAlert, { color: "danger", visible: error != "", children: error }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { xs: 12, className: "text-right", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CLoadingButton, { type: "button", color: "primary", loading: isLoading, disabled: isLoading, onClick: handleSubmit, children: "Munkaköltség létrehozása" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "light", disabled: isLoading, onClick: handleCancel, className: "mr-1 ms-4", children: "Mégsem" })
    ] })
  ] }) });
};
const AddWork = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Munkaköltség hozzáadása" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AddWorkForm, {})
  ] }) });
};
export {
  AddWork as default
};
