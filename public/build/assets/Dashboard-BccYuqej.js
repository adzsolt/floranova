import { j as jsxRuntimeExports, r as reactExports } from "./client-DnTwIhck.js";
import { a as CRow, b as CCol, $ as CWidgetStatsD, i as CIcon, d as CCard, e as CCardBody, a0 as CCardTitle, n as CButtonGroup, k as CButton, z as CSpinner, a1 as CDatePicker } from "./index.es-HjcCfGYB.js";
import { C as CChart } from "./index.es-B6mrXtmy.js";
import { W as WidgetsDropdown, a as WidgetsBrand } from "./WidgetsDropdown-Bs8Z52Xj.js";
import { P as PropTypes, g as cilBattery0, h as cilMoney, i as cilCalculator } from "./ProBadge-CmIaVMMU.js";
import { c as cilChart } from "./cil-chart-C8LjaPHg.js";
import { a as axios } from "./axios-fEUzBR8L.js";
import "./index-CMs2b6AS.js";
import "./cil-user-q2NU2AQZ.js";
const WidgetsBrand1 = ({
  withCharts,
  work_spend,
  spend,
  totalSpend,
  profit
}) => {
  const chartOptions = {
    elements: {
      line: {
        tension: 0.4
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3
      }
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        display: false
      },
      y: {
        display: false
      }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { sm: 6, lg: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CWidgetStatsD,
      {
        className: "mb-4",
        ...withCharts && {
          chart: /* @__PURE__ */ jsxRuntimeExports.jsx(
            CChart,
            {
              className: "position-absolute w-100 h-100",
              type: "line",
              data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                  {
                    backgroundColor: "rgba(255,255,255,.1)",
                    borderColor: "rgba(255,255,255,.55)",
                    pointHoverBackgroundColor: "#fff",
                    borderWidth: 2,
                    data: [65, 59, 84, 84, 51, 55, 40],
                    fill: true
                  }
                ]
              },
              options: chartOptions
            }
          )
        },
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilBattery0, height: 52, className: "my-4 text-white" }),
        values: [
          { title: "Fogyasztási költség", value: spend }
        ],
        style: {
          "--cui-card-cap-bg": "#d21eba"
        }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { sm: 6, lg: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CWidgetStatsD,
      {
        className: "mb-4",
        ...withCharts && {
          chart: /* @__PURE__ */ jsxRuntimeExports.jsx(
            CChart,
            {
              className: "position-absolute w-100 h-100",
              type: "line",
              data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                  {
                    backgroundColor: "rgba(255,255,255,.1)",
                    borderColor: "rgba(255,255,255,.55)",
                    pointHoverBackgroundColor: "#fff",
                    borderWidth: 2,
                    data: [1, 13, 9, 17, 34, 41, 38],
                    fill: true
                  }
                ]
              },
              options: chartOptions
            }
          )
        },
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilMoney, height: 52, className: "my-4 text-white" }),
        values: [
          { title: "Munka költség", value: work_spend },
          ,
        ],
        style: {
          "--cui-card-cap-bg": "#509826"
        }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { sm: 6, lg: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CWidgetStatsD,
      {
        className: "mb-4",
        ...withCharts && {
          chart: /* @__PURE__ */ jsxRuntimeExports.jsx(
            CChart,
            {
              className: "position-absolute w-100 h-100",
              type: "line",
              data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                  {
                    backgroundColor: "rgba(255,255,255,.1)",
                    borderColor: "rgba(255,255,255,.55)",
                    pointHoverBackgroundColor: "#fff",
                    borderWidth: 2,
                    data: [78, 81, 80, 45, 34, 12, 40],
                    fill: true
                  }
                ]
              },
              options: chartOptions
            }
          )
        },
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilChart, height: 52, className: "my-4 text-white" }),
        values: [
          { title: "Összköltség", value: totalSpend }
        ],
        style: {
          "--cui-card-cap-bg": "#f8082b"
        }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { sm: 6, lg: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CWidgetStatsD,
      {
        className: "mb-4",
        color: "info",
        ...withCharts && {
          chart: /* @__PURE__ */ jsxRuntimeExports.jsx(
            CChart,
            {
              className: "position-absolute w-100 h-100",
              type: "line",
              data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                  {
                    backgroundColor: "rgba(255,255,255,.1)",
                    borderColor: "rgba(255,255,255,.55)",
                    pointHoverBackgroundColor: "#fff",
                    borderWidth: 2,
                    data: [35, 23, 56, 22, 97, 23, 64],
                    fill: true
                  }
                ]
              },
              options: chartOptions
            }
          )
        },
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilCalculator, height: 52, className: "my-4 text-white" }),
        values: [
          { title: "Profit", value: profit }
        ]
      }
    ) })
  ] });
};
WidgetsBrand1.propTypes = {
  withCharts: PropTypes.bool
};
const Dashboard = () => {
  const [isLoading, setIsLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState("");
  const controller = new AbortController();
  const [businesses, setBusinesses] = reactExports.useState([]);
  const [currentMainTab, setCurrentMainTab] = reactExports.useState("");
  const [currentMainId, setCurrentMainId] = reactExports.useState("");
  const [heatUnits, setHeatUnits] = reactExports.useState([]);
  const [currentHeatUnitTab, setCurrentHeatUnitTab] = reactExports.useState("");
  const [currentHeatUnitId, setCurrentHeatUnitId] = reactExports.useState("");
  const [productionUnits, setProductionUnits] = reactExports.useState([]);
  const [currentProductiontUnitTab, setCurrentProductionUnitTab] = reactExports.useState("");
  const [currentProductionUnitId, setCurrentProductionUnitId] = reactExports.useState("");
  reactExports.useState([10, 100, 1e3, 1e4]);
  const [businessSize, setBusinessSize] = reactExports.useState(0);
  const [heatUnitSize, setHeatUnitSize] = reactExports.useState(0);
  const [productionUnitSize, setProductionUnitSize] = reactExports.useState(0);
  const [businessCoverage, setBusinessCoverage] = reactExports.useState(0);
  const [heatUnitCoverage, setHeatUnitCoverage] = reactExports.useState(0);
  const [productionUnitCoverage, setProductionUnitCoverage] = reactExports.useState(0);
  const [businessPercentage, setBusinessPercentage] = reactExports.useState(0);
  const [heatUnitPercentage, setHeatUnitPercentage] = reactExports.useState(0);
  const [productionUnitPercentage, setProductionUnitPercentage] = reactExports.useState(0);
  const [plantSpend, setPlantSpend] = reactExports.useState(0);
  const [potSpend, setPotSpend] = reactExports.useState(0);
  const [peatSpend, setPeatSpend] = reactExports.useState(0);
  const [fertilizerSpend, setFertilizerSpend] = reactExports.useState(0);
  const [spend, setSpend] = reactExports.useState(0);
  const [workSpend, setWorkSpend] = reactExports.useState(0);
  const [totalSpend, setTotalSpend] = reactExports.useState(0);
  const [profit, setProfit] = reactExports.useState(0);
  const date = /* @__PURE__ */ new Date();
  const initial_start_date = new Date(date.getFullYear(), date.getMonth(), 1, date.getHours(), date.getMinutes());
  initial_start_date.setMinutes(initial_start_date.getMinutes() - initial_start_date.getTimezoneOffset());
  const initial_end_date = new Date(date.getFullYear(), date.getMonth() + 1, 0, date.getHours(), date.getMinutes());
  initial_end_date.setMinutes(initial_end_date.getMinutes() - initial_end_date.getTimezoneOffset());
  const [startDate, setStartDate] = reactExports.useState(initial_start_date.toISOString().split("T")[0]);
  const [endDate, setEndDate] = reactExports.useState(initial_end_date.toISOString().split("T")[0]);
  reactExports.useEffect(() => {
    getData();
    return () => {
      controller.abort();
    };
  }, []);
  reactExports.useEffect(() => {
    getHeatUnits();
    return () => {
      controller.abort();
    };
  }, [currentMainId]);
  reactExports.useEffect(() => {
    getProductionUnits();
    return () => {
      controller.abort();
    };
  }, [currentHeatUnitId]);
  reactExports.useEffect(() => {
    getInfo();
    return () => {
      controller.abort();
    };
  }, [currentProductionUnitId, startDate, endDate]);
  const getData = () => {
    setIsLoading(true);
    setError("");
    axios.get(
      "/get-dashboard-info",
      {
        signal: controller.signal
      }
    ).then((response) => {
      setBusinesses(response.data.businesses);
      setCurrentMainTab(response.data.businesses[0].name);
      setCurrentMainId(response.data.businesses[0].id);
      setHeatUnits(response.data.heat_units);
      setCurrentHeatUnitTab(response.data.heat_units[0].name);
      setCurrentHeatUnitId(response.data.heat_units[0].id);
      setProductionUnits(response.data.production_units);
      setCurrentProductionUnitTab(response.data.production_units[0].name);
      setCurrentProductionUnitId(response.data.production_units[0].id);
    }).catch((error2) => {
      console.log("ERROR:: ", error2);
      setError(error2.message);
    }).finally(() => {
      setIsLoading(false);
    });
  };
  const getHeatUnits = () => {
    setIsLoading(true);
    setError("");
    axios.post(
      "/react-heat-units",
      {
        id: currentMainId,
        signal: controller.signal
      }
    ).then((response) => {
      setHeatUnits(response.data);
      if (typeof response.data[0] !== "undefined") {
        setCurrentHeatUnitTab(response.data[0].name);
        setCurrentHeatUnitId(response.data[0].id);
      }
    }).catch((error2) => {
      console.log("ERROR:: ", error2);
      setError(error2.message);
    }).finally(() => {
      setIsLoading(false);
    });
  };
  const getProductionUnits = () => {
    setIsLoading(true);
    setError("");
    axios.post(
      "/react-production-units",
      {
        id: currentHeatUnitId,
        signal: controller.signal
      }
    ).then((response) => {
      setProductionUnits(response.data);
      if (typeof response.data[0] !== "undefined") {
        setCurrentProductionUnitTab(response.data[0].name);
        setCurrentProductionUnitId(response.data[0].id);
      }
    }).catch((error2) => {
      console.log("ERROR:: ", error2);
      setError(error2.message);
    }).finally(() => {
      setIsLoading(false);
    });
  };
  const getInfo = () => {
    setIsLoading(true);
    setError("");
    axios.post(
      "/dashboard-info",
      {
        business_id: currentMainId,
        heat_unit_id: currentHeatUnitId,
        production_unit_id: currentProductionUnitId,
        start: startDate,
        end: endDate,
        signal: controller.signal
      }
    ).then((response) => {
      setBusinessSize(response.data.business_size);
      setHeatUnitSize(response.data.heat_unit_size);
      setProductionUnitSize(response.data.production_unit_size);
      setBusinessCoverage(response.data.business_coverage);
      setHeatUnitCoverage(response.data.heat_unit_coverage);
      setProductionUnitCoverage(response.data.production_unit_coverage);
      setBusinessPercentage(response.data.business_percentage);
      setHeatUnitPercentage(response.data.heat_unit_percentage);
      setProductionUnitPercentage(response.data.production_unit_percentage);
      setPlantSpend(response.data.spend_info.plant);
      setPeatSpend(response.data.spend_info.peat);
      setPotSpend(response.data.spend_info.pot);
      setFertilizerSpend(response.data.spend_info.fertilizer);
      setWorkSpend(response.data.spend_info.work);
      setSpend(response.data.spend_info.spend);
      setTotalSpend(response.data.spend_info.total);
      setProfit(response.data.profit);
    }).catch((error2) => {
      console.log("ERROR:: ", error2);
      setError(error2.message);
    }).finally(() => {
      setIsLoading(false);
    });
  };
  const handleTabChange = (e) => {
    const id = e.currentTarget.getAttribute("id");
    const active = e.currentTarget.innerText;
    setCurrentMainTab(active);
    setCurrentMainId(id);
  };
  const handleHeatUnitTabChange = (e) => {
    const id = e.currentTarget.getAttribute("id");
    const active = e.currentTarget.innerText;
    setCurrentHeatUnitTab(active);
    setCurrentHeatUnitId(id);
  };
  const handleProductionUnitTabChange = (e) => {
    const id = e.currentTarget.getAttribute("id");
    const active = e.currentTarget.innerText;
    setCurrentProductionUnitTab(active);
    setCurrentProductionUnitId(id);
  };
  const handleSetStartDate = (d) => {
    setStartDate(d);
  };
  const handleSetEndDate = (d) => {
    setEndDate(d);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Üzletek" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CButtonGroup, { className: "float-end me-3", children: businesses.map((value) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        CButton,
        {
          color: "primary",
          id: value.id,
          className: "mx-0",
          active: value.name === currentMainTab,
          onClick: handleTabChange,
          children: value.name
        },
        value.id
      )) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Fűtőegységek " }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CButtonGroup, { className: "float-end me-3", children: heatUnits.map((value) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        CButton,
        {
          color: "info",
          id: value.id,
          active: value.name === currentHeatUnitTab,
          onClick: handleHeatUnitTabChange,
          children: value.name
        },
        value.id
      )) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Termelőegységek" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CButtonGroup, { className: "float-end me-3", children: productionUnits.map((value) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        CButton,
        {
          color: "warning",
          id: value.id,
          active: value.name === currentProductiontUnitTab,
          onClick: handleProductionUnitTabChange,
          children: value.name
        },
        value.id
      )) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex" }, children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(CSpinner, { style: { margin: "auto" } }) : "" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      WidgetsDropdown,
      {
        business_size: businessSize,
        business_coverage: businessCoverage,
        business_percentage: businessPercentage,
        heat_unit_size: heatUnitSize,
        heat_unit_coverage: heatUnitCoverage,
        heat_unit_percentage: heatUnitPercentage,
        production_unit_size: productionUnitSize,
        production_unit_coverage: productionUnitCoverage,
        production_unit_percentage: productionUnitPercentage
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Költségek a periódusra/üzlet" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        WidgetsBrand,
        {
          plant_spend: plantSpend,
          peat_spend: peatSpend,
          pot_spend: potSpend,
          fertilizer_spend: fertilizerSpend
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        WidgetsBrand1,
        {
          work_spend: workSpend,
          spend,
          totalSpend,
          profit
        }
      )
    ] }) })
  ] });
};
export {
  Dashboard as default
};
