import { r as reactExports, j as jsxRuntimeExports } from "./client-DnTwIhck.js";
import { aP as CSmartTable, s as CBadge, k as CButton, aj as CCollapse, e as CCardBody, V as CFormCheck, l as CFormLabel, a as CRow, b as CCol, d as CCard, a0 as CCardHeader } from "./index.es-DQOCfkkb.js";
import { m as DocsExample } from "./ProBadge-CdXCZ9PP.js";
import "./index-CohQ1QJD.js";
import "./cil-user-q2NU2AQZ.js";
const usersData = [
  { id: 0, name: "John Doe", registered: "2018/01/01", role: "Guest", status: "Pending" },
  { id: 1, name: "Samppa Nori", registered: "2018/01/01", role: "Member", status: "Active" },
  { id: 2, name: "Estavan Lykos", registered: "2018/02/01", role: "Staff", status: "Banned" },
  { id: 3, name: "Chetan Mohamed", registered: "2018/02/01", role: "Admin", status: "Inactive" },
  { id: 4, name: "Derick Maximinus", registered: "2018/03/01", role: "Member", status: "Pending" },
  { id: 5, name: "Friderik Dávid", registered: "2018/01/21", role: "Staff", status: "Active" },
  { id: 6, name: "Yiorgos Avraamu", registered: "2018/01/01", role: "Member", status: "Active" },
  { id: 7, name: "Avram Tarasios", registered: "2018/02/01", role: "Staff", status: "Banned" },
  { id: 8, name: "Quintin Ed", registered: "2018/02/01", role: "Admin", status: "Inactive" },
  { id: 9, name: "Enéas Kwadwo", registered: "2018/03/01", role: "Member", status: "Pending" },
  { id: 10, name: "Agapetus Tadeáš", registered: "2018/01/21", role: "Staff", status: "Active" },
  { id: 11, name: "Carwyn Fachtna", registered: "2018/01/01", role: "Member", status: "Active" },
  { id: 12, name: "Nehemiah Tatius", registered: "2018/02/01", role: "Staff", status: "Banned" },
  { id: 13, name: "Ebbe Gemariah", registered: "2018/02/01", role: "Admin", status: "Inactive" },
  { id: 14, name: "Eustorgios Amulius", registered: "2018/03/01", role: "Member", status: "Pending" },
  { id: 15, name: "Leopold Gáspár", registered: "2018/01/21", role: "Staff", status: "Active" },
  { id: 16, name: "Pompeius René", registered: "2018/01/01", role: "Member", status: "Active" },
  { id: 17, name: "Paĉjo Jadon", registered: "2018/02/01", role: "Staff", status: "Banned" },
  { id: 18, name: "Micheal Mercurius", registered: "2018/02/01", role: "Admin", status: "Inactive" },
  { id: 19, name: "Ganesha Dubhghall", registered: "2018/03/01", role: "Member", status: "Pending" },
  { id: 20, name: "Hiroto Šimun", registered: "2018/01/21", role: "Staff", status: "Active" },
  { id: 21, name: "Vishnu Serghei", registered: "2018/01/01", role: "Member", status: "Active" },
  { id: 22, name: "Zbyněk Phoibos", registered: "2018/02/01", role: "Staff", status: "Banned" },
  { id: 23, name: "Aulus Agmundr", registered: "2018/01/01", role: "Member", status: "Pending" },
  { id: 42, name: "Ford Prefect", registered: "2001/05/25", role: "Alien", status: "Don't panic!" }
];
const SmartTableBasicExample = () => {
  const [details, setDetails] = reactExports.useState([]);
  const columns = [
    {
      key: "name",
      _style: { width: "40%" }
    },
    "registered",
    { key: "role", _style: { width: "20%" } },
    { key: "status", _style: { width: "20%" } },
    {
      key: "show_details",
      label: "",
      _style: { width: "1%" },
      filter: false,
      sorter: false
    }
  ];
  const getBadge = (status) => {
    switch (status) {
      case "Active":
        return "success";
      case "Inactive":
        return "secondary";
      case "Pending":
        return "warning";
      case "Banned":
        return "danger";
      default:
        return "primary";
    }
  };
  const toggleDetails = (index) => {
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
    }
    setDetails(newDetails);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CSmartTable,
    {
      sorterValue: { column: "name", state: "asc" },
      clickableRows: true,
      tableProps: {
        striped: true,
        hover: true
      },
      activePage: 3,
      footer: true,
      items: usersData,
      columns,
      columnFilter: true,
      tableFilter: true,
      cleaner: true,
      itemsPerPageSelect: true,
      itemsPerPage: 5,
      columnSorter: true,
      pagination: true,
      scopedColumns: {
        status: (item) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CBadge, { color: getBadge(item.status), children: item.status }) }),
        show_details: (item) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            CButton,
            {
              color: "primary",
              variant: "outline",
              shape: "square",
              size: "sm",
              onClick: () => {
                toggleDetails(item.id);
              },
              children: details.includes(item.id) ? "Hide" : "Show"
            }
          ) });
        },
        details: (item) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(CCollapse, { visible: details.includes(item.id), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: item.username }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted", children: [
              "User since: ",
              item.registered
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { size: "sm", color: "info", children: "User Settings" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { size: "sm", color: "danger", className: "ml-1", children: "Delete" })
          ] }) });
        }
      }
    }
  );
};
const SmartTableDownloadableExample = () => {
  const [currentItems, setCurrentItems] = reactExports.useState(usersData);
  const csvContent = currentItems.map((item) => Object.values(item).join(",")).join("\n");
  const csvCode = "data:text/csv;charset=utf-8,SEP=,%0A" + encodeURIComponent(csvContent);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CButton,
      {
        color: "primary",
        className: "mb-2",
        href: csvCode,
        download: "coreui-table-data.csv",
        target: "_blank",
        children: "Download current items (.csv)"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CSmartTable,
      {
        columnFilter: true,
        columnSorter: true,
        items: usersData,
        itemsPerPage: 5,
        onFilteredItemsChange: setCurrentItems,
        pagination: true
      }
    )
  ] });
};
const SmartTableSelectableExample = () => {
  const [selected, setSelected] = reactExports.useState([2, 3]);
  const usersData$1 = usersData.map((item, id) => {
    const _selected = selected.includes(id);
    return {
      ...item,
      id,
      _selected,
      _classes: [item._classes, _selected && "table-selected"]
    };
  });
  const check = (e, id) => {
    if (e.target.checked) {
      setSelected([...selected, id]);
    } else {
      setSelected(selected.filter((itemId) => itemId !== id));
    }
  };
  const getBadge = (status) => {
    switch (status) {
      case "Active":
        return "success";
      case "Inactive":
        return "secondary";
      case "Pending":
        return "warning";
      case "Banned":
        return "danger";
      default:
        return "primary";
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
    "Selected: ",
    JSON.stringify(selected),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CSmartTable,
      {
        items: usersData$1,
        columns: [
          { key: "select", label: "", filter: false, sorter: false },
          "name",
          "registered",
          "role",
          "status"
        ],
        itemsPerPage: 5,
        columnFilter: true,
        columnSorter: true,
        pagination: true,
        scopedColumns: {
          select: (item) => {
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                CFormCheck,
                {
                  id: `checkbox${item.id}`,
                  checked: item._selected,
                  onChange: (e) => check(e, item.id)
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { variant: "custom-checkbox", htmlFor: `checkbox${item.id}` })
            ] });
          },
          status: (item) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CBadge, { color: getBadge(item.status), children: item.status }) })
        },
        tableProps: {
          hover: true
        }
      }
    )
  ] });
};
const SmartTable = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { xs: 12, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "CoreUI Smart Table" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "React Table Component" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/smart-table/", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SmartTableBasicExample, {}) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "CoreUI Smart Table" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Table with selectable rows" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/smart-table/", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SmartTableSelectableExample, {}) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "CoreUI Smart Table" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Table with selectable rows" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/smart-table/", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SmartTableDownloadableExample, {}) }) })
    ] })
  ] }) });
};
export {
  SmartTable as default
};
