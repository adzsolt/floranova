import { j as jsxRuntimeExports } from "./client-DnTwIhck.js";
import { a as CRow, b as CCol, d as CCard, a2 as CCardHeader, e as CCardBody, ag as CPagination, ah as CPaginationItem } from "./index.es-HjcCfGYB.js";
import { j as DocsExample } from "./ProBadge-CmIaVMMU.js";
import "./index-CMs2b6AS.js";
import "./cil-user-q2NU2AQZ.js";
const Paginations = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Pagination" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "We use a large block of connected links for our pagination, making links hard to miss and easily scalable—all while providing large hit areas. Pagination is built with list HTML elements so screen readers can announce the number of available links. Use a wrapping ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<nav>" }),
          " element to identify it as a navigation section to screen readers and other assistive technologies."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "In addition, as pages likely have more than one such navigation section, it's advisable to provide a descriptive ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "aria-label" }),
          " for the",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<nav>" }),
          " to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: 'aria-label="Search results pages"' }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/pagination", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CPagination, { "aria-label": "Page navigation example", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CPaginationItem, { children: "Previous" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CPaginationItem, { children: "1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CPaginationItem, { children: "2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CPaginationItem, { children: "3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CPaginationItem, { children: "Next" })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Pagination" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Working with icons" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Looking to use an icon or symbol in place of text for some pagination links? Be sure to provide proper screen reader support with ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "aria" }),
          " attributes."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/pagination#working-with-icons", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CPagination, { "aria-label": "Page navigation example", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CPaginationItem, { "aria-label": "Previous", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "«" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CPaginationItem, { children: "1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CPaginationItem, { children: "2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CPaginationItem, { children: "3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CPaginationItem, { "aria-label": "Next", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "»" }) })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Pagination" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Disabled and active states" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Pagination links are customizable for different circumstances. Use",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "disabled" }),
          " for links that appear un-clickable and ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: ".active" }),
          " to indicate the current page."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "While the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "disabled" }),
          " prop uses ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "pointer-events: none" }),
          " to",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "try" }),
          " to disable the link functionality of ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<a>" }),
          "s, that CSS property is not yet standardized and doesn'taccount for keyboard navigation. As such, we always add ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: 'tabindex="-1"' }),
          " on disabled links and use custom JavaScript to fully disable their functionality."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/pagination#disabled-and-active-states", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CPagination, { "aria-label": "Page navigation example", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CPaginationItem, { "aria-label": "Previous", disabled: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "«" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CPaginationItem, { active: true, children: "1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CPaginationItem, { children: "2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CPaginationItem, { children: "3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CPaginationItem, { "aria-label": "Next", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "»" }) })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Pagination" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Sizing" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Fancy larger or smaller pagination? Add ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: 'size="lg"' }),
          " or",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: 'size="sm"' }),
          " for additional sizes."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/pagination#sizing", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CPagination, { size: "lg", "aria-label": "Page navigation example", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CPaginationItem, { children: "Previous" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CPaginationItem, { children: "1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CPaginationItem, { children: "2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CPaginationItem, { children: "3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CPaginationItem, { children: "Next" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/pagination#sizing", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CPagination, { size: "sm", "aria-label": "Page navigation example", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CPaginationItem, { children: "Previous" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CPaginationItem, { children: "1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CPaginationItem, { children: "2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CPaginationItem, { children: "3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CPaginationItem, { children: "Next" })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Pagination" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Alignment" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Change the alignment of pagination components with",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://coreui.io/docs/utilities/flex/", children: "flexbox utilities" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/pagination#aligment", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CPagination, { className: "justify-content-center", "aria-label": "Page navigation example", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CPaginationItem, { disabled: true, children: "Previous" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CPaginationItem, { children: "1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CPaginationItem, { children: "2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CPaginationItem, { children: "3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CPaginationItem, { children: "Next" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/pagination#aligment", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CPagination, { className: "justify-content-end", "aria-label": "Page navigation example", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CPaginationItem, { disabled: true, children: "Previous" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CPaginationItem, { children: "1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CPaginationItem, { children: "2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CPaginationItem, { children: "3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CPaginationItem, { children: "Next" })
        ] }) })
      ] })
    ] }) })
  ] });
};
export {
  Paginations as default
};
