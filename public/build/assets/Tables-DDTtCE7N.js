import { j as jsxRuntimeExports } from "./client-DnTwIhck.js";
import { a as CRow, b as CCol, d as CCard, a2 as CCardHeader, e as CCardBody, al as CTable, am as CTableHead, an as CTableRow, ao as CTableHeaderCell, ap as CTableBody, aq as CTableDataCell, ar as CTableCaption } from "./index.es-HjcCfGYB.js";
import { j as DocsExample } from "./ProBadge-CpfJwurS.js";
import "./index-S2Eg7aT7.js";
import { a as axios } from "./axios-fEUzBR8L.js";
import "./cil-user-q2NU2AQZ.js";
const getUsers = () => {
  axios.get("/get-users").then((response) => {
    console.log(response);
  });
};
const Tables = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Table" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Basic example" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Using the most basic table CoreUI, here's how ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CTable>" }),
          "-based tables look in CoreUI."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: getUsers, children: "Test" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/table", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTable, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "#" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Class" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Heading" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Heading" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Mark" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Otto" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@mdo" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Jacob" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Thornton" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@fat" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { colSpan: "2", children: "Larry the Bird" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@twitter" })
            ] })
          ] })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Table" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Variants" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-medium-emphasis small", children: "Use contextual classes to color tables, table rows or individual cells." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/table#variants", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTable, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Class" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Heading" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Heading" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "Default" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Cell" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Cell" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { color: "primary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "Primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Cell" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Cell" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { color: "secondary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "Secondary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Cell" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Cell" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { color: "success", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "Success" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Cell" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Cell" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { color: "danger", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "Danger" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Cell" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Cell" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { color: "warning", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "Warning" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Cell" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Cell" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { color: "info", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "Info" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Cell" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Cell" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { color: "light", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "Light" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Cell" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Cell" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { color: "dark", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "Dark" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Cell" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Cell" })
            ] })
          ] })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Table" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Striped rows" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Use ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "striped" }),
          " property to add zebra-striping to any table row within the",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CTableBody>" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/table#striped-rows", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTable, { striped: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "#" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Class" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Heading" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Heading" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Mark" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Otto" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@mdo" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Jacob" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Thornton" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@fat" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { colSpan: "2", children: "Larry the Bird" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@twitter" })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-medium-emphasis small", children: "These classes can also be added to table variants:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/table#striped-rows", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTable, { color: "dark", striped: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "#" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Class" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Heading" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Heading" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Mark" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Otto" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@mdo" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Jacob" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Thornton" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@fat" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { colSpan: "2", children: "Larry the Bird" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@twitter" })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/table#striped-rows", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTable, { color: "success", striped: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "#" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Class" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Heading" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Heading" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Mark" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Otto" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@mdo" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Jacob" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Thornton" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@fat" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { colSpan: "2", children: "Larry the Bird" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@twitter" })
            ] })
          ] })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Table" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Hoverable rows" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Use ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "hover" }),
          " property to enable a hover state on table rows within a",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CTableBody>" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/table#hoverable-rows", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTable, { hover: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "#" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Class" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Heading" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Heading" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Mark" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Otto" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@mdo" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Jacob" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Thornton" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@fat" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { colSpan: "2", children: "Larry the Bird" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@twitter" })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/table#hoverable-rows", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTable, { color: "dark", hover: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "#" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Class" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Heading" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Heading" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Mark" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Otto" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@mdo" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Jacob" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Thornton" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@fat" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { colSpan: "2", children: "Larry the Bird" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@twitter" })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/table#hoverable-rows", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTable, { striped: true, hover: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "#" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Class" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Heading" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Heading" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Mark" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Otto" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@mdo" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Jacob" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Thornton" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@fat" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { colSpan: "2", children: "Larry the Bird" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@twitter" })
            ] })
          ] })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Table" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Active tables" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/table#active-tables", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTable, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "#" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Class" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Heading" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Heading" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { active: true, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Mark" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Otto" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@mdo" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Jacob" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Thornton" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@fat" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { colSpan: "2", active: true, children: "Larry the Bird" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@twitter" })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/table#active-tables", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTable, { color: "dark", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "#" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Class" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Heading" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Heading" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { active: true, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Mark" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Otto" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@mdo" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Jacob" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Thornton" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@fat" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { colSpan: "2", active: true, children: "Larry the Bird" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@twitter" })
            ] })
          ] })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Table" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Bordered tables" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Add ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "bordered" }),
          " property for borders on all sides of the table and cells."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/table#bordered-tables", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTable, { bordered: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "#" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Class" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Heading" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Heading" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Mark" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Otto" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@mdo" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Jacob" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Thornton" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@fat" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { colSpan: "2", children: "Larry the Bird" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@twitter" })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://coreui.io/docs/4.0/utilities/borders#border-color", children: "Border color utilities" }),
          " ",
          "can be added to change colors:"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/table#bordered-tables", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTable, { bordered: true, borderColor: "primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "#" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Class" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Heading" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Heading" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Mark" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Otto" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@mdo" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Jacob" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Thornton" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@fat" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { colSpan: "2", children: "Larry the Bird" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@twitter" })
            ] })
          ] })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Table" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Tables without borders" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Add ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "borderless" }),
          " property for a table without borders."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/table#tables-without-borders", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTable, { borderless: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "#" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Class" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Heading" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Heading" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Mark" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Otto" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@mdo" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Jacob" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Thornton" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@fat" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { colSpan: "2", children: "Larry the Bird" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@twitter" })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/table#tables-without-borders", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTable, { color: "dark", borderless: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "#" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Class" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Heading" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Heading" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Mark" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Otto" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@mdo" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Jacob" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Thornton" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@fat" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { colSpan: "2", children: "Larry the Bird" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@twitter" })
            ] })
          ] })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Table" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Small tables" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Add ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "small" }),
          " property to make any ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CTable>" }),
          " more compact by cutting all cell ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "padding" }),
          " in half."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/table#small-tables", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTable, { small: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "#" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Class" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Heading" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Heading" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Mark" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Otto" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@mdo" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Jacob" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Thornton" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@fat" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { colSpan: "2", children: "Larry the Bird" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@twitter" })
            ] })
          ] })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Table" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Vertical alignment" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Table cells of ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CTableHead>" }),
          " are always vertical aligned to the bottom. Table cells in ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CTableBody>" }),
          " inherit their alignment from",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CTable>" }),
          " and are aligned to the the top by default. Use the align property to re-align where needed."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/table#vertical-alignment", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTable, { align: "middle", responsive: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", className: "w-25", children: "Heading 1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", className: "w-25", children: "Heading 2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", className: "w-25", children: "Heading 3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", className: "w-25", children: "Heading 4" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableDataCell, { children: [
                "This cell inherits ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "vertical-align: middle;" }),
                " from the table"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableDataCell, { children: [
                "This cell inherits ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "vertical-align: middle;" }),
                " from the table"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableDataCell, { children: [
                "This cell inherits ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "vertical-align: middle;" }),
                " from the table"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "This here is some placeholder text, intended to take up quite a bit of vertical space, to demonsCTableRowate how the vertical alignment works in the preceding cells." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { align: "bottom", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableDataCell, { children: [
                "This cell inherits ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "vertical-align: bottom;" }),
                " from the table row"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableDataCell, { children: [
                "This cell inherits ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "vertical-align: bottom;" }),
                " from the table row"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableDataCell, { children: [
                "This cell inherits ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "vertical-align: bottom;" }),
                " from the table row"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "This here is some placeholder text, intended to take up quite a bit of vertical space, to demonsCTableRowate how the vertical alignment works in the preceding cells." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableDataCell, { children: [
                "This cell inherits ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "vertical-align: middle;" }),
                " from the table"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableDataCell, { children: [
                "This cell inherits ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "vertical-align: middle;" }),
                " from the table"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { align: "top", children: "This cell is aligned to the top." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "This here is some placeholder text, intended to take up quite a bit of vertical space, to demonsCTableRowate how the vertical alignment works in the preceding cells." })
            ] })
          ] })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Table" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Nesting" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-medium-emphasis small", children: "Border styles, active styles, and table variants are not inherited by nested tables." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/table#nesting", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTable, { striped: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "#" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Class" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Heading" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Heading" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Mark" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Otto" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@mdo" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { colSpan: "4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTable, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Header" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Header" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Header" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableBody, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "A" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "First" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Last" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "B" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "First" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Last" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "C" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "First" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Last" })
                ] })
              ] })
            ] }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { colSpan: "2", children: "Larry the Bird" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@twitter" })
            ] })
          ] })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Table" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Table head" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Similar to tables and dark tables, use the modifier prop",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: 'color="light"' }),
          " or ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: 'color="dark"' }),
          " to make",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CTableHead>" }),
          "s appear light or dark gray."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/table#table-head", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTable, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHead, { color: "light", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "#" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Class" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Heading" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Heading" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Mark" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Otto" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@mdo" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Jacob" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Thornton" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@fat" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Larry" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "the Bird" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@twitter" })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/table#table-head", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTable, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHead, { color: "dark", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "#" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Class" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Heading" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Heading" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Mark" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Otto" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@mdo" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Jacob" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Thornton" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@fat" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { colSpan: "2", children: "Larry the Bird" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@twitter" })
            ] })
          ] })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Table" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Table foot" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/table#table-foot", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTable, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHead, { color: "light", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "#" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Class" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Heading" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Heading" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Mark" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Otto" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@mdo" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Jacob" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Thornton" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@fat" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { colSpan: "2", children: "Larry the Bird" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@twitter" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Footer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Footer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Footer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Footer" })
        ] }) })
      ] }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Table" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Captions" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "A ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CTableCaption>" }),
          " functions like a heading for a table. It helps users with screen readers to find a table and understand what it's about and decide if they want to read it."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/table#captions", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTable, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableCaption, { children: "List of users" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "#" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Class" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Heading" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Heading" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Mark" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Otto" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@mdo" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Jacob" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Thornton" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@fat" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Larry" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "the Bird" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@twitter" })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "You can also put the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CTableCaption>" }),
          " on the top of the table with",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: 'caption="top"' }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/table#captions", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTable, { caption: "top", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableCaption, { children: "List of users" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "#" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Class" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Heading" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "col", children: "Heading" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Mark" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Otto" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@mdo" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Jacob" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Thornton" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@fat" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { scope: "row", children: "3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "Larry" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "the Bird" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { children: "@twitter" })
            ] })
          ] })
        ] }) })
      ] })
    ] }) })
  ] });
};
export {
  Tables as default
};
