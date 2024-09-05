import { r as reactExports, j as jsxRuntimeExports } from "./client-DnTwIhck.js";
import { a as CRow, b as CCol, d as CCard, a0 as CCardHeader, e as CCardBody, k as CButton, aj as CCollapse } from "./index.es-DQOCfkkb.js";
import { m as DocsExample } from "./ProBadge-Bed_uZ7J.js";
import "./index-DSp_2-9r.js";
import "./cil-user-q2NU2AQZ.js";
const Collapses = () => {
  const [visible, setVisible] = reactExports.useState(false);
  const [visibleHorizontal, setVisibleHorizontal] = reactExports.useState(false);
  const [visibleA, setVisibleA] = reactExports.useState(false);
  const [visibleB, setVisibleB] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Collapse" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-medium-emphasis small", children: "You can use a link or a button component." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "components/collapse", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CButton,
            {
              href: "#",
              onClick: (e) => {
                e.preventDefault();
                setVisible(!visible);
              },
              children: "Link"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { onClick: () => setVisible(!visible), children: "Button" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCollapse, { visible, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCard, { className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident." }) }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Collapse" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: " Horizontal" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-medium-emphasis small", children: "You can use a link or a button component." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "components/collapse#horizontal", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CButton,
            {
              className: "mb-3",
              onClick: () => setVisibleHorizontal(!visibleHorizontal),
              "aria-expanded": visibleHorizontal,
              "aria-controls": "collapseWidthExample",
              children: "Button"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { minHeight: "120px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCollapse, { id: "collapseWidthExample", horizontal: true, visible: visibleHorizontal, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCard, { style: { width: "300px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: "This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered." }) }) }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Collapse" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: " multi target" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "A ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CButton>" }),
          " can show and hide multiple elements."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "components/collapse#multiple-targets", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { onClick: () => setVisibleA(!visibleA), children: "Toggle first element" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { onClick: () => setVisibleB(!visibleB), children: "Toggle second element" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CButton,
            {
              onClick: () => {
                setVisibleA(!visibleA);
                setVisibleB(!visibleB);
              },
              children: "Toggle both elements"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCollapse, { visible: visibleA, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCard, { className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident." }) }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCollapse, { visible: visibleB, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCard, { className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident." }) }) }) })
          ] })
        ] })
      ] })
    ] }) })
  ] });
};
export {
  Collapses as default
};
