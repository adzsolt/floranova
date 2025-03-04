import { j as jsxRuntimeExports } from "./client-DnTwIhck.js";
import { d as CCard, a2 as CCardHeader, e as CCardBody, a as CRow, b as CCol, au as CWidgetStatsB, aQ as CWidgetStatsE, aR as CWidgetStatsF, i as CIcon, _ as CLink, c as CCardGroup, aS as CWidgetStatsC } from "./index.es-HjcCfGYB.js";
import { a as CChartBar, b as CChartLine } from "./index.es-B6mrXtmy.js";
import { j as DocsExample, R as cilSettings, N as cilMoon, k as cilBell, O as cilPeople, V as cilUserFollow, t as cilBasket, y as cilChartPie, f as cilSpeedometer, S as cilSpeech } from "./ProBadge-CpfJwurS.js";
import "./index-S2Eg7aT7.js";
import { W as WidgetsDropdown, a as WidgetsBrand } from "./WidgetsDropdown-frSCXq4l.js";
import { c as cilUser } from "./cil-user-q2NU2AQZ.js";
import { c as cilArrowRight, a as cilLaptop } from "./cil-laptop-gKE9Lh-R.js";
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
const Widgets = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCardHeader, { children: "Widgets" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "/components/widgets/#cwidgetstatsa", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WidgetsDropdown, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "/components/widgets/#cwidgetstatsb", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, sm: 6, lg: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CWidgetStatsB,
          {
            className: "mb-4",
            progress: { color: "success-gradient", value: 89.9 },
            text: "Lorem ipsum dolor sit amet enim.",
            title: "Widget title",
            value: "89.9%"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, sm: 6, lg: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CWidgetStatsB,
          {
            className: "mb-4",
            value: "12.124",
            title: "Widget title",
            progress: { color: "info-gradient", value: 89.9 },
            text: "Lorem ipsum dolor sit amet enim."
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, sm: 6, lg: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CWidgetStatsB,
          {
            className: "mb-4",
            value: "$98.111,00",
            title: "Widget title",
            progress: { color: "warning-gradient", value: 89.9 },
            text: "Lorem ipsum dolor sit amet enim."
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, sm: 6, lg: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CWidgetStatsB,
          {
            className: "mb-4",
            value: "2 TB",
            title: "Widget title",
            progress: { color: "primary-gradient", value: 89.9 },
            text: "Lorem ipsum dolor sit amet enim."
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "/components/widgets/#cwidgetstatsb", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, sm: 6, lg: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CWidgetStatsB,
          {
            className: "mb-4",
            color: "success-gradient",
            inverse: true,
            value: "89.9%",
            title: "Widget title",
            progress: { value: 89.9 },
            text: "Lorem ipsum dolor sit amet enim."
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, sm: 6, lg: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CWidgetStatsB,
          {
            className: "mb-4",
            color: "info-gradient",
            inverse: true,
            value: "12.124",
            title: "Widget title",
            progress: { value: 89.9 },
            text: "Lorem ipsum dolor sit amet enim."
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, sm: 6, lg: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CWidgetStatsB,
          {
            className: "mb-4",
            color: "warning-gradient",
            inverse: true,
            value: "$98.111,00",
            title: "Widget title",
            progress: { value: 89.9 },
            text: "Lorem ipsum dolor sit amet enim."
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, sm: 6, lg: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CWidgetStatsB,
          {
            className: "mb-4",
            color: "primary-gradient",
            inverse: true,
            value: "2 TB",
            title: "Widget title",
            progress: { value: 89.9 },
            text: "Lorem ipsum dolor sit amet enim."
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "/components/widgets/#cwidgetstatse", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { sm: 4, lg: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CWidgetStatsE,
          {
            chart: /* @__PURE__ */ jsxRuntimeExports.jsx(
              CChartBar,
              {
                className: "mx-auto",
                style: { height: "40px", width: "80px" },
                data: {
                  labels: [
                    "M",
                    "T",
                    "W",
                    "T",
                    "F",
                    "S",
                    "S",
                    "M",
                    "T",
                    "W",
                    "T",
                    "F",
                    "S",
                    "S",
                    "M"
                  ],
                  datasets: [
                    {
                      backgroundColor: getStyle("--cui-danger"),
                      borderColor: "transparent",
                      borderWidth: 1,
                      data: [
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100)
                      ]
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
                      display: false
                    },
                    y: {
                      display: false
                    }
                  }
                }
              }
            ),
            className: "mb-4",
            title: "title",
            value: "1,123"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { sm: 4, lg: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CWidgetStatsE,
          {
            chart: /* @__PURE__ */ jsxRuntimeExports.jsx(
              CChartBar,
              {
                className: "mx-auto",
                style: { height: "40px", width: "80px" },
                data: {
                  labels: [
                    "M",
                    "T",
                    "W",
                    "T",
                    "F",
                    "S",
                    "S",
                    "M",
                    "T",
                    "W",
                    "T",
                    "F",
                    "S",
                    "S",
                    "M"
                  ],
                  datasets: [
                    {
                      backgroundColor: getStyle("--cui-primary"),
                      borderColor: "transparent",
                      borderWidth: 1,
                      data: [
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100)
                      ]
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
                      display: false
                    },
                    y: {
                      display: false
                    }
                  }
                }
              }
            ),
            className: "mb-4",
            title: "title",
            value: "1,123"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { sm: 4, lg: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CWidgetStatsE,
          {
            chart: /* @__PURE__ */ jsxRuntimeExports.jsx(
              CChartBar,
              {
                className: "mx-auto",
                style: { height: "40px", width: "80px" },
                data: {
                  labels: [
                    "M",
                    "T",
                    "W",
                    "T",
                    "F",
                    "S",
                    "S",
                    "M",
                    "T",
                    "W",
                    "T",
                    "F",
                    "S",
                    "S",
                    "M"
                  ],
                  datasets: [
                    {
                      backgroundColor: getStyle("--cui-success"),
                      borderColor: "transparent",
                      borderWidth: 1,
                      data: [
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100)
                      ]
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
                      display: false
                    },
                    y: {
                      display: false
                    }
                  }
                }
              }
            ),
            className: "mb-4",
            title: "title",
            value: "1,123"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { sm: 4, lg: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CWidgetStatsE,
          {
            chart: /* @__PURE__ */ jsxRuntimeExports.jsx(
              CChartLine,
              {
                className: "mx-auto",
                style: { height: "40px", width: "80px" },
                data: {
                  labels: [
                    "M",
                    "T",
                    "W",
                    "T",
                    "F",
                    "S",
                    "S",
                    "M",
                    "T",
                    "W",
                    "T",
                    "F",
                    "S",
                    "S",
                    "M"
                  ],
                  datasets: [
                    {
                      backgroundColor: "transparent",
                      borderColor: getStyle("--cui-danger"),
                      borderWidth: 2,
                      data: [
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100)
                      ]
                    }
                  ]
                },
                options: {
                  maintainAspectRatio: false,
                  elements: {
                    line: {
                      tension: 0.4
                    },
                    point: {
                      radius: 0
                    }
                  },
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
                }
              }
            ),
            className: "mb-4",
            title: "title",
            value: "1,123"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { sm: 4, lg: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CWidgetStatsE,
          {
            chart: /* @__PURE__ */ jsxRuntimeExports.jsx(
              CChartLine,
              {
                className: "mx-auto",
                style: { height: "40px", width: "80px" },
                data: {
                  labels: [
                    "M",
                    "T",
                    "W",
                    "T",
                    "F",
                    "S",
                    "S",
                    "M",
                    "T",
                    "W",
                    "T",
                    "F",
                    "S",
                    "S",
                    "M"
                  ],
                  datasets: [
                    {
                      backgroundColor: "transparent",
                      borderColor: getStyle("--cui-success"),
                      borderWidth: 2,
                      data: [
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100)
                      ]
                    }
                  ]
                },
                options: {
                  maintainAspectRatio: false,
                  elements: {
                    line: {
                      tension: 0.4
                    },
                    point: {
                      radius: 0
                    }
                  },
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
                }
              }
            ),
            className: "mb-4",
            title: "title",
            value: "1,123"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { sm: 4, lg: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CWidgetStatsE,
          {
            chart: /* @__PURE__ */ jsxRuntimeExports.jsx(
              CChartLine,
              {
                className: "mx-auto",
                style: { height: "40px", width: "80px" },
                data: {
                  labels: [
                    "M",
                    "T",
                    "W",
                    "T",
                    "F",
                    "S",
                    "S",
                    "M",
                    "T",
                    "W",
                    "T",
                    "F",
                    "S",
                    "S",
                    "M"
                  ],
                  datasets: [
                    {
                      backgroundColor: "transparent",
                      borderColor: getStyle("--cui-info"),
                      borderWidth: 2,
                      data: [
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100),
                        random(40, 100)
                      ]
                    }
                  ]
                },
                options: {
                  maintainAspectRatio: false,
                  elements: {
                    line: {
                      tension: 0.4
                    },
                    point: {
                      radius: 0
                    }
                  },
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
                }
              }
            ),
            className: "mb-4",
            title: "title",
            value: "1,123"
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "/components/widgets/#cwidgetstatsf", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, sm: 6, lg: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CWidgetStatsF,
          {
            className: "mb-3",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { width: 24, icon: cilSettings, size: "xl" }),
            title: "income",
            value: "$1.999,50",
            color: "primary-gradient"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, sm: 6, lg: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CWidgetStatsF,
          {
            className: "mb-3",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { width: 24, icon: cilUser, size: "xl" }),
            title: "income",
            value: "$1.999,50",
            color: "info-gradient"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, sm: 6, lg: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CWidgetStatsF,
          {
            className: "mb-3",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { width: 24, icon: cilMoon, size: "xl" }),
            title: "income",
            value: "$1.999,50",
            color: "warning-gradient"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, sm: 6, lg: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CWidgetStatsF,
          {
            className: "mb-3",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { width: 24, icon: cilBell, size: "xl" }),
            title: "income",
            value: "$1.999,50",
            color: "danger-gradient"
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "/components/widgets/#cwidgetstatsf", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, sm: 6, lg: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CWidgetStatsF,
          {
            className: "mb-3",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { width: 24, icon: cilSettings, size: "xl" }),
            title: "income",
            value: "$1.999,50",
            color: "primary-gradient",
            footer: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              CLink,
              {
                className: "font-weight-bold font-xs text-medium-emphasis",
                href: "https://coreui.io/",
                rel: "noopener norefferer",
                target: "_blank",
                children: [
                  "View more",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilArrowRight, className: "float-end", width: 16 })
                ]
              }
            )
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, sm: 6, lg: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CWidgetStatsF,
          {
            className: "mb-3",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { width: 24, icon: cilLaptop, size: "xl" }),
            title: "income",
            value: "$1.999,50",
            color: "info-gradient",
            footer: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              CLink,
              {
                className: "font-weight-bold font-xs text-medium-emphasis",
                href: "https://coreui.io/",
                rel: "noopener norefferer",
                target: "_blank",
                children: [
                  "View more",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilArrowRight, className: "float-end", width: 16 })
                ]
              }
            )
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, sm: 6, lg: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CWidgetStatsF,
          {
            className: "mb-3",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { width: 24, icon: cilMoon, size: "xl" }),
            title: "income",
            value: "$1.999,50",
            color: "warning-gradient",
            footer: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              CLink,
              {
                className: "font-weight-bold font-xs text-medium-emphasis",
                href: "https://coreui.io/",
                rel: "noopener norefferer",
                target: "_blank",
                children: [
                  "View more",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilArrowRight, className: "float-end", width: 16 })
                ]
              }
            )
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, sm: 6, lg: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CWidgetStatsF,
          {
            className: "mb-3",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { width: 24, icon: cilBell, size: "xl" }),
            title: "income",
            value: "$1.999,50",
            color: "danger-gradient",
            footer: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              CLink,
              {
                className: "font-weight-bold font-xs text-medium-emphasis",
                href: "https://coreui.io/",
                rel: "noopener norefferer",
                target: "_blank",
                children: [
                  "View more",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilArrowRight, className: "float-end", width: 16 })
                ]
              }
            )
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "/components/widgets/#cwidgetstatsf", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, sm: 6, lg: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CWidgetStatsF,
          {
            className: "mb-3",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { width: 24, icon: cilSettings, size: "xl" }),
            padding: false,
            title: "income",
            value: "$1.999,50",
            color: "primary-gradient"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, sm: 6, lg: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CWidgetStatsF,
          {
            className: "mb-3",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { width: 24, icon: cilUser, size: "xl" }),
            padding: false,
            title: "income",
            value: "$1.999,50",
            color: "info-gradient"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, sm: 6, lg: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CWidgetStatsF,
          {
            className: "mb-3",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { width: 24, icon: cilMoon, size: "xl" }),
            padding: false,
            title: "income",
            value: "$1.999,50",
            color: "warning-gradient"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, sm: 6, lg: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CWidgetStatsF,
          {
            className: "mb-3",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { width: 24, icon: cilBell, size: "xl" }),
            padding: false,
            title: "income",
            value: "$1.999,50",
            color: "danger-gradient"
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "/components/widgets/#cwidgetstatsd", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WidgetsBrand, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "/components/widgets/#cwidgetstatsd", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WidgetsBrand, { withCharts: true }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "/components/widgets/#cwidgetstatsc", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardGroup, { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CWidgetStatsC,
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilPeople, height: 36 }),
            value: "87.500",
            title: "Visitors",
            progress: { color: "info-gradient", value: 75 }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CWidgetStatsC,
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilUserFollow, height: 36 }),
            value: "385",
            title: "New Clients",
            progress: { color: "success-gradient", value: 75 }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CWidgetStatsC,
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilBasket, height: 36 }),
            value: "1238",
            title: "Products sold",
            progress: { color: "warning-gradient", value: 75 }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CWidgetStatsC,
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilChartPie, height: 36 }),
            value: "28%",
            title: "Returning Visitors",
            progress: { color: "primary-gradient", value: 75 }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CWidgetStatsC,
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilSpeedometer, height: 36 }),
            value: "5:34:11",
            title: "Avg. Time",
            progress: { color: "danger", value: 75 }
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "/components/widgets/#cwidgetstatsc", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { sm: 6, md: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CWidgetStatsC,
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilPeople, height: 36 }),
            value: "87.500",
            title: "Visitors",
            progress: { color: "info-gradient", value: 75 },
            className: "mb-4"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { sm: 6, md: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CWidgetStatsC,
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilUserFollow, height: 36 }),
            value: "385",
            title: "New Clients",
            progress: { color: "success-gradient", value: 75 },
            className: "mb-4"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { sm: 6, md: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CWidgetStatsC,
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilBasket, height: 36 }),
            value: "1238",
            title: "Products sold",
            progress: { color: "warning-gradient", value: 75 },
            className: "mb-4"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { sm: 6, md: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CWidgetStatsC,
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilChartPie, height: 36 }),
            value: "28%",
            title: "Returning Visitors",
            progress: { color: "primary-gradient", value: 75 },
            className: "mb-4"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { sm: 6, md: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CWidgetStatsC,
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilSpeedometer, height: 36 }),
            value: "5:34:11",
            title: "Avg. Time",
            progress: { color: "danger", value: 75 },
            className: "mb-4"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { sm: 6, md: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CWidgetStatsC,
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilSpeech, height: 36 }),
            value: "972",
            title: "comments",
            progress: { color: "info-gradient", value: 75 },
            className: "mb-4"
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "/components/widgets/#cwidgetstatsc", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { sm: 6, md: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CWidgetStatsC,
          {
            color: "info-gradient",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilPeople, height: 36 }),
            value: "87.500",
            title: "Visitors",
            inverse: true,
            progress: { value: 75 },
            className: "mb-4"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { sm: 6, md: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CWidgetStatsC,
          {
            color: "success",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilUserFollow, height: 36 }),
            value: "385",
            title: "New Clients",
            inverse: true,
            progress: { value: 75 },
            className: "mb-4"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { sm: 6, md: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CWidgetStatsC,
          {
            color: "warning-gradient",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilBasket, height: 36 }),
            value: "1238",
            title: "Products sold",
            inverse: true,
            progress: { value: 75 },
            className: "mb-4"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { sm: 6, md: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CWidgetStatsC,
          {
            color: "primary-gradient",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilChartPie, height: 36 }),
            value: "28%",
            title: "Returning Visitors",
            inverse: true,
            progress: { value: 75 },
            className: "mb-4"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { sm: 6, md: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CWidgetStatsC,
          {
            color: "danger-gradient",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilSpeedometer, height: 36 }),
            value: "5:34:11",
            title: "Avg. Time",
            inverse: true,
            progress: { value: 75 },
            className: "mb-4"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { sm: 6, md: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CWidgetStatsC,
          {
            color: "info-gradient",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilSpeech, height: 36 }),
            value: "972",
            title: "comments",
            inverse: true,
            progress: { value: 75 },
            className: "mb-4"
          }
        ) })
      ] }) })
    ] })
  ] });
};
export {
  Widgets as default
};
