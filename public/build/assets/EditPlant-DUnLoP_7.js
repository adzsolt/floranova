import { r as reactExports, j as jsxRuntimeExports } from "./client-DnTwIhck.js";
import { f as CForm, a as CRow, b as CCol, aw as CFormFloating, j as CFormInput, l as CFormLabel, aC as CAlert, at as CLoadingButton, k as CButton, d as CCard, e as CCardBody, a0 as CCardTitle } from "./index.es-HjcCfGYB.js";
import { a as axios } from "./axios-fEUzBR8L.js";
import { g as useNavigate, h as useParams } from "./index-CMs2b6AS.js";
const EditPlantForm = ({ plant }) => {
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [validated, setValidated] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const navigate = useNavigate();
  const formRef = reactExports.useRef();
  const nameRef = reactExports.useRef();
  const colorRef = reactExports.useRef();
  const priceRef = reactExports.useRef();
  const handleSubmit = async () => {
    const form = formRef.current;
    if (form.checkValidity() !== false) {
      setIsLoading(true);
      await axios.post("/update-plant", {
        id: plant.id,
        name: nameRef.current.value,
        color: colorRef.current.value,
        price: priceRef.current.value
      }).then((response) => {
      }).catch((error2) => {
        console.log("ERROR:: ", error2);
        setError(error2.message);
      }).finally(() => {
        setIsLoading(false);
        navigate("/plant");
      });
    }
    setValidated(true);
  };
  const handleCancel = () => {
    navigate("/plant");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CForm, { ref: formRef, className: "needs-validation", noValidate: true, validated, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormFloating, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { ref: nameRef, type: "text", name: "name", id: "name", placeholder: "Cserép neve", disabled: isLoading, defaultValue: plant.name, feedbackInvalid: "A Növény neve kötelező", required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "name", children: "Növény neve" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormFloating, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { ref: colorRef, type: "text", name: "color", id: "color", placeholder: "Növény színe", disabled: isLoading, defaultValue: plant.color, feedbackInvalid: "A növény színe kötelező", required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "color", children: "Növény színe" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormFloating, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { ref: priceRef, type: "number", name: "price", id: "price", placeholder: "Növény ára", step: "any", disabled: isLoading, defaultValue: plant.price, feedbackInvalid: "A növény ára kötelező", required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "name", children: "Növény ára" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CAlert, { color: "danger", visible: error != "", children: error }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { xs: 12, className: "text-right", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CLoadingButton, { className: "me-3", type: "button", color: "primary", loading: isLoading, disabled: isLoading, onClick: handleSubmit, children: "Növény frissítése" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "light", disabled: isLoading, onClick: handleCancel, className: "mr-1", children: "Mégsem" })
    ] })
  ] }) });
};
const EditPlant = () => {
  const controller = new AbortController();
  const { id } = useParams();
  const [isLoading, setIsLoading] = reactExports.useState(true);
  const [plant, setPlant] = reactExports.useState({});
  const [error, setError] = reactExports.useState("");
  reactExports.useEffect(() => {
    let plant2 = {};
    axios.post("/get-plant", { id, signal: controller.signal }).then((response) => {
      plant2 = response.data.plant;
    }).then((response) => {
      setPlant(plant2);
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
      "Növény frissítése #",
      id
    ] }),
    !isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(EditPlantForm, { plant }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CAlert, { color: "danger", visible: error != "", children: error })
  ] }) });
};
export {
  EditPlant as default
};
