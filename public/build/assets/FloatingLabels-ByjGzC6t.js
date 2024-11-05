import { j as jsxRuntimeExports } from "./client-DnTwIhck.js";
import { a as CRow, b as CCol, d as CCard, a2 as CCardHeader, e as CCardBody, aw as CFormFloating, j as CFormInput, l as CFormLabel, t as CFormTextarea, ax as CFormSelect } from "./index.es-HjcCfGYB.js";
import { j as DocsExample } from "./ProBadge-DyLaPGoc.js";
import "./index-CO8Q3xGz.js";
import "./cil-user-q2NU2AQZ.js";
const FloatingLabels = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Floating labels" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Wrap a pair of ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CFormInput>" }),
          " and ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CFormLabel>" }),
          " ",
          "elements in ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "CFormFloating" }),
          " to enable floating labels with textual form fields. A ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "placeholder" }),
          " is required on each ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CFormInput>" }),
          " ",
          "as our method of CSS-only floating labels uses the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: ":placeholder-shown" }),
          " ",
          "pseudo-element. Also note that the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CFormInput>" }),
          " must come first so we can utilize a sibling selector (e.g., ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "~" }),
          ")."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "forms/floating-labels", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormFloating, { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { type: "email", id: "floatingInput", placeholder: "name@example.com" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "floatingInput", children: "Email address" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormFloating, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { type: "password", id: "floatingPassword", placeholder: "Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "floatingPassword", children: "Password" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "When there's a ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "value" }),
          " already defined, ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CFormLabel>" }),
          "s will automatically adjust to their floated position."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "forms/floating-labels", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormFloating, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CFormInput,
            {
              type: "email",
              id: "floatingInputValue",
              placeholder: "name@example.com",
              defaultValue: "test@example.com"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "floatingInputValue", children: "Input with value" })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Floating labels" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Textareas" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "By default, ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CFormTextarea>" }),
          "s will be the same height as",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CFormInput>" }),
          "s."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "forms/floating-labels#textareas", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormFloating, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CFormTextarea,
            {
              id: "floatingTextarea",
              placeholder: "Leave a comment here"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "floatingTextarea", children: "Comments" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "To set a custom height on your ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CFormTextarea;>" }),
          ", do not use the",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "rows" }),
          " attribute. Instead, set an explicit ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "height" }),
          " (either inline or via custom CSS)."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "forms/floating-labels#textareas", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormFloating, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CFormTextarea,
            {
              placeholder: "Leave a comment here",
              id: "floatingTextarea2",
              style: { height: "100px" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "floatingTextarea2", children: "Comments" })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Floating labels" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Selects" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Other than ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CFormInput>" }),
          ", floating labels are only available on",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CFormSelect>" }),
          "s. They work in the same way, but unlike",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CFormInput>" }),
          "s, they'll always show the",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CFormLabel>" }),
          " in its floated state.",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
            "Selects with ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "size" }),
            " and ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "multiple" }),
            " are not supported."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "forms/floating-labels#selects", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormFloating, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormSelect, { id: "floatingSelect", "aria-label": "Floating label select example", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Open this select menu" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "1", children: "One" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2", children: "Two" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "3", children: "Three" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "floatingSelect", children: "Works with selects" })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Floating labels" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Layout" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-medium-emphasis small", children: "When working with the CoreUI for Bootstrap grid system, be sure to place form elements within column classes." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "forms/floating-labels#layout", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { xs: { gutter: 2 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormFloating, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CFormInput,
              {
                type: "email",
                id: "floatingInputGrid",
                placeholder: "name@example.com",
                defaultValue: "email@example.com"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "floatingInputGrid", children: "Email address" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormFloating, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormSelect, { id: "floatingSelectGrid", "aria-label": "Floating label select example", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Open this select menu" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "1", children: "One" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2", children: "Two" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "3", children: "Three" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "floatingSelectGrid", children: "Works with selects" })
          ] }) })
        ] }) })
      ] })
    ] }) })
  ] });
};
export {
  FloatingLabels as default
};
