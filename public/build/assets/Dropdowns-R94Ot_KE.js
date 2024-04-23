import { j as jsxRuntimeExports } from "./client-DnTwIhck.js";
import { a as CRow, b as CCol, d as CCard, a0 as CCardHeader, e as CCardBody, o as CDropdown, p as CDropdownToggle, q as CDropdownMenu, r as CDropdownItem, Q as CDropdownDivider, k as CButton, n as CButtonGroup } from "./index.es-DQOCfkkb.js";
import { m as DocsExample } from "./ProBadge-Trb8gTuP.js";
import "./index-FVFFpgU8.js";
import "./cil-user-q2NU2AQZ.js";
const Dropdowns = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Dropdown" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Single button" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Here's how you can put them to work with either ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<button>" }),
          " ",
          "elements:"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/dropdown#single-button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdown, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownToggle, { color: "secondary", children: "Dropdown button" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdownMenu, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Action" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Another action" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Something else here" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-medium-emphasis small", children: "The best part is you can do this with any button variant, too:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/dropdown#single-button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: ["primary", "secondary", "success", "info", "warning", "danger"].map(
          (color, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdown, { variant: "btn-group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownToggle, { color, children: color }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdownMenu, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownDivider, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }, index)
        ) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Dropdown" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Split button" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of boolean prop ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "split" }),
          " for proper spacing around the dropdown caret."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "We use this extra class to reduce the horizontal ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "padding" }),
          " on either side of the caret by 25% and remove the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "margin-left" }),
          " that's attached for normal button dropdowns. Those additional changes hold the caret centered in the split button and implement a more properly sized hit area next to the main button."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/dropdown#split-button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: ["primary", "secondary", "success", "info", "warning", "danger"].map(
          (color, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdown, { variant: "btn-group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color, children: color }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownToggle, { color, split: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdownMenu, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownDivider, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }, index)
        ) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Dropdown" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Sizing" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-medium-emphasis small", children: "Button dropdowns work with buttons of all sizes, including default and split dropdown buttons." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "components/dropdown#sizing", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdown, { variant: "btn-group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownToggle, { color: "secondary", size: "lg", children: "Large button" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdownMenu, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownDivider, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdown, { variant: "btn-group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "secondary", size: "lg", children: "Large split button" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownToggle, { color: "secondary", size: "lg", split: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdownMenu, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownDivider, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "components/dropdown#sizing", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdown, { variant: "btn-group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownToggle, { color: "secondary", size: "sm", children: "Small button" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdownMenu, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownDivider, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdown, { variant: "btn-group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "secondary", size: "sm", children: "Small split button" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownToggle, { color: "secondary", size: "sm", split: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdownMenu, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownDivider, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Dropdown" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Single button" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Opt into darker dropdowns to match a dark navbar or custom style by set",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "dark" }),
          " property. No changes are required to the dropdown items."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/dropdown#dark-dropdowns", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdown, { dark: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownToggle, { color: "secondary", children: "Dropdown button" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdownMenu, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Action" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Another action" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Something else here" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownDivider, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Separated link" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-medium-emphasis small", children: "And putting it to use in a navbar:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/dropdown#dark-dropdowns", children: /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "navbar navbar-expand-lg navbar-dark bg-dark", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-fluid", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "navbar-brand", href: "https://coreui.io/react/", children: "Navbar" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "navbar-toggler",
              type: "button",
              "data-coreui-toggle": "collapse",
              "data-coreui-target": "#navbarNavDarkDropdown",
              "aria-controls": "navbarNavDarkDropdown",
              "aria-expanded": "false",
              "aria-label": "Toggle navigation",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "navbar-toggler-icon" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "collapse navbar-collapse", id: "navbarNavDarkDropdown", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "navbar-nav", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdown, { dark: true, component: "li", variant: "nav-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownToggle, { children: "Dropdown" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdownMenu, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownDivider, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }) }) })
        ] }) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Dropdown" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Dropup" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Trigger dropdown menus above elements by adding",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: 'direction="dropup"' }),
          " to the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CDropdown>" }),
          " ",
          "component."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "components/dropdown#dropup", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdown, { variant: "btn-group", direction: "dropup", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownToggle, { color: "secondary", children: "Dropdown" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdownMenu, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownDivider, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdown, { variant: "btn-group", direction: "dropup", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "secondary", children: "Small split button" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownToggle, { color: "secondary", split: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdownMenu, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownDivider, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Dropdown" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Dropright" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Trigger dropdown menus at the right of the elements by adding",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: 'direction="dropend"' }),
          " to the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CDropdown>" }),
          " ",
          "component."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "components/dropdown#dropright", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdown, { variant: "btn-group", direction: "dropend", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownToggle, { color: "secondary", children: "Dropdown" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdownMenu, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownDivider, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdown, { variant: "btn-group", direction: "dropend", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "secondary", children: "Small split button" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownToggle, { color: "secondary", split: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdownMenu, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownDivider, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Dropdown" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Dropleft" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Trigger dropdown menus at the left of the elements by adding",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: 'direction="dropstart"' }),
          " to the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CDropdown>" }),
          " ",
          "component."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/dropdown#dropleft", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CButtonGroup, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdown, { variant: "btn-group", direction: "dropstart", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownToggle, { color: "secondary", split: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdownMenu, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Another action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Something else here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownDivider, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Separated link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "secondary", children: "Small split button" })
        ] }) })
      ] })
    ] }) })
  ] });
};
export {
  Dropdowns as default
};
