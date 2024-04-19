import { j as jsxRuntimeExports } from "./client-DineUaZJ.js";
import { C as CContainer, a as CRow, b as CCol, d as CCard, e as CCardBody, f as CForm, g as CInputGroup, h as CInputGroupText, i as CIcon, j as CFormInput, k as CButton } from "./index.es-CuBG9yLS.js";
import { c as cilUser, a as cilLockLocked } from "./EditHeatUnit-BVf2vB7t.js";
const Register = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-light min-vh-100 d-flex flex-row align-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CRow, { className: "justify-content-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 9, lg: 7, xl: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCard, { className: "mx-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CForm, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Register" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-medium-emphasis", children: "Create your account" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { className: "mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CInputGroupText, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilUser }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { placeholder: "Username", autoComplete: "username" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { className: "mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CInputGroupText, { children: "@" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { placeholder: "Email", autoComplete: "email" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { className: "mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CInputGroupText, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilLockLocked }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CFormInput,
        {
          type: "password",
          placeholder: "Password",
          autoComplete: "new-password"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CInputGroupText, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilLockLocked }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CFormInput,
        {
          type: "password",
          placeholder: "Repeat password",
          autoComplete: "new-password"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "d-grid", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "success", children: "Create Account" }) })
  ] }) }) }) }) }) }) });
};
export {
  Register as default
};
