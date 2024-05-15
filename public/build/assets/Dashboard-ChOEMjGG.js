import { j as jsxRuntimeExports } from "./client-DnTwIhck.js";
import { d as CCard, e as CCardBody, a as CRow, b as CCol, k as CButton, i as CIcon, n as CButtonGroup, $ as CCardFooter, L as CProgress, a0 as CCardHeader, a1 as CTable, a2 as CTableHead, a3 as CTableRow, a4 as CTableHeaderCell, a5 as CTableBody, a6 as CTableDataCell, J as CAvatar } from "./index.es-DQOCfkkb.js";
import { C as CChartLine } from "./index.es-DnwVPES1.js";
import { g as cilPeople, h as avatar2, i as avatar3, j as avatar4, k as avatar5, l as avatar6 } from "./ProBadge-CF002Dfl.js";
import { W as WidgetsDropdown, g as getStyle, a as WidgetsBrand } from "./WidgetsDropdown-lLbi7Kck.js";
import { c as cilCloudDownload, a as cilUserFemale } from "./cil-user-female-BZtcod4_.js";
import { c as cilUser } from "./cil-user-q2NU2AQZ.js";
import { c as cibGoogle, a as cibCcMastercard, b as cibCcVisa, d as cibCcStripe, e as cibCcPaypal, f as cibCcApplePay, g as cibCcAmex } from "./cib-google-Co3mqUYV.js";
import { c as cibFacebook, a as cibTwitter, b as cibLinkedin } from "./cib-twitter-Ct_2UStR.js";
import { c as cifUs, a as cifBr, b as cifIn, d as cifFr, e as cifEs, f as cifPl } from "./cif-us-DR548t7F.js";
import "./index-C98SRLOe.js";
import "./cil-options-CB2cKF3V.js";
var hexToRgba = function(color, opacity) {
  if (opacity === void 0) {
    opacity = 100;
  }
  if (typeof color === "undefined") {
    throw new TypeError("Hex color is not defined");
  }
  var hex = color.match(/^#(?:[0-9a-f]{3}){1,2}$/i);
  if (!hex) {
    throw new Error("".concat(color, " is not a valid hex color"));
  }
  var r;
  var g;
  var b;
  if (color.length === 7) {
    r = parseInt(color.slice(1, 3), 16);
    g = parseInt(color.slice(3, 5), 16);
    b = parseInt(color.slice(5, 7), 16);
  } else {
    r = parseInt(color.slice(1, 2), 16);
    g = parseInt(color.slice(2, 3), 16);
    b = parseInt(color.slice(3, 5), 16);
  }
  return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(opacity / 100, ")");
};
const avatar1 = "/build/assets/1-Bxx5tbqp.jpg";
const Dashboard = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  const progressExample = [
    { title: "Visits", value: "29.703 Users", percent: 40, color: "success" },
    { title: "Unique", value: "24.093 Users", percent: 20, color: "info" },
    { title: "Pageviews", value: "78.706 Views", percent: 60, color: "warning" },
    { title: "New Users", value: "22.123 Users", percent: 80, color: "danger" },
    { title: "Bounce Rate", value: "Average Rate", percent: 40.15, color: "primary" }
  ];
  const progressGroupExample1 = [
    { title: "Monday", value1: 34, value2: 78 },
    { title: "Tuesday", value1: 56, value2: 94 },
    { title: "Wednesday", value1: 12, value2: 67 },
    { title: "Thursday", value1: 43, value2: 91 },
    { title: "Friday", value1: 22, value2: 73 },
    { title: "Saturday", value1: 53, value2: 82 },
    { title: "Sunday", value1: 9, value2: 69 }
  ];
  const progressGroupExample2 = [
    { title: "Male", icon: cilUser, value: 53 },
    { title: "Female", icon: cilUserFemale, value: 43 }
  ];
  const progressGroupExample3 = [
    { title: "Organic Search", icon: cibGoogle, percent: 56, value: "191,235" },
    { title: "Facebook", icon: cibFacebook, percent: 15, value: "51,223" },
    { title: "Twitter", icon: cibTwitter, percent: 11, value: "37,564" },
    { title: "LinkedIn", icon: cibLinkedin, percent: 8, value: "27,319" }
  ];
  const tableExample = [
    {
      avatar: { src: avatar1, status: "success" },
      user: {
        name: "Yiorgos Avraamu",
        new: true,
        registered: "Jan 1, 2021"
      },
      country: { name: "USA", flag: cifUs },
      usage: {
        value: 50,
        period: "Jun 11, 2021 - Jul 10, 2021",
        color: "success"
      },
      payment: { name: "Mastercard", icon: cibCcMastercard },
      activity: "10 sec ago"
    },
    {
      avatar: { src: avatar2, status: "danger" },
      user: {
        name: "Avram Tarasios",
        new: false,
        registered: "Jan 1, 2021"
      },
      country: { name: "Brazil", flag: cifBr },
      usage: {
        value: 22,
        period: "Jun 11, 2021 - Jul 10, 2021",
        color: "info"
      },
      payment: { name: "Visa", icon: cibCcVisa },
      activity: "5 minutes ago"
    },
    {
      avatar: { src: avatar3, status: "warning" },
      user: { name: "Quintin Ed", new: true, registered: "Jan 1, 2021" },
      country: { name: "India", flag: cifIn },
      usage: {
        value: 74,
        period: "Jun 11, 2021 - Jul 10, 2021",
        color: "warning"
      },
      payment: { name: "Stripe", icon: cibCcStripe },
      activity: "1 hour ago"
    },
    {
      avatar: { src: avatar4, status: "secondary" },
      user: { name: "Enéas Kwadwo", new: true, registered: "Jan 1, 2021" },
      country: { name: "France", flag: cifFr },
      usage: {
        value: 98,
        period: "Jun 11, 2021 - Jul 10, 2021",
        color: "danger"
      },
      payment: { name: "PayPal", icon: cibCcPaypal },
      activity: "Last month"
    },
    {
      avatar: { src: avatar5, status: "success" },
      user: {
        name: "Agapetus Tadeáš",
        new: true,
        registered: "Jan 1, 2021"
      },
      country: { name: "Spain", flag: cifEs },
      usage: {
        value: 22,
        period: "Jun 11, 2021 - Jul 10, 2021",
        color: "primary"
      },
      payment: { name: "Google Wallet", icon: cibCcApplePay },
      activity: "Last week"
    },
    {
      avatar: { src: avatar6, status: "danger" },
      user: {
        name: "Friderik Dávid",
        new: true,
        registered: "Jan 1, 2021"
      },
      country: { name: "Poland", flag: cifPl },
      usage: {
        value: 43,
        period: "Jun 11, 2021 - Jul 10, 2021",
        color: "success"
      },
      payment: { name: "Amex", icon: cibCcAmex },
      activity: "Last week"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(WidgetsDropdown, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { sm: 5, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { id: "traffic", className: "card-title mb-0", children: "Traffic" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "small text-medium-emphasis", children: "January - July 2021" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { sm: 7, className: "d-none d-md-block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "primary", className: "float-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilCloudDownload }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CButtonGroup, { className: "float-end me-3", children: ["Day", "Month", "Year"].map((value) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              CButton,
              {
                color: "outline-secondary",
                className: "mx-0",
                active: value === "Month",
                children: value
              },
              value
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CChartLine,
          {
            style: { height: "300px", marginTop: "40px" },
            data: {
              labels: ["January", "February", "March", "April", "May", "June", "July"],
              datasets: [
                {
                  label: "My First dataset",
                  backgroundColor: hexToRgba(getStyle("--cui-info"), 10),
                  borderColor: getStyle("--cui-info"),
                  pointHoverBackgroundColor: getStyle("--cui-info"),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200)
                  ],
                  fill: true
                },
                {
                  label: "My Second dataset",
                  backgroundColor: "transparent",
                  borderColor: getStyle("--cui-success"),
                  pointHoverBackgroundColor: getStyle("--cui-success"),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200)
                  ]
                },
                {
                  label: "My Third dataset",
                  backgroundColor: "transparent",
                  borderColor: getStyle("--cui-danger"),
                  pointHoverBackgroundColor: getStyle("--cui-danger"),
                  borderWidth: 1,
                  borderDash: [8, 5],
                  data: [65, 65, 65, 65, 65, 65, 65]
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
                    drawOnChartArea: false
                  }
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250
                  }
                }
              },
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
              }
            }
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CRow, { xs: { cols: 1 }, md: { cols: 5 }, className: "text-center", children: progressExample.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { className: "mb-sm-2 mb-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-medium-emphasis", children: item.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
          item.value,
          " (",
          item.percent,
          "%)"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CProgress,
          {
            thin: true,
            className: "mt-2",
            color: `${item.color}-gradient`,
            value: item.percent
          }
        )
      ] }, index)) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WidgetsBrand, { withCharts: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        "Traffic ",
        " & ",
        " Sales"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { xs: 12, md: 6, xl: 6, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { sm: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-start border-start-4 border-start-info py-1 px-3 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-medium-emphasis small", children: "New Clients" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fs-5 fw-semibold", children: "9,123" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { sm: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-start border-start-4 border-start-danger py-1 px-3 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-medium-emphasis small", children: "Recurring Clients" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fs-5 fw-semibold", children: "22,643" })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "mt-0" }),
            progressGroupExample1.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "progress-group mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "progress-group-prepend", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-medium-emphasis small", children: item.title }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "progress-group-bars", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CProgress, { thin: true, color: "info-gradient", value: item.value1 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CProgress, { thin: true, color: "danger-gradient", value: item.value2 })
              ] })
            ] }, index))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { xs: 12, md: 6, xl: 6, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { sm: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-start border-start-4 border-start-warning py-1 px-3 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-medium-emphasis small", children: "Pageviews" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fs-5 fw-semibold", children: "78,623" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { sm: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-start border-start-4 border-start-success py-1 px-3 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-medium-emphasis small", children: "Organic" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fs-5 fw-semibold", children: "49,123" })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "mt-0" }),
            progressGroupExample2.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "progress-group mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "progress-group-header", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { className: "me-2", icon: item.icon, size: "lg" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ms-auto fw-semibold", children: [
                  item.value,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "progress-group-bars", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CProgress, { thin: true, color: "warning-gradient", value: item.value }) })
            ] }, index)),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-5" }),
            progressGroupExample3.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "progress-group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "progress-group-header", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { className: "me-2", icon: item.icon, size: "lg" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ms-auto fw-semibold", children: [
                  item.value,
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-medium-emphasis small", children: [
                    "(",
                    item.percent,
                    "%)"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "progress-group-bars", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CProgress, { thin: true, color: "success-gradient", value: item.percent }) })
            ] }, index))
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CTable, { align: "middle", className: "mb-0 border", hover: true, responsive: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHead, { color: "light", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilPeople }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { children: "User" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { className: "text-center", children: "Country" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { children: "Usage" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { className: "text-center", children: "Payment Method" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableHeaderCell, { children: "Activity" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTableBody, { children: tableExample.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableRow, { "v-for": "item in tableItems", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CAvatar, { size: "md", src: item.avatar.src, status: item.avatar.status }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableDataCell, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: item.user.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "small text-medium-emphasis text-nowrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.user.new ? "New" : "Recurring" }),
                " | Registered:",
                " ",
                item.user.registered
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { size: "xl", icon: item.country.flag, title: item.country.name }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableDataCell, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex justify-content-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "float-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
                  item.usage.value,
                  "%"
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "float-end ms-1 text-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-medium-emphasis", children: item.usage.period }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                CProgress,
                {
                  thin: true,
                  color: `${item.usage.color}-gradient`,
                  value: item.usage.value
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTableDataCell, { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { size: "xl", icon: item.payment.icon }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CTableDataCell, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "small text-medium-emphasis", children: "Last login" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fw-semibold text-nowrap", children: item.activity })
            ] })
          ] }, index)) })
        ] })
      ] })
    ] }) }) })
  ] });
};
export {
  Dashboard as default
};
