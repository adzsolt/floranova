import { j as jsxRuntimeExports } from "./client-DnTwIhck.js";
import { a as CRow, b as CCol, d as CCard, a0 as CCardHeader, e as CCardBody, av as CDateRangePicker } from "./index.es-DQOCfkkb.js";
import { m as DocsExample } from "./ProBadge-CdXCZ9PP.js";
import "./index-CohQ1QJD.js";
import "./cil-user-q2NU2AQZ.js";
const DateRangePicker = () => {
  const DisabledDatesExample = () => {
    const calendarDate = new Date(2022, 2, 1);
    const disabledDates = [
      [new Date(2022, 2, 4), new Date(2022, 2, 7)],
      new Date(2022, 2, 16),
      new Date(2022, 3, 16),
      [new Date(2022, 4, 2), new Date(2022, 4, 8)]
    ];
    const maxDate = new Date(2022, 5, 0);
    const minDate = new Date(2022, 1, 1);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(CRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { lg: 5, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CDateRangePicker,
      {
        calendarDate,
        disabledDates,
        locale: "en-US",
        maxDate,
        minDate
      }
    ) }) });
  };
  const CustomRangesExample = () => {
    const customRanges = {
      Today: [/* @__PURE__ */ new Date(), /* @__PURE__ */ new Date()],
      Yesterday: [
        new Date((/* @__PURE__ */ new Date()).setDate((/* @__PURE__ */ new Date()).getDate() - 1)),
        new Date((/* @__PURE__ */ new Date()).setDate((/* @__PURE__ */ new Date()).getDate() - 1))
      ],
      "Last 7 Days": [new Date((/* @__PURE__ */ new Date()).setDate((/* @__PURE__ */ new Date()).getDate() - 6)), new Date(/* @__PURE__ */ new Date())],
      "Last 30 Days": [
        new Date((/* @__PURE__ */ new Date()).setDate((/* @__PURE__ */ new Date()).getDate() - 29)),
        new Date(/* @__PURE__ */ new Date())
      ],
      "This Month": [
        new Date((/* @__PURE__ */ new Date()).setDate(1)),
        new Date((/* @__PURE__ */ new Date()).getFullYear(), (/* @__PURE__ */ new Date()).getMonth() + 1, 0)
      ],
      "Last Month": [
        new Date((/* @__PURE__ */ new Date()).getFullYear(), (/* @__PURE__ */ new Date()).getMonth() - 1, 1),
        new Date((/* @__PURE__ */ new Date()).getFullYear(), (/* @__PURE__ */ new Date()).getMonth(), 0)
      ]
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "row", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CDateRangePicker, { ranges: customRanges }) }) });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "CoreUI React Date Range Picker" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "forms/date-range-picker/#example", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { lg: 5, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CDateRangePicker, { locale: "en-US" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { lg: 5, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CDateRangePicker, { startDate: "2022/08/03", endDate: "2022/08/17", locale: "en-US" }) })
      ] }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "CoreUI React Date Range Picker" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "With timepicker" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "forms/date-range-picker/#with-timepicker", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { className: "mb-4", lg: 7, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CDateRangePicker, { locale: "en-US", timepicker: true }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { lg: 7, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CDateRangePicker,
          {
            startDate: "2022/08/03 02:34:17 AM",
            endDate: "2022/09/17 11:29:41 PM",
            locale: "en-US",
            timepicker: true
          }
        ) })
      ] }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "CoreUI React Date Range Picker" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Sizing" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Set heights using ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "size" }),
          " property like ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: 'size="lg"' }),
          " and",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: 'size="sm"' }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "forms/date-range-picker/#sizing", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CRow, { className: "row mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { lg: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CDateRangePicker, { locale: "en-US", size: "lg" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CRow, { className: "row", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { lg: 5, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CDateRangePicker, { locale: "en-US", size: "sm" }) }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "CoreUI React Date Range Picker" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Disabled" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Add the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "disabled" }),
          " boolean attribute on an input to give it a grayed out appearance and remove pointer events."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "forms/date-range-picker/#disabled", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { lg: 5, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CDateRangePicker, { disabled: true, locale: "en-US" }) }) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "CoreUI React Date Range Picker" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Readonly" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Add the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "inputReadOnly" }),
          " boolean attribute to prevent modification of the input's value."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "forms/date-range-picker/#readonly", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { lg: 5, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CDateRangePicker, { inputReadOnly: true, locale: "en-US" }) }) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "CoreUI React Date Range Picker" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Disabled dates" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "forms/date-range-picker/#disabled-dates", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DisabledDatesExample, {}) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "CoreUI React Date Range Picker" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Custom ranges" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "forms/date-range-picker/#custom-ranges", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CustomRangesExample, {}) }) })
    ] }) })
  ] });
};
export {
  DateRangePicker as default
};
