import { j as jsxRuntimeExports } from "./client-DineUaZJ.js";
import { a as CRow, b as CCol, d as CCard, l as CCardHeader, e as CCardBody, aa as CMultiSelect } from "./index.es-CuBG9yLS.js";
import { e as DocsExample } from "./ProBadge-DuWkMHXZ.js";
import "./index-DOY0rKmI.js";
import "./EditHeatUnit-BVf2vB7t.js";
const MultiSelect = () => {
  const options = [
    {
      value: 0,
      text: "Angular"
    },
    {
      value: 1,
      text: "Bootstrap"
    },
    {
      value: 2,
      text: "React.js",
      selected: true
    },
    {
      value: 3,
      text: "Vue.js"
    },
    {
      label: "backend",
      options: [
        {
          value: 4,
          text: "Django"
        },
        {
          value: 5,
          text: "Laravel"
        },
        {
          value: 6,
          text: "Node.js"
        }
      ]
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "CoreUI React Multi Select" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "with Checkbox (Default Style)" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "forms/multi-select", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CMultiSelect, { options, multiple: false }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CMultiSelect, { options, selectionType: "text" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CMultiSelect, { options, selectionType: "tags" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CMultiSelect, { options, selectionType: "counter" }) })
      ] }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "CoreUI React Multi Select" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "with Text" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "forms/multi-select", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CMultiSelect, { options, optionsStyle: "text", multiple: false }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CMultiSelect, { options, optionsStyle: "text", selectionType: "text" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CMultiSelect, { options, optionsStyle: "text", selectionType: "tags" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CMultiSelect, { options, optionsStyle: "text", selectionType: "counter" }) })
      ] }) }) })
    ] }) })
  ] });
};
export {
  MultiSelect as default
};
