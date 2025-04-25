import { j as jsxRuntimeExports } from "./client-DnTwIhck.js";
import { P as PropTypes, l as cilPlant, m as cilTerrain, n as cibHockeyapp, o as cibCoderwall } from "./ProBadge-DfPzvgFL.js";
import { a as CRow, b as CCol, $ as CWidgetStatsD, i as CIcon, au as CWidgetStatsB } from "./index.es-HjcCfGYB.js";
import { C as CChart } from "./index.es-B6mrXtmy.js";
const WidgetsBrand = ({
  withCharts,
  plant_spend,
  peat_spend,
  pot_spend,
  fertilizer_spend
}) => {
  console.log("ez az", plant_spend);
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
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilPlant, height: 52, className: "my-4 text-white" }),
        values: [
          { title: "Növény költség", value: plant_spend }
        ],
        style: {
          "--cui-card-cap-bg": "#c9223b"
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
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilTerrain, height: 52, className: "my-4 text-white" }),
        values: [
          { title: "Tőzeg költség", value: peat_spend }
        ],
        style: {
          "--cui-card-cap-bg": "#00aced"
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
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cibHockeyapp, height: 52, className: "my-4 text-white" }),
        values: [
          { title: "Cserép költség", value: pot_spend }
        ],
        style: {
          "--cui-card-cap-bg": "#4875b4"
        }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { sm: 6, lg: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CWidgetStatsD,
      {
        className: "mb-4",
        color: "warning",
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
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cibCoderwall, height: 52, className: "my-4 text-white" }),
        values: [
          { title: "Műtrágya költség", value: fertilizer_spend }
        ]
      }
    ) })
  ] });
};
WidgetsBrand.propTypes = {
  withCharts: PropTypes.bool
};
const WidgetsDropdown = ({
  business_size,
  business_coverage,
  business_percentage,
  heat_unit_size,
  heat_unit_coverage,
  heat_unit_percentage,
  production_unit_size,
  production_unit_coverage,
  production_unit_percentage
}) => {
  console.log(business_size);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { sm: 6, lg: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CWidgetStatsB,
      {
        className: "mb-3",
        color: "primary",
        inverse: true,
        progress: { value: business_percentage },
        text: "Az üzlet átlag lefedettsége a periódusra",
        title: "Üzlet",
        value: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          business_percentage,
          "%",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "fs-6 fw-normal", children: [
            "(Össz: ",
            business_size,
            "; Használat:",
            business_coverage,
            ")"
          ] })
        ] })
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { sm: 6, lg: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CWidgetStatsB,
      {
        className: "mb-3",
        color: "info",
        inverse: true,
        progress: { value: heat_unit_percentage },
        text: "Az fűtőegység átlag lefedettsége a periódusra",
        title: "Fűtőegység",
        value: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          heat_unit_percentage,
          "%",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "fs-6 fw-normal", children: [
            "(Össz: ",
            heat_unit_size,
            "; Használat:",
            heat_unit_coverage,
            ")"
          ] })
        ] })
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { sm: 6, lg: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CWidgetStatsB,
      {
        className: "mb-3",
        color: "warning",
        inverse: true,
        progress: { value: production_unit_percentage },
        text: "A termelőegység átlag lefedettsége a periódusra",
        title: "Termelőegység",
        value: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          production_unit_percentage,
          "%",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "fs-6 fw-normal", children: [
            "(Össz: ",
            production_unit_size,
            "; Használat:",
            production_unit_coverage,
            ")"
          ] })
        ] })
      }
    ) })
  ] });
};
export {
  WidgetsDropdown as W,
  WidgetsBrand as a
};
