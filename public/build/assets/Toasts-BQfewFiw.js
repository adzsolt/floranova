import { j as jsxRuntimeExports, r as reactExports } from "./client-DnTwIhck.js";
import { a as CRow, b as CCol, d as CCard, a0 as CCardHeader, e as CCardBody, aK as CToast, aL as CToastHeader, aM as CToastBody, aN as CToaster, aO as CToastClose, k as CButton } from "./index.es-DQOCfkkb.js";
import { m as DocsExample } from "./ProBadge-rvPCAdu4.js";
import "./index-Bzn53Xlf.js";
import "./cil-user-q2NU2AQZ.js";
const ExampleToast = () => {
  const [toast, addToast] = reactExports.useState(0);
  const toaster = reactExports.useRef();
  const exampleToast = /* @__PURE__ */ jsxRuntimeExports.jsxs(CToast, { title: "CoreUI for React.js", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CToastHeader, { closeButton: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "svg",
        {
          className: "rounded me-2",
          width: "20",
          height: "20",
          xmlns: "http://www.w3.org/2000/svg",
          preserveAspectRatio: "xMidYMid slice",
          focusable: "false",
          role: "img",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "100%", height: "100%", fill: "#007aff" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "me-auto", children: "CoreUI for React.js" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "7 min ago" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CToastBody, { children: "Hello, world! This is a toast message." })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { onClick: () => addToast(exampleToast), children: "Send a toast" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CToaster, { ref: toaster, push: toast, placement: "top-end" })
  ] });
};
const Toasts = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Toast" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Basic" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-medium-emphasis small", children: "Toasts are as flexible as you need and have very little required markup. At a minimum, we require a single element to contain your “toasted” content and strongly encourage a dismiss button." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/toast", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CToast, { title: "CoreUI for React.js", autohide: false, visible: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CToastHeader, { closeButton: true, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "svg",
              {
                className: "rounded me-2",
                width: "20",
                height: "20",
                xmlns: "http://www.w3.org/2000/svg",
                preserveAspectRatio: "xMidYMid slice",
                focusable: "false",
                role: "img",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "100%", height: "100%", fill: "#007aff" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "me-auto", children: "CoreUI for React.js" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "7 min ago" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CToastBody, { children: "Hello, world! This is a toast message." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/toast", children: ExampleToast() })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Toast" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Translucent" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-medium-emphasis small", children: "Toasts are slightly translucent to blend in with what's below them." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/toast#translucent", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-dark p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CToast, { title: "CoreUI for React.js", autohide: false, visible: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CToastHeader, { closeButton: true, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "svg",
              {
                className: "rounded me-2",
                width: "20",
                height: "20",
                xmlns: "http://www.w3.org/2000/svg",
                preserveAspectRatio: "xMidYMid slice",
                focusable: "false",
                role: "img",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "100%", height: "100%", fill: "#007aff" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "me-auto", children: "CoreUI for React.js" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "7 min ago" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CToastBody, { children: "Hello, world! This is a toast message." })
        ] }) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Toast" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Stacking" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-medium-emphasis small", children: "You can stack toasts by wrapping them in a toast container, which will vertically add some spacing." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/toast#stacking", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CToaster, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CToast, { title: "CoreUI for React.js", autohide: false, visible: true, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CToastHeader, { closeButton: true, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "svg",
                {
                  className: "rounded me-2",
                  width: "20",
                  height: "20",
                  xmlns: "http://www.w3.org/2000/svg",
                  preserveAspectRatio: "xMidYMid slice",
                  focusable: "false",
                  role: "img",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "100%", height: "100%", fill: "#007aff" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "me-auto", children: "CoreUI for React.js" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "7 min ago" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CToastBody, { children: "Hello, world! This is a toast message." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CToast, { title: "CoreUI for React.js", autohide: false, visible: true, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CToastHeader, { closeButton: true, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "svg",
                {
                  className: "rounded me-2",
                  width: "20",
                  height: "20",
                  xmlns: "http://www.w3.org/2000/svg",
                  preserveAspectRatio: "xMidYMid slice",
                  focusable: "false",
                  role: "img",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "100%", height: "100%", fill: "#007aff" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "me-auto", children: "CoreUI for React.js" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "7 min ago" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CToastBody, { children: "Hello, world! This is a toast message." })
          ] })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Toast" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Custom content" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Customize your toasts by removing sub-components, tweaking them with",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://coreui.io/docs/4.0/utilities/api", children: "utilities" }),
          ", or by adding your own markup. Here we've created a simpler toast by removing the default",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CToastHeader>" }),
          ", adding a custom hide icon from",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://icons.coreui.io", children: "CoreUI Icons" }),
          ", and using some",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://coreui.io/docs/4.0/utilities/flex", children: "flexbox utilities" }),
          " to adjust the layout."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/toast#custom-content", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CToast, { autohide: false, className: "align-items-center", visible: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CToastBody, { children: "Hello, world! This is a toast message." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CToastClose, { className: "me-2 m-auto" })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-medium-emphasis small", children: "Alternatively, you can also add additional controls and components to toasts." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/toast#custom-content", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CToast, { autohide: false, visible: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CToastBody, { children: [
          "Hello, world! This is a toast message.",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 pt-2 border-top", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { type: "button", color: "primary", size: "sm", children: "Take action" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CToastClose, { component: CButton, color: "secondary", size: "sm", className: "ms-1", children: "Close" })
          ] })
        ] }) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Toast" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Custom content" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Building on the above example, you can create different toast color schemes with our",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://coreui.io/docs/4.0/utilities/colors", children: "color" }),
          " and",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://coreui.io/docs/4.0//utilities/background", children: "background" }),
          " utilities. Here we've set ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: 'color="primary"' }),
          " and added",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: ".text-white" }),
          " class to the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<Ctoast>" }),
          ", and then set",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "white" }),
          " property to our close button. For a crisp edge, we remove the default border with ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: ".border-0" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/toast#color-schemes", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CToast,
          {
            autohide: false,
            color: "primary",
            className: "text-white align-items-center",
            visible: true,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CToastBody, { children: "Hello, world! This is a toast message." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CToastClose, { className: "me-2 m-auto", white: true })
            ] })
          }
        ) })
      ] })
    ] }) })
  ] });
};
export {
  Toasts as default
};
