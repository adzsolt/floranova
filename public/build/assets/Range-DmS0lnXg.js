import { j as jsxRuntimeExports } from "./client-DnTwIhck.js";
import { a as CRow, b as CCol, d as CCard, a0 as CCardHeader, e as CCardBody, l as CFormLabel, az as CFormRange } from "./index.es-DQOCfkkb.js";
import { m as DocsExample } from "./ProBadge-CF002Dfl.js";
import "./index-C98SRLOe.js";
import "./cil-user-q2NU2AQZ.js";
const Range = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Range" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Create custom ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: '<input type="range">' }),
          " controls with",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CFormRange>" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "forms/range", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "customRange1", children: "Example range" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormRange, { id: "customRange1" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Range" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Disabled" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Add the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "disabled" }),
          " boolean attribute on an input to give it a grayed out appearance and remove pointer events."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "forms/range#disabled", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "disabledRange", children: "Disabled range" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormRange, { id: "disabledRange", disabled: true })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Range" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Min and max" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Range inputs have implicit values for ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "min" }),
          " and ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "max" }),
          "—",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "0" }),
          " and ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "100" }),
          ", respectively. You may specify new values for those using the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "min" }),
          " and ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "max" }),
          " attributes."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "forms/range#min-and-max", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "customRange2", children: "Example range" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormRange, { min: "0", max: "5", defaultValue: "3", id: "customRange2" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Range" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Steps" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          'By default, range inputs "snap" to integer values. To change this, you can specify a ',
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "step" }),
          " value. In the example below, we double the number of steps by using ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: 'step="0.5"' }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "forms/range#steps", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "customRange3", children: "Example range" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormRange, { min: "0", max: "5", step: "0.5", defaultValue: "3", id: "customRange3" })
        ] })
      ] })
    ] }) })
  ] });
};
export {
  Range as default
};
