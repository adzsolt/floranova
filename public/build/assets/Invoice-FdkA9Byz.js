import { j as jsxRuntimeExports } from "./client-DnTwIhck.js";
import { d as CCard, a0 as CCardHeader, k as CButton, i as CIcon, e as CCardBody, a as CRow, b as CCol, a1 as CTable, a2 as CTableHead, a3 as CTableRow, a4 as CTableHeaderCell, a5 as CTableBody, a6 as CTableDataCell } from "./index.es-DQOCfkkb.js";
import { a as cilPrint, b as cilSave, c as cilDollar } from "./cil-save-bEm0gpL0.js";
const Invoice = () => {
  const print = (e) => {
    e.preventDefault();
    window.print();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
      "Invoice ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "#90-98792" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        CButton,
        {
          className: "me-1 float-end",
          href: "",
          tag: "a",
          size: "sm",
          color: "secondary",
          onClick: print,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilPrint }),
            " Print"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CButton, { className: "me-1 float-end", href: "", tag: "a", size: "sm", color: "info", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilSave }),
        " Save"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { sm: 4, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "mb-3", children: "From:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Your Great Company Inc." }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "724 John Ave." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Cupertino, CA 95014" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Email: email@your-great-company.com" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Phone: +1 123-456-7890" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { sm: 4, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "mb-3", children: "To:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Acme Inc." }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "159 Manor Station Road" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "San Diego, CA 92154" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Email: email@acme.com" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Phone: +1 123-456-7890" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { sm: 4, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "mb-3", children: "Details:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            "Invoice ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "#90-98792" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "March 30, 2020" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "VAT: EU9877281777" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Account Name: ACME" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "SWIFT code: 99 8888 7777 6666 5555" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CTable, { striped: true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { className: "text-center", children: "#" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { children: "Item" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { children: "Description" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { className: "text-center", children: "Quantity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { className: "text-end", children: "Unit Cost" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { className: "text-end", children: "Total" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { className: "text-center", children: "1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { className: "text-start", children: "Origin License" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { className: "text-start", children: "Extended License" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { className: "text-center", children: "1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { className: "text-end", children: "$999,00" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { className: "text-end", children: "$999,00" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { className: "text-center", children: "2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { className: "text-start", children: "Custom Services" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { className: "text-start", children: "Installation and Customization (per hour)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { className: "text-center", children: "20" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { className: "text-end", children: "$150,00" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { className: "text-end", children: "$3.000,00" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { className: "text-center", children: "3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { className: "text-start", children: "Hosting" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { className: "text-start", children: "1 year subscription" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { className: "text-center", children: "1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { className: "text-end", children: "$499,00" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { className: "text-end", children: "$499,00" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { className: "text-center", children: "4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { className: "text-start", children: "Platinum Support" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { className: "text-start", children: "1 year subscription 24/7" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { className: "text-center", children: "1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { className: "text-end", children: "$3.999,00" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { className: "text-end", children: "$3.999,00" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { lg: 4, sm: 5, children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { lg: 4, sm: 5, className: "ms-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTable, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { className: "text-start", children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Subtotal" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { className: "text-end", children: "$8.497,00" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { className: "text-start", children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Discount (20%)" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { className: "text-end", children: "$1,699,40" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { className: "text-start", children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "VAT (10%)" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { className: "text-end", children: "$679,76" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { className: "text-start", children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Total" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { className: "text-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "$7.477,36" }) })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CButton, { color: "success", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilDollar }),
            " Proceed to Payment"
          ] })
        ] })
      ] })
    ] })
  ] });
};
export {
  Invoice as default
};
