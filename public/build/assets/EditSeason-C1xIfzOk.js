import { r as reactExports, j as jsxRuntimeExports } from "./client-DnTwIhck.js";
import { f as CForm, a as CRow, b as CCol, aw as CFormFloating, j as CFormInput, l as CFormLabel, au as CDatePicker, aC as CAlert, ar as CLoadingButton, k as CButton, d as CCard, e as CCardBody, ac as CCardTitle } from "./index.es-DQOCfkkb.js";
import { a as axios } from "./axios-fEUzBR8L.js";
import { g as useNavigate, h as useParams } from "./index-CohQ1QJD.js";
const EditSeasonForm = ({ season }) => {
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [validated, setValidated] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const navigate = useNavigate();
  const formRef = reactExports.useRef();
  const nameRef = reactExports.useRef();
  const startDateRef = reactExports.useRef(season.start_date);
  const endDateRef = reactExports.useRef(season.end_date);
  const handleSubmit = async () => {
    const form = formRef.current;
    if (form.checkValidity() !== false) {
      setIsLoading(true);
      await axios.post("/update-season", {
        id: season.id,
        name: nameRef.current.value,
        start_date: startDateRef.current,
        end_date: endDateRef.current
      }).then((response) => {
      }).catch((error2) => {
        console.log("ERROR:: ", error2);
        setError(error2.message);
      }).finally(() => {
        setIsLoading(false);
        navigate("/seasons");
      });
    }
    setValidated(true);
  };
  const handleCancel = () => {
    navigate("/seasons");
  };
  const handleSetStartDate = (d) => {
    console.log(d);
    startDateRef.current = d;
  };
  const handleSetEndDate = (d) => {
    endDateRef.current = d;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CForm, { ref: formRef, className: "needs-validation", noValidate: true, validated, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormFloating, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { ref: nameRef, type: "text", name: "name", id: "name", placeholder: "Szezon neve", disabled: isLoading, defaultValue: season.name, feedbackInvalid: "A szezon neve kötelező", required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "name", children: "Szezon neve" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CDatePicker,
      {
        locale: "en-US",
        date: startDateRef.current,
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
        date: endDateRef.current,
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(CLoadingButton, { className: "me-3", type: "button", color: "primary", loading: isLoading, disabled: isLoading, onClick: handleSubmit, children: "Szezon frissítése" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "light", disabled: isLoading, onClick: handleCancel, className: "mr-1", children: "Mégsem" })
    ] })
  ] }) });
};
const EditSeason = () => {
  const controller = new AbortController();
  const { id } = useParams();
  const [isLoading, setIsLoading] = reactExports.useState(true);
  const [season, setSeason] = reactExports.useState({});
  const [error, setError] = reactExports.useState("");
  reactExports.useEffect(() => {
    let season2 = {};
    axios.post("/get-season", { id, signal: controller.signal }).then((response) => {
      season2 = response.data.season;
    }).then((response) => {
      setSeason(season2);
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
      "Szezon frissítése #",
      id
    ] }),
    !isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(EditSeasonForm, { season }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CAlert, { color: "danger", visible: error != "", children: error })
  ] }) });
};
export {
  EditSeason as default
};
