import { j as jsxRuntimeExports } from "./client-DnTwIhck.js";
import { a as CRow, b as CCol, d as CCard, a2 as CCardHeader, e as CCardBody, f as CForm, l as CFormLabel, j as CFormInput, t as CFormTextarea, k as CButton } from "./index.es-HjcCfGYB.js";
import { j as DocsExample } from "./ProBadge-BBELDliX.js";
import "./index-BIpVExQM.js";
import "./cil-user-q2NU2AQZ.js";
const FormControl = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Form Control" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "forms/form-control", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CForm, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "exampleFormControlInput1", children: "Email address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CFormInput,
            {
              type: "email",
              id: "exampleFormControlInput1",
              placeholder: "name@example.com"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "exampleFormControlTextarea1", children: "Example textarea" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormTextarea, { id: "exampleFormControlTextarea1", rows: "3" })
        ] })
      ] }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Form Control" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Sizing" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Set heights using ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "size" }),
          " property like ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: 'size="lg"' }),
          " and",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: 'size="sm"' }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "forms/form-control#sizing", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CFormInput,
            {
              type: "text",
              size: "lg",
              placeholder: "Large input",
              "aria-label": "lg input example"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CFormInput,
            {
              type: "text",
              placeholder: "Default input",
              "aria-label": "default input example"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CFormInput,
            {
              type: "text",
              size: "sm",
              placeholder: "Small input",
              "aria-label": "sm input example"
            }
          )
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Form Control" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Disabled" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Add the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "disabled" }),
          " boolean attribute on an input to give it a grayed out appearance and remove pointer events."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "forms/form-control#disabled", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CFormInput,
            {
              type: "text",
              placeholder: "Disabled input",
              "aria-label": "Disabled input example",
              disabled: true
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CFormInput,
            {
              type: "text",
              placeholder: "Disabled readonly input",
              "aria-label": "Disabled input example",
              disabled: true,
              readOnly: true
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {})
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Form Control" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Readonly" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Add the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "readOnly" }),
          " boolean attribute on an input to prevent modification of the input's value. Read-only inputs appear lighter (just like disabled inputs), but retain the standard cursor."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "forms/form-control#readonly", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CFormInput,
          {
            type: "text",
            placeholder: "Readonly input here...",
            "aria-label": "readonly input example",
            readOnly: true
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Form Control" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Readonly plain text" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "If you want to have ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<input readonly>" }),
          " elements in your form styled as plain text, use the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "plainText" }),
          " boolean property to remove the default form field styling and preserve the correct margin and padding."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "components/accordion", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "staticEmail", className: "col-sm-2 col-form-label", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-sm-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              CFormInput,
              {
                type: "text",
                id: "staticEmail",
                defaultValue: "email@example.com",
                readOnly: true,
                plainText: true
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "inputPassword", className: "col-sm-2 col-form-label", children: "Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-sm-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { type: "password", id: "inputPassword" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/accordion", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CForm, { className: "row g-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "staticEmail2", className: "visually-hidden", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CFormInput,
              {
                type: "text",
                id: "staticEmail2",
                defaultValue: "email@example.com",
                readOnly: true,
                plainText: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "inputPassword2", className: "visually-hidden", children: "Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { type: "password", id: "inputPassword2", placeholder: "Password" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { type: "submit", className: "mb-3", children: "Confirm identity" }) })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Form Control" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "File input" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "forms/form-control#file-input", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "formFile", children: "Default file input example" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { type: "file", id: "formFile" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "formFileMultiple", children: "Multiple files input example" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { type: "file", id: "formFileMultiple", multiple: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "formFileDisabled", children: "Disabled file input example" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { type: "file", id: "formFileDisabled", disabled: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "formFileSm", children: "Small file input example" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { type: "file", size: "sm", id: "formFileSm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "formFileLg", children: "Large file input example" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { type: "file", size: "lg", id: "formFileLg" })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Form Control" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Color" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "forms/form-control#color", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "exampleColorInput", children: "Color picker" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CFormInput,
          {
            type: "color",
            id: "exampleColorInput",
            defaultValue: "#563d7c",
            title: "Choose your color"
          }
        )
      ] }) })
    ] }) })
  ] });
};
export {
  FormControl as default
};
