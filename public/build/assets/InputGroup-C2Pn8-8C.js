import { j as jsxRuntimeExports } from "./client-DnTwIhck.js";
import { a as CRow, b as CCol, d as CCard, a0 as CCardHeader, e as CCardBody, g as CInputGroup, h as CInputGroupText, j as CFormInput, l as CFormLabel, t as CFormTextarea, V as CFormCheck, k as CButton, o as CDropdown, p as CDropdownToggle, q as CDropdownMenu, r as CDropdownItem, Q as CDropdownDivider, ax as CFormSelect } from "./index.es-DQOCfkkb.js";
import { m as DocsExample } from "./ProBadge-CF002Dfl.js";
import "./index-C98SRLOe.js";
import "./cil-user-q2NU2AQZ.js";
const Select = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Input group" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Basic example" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Place one add-on or button on either side of an input. You may also place one on both sides of an input. Remember to place ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CFormLabel>" }),
          "s outside the input group."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "forms/input-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CInputGroupText, { id: "basic-addon1", children: "@" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CFormInput,
              {
                placeholder: "Username",
                "aria-label": "Username",
                "aria-describedby": "basic-addon1"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CFormInput,
              {
                placeholder: "Recipient's username",
                "aria-label": "Recipient's username",
                "aria-describedby": "basic-addon2"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CInputGroupText, { id: "basic-addon2", children: "@example.com" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "basic-url", children: "Your vanity URL" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CInputGroupText, { id: "basic-addon3", children: "https://example.com/users/" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { id: "basic-url", "aria-describedby": "basic-addon3" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CInputGroupText, { children: "$" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { "aria-label": "Amount (to the nearest dollar)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CInputGroupText, { children: ".00" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { placeholder: "Username", "aria-label": "Username" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CInputGroupText, { children: "@" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { placeholder: "Server", "aria-label": "Server" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CInputGroupText, { children: "With textarea" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormTextarea, { "aria-label": "With textarea" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Input group" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Wrapping" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Input groups wrap by default via ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "flex-wrap: wrap" }),
          " in order to accommodate custom form field validation within an input group. You may disable this with",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: ".flex-nowrap" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "forms/input-group#wrapping", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { className: "flex-nowrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CInputGroupText, { id: "addon-wrapping", children: "@" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CFormInput,
            {
              placeholder: "Username",
              "aria-label": "Username",
              "aria-describedby": "addon-wrapping"
            }
          )
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Input group" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Sizing" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Add the relative form sizing classes to the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CInputGroup>" }),
          " itself and contents within will automatically resize—no need for repeating the form control size classes on each element."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-medium-emphasis small", children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Sizing on the individual input group elements isn'tsupported." }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "forms/input-group#sizing", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { size: "sm", className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CInputGroupText, { id: "inputGroup-sizing-sm", children: "Small" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CFormInput,
              {
                "aria-label": "Sizing example input",
                "aria-describedby": "inputGroup-sizing-sm"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CInputGroupText, { id: "inputGroup-sizing-default", children: "Default" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CFormInput,
              {
                "aria-label": "Sizing example input",
                "aria-describedby": "inputGroup-sizing-default"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { size: "lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CInputGroupText, { id: "inputGroup-sizing-lg", children: "Large" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CFormInput,
              {
                "aria-label": "Sizing example input",
                "aria-describedby": "inputGroup-sizing-lg"
              }
            )
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Input group" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Checkboxes and radios" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-medium-emphasis small", children: "Place any checkbox or radio option within an input group's addon instead of text." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "forms/input-group#checkboxes-and-radios", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CInputGroupText, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              CFormCheck,
              {
                type: "checkbox",
                value: "",
                "aria-label": "Checkbox for following text input"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { "aria-label": "Text input with checkbox" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CInputGroupText, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              CFormCheck,
              {
                type: "radio",
                value: "",
                "aria-label": "Radio button for following text input"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { "aria-label": "Text input with radio button" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Input group" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Multiple inputs" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "While multiple ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CFormInput>" }),
          "s are supported visually, validation styles are only available for input groups with a single",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CFormInput>" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "forms/input-group#multiple-inputs", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CInputGroupText, { children: "First and last name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { "aria-label": "First name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { "aria-label": "Last name" })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Input group" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Multiple addons" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-medium-emphasis small", children: "Multiple add-ons are supported and can be mixed with checkbox and radio input versions.." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "forms/input-group#multiple-addons", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CInputGroupText, { children: "$" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CInputGroupText, { children: "0.00" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { "aria-label": "Dollar amount (with dot and two decimal places)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { "aria-label": "Dollar amount (with dot and two decimal places)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CInputGroupText, { children: "$" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CInputGroupText, { children: "0.00" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Input group" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Button addons" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-medium-emphasis small", children: "Multiple add-ons are supported and can be mixed with checkbox and radio input versions.." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "forms/input-group#button-addons", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { type: "button", color: "secondary", variant: "outline", id: "button-addon1", children: "Button" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CFormInput,
              {
                placeholder: "",
                "aria-label": "Example text with button addon",
                "aria-describedby": "button-addon1"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CFormInput,
              {
                placeholder: "Recipient's username",
                "aria-label": "Recipient's username",
                "aria-describedby": "button-addon2"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { type: "button", color: "secondary", variant: "outline", id: "button-addon2", children: "Button" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { type: "button", color: "secondary", variant: "outline", children: "Button" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { type: "button", color: "secondary", variant: "outline", children: "Button" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { placeholder: "", "aria-label": "Example text with two button addons" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CFormInput,
              {
                placeholder: "Recipient's username",
                "aria-label": "Recipient's username with two button addons"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { type: "button", color: "secondary", variant: "outline", children: "Button" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { type: "button", color: "secondary", variant: "outline", children: "Button" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Input group" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Buttons with dropdowns" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "forms/input-group#buttons-with-dropdowns", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { className: "mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdown, { variant: "input-group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownToggle, { color: "secondary", variant: "outline", children: "Dropdown" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdownMenu, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownDivider, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { "aria-label": "Text input with dropdown button" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { className: "mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { "aria-label": "Text input with dropdown button" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdown, { alignment: "end", variant: "input-group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownToggle, { color: "secondary", variant: "outline", children: "Dropdown" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdownMenu, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownDivider, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdown, { variant: "input-group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownToggle, { color: "secondary", variant: "outline", children: "Dropdown" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdownMenu, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownDivider, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { "aria-label": "Text input with 2 dropdown buttons" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdown, { alignment: "end", variant: "input-group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownToggle, { color: "secondary", variant: "outline", children: "Dropdown" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdownMenu, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownDivider, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Input group" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Segmented buttons" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "forms/input-group#segmented-buttons", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { className: "mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdown, { variant: "input-group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { type: "button", color: "secondary", variant: "outline", children: "Action" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownToggle, { color: "secondary", variant: "outline", split: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdownMenu, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownDivider, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { "aria-label": "Text input with segmented dropdown button" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { "aria-label": "Text input with segmented dropdown button" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdown, { alignment: "end", variant: "input-group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { type: "button", color: "secondary", variant: "outline", children: "Action" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownToggle, { color: "secondary", variant: "outline", split: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdownMenu, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownDivider, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Input group" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Custom select" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "forms/input-group#custom-select", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { className: "mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CInputGroupText, { component: "label", htmlFor: "inputGroupSelect01", children: "Options" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormSelect, { id: "inputGroupSelect01", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Choose..." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "1", children: "One" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2", children: "Two" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "3", children: "Three" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { className: "mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormSelect, { id: "inputGroupSelect02", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Choose..." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "1", children: "One" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2", children: "Two" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "3", children: "Three" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CInputGroupText, { component: "label", htmlFor: "inputGroupSelect02", children: "Options" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { className: "mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { type: "button", color: "secondary", variant: "outline", children: "Button" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormSelect, { id: "inputGroupSelect03", "aria-label": "Example select with button addon", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Choose..." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "1", children: "One" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2", children: "Two" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "3", children: "Three" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormSelect, { id: "inputGroupSelect04", "aria-label": "Example select with button addon", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Choose..." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "1", children: "One" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2", children: "Two" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "3", children: "Three" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { type: "button", color: "secondary", variant: "outline", children: "Button" })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Input group" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Custom file input" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "forms/input-group#custom-file-input", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { className: "mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CInputGroupText, { component: "label", htmlFor: "inputGroupFile01", children: "Upload" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { type: "file", id: "inputGroupFile01" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { className: "mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { type: "file", id: "inputGroupFile02" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CInputGroupText, { component: "label", htmlFor: "inputGroupFile02", children: "Upload" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { className: "mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CButton,
            {
              type: "button",
              color: "secondary",
              variant: "outline",
              id: "inputGroupFileAddon03",
              children: "Button"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CFormInput,
            {
              type: "file",
              id: "inputGroupFile03",
              "aria-describedby": "inputGroupFileAddon03",
              "aria-label": "Upload"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CFormInput,
            {
              type: "file",
              id: "inputGroupFile04",
              "aria-describedby": "inputGroupFileAddon04",
              "aria-label": "Upload"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CButton,
            {
              type: "button",
              color: "secondary",
              variant: "outline",
              id: "inputGroupFileAddon04",
              children: "Button"
            }
          )
        ] })
      ] }) })
    ] }) })
  ] });
};
export {
  Select as default
};
