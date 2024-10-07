import { j as jsxRuntimeExports } from "./client-DnTwIhck.js";
import { a as CRow, b as CCol, d as CCard, a0 as CCardHeader, e as CCardBody, L as CProgress, ao as CProgressBar } from "./index.es-DQOCfkkb.js";
import { m as DocsExample } from "./ProBadge-CdXCZ9PP.js";
import "./index-CohQ1QJD.js";
import "./cil-user-q2NU2AQZ.js";
const Progress = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Progress" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Basic example" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Progress components are built with two HTML elements, some CSS to set the width, and a few attributes. We don'tuse",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress", children: [
            "the HTML5 ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<progress>" }),
            " element"
          ] }),
          ", ensuring you can stack progress bars, animate them, and place text labels over them."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "components/progress", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CProgress, { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CProgressBar, { value: 0 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CProgress, { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CProgressBar, { value: 25 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CProgress, { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CProgressBar, { value: 50 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CProgress, { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CProgressBar, { value: 75 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CProgress, { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CProgressBar, { value: 100 }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Progress" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Labels" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Add labels to your progress bars by placing text within the",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CProgressBar>" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/progress#labels", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CProgress, { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CProgressBar, { value: 25, children: "25%" }) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Progress" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Height" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "We only set a ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "height" }),
          " value on the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CProgress>" }),
          ", so if you change that value the inner ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CProgressBar>" }),
          " will automatically resize accordingly."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "components/progress#height", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CProgress, { height: 1, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CProgressBar, { value: 25 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CProgress, { height: 20, className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CProgressBar, { value: 25 }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Progress" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Backgrounds" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Use ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "color" }),
          " prop to change the appearance of individual progress bars."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "components/progress#backgrounds", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CProgress, { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CProgressBar, { color: "success-gradient", value: 25 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CProgress, { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CProgressBar, { color: "info-gradient", value: 50 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CProgress, { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CProgressBar, { color: "warning-gradient", value: 75 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CProgress, { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CProgressBar, { color: "danger-gradient", value: 100 }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Progress" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Multiple bars" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-medium-emphasis small", children: "Include multiple progress bars in a progress component if you need." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/progress#multiple-bars", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CProgress, { className: "mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CProgressBar, { value: 15 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CProgressBar, { color: "success-gradient", value: 30 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CProgressBar, { color: "info-gradient", value: 20 })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Progress" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Striped" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Add ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: 'variant="striped"' }),
          " to any ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CProgressBar>" }),
          " to apply a stripe via CSS gradient over the progress bar's background color."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "components/progress#striped", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CProgress, { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CProgressBar, { color: "success", variant: "striped", value: 25 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CProgress, { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CProgressBar, { color: "info", variant: "striped", value: 50 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CProgress, { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CProgressBar, { color: "warning", variant: "striped", value: 75 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CProgress, { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CProgressBar, { color: "danger", variant: "striped", value: 100 }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Progress" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Animated stripes" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "The striped gradient can also be animated. Add ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "animated" }),
          " property to",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CProgressBar>" }),
          " to animate the stripes right to left via CSS3 animations."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "components/progress#animated-stripes", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CProgress, { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CProgressBar, { color: "success", variant: "striped", animated: true, value: 25 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CProgress, { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CProgressBar, { color: "info", variant: "striped", animated: true, value: 50 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CProgress, { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CProgressBar, { color: "warning", variant: "striped", animated: true, value: 75 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CProgress, { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CProgressBar, { color: "danger", variant: "striped", animated: true, value: 100 }) })
        ] })
      ] })
    ] }) })
  ] });
};
export {
  Progress as default
};
