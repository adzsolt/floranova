import { j as jsxRuntimeExports } from "./client-DnTwIhck.js";
import { L as Link } from "./index-DVynkEBp.js";
import { C as CContainer, a as CRow, b as CCol, c as CCardGroup, d as CCard, e as CCardBody, f as CForm, g as CInputGroup, h as CInputGroupText, i as CIcon, j as CFormInput, k as CButton } from "./index.es-DQOCfkkb.js";
import { c as cilUser, a as cilLockLocked } from "./cil-user-q2NU2AQZ.js";
const Login = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-light min-vh-100 d-flex flex-row align-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CRow, { className: "justify-content-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 8, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardGroup, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCard, { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CForm, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Login" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-medium-emphasis", children: "Sign In to your account" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { className: "mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CInputGroupText, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilUser }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { placeholder: "Username", autoComplete: "username" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CInputGroupText, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilLockLocked }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CFormInput,
          {
            type: "password",
            placeholder: "Password",
            autoComplete: "current-password"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "primary", className: "px-4", children: "Login" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 6, className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "link", className: "px-0", children: "Forgot password?" }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCard, { className: "text-white bg-primary py-5", style: { width: "44%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Sign up" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/register", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "primary", className: "mt-3", active: true, tabIndex: -1, children: "Register Now!" }) })
    ] }) }) })
  ] }) }) }) }) });
};
export {
  Login as default
};
