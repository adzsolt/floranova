import { j as jsxRuntimeExports } from "./client-DineUaZJ.js";
import { a as CRow, b as CCol, d as CCard, l as CCardHeader, e as CCardBody, a2 as CLoadingButton } from "./index.es-CuBG9yLS.js";
import { e as DocsExample } from "./ProBadge-DuWkMHXZ.js";
import "./index-DOY0rKmI.js";
import "./EditHeatUnit-BVf2vB7t.js";
const LoadingButtons = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Loading Button" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-medium-emphasis small", children: "CoreUI includes a buttons with built-in loading indicators. Indicate the loading state of the button bridging the gap between action and feedback.." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "components/loading-button", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CRow, { className: "py-4 text-center", children: ["primary", "secondary", "success", "danger", "warning", "info"].map(
          (color, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CLoadingButton, { color, timeout: 2e3, children: "Submit" }) }, index)
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CRow, { className: "py-4 text-center", children: ["primary", "secondary", "success", "danger", "warning", "info"].map(
          (color, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CLoadingButton, { color, variant: "outline", timeout: 2e3, children: "Submit" }) }, index)
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CRow, { className: "py-4 text-center", children: ["primary", "secondary", "success", "danger", "warning", "info"].map(
          (color, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CLoadingButton, { color, variant: "ghost", timeout: 2e3, children: "Submit" }) }, index)
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { children: "Loading Buttons with grow spinner" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "components/loading-button#grow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CRow, { className: "py-4 text-center", children: ["primary", "secondary", "success", "danger", "warning", "info"].map(
          (color, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CLoadingButton, { color, spinnerType: "grow", timeout: 2e3, children: "Submit" }) }, index)
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CRow, { className: "py-4 text-center", children: ["primary", "secondary", "success", "danger", "warning", "info"].map(
          (color, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            CLoadingButton,
            {
              color,
              spinnerType: "grow",
              variant: "outline",
              timeout: 2e3,
              children: "Submit"
            }
          ) }, index)
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CRow, { className: "py-4 text-center", children: ["primary", "secondary", "success", "danger", "warning", "info"].map(
          (color, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            CLoadingButton,
            {
              color,
              spinnerType: "grow",
              variant: "ghost",
              timeout: 2e3,
              children: "Submit"
            }
          ) }, index)
        ) })
      ] })
    ] })
  ] }) }) });
};
export {
  LoadingButtons as default
};
