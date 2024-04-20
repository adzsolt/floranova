import { j as jsxRuntimeExports } from "./client-DnTwIhck.js";
import { P as PropTypes, o as cilCalendar } from "./ProBadge-D_803NGW.js";
import { a as CRow, b as CCol, as as CWidgetStatsD, i as CIcon, at as CWidgetStatsA, o as CDropdown, p as CDropdownToggle, q as CDropdownMenu, r as CDropdownItem } from "./index.es-DQOCfkkb.js";
import { a as CChart, C as CChartLine, b as CChartBar } from "./index.es-DnwVPES1.js";
import { c as cibFacebook, a as cibTwitter, b as cibLinkedin } from "./cib-twitter-Ct_2UStR.js";
import { c as cilArrowBottom, a as cilOptions, b as cilArrowTop } from "./cil-options-CB2cKF3V.js";
var getStyle = function(property, element) {
  if (typeof window === "undefined") {
    return;
  }
  if (typeof document === "undefined") {
    return;
  }
  var _element = element !== null && element !== void 0 ? element : document.body;
  return window.getComputedStyle(_element, null).getPropertyValue(property).replace(/^\s/, "");
};
const WidgetsBrand = ({ withCharts }) => {
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
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cibFacebook, height: 52, className: "my-4 text-white" }),
        values: [
          { title: "friends", value: "89K" },
          { title: "feeds", value: "459" }
        ],
        style: {
          "--cui-card-cap-bg": "#3b5998"
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
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cibTwitter, height: 52, className: "my-4 text-white" }),
        values: [
          { title: "followers", value: "973k" },
          { title: "tweets", value: "1.792" }
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
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cibLinkedin, height: 52, className: "my-4 text-white" }),
        values: [
          { title: "contacts", value: "500" },
          { title: "feeds", value: "1.292" }
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
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilCalendar, height: 52, className: "my-4 text-white" }),
        values: [
          { title: "events", value: "12+" },
          { title: "meetings", value: "4" }
        ]
      }
    ) })
  ] });
};
WidgetsBrand.propTypes = {
  withCharts: PropTypes.bool
};
const WidgetsDropdown = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { sm: 6, lg: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CWidgetStatsA,
      {
        className: "mb-4",
        color: "primary-gradient",
        value: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "26K",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "fs-6 fw-normal", children: [
            "(-12.4% ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilArrowBottom }),
            ")"
          ] })
        ] }),
        title: "Users",
        action: /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdown, { alignment: "end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownToggle, { color: "transparent", caret: false, className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilOptions, className: "text-high-emphasis-inverse" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdownMenu, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { children: "Action" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { children: "Another action" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { children: "Something else here..." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { disabled: true, children: "Disabled action" })
          ] })
        ] }),
        chart: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CChartLine,
          {
            className: "mt-3 mx-3",
            style: { height: "70px" },
            data: {
              labels: ["January", "February", "March", "April", "May", "June", "July"],
              datasets: [
                {
                  label: "My First dataset",
                  backgroundColor: "transparent",
                  borderColor: "rgba(255,255,255,.55)",
                  pointBackgroundColor: getStyle("--cui-primary"),
                  data: [65, 59, 84, 84, 51, 55, 40]
                }
              ]
            },
            options: {
              plugins: {
                legend: {
                  display: false
                }
              },
              maintainAspectRatio: false,
              scales: {
                x: {
                  grid: {
                    display: false,
                    drawBorder: false
                  },
                  ticks: {
                    display: false
                  }
                },
                y: {
                  min: 30,
                  max: 89,
                  display: false,
                  grid: {
                    display: false
                  },
                  ticks: {
                    display: false
                  }
                }
              },
              elements: {
                line: {
                  borderWidth: 1,
                  tension: 0.4
                },
                point: {
                  radius: 4,
                  hitRadius: 10,
                  hoverRadius: 4
                }
              }
            }
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { sm: 6, lg: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CWidgetStatsA,
      {
        className: "mb-4",
        color: "info-gradient",
        value: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "$6.200",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "fs-6 fw-normal", children: [
            "(40.9% ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilArrowTop }),
            ")"
          ] })
        ] }),
        title: "Income",
        action: /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdown, { alignment: "end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownToggle, { color: "transparent", caret: false, className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilOptions, className: "text-high-emphasis-inverse" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdownMenu, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { children: "Action" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { children: "Another action" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { children: "Something else here..." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { disabled: true, children: "Disabled action" })
          ] })
        ] }),
        chart: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CChartLine,
          {
            className: "mt-3 mx-3",
            style: { height: "70px" },
            data: {
              labels: ["January", "February", "March", "April", "May", "June", "July"],
              datasets: [
                {
                  label: "My First dataset",
                  backgroundColor: "transparent",
                  borderColor: "rgba(255,255,255,.55)",
                  pointBackgroundColor: getStyle("--cui-info"),
                  data: [1, 18, 9, 17, 34, 22, 11]
                }
              ]
            },
            options: {
              plugins: {
                legend: {
                  display: false
                }
              },
              maintainAspectRatio: false,
              scales: {
                x: {
                  grid: {
                    display: false,
                    drawBorder: false
                  },
                  ticks: {
                    display: false
                  }
                },
                y: {
                  min: -9,
                  max: 39,
                  display: false,
                  grid: {
                    display: false
                  },
                  ticks: {
                    display: false
                  }
                }
              },
              elements: {
                line: {
                  borderWidth: 1
                },
                point: {
                  radius: 4,
                  hitRadius: 10,
                  hoverRadius: 4
                }
              }
            }
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { sm: 6, lg: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CWidgetStatsA,
      {
        className: "mb-4",
        color: "warning-gradient",
        value: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "2.49",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "fs-6 fw-normal", children: [
            "(84.7% ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilArrowTop }),
            ")"
          ] })
        ] }),
        title: "Conversion Rate",
        action: /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdown, { alignment: "end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownToggle, { color: "transparent", caret: false, className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilOptions, className: "text-high-emphasis-inverse" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdownMenu, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { children: "Action" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { children: "Another action" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { children: "Something else here..." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { disabled: true, children: "Disabled action" })
          ] })
        ] }),
        chart: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CChartLine,
          {
            className: "mt-3",
            style: { height: "70px" },
            data: {
              labels: ["January", "February", "March", "April", "May", "June", "July"],
              datasets: [
                {
                  label: "My First dataset",
                  backgroundColor: "rgba(255,255,255,.2)",
                  borderColor: "rgba(255,255,255,.55)",
                  data: [78, 81, 80, 45, 34, 12, 40],
                  fill: true
                }
              ]
            },
            options: {
              plugins: {
                legend: {
                  display: false
                }
              },
              maintainAspectRatio: false,
              scales: {
                x: {
                  display: false
                },
                y: {
                  display: false
                }
              },
              elements: {
                line: {
                  borderWidth: 2,
                  tension: 0.4
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4
                }
              }
            }
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { sm: 6, lg: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CWidgetStatsA,
      {
        className: "mb-4",
        color: "danger-gradient",
        value: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "44K",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "fs-6 fw-normal", children: [
            "(-23.6% ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilArrowBottom }),
            ")"
          ] })
        ] }),
        title: "Sessions",
        action: /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdown, { alignment: "end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownToggle, { color: "transparent", caret: false, className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilOptions, className: "text-high-emphasis-inverse" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdownMenu, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { children: "Action" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { children: "Another action" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { children: "Something else here..." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { disabled: true, children: "Disabled action" })
          ] })
        ] }),
        chart: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CChartBar,
          {
            className: "mt-3 mx-3",
            style: { height: "70px" },
            data: {
              labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
                "January",
                "February",
                "March",
                "April"
              ],
              datasets: [
                {
                  label: "My First dataset",
                  backgroundColor: "rgba(255,255,255,.2)",
                  borderColor: "rgba(255,255,255,.55)",
                  data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
                  barPercentage: 0.6
                }
              ]
            },
            options: {
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false
                }
              },
              scales: {
                x: {
                  grid: {
                    display: false,
                    drawTicks: false
                  },
                  ticks: {
                    display: false
                  }
                },
                y: {
                  grid: {
                    display: false,
                    drawBorder: false,
                    drawTicks: false
                  },
                  ticks: {
                    display: false
                  }
                }
              }
            }
          }
        )
      }
    ) })
  ] });
};
export {
  WidgetsDropdown as W,
  WidgetsBrand as a,
  getStyle as g
};
