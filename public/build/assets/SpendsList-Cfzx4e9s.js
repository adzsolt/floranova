import { r as reactExports, j as jsxRuntimeExports } from "./client-DnTwIhck.js";
import { a as CRow, b as CCol, d as CCard, a0 as CCardHeader, e as CCardBody, au as CDatePicker, aP as CSmartTable, k as CButton, aj as CCollapse, aF as CModal, aG as CModalHeader, aH as CModalTitle, aI as CModalBody, aJ as CModalFooter, ar as CLoadingButton, aC as CAlert } from "./index.es-DQOCfkkb.js";
import "./ProBadge-BLFbsSbk.js";
import { g as useNavigate } from "./index-4EuCJtbG.js";
import { a as axios } from "./axios-fEUzBR8L.js";
const Spendslist = () => {
  const controller = new AbortController();
  const navigate = useNavigate();
  const [spends2, setSpends] = reactExports.useState([]);
  const [isLoading, setIsLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState("");
  const [condemnedId, setCondemnedId] = reactExports.useState(null);
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
      _style: { width: "15%" }
    },
    {
      label: "Gáz",
      key: "spent_gas",
      _style: { width: "15%" }
    },
    {
      label: "Villany",
      key: "spent_electricity",
      _style: { width: "15%" }
    },
    {
      label: "Gázszámla",
      key: "spent_gas_period_input",
      _style: { width: "15%" }
    },
    {
      label: "Villanyszámla",
      key: "spent_electricity_period_input",
      _style: { width: "15%" }
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
      "/get-spends",
      {
        start_date: startDate,
        end_date: endDate
      },
      {
        signal: controller.signal
      }
    ).then((response) => {
      setSpends(response.data.spends);
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
  }, [startDate, endDate]);
  const condemnId = (e) => {
    setCondemnedId(e.currentTarget.getAttribute("data-id"));
  };
  const spareId = () => {
    setCondemnedId(null);
  };
  const handleEdit = (e) => {
    const id = e.currentTarget.getAttribute("data-id");
    navigate(`/seasons/edit/${id}`);
  };
  const handleDelete = () => {
    setIsLoading(true);
    axios.post(
      "/delete-season",
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Fogyasztás lista" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
          ) })
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
            items: spends2,
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
                if (item.period_input) {
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
                } else {
                  return /* @__PURE__ */ jsxRuntimeExports.jsx("td", {});
                }
              },
              details: (item) => {
                return /* @__PURE__ */ jsxRuntimeExports.jsx(CCollapse, { visible: details.includes(item.id), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { className: "p-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: item.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { size: "sm", color: "info", "data-id": item.id, onClick: handleEdit, children: "Fogyasztás szerkesztése" }),
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(CModalHeader, { onClose: () => setVisible(false), children: /* @__PURE__ */ jsxRuntimeExports.jsx(CModalTitle, { children: "Delete user" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CModalBody, { children: [
            "Are you sure you want to delete user #",
            condemnedId,
            "?"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CModalFooter, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "secondary", onClick: spareId, children: "Close" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CLoadingButton, { color: "danger", onClick: handleDelete, disabled: isLoading, loading: isLoading, children: "Delete User" })
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
const Spendslist$1 = Spendslist;
export {
  Spendslist$1 as S
};
