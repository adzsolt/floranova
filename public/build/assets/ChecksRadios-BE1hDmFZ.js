import { j as jsxRuntimeExports } from "./client-DnTwIhck.js";
import { a as CRow, b as CCol, d as CCard, a0 as CCardHeader, e as CCardBody, V as CFormCheck, K as CFormSwitch } from "./index.es-DQOCfkkb.js";
import { m as DocsExample } from "./ProBadge-8PHYxV7A.js";
import "./index-DICdOvpl.js";
import "./cil-user-q2NU2AQZ.js";
const ChecksRadios = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Checkbox" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "forms/checks-radios", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CFormCheck, { id: "flexCheckDefault", label: "Default checkbox" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CFormCheck, { id: "flexCheckChecked", label: "Checked checkbox", defaultChecked: true })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Checkbox" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Disabled" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Add the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "disabled" }),
          " attribute and the associated ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<label>" }),
          "s are automatically styled to match with a lighter color to help indicate the input's state."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "forms/checks-radios#disabled", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormCheck, { label: "Disabled checkbox", disabled: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormCheck, { label: "Disabled checked checkbox", defaultChecked: true, disabled: true })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Radio" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Add the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "disabled" }),
          " attribute and the associated ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<label>" }),
          "s are automatically styled to match with a lighter color to help indicate the input's state."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "forms/checks-radios#radios", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CFormCheck,
            {
              type: "radio",
              name: "flexRadioDefault",
              id: "flexRadioDefault1",
              label: "Default radio"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CFormCheck,
            {
              type: "radio",
              name: "flexRadioDefault",
              id: "flexRadioDefault2",
              label: "Checked radio",
              defaultChecked: true
            }
          )
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Radio" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Disabled" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "forms/checks-radios#disabled-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CFormCheck,
          {
            type: "radio",
            name: "flexRadioDisabled",
            id: "flexRadioDisabled",
            label: "Disabled radio",
            disabled: true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CFormCheck,
          {
            type: "radio",
            name: "flexRadioDisabled",
            id: "flexRadioCheckedDisabled",
            label: "Disabled checked radio",
            defaultChecked: true,
            disabled: true
          }
        )
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Switches" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "A switch has the markup of a custom checkbox but uses the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "switch" }),
          " boolean properly to render a toggle switch. Switches also support the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "disabled" }),
          " ",
          "attribute."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "forms/checks-radios#switches", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormSwitch, { label: "Default switch checkbox input", id: "formSwitchCheckDefault" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CFormSwitch,
            {
              label: "Checked switch checkbox input",
              id: "formSwitchCheckChecked",
              defaultChecked: true
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CFormSwitch,
            {
              label: "Disabled switch checkbox input",
              id: "formSwitchCheckDisabled",
              disabled: true
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CFormSwitch,
            {
              label: "Disabled checked switch checkbox input",
              id: "formSwitchCheckCheckedDisabled",
              defaultChecked: true,
              disabled: true
            }
          )
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Switches" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Sizes" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "forms/checks-radios#sizes", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CFormSwitch, { label: "Default switch checkbox input", id: "formSwitchCheckDefault" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CFormSwitch,
          {
            size: "lg",
            label: "Large switch checkbox input",
            id: "formSwitchCheckDefaultLg"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CFormSwitch,
          {
            size: "xl",
            label: "Extra large switch checkbox input",
            id: "formSwitchCheckDefaultXL"
          }
        )
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Checks and Radios" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Default layout (stacked)" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-medium-emphasis small", children: "By default, any number of checkboxes and radios that are immediate sibling will be vertically stacked and appropriately spaced." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "forms/checks-radios#default-stacked", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormCheck, { id: "defaultCheck1", label: "Default checkbox" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormCheck, { id: "defaultCheck2", label: "Disabled checkbox", disabled: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "forms/checks-radios#default-stacked", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CFormCheck,
            {
              type: "radio",
              name: "exampleRadios",
              id: "exampleRadios1",
              value: "option1",
              label: "Default radio",
              defaultChecked: true
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CFormCheck,
            {
              type: "radio",
              name: "exampleRadios",
              id: "exampleRadios2",
              value: "option2",
              label: "Second default radio"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CFormCheck,
            {
              type: "radio",
              name: "exampleRadios",
              id: "exampleRadios3",
              value: "option3",
              label: "Disabled radio",
              disabled: true
            }
          )
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Checks and Radios" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Inline" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Group checkboxes or radios on the same horizontal row by adding ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "inline" }),
          " ",
          "boolean property to any ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CFormCheck>" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "forms/checks-radios#inline", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormCheck, { inline: true, id: "inlineCheckbox1", value: "option1", label: "1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormCheck, { inline: true, id: "inlineCheckbox2", value: "option2", label: "2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CFormCheck,
            {
              inline: true,
              id: "inlineCheckbox3",
              value: "option3",
              label: "3 (disabled)",
              disabled: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "forms/checks-radios#inline", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CFormCheck,
            {
              inline: true,
              type: "radio",
              name: "inlineRadioOptions",
              id: "inlineCheckbox1",
              value: "option1",
              label: "1"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CFormCheck,
            {
              inline: true,
              type: "radio",
              name: "inlineRadioOptions",
              id: "inlineCheckbox2",
              value: "option2",
              label: "2"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CFormCheck,
            {
              inline: true,
              type: "radio",
              name: "inlineRadioOptions",
              id: "inlineCheckbox3",
              value: "option3",
              label: "3 (disabled)",
              disabled: true
            }
          )
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Checks and Radios" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Without labels" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Remember to still provide some form of accessible name for assistive technologies (for instance, using ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "aria-label" }),
          ")."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "forms/checks-radios#without-labels", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CFormCheck, { id: "checkboxNoLabel", value: "", "aria-label": "..." }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            CFormCheck,
            {
              type: "radio",
              name: "radioNoLabel",
              id: "radioNoLabel",
              value: "",
              "aria-label": "..."
            }
          ) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Toggle buttons" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Create button-like checkboxes and radio buttons by using ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "button" }),
          " boolean property on the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CFormCheck>" }),
          " component. These toggle buttons can further be grouped in a button group if needed."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "forms/checks-radios#toggle-buttons", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CFormCheck,
          {
            button: { color: "primary " },
            id: "btn-check",
            autoComplete: "off",
            label: "Single toggle"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "forms/checks-radios#toggle-buttons", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CFormCheck,
          {
            button: { color: "primary " },
            id: "btn-check-2",
            autoComplete: "off",
            label: "Checked",
            defaultChecked: true
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "forms/checks-radios#toggle-buttons", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CFormCheck,
          {
            button: { color: "primary " },
            id: "btn-check-3",
            autoComplete: "off",
            label: "Disabled",
            disabled: true
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Radio toggle buttons" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "forms/checks-radios#toggle-buttons", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CFormCheck,
            {
              button: { color: "secondary" },
              type: "radio",
              name: "options",
              id: "option1",
              autoComplete: "off",
              label: "Checked",
              defaultChecked: true
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CFormCheck,
            {
              button: { color: "secondary" },
              type: "radio",
              name: "options",
              id: "option2",
              autoComplete: "off",
              label: "Radio"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CFormCheck,
            {
              button: { color: "secondary" },
              type: "radio",
              name: "options",
              id: "option3",
              autoComplete: "off",
              label: "Radio",
              disabled: true
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CFormCheck,
            {
              button: { color: "secondary" },
              type: "radio",
              name: "options",
              id: "option4",
              autoComplete: "off",
              label: "Radio"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Outlined styles" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-medium-emphasis small", children: "Different variants of button, such at the various outlined styles, are supported." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "forms/checks-radios#toggle-buttons", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            CFormCheck,
            {
              button: { color: "primary", variant: "outline" },
              id: "btn-check-outlined",
              autoComplete: "off",
              label: "Single toggle"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            CFormCheck,
            {
              button: { color: "secondary", variant: "outline" },
              id: "btn-check-2-outlined",
              autoComplete: "off",
              label: "Checked",
              defaultChecked: true
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CFormCheck,
              {
                button: { color: "success", variant: "outline" },
                type: "radio",
                name: "options-outlined",
                id: "success-outlined",
                autoComplete: "off",
                label: "Radio",
                defaultChecked: true
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CFormCheck,
              {
                button: { color: "danger", variant: "outline" },
                type: "radio",
                name: "options-outlined",
                id: "danger-outlined",
                autoComplete: "off",
                label: "Radio"
              }
            )
          ] })
        ] })
      ] })
    ] }) })
  ] });
};
export {
  ChecksRadios as default
};
