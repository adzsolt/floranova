import { r as reactExports, j as jsxRuntimeExports } from "./client-DnTwIhck.js";
import { a as CRow, b as CCol, d as CCard, a2 as CCardHeader, e as CCardBody, a1 as CDatePicker, ax as CFormSelect, aP as CSmartTable, k as CButton, af as CCollapse, aF as CModal, aG as CModalHeader, aH as CModalTitle, aI as CModalBody, aJ as CModalFooter, at as CLoadingButton, aC as CAlert, a0 as CCardTitle, i as CIcon } from "./index.es-HjcCfGYB.js";
import { g as useNavigate } from "./index-CN9H2hqp.js";
import "./ProBadge-BOAvtjuI.js";
import { a as axios } from "./axios-fEUzBR8L.js";
import { c as cilUserPlus } from "./cil-user-plus-kfZGZ2sS.js";
import "./cil-user-q2NU2AQZ.js";
const Temperaturelist = () => {
  const controller = new AbortController();
  useNavigate();
  const [temperatures, setTemperatures] = reactExports.useState([]);
  const [heatUnitId, setHeatUnitId] = reactExports.useState(void 0);
  const [heatUnits, setHeatUnits] = reactExports.useState([]);
  const [isLoading, setIsLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState("");
  const [condemnedId, setCondemnedId] = reactExports.useState(null);
  const [lastTemperatureId, setLastTemperatureId] = reactExports.useState(null);
  const [activePage, setActivePage] = reactExports.useState(1);
  const date = /* @__PURE__ */ new Date();
  const initial_start_date = new Date(date.getFullYear(), date.getMonth(), 1, date.getHours(), date.getMinutes());
  initial_start_date.setMinutes(initial_start_date.getMinutes() - initial_start_date.getTimezoneOffset());
  const initial_end_date = new Date(date.getFullYear(), date.getMonth() + 1, 0, date.getHours(), date.getMinutes());
  initial_end_date.setMinutes(initial_end_date.getMinutes() - initial_end_date.getTimezoneOffset());
  const [startDate, setStartDate] = reactExports.useState(initial_start_date.toISOString().split("T")[0]);
  const [endDate, setEndDate] = reactExports.useState(initial_end_date.toISOString().split("T")[0]);
  const [details, setDetails] = reactExports.useState([]);
  const columns = [
    {
      label: "Dátum",
      key: "work_date",
      _style: { width: "25%" }
    },
    {
      label: "Benti hőmérséklet",
      key: "outside_temperature",
      _style: { width: "25%" }
    },
    /*{
      label: 'Nappali hőmérséklet',
      key: 'daytime_temperature',
      _style: {width: '15%'}
    },
    {
      label: 'Éjjeli hőmérséklet',
      key: 'night_temperature',
      _style: {width: '15%'}
    },*/
    {
      label: "Hőmérésklet beírás",
      key: "input",
      _style: { width: "20%" }
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
    axios.post(
      "/get-temperatures",
      {
        start_date: startDate,
        end_date: endDate,
        heat_unit_id: heatUnitId
      },
      {
        signal: controller.signal
      }
    ).then((response) => {
      setTemperatures(response.data.temperatures);
      setHeatUnitId(response.data.first_heat_unit_id);
      setHeatUnits(response.data.heat_units);
      setLastTemperatureId(response.data.temperatures[0]);
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
  }, [startDate, endDate, heatUnitId]);
  const condemnId = (e) => {
    setCondemnedId(e.currentTarget.getAttribute("data-id"));
  };
  const spareId = () => {
    setCondemnedId(null);
  };
  const handleDelete = () => {
    setIsLoading(true);
    axios.post(
      "/delete-temperature",
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
  const handleSetStartDate = (d) => {
    setStartDate(d);
  };
  const handleSetEndDate = (d) => {
    setEndDate(d);
  };
  const handleHeatUnitChange = (e) => {
    setHeatUnitId(e.currentTarget.value);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Hőméréséklet lista" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            CDatePicker,
            {
              locale: "en-US",
              placeholder: "Adj mage egy kezdési dátumot",
              required: true,
              feedbackInvalid: "A kezdési dátum kötelező",
              date: startDate,
              onDateChange: (date2) => {
                date2.setMinutes(date2.getMinutes() - date2.getTimezoneOffset());
                handleSetStartDate(date2.toISOString().split("T")[0]);
              }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            CDatePicker,
            {
              locale: "en-US",
              placeholder: "Adj mage egy kezdési dátumot",
              required: true,
              feedbackInvalid: "A kezdési dátum kötelező",
              date: endDate,
              onDateChange: (date2) => {
                date2.setMinutes(date2.getMinutes() - date2.getTimezoneOffset());
                handleSetEndDate(date2.toISOString().split("T")[0]);
              }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormSelect, { "aria-label": "Válassz fűtőegységet", className: "mb-3", value: heatUnitId, onChange: handleHeatUnitChange, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Fűtőegységek" }),
            heatUnits.map((val) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: val.id, children: [
              val.name,
              " "
            ] }, val.id))
          ] }) }) })
        ] }),
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
            items: temperatures,
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(CModalHeader, { onClose: () => setVisible(false), children: /* @__PURE__ */ jsxRuntimeExports.jsx(CModalTitle, { children: "Hőmérséklet törlése" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CModalBody, { children: [
            "Biztosan akarod törölni ezt a hőmérsékletet #",
            condemnedId,
            "?"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CModalFooter, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "secondary", onClick: spareId, children: "Bezár" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CLoadingButton, { color: "danger", onClick: handleDelete, disabled: isLoading, loading: isLoading, children: "Hőmérséklet törlése" })
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
const Temperatures = () => {
  const navigate = useNavigate();
  const handleAdd = () => {
    navigate("/temperatures/add");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CCard, { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { className: "d-flex justify-content-between mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Hőmérséklet" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CButton, { color: "light", onClick: handleAdd, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilUserPlus, className: "btn-icon mr-2" }),
        " Hőmérséklet hozzáadása"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Temperaturelist, {}) })
  ] }) }) });
};
export {
  Temperatures as default
};
