import { r as reactExports, j as jsxRuntimeExports } from "./client-DnTwIhck.js";
import { a as CRow, b as CCol, d as CCard, a0 as CCardHeader, e as CCardBody, aF as CModal, aG as CModalHeader, aH as CModalTitle, aI as CModalBody, f as CForm, au as CDatePicker, ax as CFormSelect, k as CButton, aJ as CModalFooter, aP as CSmartTable, aj as CCollapse, ar as CLoadingButton, aC as CAlert, ac as CCardTitle, i as CIcon } from "./index.es-DQOCfkkb.js";
import { g as useNavigate } from "./index-4EuCJtbG.js";
import { a as axios } from "./axios-fEUzBR8L.js";
import "./ProBadge-BLFbsSbk.js";
import { c as cilUserPlus } from "./cil-user-plus-kfZGZ2sS.js";
import "./cil-user-q2NU2AQZ.js";
const LotList = () => {
  const controller = new AbortController();
  const navigate = useNavigate();
  const [lots, setLots] = reactExports.useState([]);
  const [validated, setValidated] = reactExports.useState(false);
  const [isLoading, setIsLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState("");
  const [condemnedId, setCondemnedId] = reactExports.useState(null);
  const [activePage, setActivePage] = reactExports.useState(1);
  const [visible, setVisible] = reactExports.useState(false);
  const [visibleAdd, setVisibleAdd] = reactExports.useState(false);
  const [layouts, setLayouts] = reactExports.useState([]);
  const [layoutId, setLayoutId] = reactExports.useState([]);
  const [addLayoutId, setAddLayoutId] = reactExports.useState([]);
  const [productiontUnits, setProductionUnits] = reactExports.useState([]);
  const [productiontUnitId, setProductionUnitId] = reactExports.useState([]);
  const [addProductiontUnitId, setAddProductionUnitId] = reactExports.useState([]);
  const [status, setStatus] = reactExports.useState([]);
  const [lotId, setLotId] = reactExports.useState([]);
  const [editStartDate, setEditStartDate] = reactExports.useState("");
  const [addStartDate, setAddStartDate] = reactExports.useState("");
  const formRef = reactExports.useRef();
  const formAddRef = reactExports.useRef();
  const formatNumber = (number) => number.toFixed(2);
  const [details, setDetails] = reactExports.useState([]);
  const columns = [
    {
      label: "Név",
      key: "name",
      _style: { width: "10%" }
    },
    {
      label: "Darab",
      key: "quantity",
      _style: { width: "5%" }
    },
    {
      label: "Ültetés",
      key: "start_date",
      _style: { width: "10%" }
    },
    {
      label: "Befejezés",
      key: "end_date",
      _style: { width: "10%" }
    },
    {
      label: "Növény ára",
      key: "plant_price",
      _style: { width: "5%" },
      _props: { className: "custom-value-cell" }
    },
    {
      label: "Tőzeg",
      key: "peat_name",
      _style: { width: "5%" }
    },
    {
      label: "Cserép",
      key: "pot_name",
      _style: { width: "5%" }
    },
    {
      label: "Növény",
      key: "plant_name",
      _style: { width: "5%" }
    },
    {
      label: "Szezon",
      key: "season_name",
      _style: { width: "10%" }
    },
    {
      label: "Termelőegység",
      key: "production_unit_name",
      _style: { width: "5%" }
    },
    {
      label: "Elrendezés",
      key: "layout_name",
      _style: { width: "5%" }
    },
    {
      label: "Műtrágya",
      key: "fertilizer_name",
      _style: { width: "5%" }
    },
    {
      key: "show_details",
      label: "",
      _style: { width: "1%" },
      filter: false,
      sorter: false
    }
  ];
  const status_columns = [
    {
      label: "Állapot kezdete",
      key: "start_date",
      _style: { width: "20%" }
    },
    {
      label: "Termelőegység",
      key: "production_unit_name",
      _style: { width: "20%" }
    },
    {
      label: "Elrendezés",
      key: "layout_name",
      _style: { width: "20%" }
    },
    {
      key: "action",
      label: "",
      _style: { width: "1%" },
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
      "/get-lots",
      {
        signal: controller.signal
      }
    ).then((response) => {
      setLots(response.data.lots);
    }).catch((error2) => {
      console.log("ERROR:: ", error2);
      setError(error2.message);
    }).finally(() => {
      setIsLoading(false);
    });
  };
  const getLotStatusFormData = () => {
    setIsLoading(true);
    setError("");
    axios.get(
      "/get-lot-form-data",
      {
        signal: controller.signal
      }
    ).then((response) => {
      setProductionUnits(response.data.data.production_units);
      setLayouts(response.data.data.layouts);
    }).catch((error2) => {
      console.log("ERROR:: ", error2);
      setError(error2.message);
    }).finally(() => {
      setIsLoading(false);
    });
  };
  reactExports.useEffect(() => {
    getList();
    getLotStatusFormData();
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
    navigate(`/fertilizer/edit/${id}`);
  };
  const handleAddStatus = (e) => {
    setVisibleAdd(true);
    const id = e.currentTarget.getAttribute("data-id");
    setLotId(id);
  };
  const handleProductionUnitChange = (e) => {
    setProductionUnitId(e.currentTarget.value);
  };
  const handleAddProductionUnitChange = (e) => {
    setAddProductionUnitId(e.currentTarget.value);
  };
  const handleLayoutChange = (e) => {
    setLayoutId(e.currentTarget.value);
  };
  const handleAddLayoutChange = (e) => {
    setAddLayoutId(e.currentTarget.value);
  };
  const handleDelete = () => {
    setIsLoading(true);
    axios.post(
      "/delete-lot",
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
  const handleLotStatusSubmit = () => {
    const form = formRef.current;
    if (form.checkValidity() !== false) {
      axios.post(
        "/update-lot-status",
        {
          lot_id: status.lot_id,
          start_date: editStartDate,
          production_unit_id: productiontUnitId,
          layout_id: layoutId
        }
      ).then((response) => {
        setCondemnedId(null);
        getList();
      }).catch((error2) => {
        console.log("ERROR:: ", error2);
      }).finally(() => {
        setIsLoading(false);
        setVisible(false);
      });
    }
  };
  const handleAddLotStatusSubmit = () => {
    const form = formAddRef.current;
    if (form.checkValidity() !== false) {
      axios.post(
        "/create-lot-status",
        {
          lot_id: lotId,
          start_date: addStartDate,
          production_unit_id: addProductiontUnitId,
          layout_id: addLayoutId
        }
      ).then((response) => {
        setCondemnedId(null);
        getList();
      }).catch((error2) => {
        console.log("ERROR:: ", error2);
      }).finally(() => {
        setIsLoading(false);
        setVisibleAdd(false);
      });
    }
  };
  const handleSetEditStartDate = (d) => {
    setEditStartDate(d);
  };
  const handleSetAddStartDate = (d) => {
    setAddStartDate(d);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Virágcsoport lista" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          CModal,
          {
            visible,
            onClose: () => setVisible(false),
            "aria-labelledby": "LiveDemoExampleLabel",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CModalHeader, { onClose: () => setVisible(false), children: /* @__PURE__ */ jsxRuntimeExports.jsx(CModalTitle, { id: "LiveDemoExampleLabel", children: "Állapot modosítása" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CModalBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CForm, { ref: formRef, className: "needs-validation", noValidate: true, validated, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  CDatePicker,
                  {
                    locale: "en-US",
                    placeholder: "Adj meg egy kezdési dátumot",
                    date: status.start_date,
                    required: true,
                    feedbackInvalid: "A kezdési dátum kötelező",
                    onDateChange: (date) => {
                      date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
                      handleSetEditStartDate(date.toISOString().split("T")[0]);
                    }
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  CFormSelect,
                  {
                    "aria-label": "Válassz termelőegységet ",
                    className: "mb-3",
                    feedbackInvalid: "Válassz termelőegységet",
                    required: true,
                    onChange: handleProductionUnitChange,
                    defaultValue: status.production_unit_id,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Válassz termelőegységet" }),
                      productiontUnits.map((val) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: val.id, children: [
                        val.name,
                        " "
                      ] }, val.id))
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  CFormSelect,
                  {
                    "aria-label": "Válassz elrendezést ",
                    className: "mb-3",
                    feedbackInvalid: "Válassz Elrendezést",
                    required: true,
                    onChange: handleLayoutChange,
                    defaultValue: status.layout_id,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Válassz elrendezést" }),
                      layouts.map((val) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: val.id, children: [
                        val.name,
                        " "
                      ] }, val.id))
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  CButton,
                  {
                    type: "button",
                    color: "primary",
                    onClick: handleLotStatusSubmit,
                    children: "Virágcsoport állapot modosítása"
                  }
                ) })
              ] }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CModalFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "secondary", onClick: () => setVisible(false), children: "Close" }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          CModal,
          {
            visible: visibleAdd,
            onClose: () => setVisibleAdd(false),
            "aria-labelledby": "ModalAdd",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CModalHeader, { onClose: () => setVisible(false), children: /* @__PURE__ */ jsxRuntimeExports.jsx(CModalTitle, { id: "ModalAdd", children: "Állapot Hozzáadása" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CModalBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CForm, { ref: formAddRef, className: "needs-validation", noValidate: true, validated, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  CDatePicker,
                  {
                    locale: "en-US",
                    placeholder: "Adj meg egy kezdési dátumot",
                    required: true,
                    feedbackInvalid: "A kezdési dátum kötelező",
                    onDateChange: (date) => {
                      date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
                      handleSetAddStartDate(date.toISOString().split("T")[0]);
                    }
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  CFormSelect,
                  {
                    "aria-label": "Válassz termelőegységet ",
                    className: "mb-3",
                    feedbackInvalid: "Válassz termelőegységet",
                    required: true,
                    onChange: handleAddProductionUnitChange,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Válassz termelőegységet" }),
                      productiontUnits.map((val) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: val.id, children: [
                        val.name,
                        " "
                      ] }, val.id))
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  CFormSelect,
                  {
                    "aria-label": "Válassz elrendezést ",
                    className: "mb-3",
                    feedbackInvalid: "Válassz Elrendezést",
                    required: true,
                    onChange: handleAddLayoutChange,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Válassz elrendezést" }),
                      layouts.map((val) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: val.id, children: [
                        val.name,
                        " "
                      ] }, val.id))
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  CButton,
                  {
                    type: "button",
                    color: "primary",
                    onClick: handleAddLotStatusSubmit,
                    children: "Virágcsoport állapot létrehozása"
                  }
                ) })
              ] }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CModalFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "secondary", onClick: () => setVisibleAdd(false), children: "Close" }) })
            ]
          }
        ),
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
            items: lots,
            itemsPerPageSelect: true,
            itemsPerPage: 5,
            pagination: true,
            onFilteredItemsChange: (items) => {
            },
            onSelectedItemsChange: (items) => {
            },
            scopedColumns: {
              plant_price: (item) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: formatNumber(item.plant_price) }),
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
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h5", { children: [
                    item.name,
                    " állapotok"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CSmartTable,
                    {
                      columns: status_columns,
                      items: item["statuses"],
                      scopedColumns: {
                        action: (status2) => {
                          return /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            CButton,
                            {
                              color: "primary",
                              variant: "outline",
                              shape: "square",
                              size: "sm",
                              onClick: () => {
                                setVisible(!visible);
                                setStatus(status2);
                                setLayoutId(status2.layout_id);
                                setProductionUnitId(status2.production_unit_id);
                              },
                              children: "Szerkesztés"
                            }
                          ) });
                        }
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CButton,
                    {
                      size: "sm",
                      color: "primary",
                      className: "me-md-2",
                      "data-id": item.id,
                      onClick: handleAddStatus,
                      children: "Állapot hozzáadása"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { size: "sm", color: "info", className: "me-md-2", "data-id": item.id, disabled: true, onClick: handleEdit, children: "Virágcsoport szerkesztése" }),
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(CModalHeader, { onClose: () => setVisible(false), children: /* @__PURE__ */ jsxRuntimeExports.jsx(CModalTitle, { children: "Virágcsoport törlése" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CModalBody, { children: [
            "Biztosan akarod törölni ezt a virágcsoportot #",
            condemnedId,
            "?"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CModalFooter, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "secondary", onClick: spareId, children: "Bezár" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CLoadingButton, { color: "danger", onClick: handleDelete, disabled: isLoading, loading: isLoading, children: "Virágcsoport törlése" })
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
const Lot = () => {
  const navigate = useNavigate();
  const handleAdd = () => {
    navigate("/lot/add");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CCard, { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { className: "d-flex justify-content-between mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Virágcsoport" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CButton, { color: "light", onClick: handleAdd, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilUserPlus, className: "btn-icon mr-2" }),
        " Virágcsoport hozzáadása"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LotList, {}) })
  ] }) }) });
};
export {
  Lot as default
};
