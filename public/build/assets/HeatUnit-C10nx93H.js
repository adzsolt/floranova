import { r as reactExports, j as jsxRuntimeExports } from "./client-DnTwIhck.js";
import { a as CRow, b as CCol, d as CCard, a2 as CCardHeader, e as CCardBody, aP as CSmartTable, k as CButton, af as CCollapse, aF as CModal, aG as CModalHeader, aH as CModalTitle, aI as CModalBody, aJ as CModalFooter, at as CLoadingButton, aC as CAlert, a0 as CCardTitle, i as CIcon } from "./index.es-HjcCfGYB.js";
import { g as useNavigate } from "./index-CN9H2hqp.js";
import { a as axios } from "./axios-fEUzBR8L.js";
import "./ProBadge-BOAvtjuI.js";
import { c as cilUserPlus } from "./cil-user-plus-kfZGZ2sS.js";
import "./cil-user-q2NU2AQZ.js";
const HeatUnitList = () => {
  const controller = new AbortController();
  const navigate = useNavigate();
  const [heat_unit, setHeat_unit] = reactExports.useState([]);
  const [isLoading, setIsLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState("");
  const [condemnedId, setCondemnedId] = reactExports.useState(null);
  const [activePage, setActivePage] = reactExports.useState(1);
  const [details, setDetails] = reactExports.useState([]);
  const columns = [
    {
      label: "Név",
      key: "name",
      _style: { width: "40%" }
    },
    {
      label: "Egység",
      key: "business_name",
      _style: { width: "40%" }
    },
    {
      key: "show_details",
      label: "",
      filter: false,
      sorter: false
    }
  ];
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
  const getList = () => {
    setIsLoading(true);
    setError("");
    axios.get(
      "/get-heat-units",
      {
        signal: controller.signal
      }
    ).then((response) => {
      setHeat_unit(response.data.heat_units);
    }).catch((error2) => {
      console.log("ERROR:: ", error2);
      setError(error2.message);
    }).finally(() => {
      setIsLoading(false);
    });
  };
  reactExports.useEffect(() => {
    getList();
    return () => {
      controller.abort();
    };
  }, []);
  const condemnId = (e) => {
    setCondemnedId(e.currentTarget.getAttribute("data-id"));
  };
  const spareId = () => {
    setCondemnedId(null);
  };
  const handleEdit = (e) => {
    const id = e.currentTarget.getAttribute("data-id");
    navigate(`/heat-units/edit/${id}`);
  };
  const handleDelete = () => {
    setIsLoading(true);
    axios.post(
      "/delete-heat-unit",
      {
        id: condemnedId
      }
    ).then((response) => {
      setCondemnedId(null);
      getList();
    }).catch((error2) => {
      console.log("ERROR:: ", error2);
    }).finally(() => {
      setIsLoading(false);
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " Fűtőegység lista" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CSmartTable,
          {
            activePage,
            cleaner: true,
            clickableRows: true,
            columns,
            columnFilter: true,
            columnSorter: true,
            footer: true,
            items: heat_unit,
            itemsPerPageSelect: true,
            itemsPerPage: 5,
            pagination: true,
            onFilteredItemsChange: (items) => {
            },
            onSelectedItemsChange: (items) => {
            },
            scopedColumns: {
              /*avatar: (item) => (
                <td>
                  <CAvatar src={`/images/avatars/${item.avatar}`} />
                </td>
              ),
              status: (item) => (
                <td>
                  <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
                </td>
              ),*/
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
                    children: details.includes(item.id) ? "Elrejt" : "Mutat"
                  }
                ) });
              },
              details: (item) => {
                return /* @__PURE__ */ jsxRuntimeExports.jsx(CCollapse, { visible: details.includes(item.id), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { className: "p-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: item.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { size: "sm", color: "info", "data-id": item.id, onClick: handleEdit, children: "Fűtőegység szerkesztése" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CButton,
                    {
                      size: "sm",
                      color: "danger",
                      className: "ml-1",
                      "data-id": item.id,
                      variant: "outline",
                      onClick: condemnId,
                      children: "Törlés"
                    }
                  )
                ] }) });
              }
            },
            selectable: true,
            sorterValue: { column: "status", state: "asc" },
            tableFilter: true,
            tableProps: {
              className: "add-this-class",
              responsive: true,
              striped: true,
              hover: true
            },
            tableBodyProps: {
              className: "align-middle"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CModal, { visible: condemnedId !== null, onClose: spareId, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CModalHeader, { onClose: () => setVisible(false), children: /* @__PURE__ */ jsxRuntimeExports.jsx(CModalTitle, { children: "Fűtőegység törlése" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CModalBody, { children: [
            "Biztosan akarod törölni ezt a fűtőegységet  #",
            condemnedId,
            "?"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CModalFooter, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "secondary", onClick: spareId, children: "Bezár" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CLoadingButton, { color: "danger", onClick: handleDelete, disabled: isLoading, loading: isLoading, children: "Fűtőegység törlése" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CAlert, { color: "danger", className: "d-flex justify-content-between", visible: error !== "", children: [
      error,
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "light", disabled: isLoading, children: "Retry" })
    ] }) })
  ] });
};
const HeatUnit = () => {
  const navigate = useNavigate();
  const handleAdd = () => {
    navigate("/heat-units/add");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CCard, { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { className: "d-flex justify-content-between mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Fűtőegységek" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CButton, { color: "light", onClick: handleAdd, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilUserPlus, className: "btn-icon mr-2" }),
        " Fűtőegység hozzáadása"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeatUnitList, {}) })
  ] }) }) });
};
export {
  HeatUnit as default
};
