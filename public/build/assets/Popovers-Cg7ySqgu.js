import { j as jsxRuntimeExports } from "./client-DnTwIhck.js";
import { a as CRow, b as CCol, d as CCard, a2 as CCardHeader, e as CCardBody, aj as CPopover, k as CButton } from "./index.es-HjcCfGYB.js";
import { j as DocsExample } from "./ProBadge-BOAvtjuI.js";
import "./index-CN9H2hqp.js";
import "./cil-user-q2NU2AQZ.js";
const Popovers = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Popover" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Basic example" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/popover", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        CPopover,
        {
          title: "Popover title",
          content: "And here’s some amazing content. It’s very engaging. Right?",
          placement: "right",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "danger", size: "lg", children: "Click to toggle popover" })
        }
      ) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Popover" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Four directions" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-medium-emphasis small", children: "Four options are available: top, right, bottom, and left aligned. Directions are mirrored when using CoreUI for React in RTL." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "components/popover#four-directions", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CPopover,
            {
              content: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",
              placement: "top",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "secondary", children: "Popover on top" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CPopover,
            {
              content: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",
              placement: "right",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "secondary", children: "Popover on right" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CPopover,
            {
              content: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",
              placement: "bottom",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "secondary", children: "Popover on bottom" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CPopover,
            {
              content: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",
              placement: "left",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "secondary", children: "Popover on left" })
            }
          )
        ] })
      ] })
    ] }) })
  ] });
};
export {
  Popovers as default
};
