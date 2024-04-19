import { j as jsxRuntimeExports } from "./client-DineUaZJ.js";
import { a as CRow, b as CCol, d as CCard, l as CCardHeader, e as CCardBody, a4 as CDatePicker } from "./index.es-CuBG9yLS.js";
import { e as DocsExample } from "./ProBadge-DuWkMHXZ.js";
import "./index-DOY0rKmI.js";
import "./EditHeatUnit-BVf2vB7t.js";
const DatePicker = () => {
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
    return /* @__PURE__ */ jsxRuntimeExports.jsx(CRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { lg: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CDatePicker,
      {
        calendarDate,
        disabledDates,
        locale: "en-US",
        maxDate,
        minDate
      }
    ) }) });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "CoreUI React Date Picker" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "forms/date-picker/#example", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { lg: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CDatePicker, { locale: "en-US" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { lg: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CDatePicker, { date: "2022/2/16", locale: "en-US" }) })
      ] }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "CoreUI React Date Picker" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "With timepicker" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "forms/date-picker/#with-timepicker", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { lg: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CDatePicker, { locale: "en-US", timepicker: true }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { lg: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CDatePicker, { date: "2023/03/15 02:22:13 PM", locale: "en-US", timepicker: true }) })
      ] }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "CoreUI React Date Picker" }),
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "forms/date-picker/#sizing", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CRow, { className: "row mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { lg: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CDatePicker, { locale: "en-US", size: "lg" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CRow, { className: "row", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { lg: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CDatePicker, { locale: "en-US", size: "sm" }) }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "CoreUI React Date Picker" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Disabled" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Add the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "disabled" }),
          " boolean attribute on an input to give it a grayed out appearance and remove pointer events."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "forms/date-picker/#disabled", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { lg: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CDatePicker, { disabled: true, locale: "en-US" }) }) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "CoreUI React Date Picker" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Readonly" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Add the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "inputReadOnly" }),
          " boolean attribute to prevent modification of the input's value."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "forms/date-picker/#readonly", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { lg: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CDatePicker, { inputReadOnly: true, locale: "en-US" }) }) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "CoreUI React Date Picker" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Disabled dates" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "forms/date-picker/#disabled-dates", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DisabledDatesExample, {}) }) })
    ] }) })
  ] });
};
export {
  DatePicker as default
};
