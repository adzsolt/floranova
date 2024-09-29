import { j as jsxRuntimeExports } from "./client-DnTwIhck.js";
import { a as CRow, b as CCol, d as CCard, a0 as CCardHeader, e as CCardBody, k as CButton, i as CIcon } from "./index.es-DQOCfkkb.js";
import { m as DocsExample, n as cilBell } from "./ProBadge-p43SoCb9.js";
import "./index-DtraU9L4.js";
import "./cil-user-q2NU2AQZ.js";
const Buttons = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Button" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-medium-emphasis small", children: "CoreUI includes a bunch of predefined buttons components, each serving its own semantic purpose. Buttons show what action will happen when the user clicks or touches it. CoreUI buttons are used to initialize operations, both in the background or foreground of an experience." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/buttons", children: ["normal", "active", "disabled"].map((state, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { className: "align-items-center mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, xl: 2, className: "mb-3 mb-xl-0", children: state.charAt(0).toUpperCase() + state.slice(1) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { xs: true, children: [
            [
              "primary",
              "secondary",
              "success",
              "danger",
              "warning",
              "info",
              "light",
              "dark"
            ].map((color, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              CButton,
              {
                color,
                active: state === "active",
                disabled: state === "disabled",
                children: color.charAt(0).toUpperCase() + color.slice(1)
              },
              index2
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "link", children: "Link" })
          ] })
        ] }, index)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Button" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "with icons" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "You can combine button with our ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://icons.coreui.io/", children: "CoreUI Icons" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/buttons", children: ["normal", "active", "disabled"].map((state, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { className: "align-items-center mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, xl: 2, className: "mb-3 mb-xl-0", children: state.charAt(0).toUpperCase() + state.slice(1) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { xs: true, children: [
            [
              "primary",
              "secondary",
              "success",
              "danger",
              "warning",
              "info",
              "light",
              "dark"
            ].map((color, index2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              CButton,
              {
                color,
                active: state === "active",
                disabled: state === "disabled",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilBell, className: "me-2" }),
                  color.charAt(0).toUpperCase() + color.slice(1)
                ]
              },
              index2
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CButton, { color: "link", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilBell, className: "me-2" }),
              "Link"
            ] })
          ] })
        ] }, index)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Button" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Button components" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "The ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CButton>" }),
          " component are designed for",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<button>" }),
          " , ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<a>" }),
          " or ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<input>" }),
          " ",
          "elements (though some browsers may apply a slightly different rendering)."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "If you're using ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CButton>" }),
          " component as ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<a>" }),
          " ",
          "elements that are used to trigger functionality ex. collapsing content, these links should be given a ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: 'role="button"' }),
          " to adequately communicate their meaning to assistive technologies such as screen readers."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "components/buttons#button-components", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { component: "a", color: "primary", href: "#", role: "button", children: "Link" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { type: "submit", color: "primary", children: "Button" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { component: "input", type: "button", color: "primary", value: "Input" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { component: "input", type: "submit", color: "primary", value: "Submit" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { component: "input", type: "reset", color: "primary", value: "Reset" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Button" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "outline" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "If you need a button, but without the strong background colors. Set",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: 'variant="outline"' }),
          " prop to remove all background colors."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/buttons#outline-buttons", children: ["normal", "active", "disabled"].map((state, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { className: "align-items-center mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, xl: 2, className: "mb-3 mb-xl-0", children: state.charAt(0).toUpperCase() + state.slice(1) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: true, children: [
            "primary",
            "secondary",
            "success",
            "danger",
            "warning",
            "info",
            "light",
            "dark"
          ].map((color, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            CButton,
            {
              color,
              variant: "outline",
              active: state === "active",
              disabled: state === "disabled",
              children: color.charAt(0).toUpperCase() + color.slice(1)
            },
            index2
          )) })
        ] }, index)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Button" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "ghost" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "If you need a ghost variant of button, set ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: 'variant="ghost"' }),
          " prop to remove all background colors."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/buttons#ghost-buttons", children: ["normal", "active", "disabled"].map((state, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { className: "align-items-center mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, xl: 2, className: "mb-3 mb-xl-0", children: state.charAt(0).toUpperCase() + state.slice(1) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: true, children: [
            "primary",
            "secondary",
            "success",
            "danger",
            "warning",
            "info",
            "light",
            "dark"
          ].map((color, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            CButton,
            {
              color,
              variant: "ghost",
              active: state === "active",
              disabled: state === "disabled",
              children: color.charAt(0).toUpperCase() + color.slice(1)
            },
            index2
          )) })
        ] }, index)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Button" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Sizes" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Larger or smaller buttons? Add ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: 'size="lg"' }),
          " or",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: 'size="sm"' }),
          " for additional sizes."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "components/buttons#sizes", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "primary", size: "lg", children: "Large button" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "secondary", size: "lg", children: "Large button" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "components/buttons#sizes", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "primary", size: "sm", children: "Small button" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "secondary", size: "sm", children: "Small button" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Button" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Pill" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/buttons#pill-buttons", children: [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark"
      ].map((color, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color, shape: "rounded-pill", children: color.charAt(0).toUpperCase() + color.slice(1) }, index)) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Button" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Square" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/buttons#square", children: [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark"
      ].map((color, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color, shape: "rounded-0", children: color.charAt(0).toUpperCase() + color.slice(1) }, index)) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Button" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Disabled state" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Add the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "disabled" }),
          " boolean prop to any ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CButton>" }),
          " ",
          "component to make buttons look inactive. Disabled button has",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "pointer-events: none" }),
          " applied to, disabling hover and active states from triggering."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "components/buttons#disabled-state", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "primary", size: "lg", disabled: true, children: "Primary button" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "secondary", size: "lg", disabled: true, children: "Button" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Disabled buttons using the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<a>" }),
          " component act a little different:"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<a>" }),
          "s don'tsupport the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "disabled" }),
          " attribute, so CoreUI has to add ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: ".disabled" }),
          " className to make buttons look inactive. CoreUI also has to add to the disabled button component",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: 'aria-disabled="true"' }),
          " attribute to show the state of the component to assistive technologies."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "components/buttons#disabled-state", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { component: "a", href: "#", color: "primary", size: "lg", disabled: true, children: "Primary link" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { component: "a", href: "#", color: "secondary", size: "lg", disabled: true, children: "Link" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Button" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Block buttons" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-medium-emphasis small", children: "Create buttons that span the full width of a parent—by using utilities." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/buttons#block-buttons", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-grid gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "primary", children: "Button" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "primary", children: "Button" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Here we create a responsive variation, starting with vertically stacked buttons until the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "md" }),
          " breakpoint, where ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: ".d-md-block" }),
          " replaces the",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: ".d-grid" }),
          " class, thus nullifying the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "gap-2" }),
          " utility. Resize your browser to see them change."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/buttons#block-buttons", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-grid gap-2 d-md-block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "primary", children: "Button" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "primary", children: "Button" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          'You can adjust the width of your block buttons with grid column width classes. For example, for a half-width "block button", use ',
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: ".col-6" }),
          ". Center it horizontally with ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: ".mx-auto" }),
          ", too."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/buttons#block-buttons", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-grid gap-2 col-6 mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "primary", children: "Button" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "primary", children: "Button" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-medium-emphasis small", children: "Additional utilities can be used to adjust the alignment of buttons when horizontal. Here we've taken our previous responsive example and added some flex utilities and a margin utility on the button to right align the buttons when they're no longer stacked." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/buttons#block-buttons", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-grid gap-2 d-md-flex justify-content-md-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "primary", className: "me-md-2", children: "Button" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "primary", children: "Button" })
        ] }) })
      ] })
    ] }) })
  ] });
};
export {
  Buttons as default
};
