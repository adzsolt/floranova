import { r as reactExports, j as jsxRuntimeExports } from "./client-DnTwIhck.js";
import { f as CForm, a as CRow, b as CCol, aw as CFormFloating, j as CFormInput, l as CFormLabel, ax as CFormSelect, aC as CAlert, at as CLoadingButton, k as CButton, d as CCard, e as CCardBody, a0 as CCardTitle } from "./index.es-HjcCfGYB.js";
import { a as axios } from "./axios-fEUzBR8L.js";
import { g as useNavigate, h as useParams } from "./index-S2Eg7aT7.js";
const EditFertilizerForm = ({ fertilizer }) => {
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [validated, setValidated] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const navigate = useNavigate();
  const [using, setUsing] = reactExports.useState(fertilizer.using);
  const formRef = reactExports.useRef();
  const nameRef = reactExports.useRef();
  const provisionRef = reactExports.useRef();
  const priceRef = reactExports.useRef();
  const handleSubmit = async () => {
    const form = formRef.current;
    if (form.checkValidity() !== false) {
      setIsLoading(true);
      await axios.post("/update-fertilizer", {
        id: fertilizer.id,
        name: nameRef.current.value,
        using,
        provision: provisionRef.current.value,
        price: priceRef.current.value
      }).then((response) => {
      }).catch((error2) => {
        console.log("ERROR:: ", error2);
        setError(error2.message);
      }).finally(() => {
        setIsLoading(false);
        navigate("/fertilizer");
      });
    }
    setValidated(true);
  };
  const handleUsingChange = (e) => {
    setUsing(e.currentTarget.value);
  };
  const handleCancel = () => {
    navigate("/fertilizer");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CForm, { ref: formRef, className: "needs-validation", noValidate: true, validated, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormFloating, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { ref: nameRef, type: "text", name: "name", id: "name", placeholder: "Műtrágya neve", disabled: isLoading, defaultValue: fertilizer.name, feedbackInvalid: "A műtrágyaneve kötelező", required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "name", children: "Műtrágya neve" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormSelect, { "aria-label": "Válassz használati formát", className: "mb-3", defaultValue: fertilizer.using, onChange: handleUsingChange, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Egyszeri", children: "Egyszeri" }, "egyszeri"),
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Tőbbszori", children: "Többszöri" }, "tobbszori")
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormFloating, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { ref: provisionRef, type: "number", name: "provision", id: "provision", placeholder: "Műtrágya tartalék", step: "any", disabled: isLoading, defaultValue: fertilizer.provision, feedbackInvalid: "A műtrtágya tartalék kötelező", required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "provision", children: "Műtrágya tartalék" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormFloating, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { ref: priceRef, type: "number", name: "price", id: "price", placeholder: "Műtrágya  ára", step: "any", disabled: isLoading, defaultValue: fertilizer.price, feedbackInvalid: "A műtrágya ára kötelező", required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "price", children: "Műtrágya ára" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CAlert, { color: "danger", visible: error != "", children: error }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { xs: 12, className: "text-right", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CLoadingButton, { className: "me-3", type: "button", color: "primary", loading: isLoading, disabled: isLoading, onClick: handleSubmit, children: "Műtrágya frissítése" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "light", disabled: isLoading, onClick: handleCancel, className: "mr-1", children: "Mégsem" })
    ] })
  ] }) });
};
const EditFertilizer = () => {
  const controller = new AbortController();
  const { id } = useParams();
  const [isLoading, setIsLoading] = reactExports.useState(true);
  const [fertilizer, setFertilizer] = reactExports.useState({});
  const [error, setError] = reactExports.useState("");
  reactExports.useEffect(() => {
    let fertilizer2 = {};
    axios.post("/get-fertilizer", { id, signal: controller.signal }).then((response) => {
      fertilizer2 = response.data.fertilizer;
    }).then((response) => {
      setFertilizer(fertilizer2);
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
      "Műtrágya frissítése #",
      id
    ] }),
    !isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(EditFertilizerForm, { fertilizer }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CAlert, { color: "danger", visible: error != "", children: error })
  ] }) });
};
export {
  EditFertilizer as default
};
