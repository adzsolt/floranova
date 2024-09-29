import { r as reactExports, j as jsxRuntimeExports } from "./client-DnTwIhck.js";
import { a as CRow, b as CCol, d as CCard, a0 as CCardHeader, e as CCardBody, aF as CModal, aG as CModalHeader, aH as CModalTitle, aI as CModalBody, f as CForm, au as CDatePicker, ax as CFormSelect, k as CButton, aJ as CModalFooter, z as CSpinner, Z as CCallout, aC as CAlert, j as CFormInput, l as CFormLabel, aP as CSmartTable, aj as CCollapse, ar as CLoadingButton, ac as CCardTitle, i as CIcon } from "./index.es-DQOCfkkb.js";
import { g as useNavigate } from "./index-DtraU9L4.js";
import { a as axios } from "./axios-fEUzBR8L.js";
import "./ProBadge-p43SoCb9.js";
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
  const [visibleCalculation, setVisibleCalculation] = reactExports.useState(false);
  const [visibleLotEnd, setVisibleLotEnd] = reactExports.useState(false);
  const [visibleEnd, setVisibleEnd] = reactExports.useState(false);
  const [layouts, setLayouts] = reactExports.useState([]);
  const [layoutId, setLayoutId] = reactExports.useState([]);
  const [addLayoutId, setAddLayoutId] = reactExports.useState([]);
  const [productiontUnits, setProductionUnits] = reactExports.useState([]);
  const [productiontUnitId, setProductionUnitId] = reactExports.useState([]);
  const [addProductiontUnitId, setAddProductionUnitId] = reactExports.useState([]);
  const [status, setStatus] = reactExports.useState([]);
  const [lotId, setLotId] = reactExports.useState("");
  const [lotEndId, setLotEndId] = reactExports.useState("");
  const [lotStatusId, setLotStatusId] = reactExports.useState("");
  const [priceInfo, setPriceInfo] = reactExports.useState("invisible");
  const [priceResponse, setPriceResponse] = reactExports.useState([]);
  const [editStartDate, setEditStartDate] = reactExports.useState("");
  const [addStartDate, setAddStartDate] = reactExports.useState("");
  const [addEndDate, setAddEndDate] = reactExports.useState("");
  const [addProductionEndDate, setAddProductionEndDate] = reactExports.useState("");
  const [plantNumbers, setPlantNumbers] = reactExports.useState(0);
  const [storeSkuCode, setStoreSkuCode] = reactExports.useState(0);
  const [endData, setEndData] = reactExports.useState([]);
  const [isLoadingProductionEnd, setIsLoadingProductionEnd] = reactExports.useState(false);
  const [endOk, setEndOk] = reactExports.useState(false);
  const [lotEndInfo, setLotEndInfo] = reactExports.useState([]);
  const formRef = reactExports.useRef();
  const formAddRef = reactExports.useRef();
  const formEndRef = reactExports.useRef();
  const formCalculationRef = reactExports.useRef();
  const hasPageBeenRendered = reactExports.useRef(false);
  const formatNumber = (number) => number ? number.toFixed(2) : 0;
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
    axios.post(
      "/get-lot-form-data",
      {
        lot_id: lotId,
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
    return () => {
      controller.abort();
    };
  }, []);
  reactExports.useEffect(() => {
    if (hasPageBeenRendered.current) {
      getLotStatusFormData();
      return () => {
        controller.abort();
      };
    }
    hasPageBeenRendered.current = true;
  }, [lotId]);
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
          lot_status_id: lotStatusId,
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
  const handleSetEndDate = (d) => {
    setAddEndDate(d);
  };
  const handleCalculation = (e) => {
    setIsLoading(false);
    const id = e.currentTarget.getAttribute("data-id");
    axios.post(
      "/check-if-lot-finished",
      {
        lot_id: id
      }
    ).then((response) => {
      console.log(response.data);
      if (!response.data.end_date) {
        setLotId(id);
        setVisibleCalculation(true);
      } else {
        setVisibleLotEnd(true);
        setLotEndInfo(response.data);
      }
    }).catch((error2) => {
      console.log("ERROR:: ", error2);
    }).finally(() => {
    });
  };
  const handleCalculationSubmit = () => {
    setIsLoading(true);
    axios.post(
      "/get-price",
      {
        lot_id: lotId,
        start_date: addStartDate,
        end_date: addEndDate
      }
    ).then((response) => {
      console.log(response.data);
      setPriceResponse(response.data);
    }).catch((error2) => {
      console.log("ERROR:: ", error2);
    }).finally(() => {
      setIsLoading(false);
      setPriceInfo("visible");
    });
  };
  const handleProductionEnd = (e) => {
    setIsLoading(false);
    setIsLoadingProductionEnd(false);
    setVisibleEnd(true);
    const id = e.currentTarget.getAttribute("data-id");
    setLotEndId(id);
  };
  const handlePlantNumbersChange = (e) => {
    setPlantNumbers(e.target.value);
  };
  const handleSkuChange = (e) => {
    setStoreSkuCode(e.target.value);
  };
  const handleSubmitProductionEnd = (e) => {
    const form = formEndRef.current;
    if (form.checkValidity() !== false) {
      setIsLoading(true);
      setIsLoadingProductionEnd(false);
      axios.post(
        "/add-products-to-store",
        {
          lotId: lotEndId,
          qty: plantNumbers,
          sku: storeSkuCode,
          date: addProductionEndDate
        }
      ).then((response) => {
        console.log(response.data.price.product_price);
        setEndData(response.data);
        if (response.data.message === "Ok") {
          setEndOk(true);
        }
      }).catch((error2) => {
        console.log("ERROR:: ", error2);
      }).finally(() => {
        setIsLoading(false);
        setIsLoadingProductionEnd(true);
      });
    }
    setValidated(true);
  };
  const handleSetProductionEndDate = (d) => {
    setAddProductionEndDate(d);
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          CModal,
          {
            visible: visibleCalculation,
            onClose: () => {
              setVisible(false);
              setVisibleCalculation(false);
              setPriceInfo("invisible");
            },
            "aria-labelledby": "ModalAdd",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CModalHeader, { onClose: () => setVisibleCalculation(false), children: /* @__PURE__ */ jsxRuntimeExports.jsx(CModalTitle, { id: "ModalAdd", children: "Ár számítása" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CModalBody, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CForm, { ref: formCalculationRef, className: "needs-validation", noValidate: true, validated, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CDatePicker,
                    {
                      locale: "en-US",
                      placeholder: "Adj meg egy befejezési dátumot",
                      required: true,
                      feedbackInvalid: "A befejezési dátum kötelező",
                      onDateChange: (date) => {
                        date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
                        handleSetEndDate(date.toISOString().split("T")[0]);
                      }
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { xs: 12, className: "text-right", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CButton,
                      {
                        type: "button",
                        color: "primary",
                        onClick: handleCalculationSubmit,
                        children: "Számítás"
                      }
                    ),
                    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CSpinner, { color: "primary" }) }) : ""
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CCallout, { color: "primary", className: priceInfo, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(CAlert, { color: "primary", children: [
                    "Ár számítása a következő virágcsoportnak: ",
                    priceResponse.lot_name
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(CAlert, { color: "info", children: [
                    priceResponse.start_date,
                    " / ",
                    priceResponse.end_date,
                    " közőtt"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(CAlert, { color: "info", children: [
                    "Növény ára: ",
                    formatNumber(priceResponse.plant)
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(CAlert, { color: "info", children: [
                    "Cserép ára: ",
                    formatNumber(priceResponse.pot_price)
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(CAlert, { color: "info", children: [
                    "Tőzeg ára: ",
                    formatNumber(priceResponse.peat_price)
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(CAlert, { color: "info", children: [
                    "Műtrágya: ",
                    formatNumber(priceResponse.fertilizer_price)
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(CAlert, { color: "info", children: [
                    "Munkaköltség ára: ",
                    formatNumber(priceResponse.work_price)
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(CAlert, { color: "info", children: [
                    "Energia ára: ",
                    formatNumber(priceResponse.spend_price)
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(CAlert, { color: "warning", children: [
                    "Összesen: ",
                    formatNumber(priceResponse.total_price)
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CModalFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "secondary", onClick: () => setVisibleCalculation(false), children: "Close" }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          CModal,
          {
            visible: visibleLotEnd,
            onClose: () => {
              setVisibleLotEnd(false);
              setLotEndInfo([]);
            },
            "aria-labelledby": "ModalAdd",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CModalHeader, { onClose: () => setVisibleLotEnd(false), children: /* @__PURE__ */ jsxRuntimeExports.jsx(CModalTitle, { id: "ModalAdd", children: "Befejezett virágcsoport - végső árak" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CModalBody, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CAlert, { color: "success", children: [
                  "Kezdés: ",
                  lotEndInfo.start_date
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CAlert, { color: "success", children: [
                  "Befejezés: ",
                  lotEndInfo.end_date
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CAlert, { color: "success", children: [
                  "Darabszám kezdéskor: ",
                  lotEndInfo.quantity
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CAlert, { color: "success", children: [
                  "Darabszám befejezéskor: ",
                  lotEndInfo.final_quantity
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CAlert, { color: "danger", children: [
                  "Veszteség: ",
                  lotEndInfo.quantity - lotEndInfo.final_quantity
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CAlert, { color: "success", children: [
                  "Ár a kezdési darabszámmal: ",
                  lotEndInfo.final_price
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CAlert, { color: "danger", children: [
                  "Ár a veszteséggel: ",
                  lotEndInfo.final_price_with_loss
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CAlert, { color: "warning", children: [
                  "Üzleti ár: ",
                  lotEndInfo.store_price
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CAlert, { color: "success", children: [
                  "Az üzletbe átkerült a következő kóddal ",
                  lotEndInfo.group_id,
                  ", ",
                  lotEndInfo.final_quantity,
                  " darab növény."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CModalFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "secondary", onClick: () => setVisibleLotEnd(false), children: "Close" }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          CModal,
          {
            visible: visibleEnd,
            onClose: () => {
              setVisibleEnd(false);
              setIsLoadingProductionEnd(false);
              setEndOk(false);
              setValidated(false);
              getList();
            },
            "aria-labelledby": "LiveDemoExampleLabel",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CModalHeader, { onClose: () => setVisible(false), children: /* @__PURE__ */ jsxRuntimeExports.jsx(CModalTitle, { id: "LiveDemoExampleLabel", children: "Termelés befejezése " }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CModalBody, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CForm, { ref: formEndRef, className: "needs-validation", noValidate: true, validated, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { md: 6, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CDatePicker,
                    {
                      locale: "en-US",
                      placeholder: "Adj meg egy befejezési dátumot",
                      date: status.start_date,
                      required: true,
                      feedbackInvalid: "A befejezési  dátum kötelező",
                      onDateChange: (date) => {
                        date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
                        handleSetProductionEndDate(date.toISOString().split("T")[0]);
                      }
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { md: 6, className: "mb-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CFormInput,
                      {
                        type: "number",
                        name: "plant_numbers",
                        id: "plant_numbers",
                        placeholder: "Növények száma",
                        step: "any",
                        disabled: isLoading,
                        feedbackInvalid: "Adj meg a növények számát",
                        required: true,
                        onChange: handlePlantNumbersChange
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "plant_numbers" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { md: 6, className: "mb-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CFormInput,
                      {
                        type: "number",
                        name: "sku_code",
                        id: "sku_code",
                        placeholder: "Üzlet SKU kód",
                        step: "any",
                        disabled: isLoading,
                        feedbackInvalid: "Adj meg egy SKU k=dot",
                        required: true,
                        onChange: handleSkuChange
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "sku_code" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "primary", type: "button", disabled: isLoading, onClick: handleSubmitProductionEnd, children: "Befejezés" }) })
                ] }) }),
                isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CSpinner, { color: "primary" }) }) : "",
                isLoadingProductionEnd ? endOk ? /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { className: "mt-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CAlert, { color: "success", className: "fw-bolder text-center", children: "Befejezve" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(CAlert, { color: "success", children: [
                    "Kezdés: ",
                    endData.start_date
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(CAlert, { color: "success", children: [
                    "Befejezés: ",
                    endData.end_date
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(CAlert, { color: "success", children: [
                    "Darabszám kezdéskor: ",
                    endData.original_quantity
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(CAlert, { color: "success", children: [
                    "Darabszám befejezéskor: ",
                    endData.end_quantity
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(CAlert, { color: "danger", children: [
                    "Veszteség: ",
                    endData.original_quantity - endData.end_quantity
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(CAlert, { color: "success", children: [
                    "Ár a kezdési darabszámmal: ",
                    endData.calculated_price
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(CAlert, { color: "danger", children: [
                    "Ár a veszteséggel: ",
                    endData.calculated_price_with_loss
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(CAlert, { color: "warning", children: [
                    "Üzleti ár: ",
                    endData.price.product_price
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(CAlert, { color: "success", children: [
                    "Az üzletbe átkerült a következő kóddal ",
                    endData.store_code,
                    ", ",
                    endData.end_quantity,
                    " darab növény."
                  ] })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CAlert, { color: "danger", className: "mt-3", children: "Valami hibás!" }) : ""
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CModalFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "secondary", onClick: () => {
                setVisibleEnd(false);
                setIsLoadingProductionEnd(false);
                setEndData([]);
                setEndOk(false);
                setValidated(false);
              }, children: "Bezárás" }) })
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
                                setEditStartDate(status2.start_date);
                                setLotStatusId(status2.id);
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CButton,
                    {
                      size: "sm",
                      color: "info",
                      className: "me-md-2",
                      "data-id": item.id,
                      disabled: true,
                      onClick: handleEdit,
                      children: "Virágcsoport szerkesztése"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CButton,
                    {
                      size: "sm",
                      color: "warning",
                      className: "me-md-2",
                      "data-id": item.id,
                      onClick: handleCalculation,
                      children: "Ár számítása"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CButton,
                    {
                      size: "sm",
                      color: "danger",
                      className: "me-md-2",
                      "data-id": item.id,
                      variant: "outline",
                      onClick: condemnId,
                      children: "Törlés"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CButton,
                    {
                      size: "sm",
                      color: "dark",
                      className: "me-md-2",
                      "data-id": item.id,
                      onClick: handleProductionEnd,
                      disabled: !(item.end_date == null),
                      children: "Termelés befejezése"
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
