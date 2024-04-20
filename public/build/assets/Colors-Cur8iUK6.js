import { g as getDefaultExportFromCjs, j as jsxRuntimeExports, r as reactExports } from "./client-DnTwIhck.js";
import { P as PropTypes, D as DocsLink } from "./ProBadge-BDdQIWjD.js";
import { d as CCard, a0 as CCardHeader, e as CCardBody, a as CRow, b as CCol } from "./index.es-DQOCfkkb.js";
import "./index-CFenZvcU.js";
import "./cil-user-q2NU2AQZ.js";
var rgbToHex = function(color) {
  if (typeof color === "undefined") {
    throw new TypeError("Hex color is not defined");
  }
  if (color === "transparent") {
    return "#00000000";
  }
  var rgb = color.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
  if (!rgb) {
    throw new Error("".concat(color, " is not a valid rgb color"));
  }
  var r = "0".concat(parseInt(rgb[1], 10).toString(16));
  var g = "0".concat(parseInt(rgb[2], 10).toString(16));
  var b = "0".concat(parseInt(rgb[3], 10).toString(16));
  return "#".concat(r.slice(-2)).concat(g.slice(-2)).concat(b.slice(-2));
};
var classnames = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(module) {
  (function() {
    var hasOwn = {}.hasOwnProperty;
    function classNames2() {
      var classes = "";
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (arg) {
          classes = appendClass(classes, parseValue(arg));
        }
      }
      return classes;
    }
    function parseValue(arg) {
      if (typeof arg === "string" || typeof arg === "number") {
        return arg;
      }
      if (typeof arg !== "object") {
        return "";
      }
      if (Array.isArray(arg)) {
        return classNames2.apply(null, arg);
      }
      if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
        return arg.toString();
      }
      var classes = "";
      for (var key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes = appendClass(classes, key);
        }
      }
      return classes;
    }
    function appendClass(value, newClass) {
      if (!newClass) {
        return value;
      }
      if (value) {
        return value + " " + newClass;
      }
      return value + newClass;
    }
    if (module.exports) {
      classNames2.default = classNames2;
      module.exports = classNames2;
    } else {
      window.classNames = classNames2;
    }
  })();
})(classnames);
var classnamesExports = classnames.exports;
const classNames = /* @__PURE__ */ getDefaultExportFromCjs(classnamesExports);
const ThemeView = () => {
  const [color, setColor] = reactExports.useState("rgb(255, 255, 255)");
  const ref = reactExports.createRef();
  reactExports.useEffect(() => {
    const el = ref.current.parentNode.firstChild;
    const varColor = window.getComputedStyle(el).getPropertyValue("background-color");
    setColor(varColor);
  }, [ref]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("table", { className: "table w-100", ref, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-medium-emphasis", children: "HEX:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "font-weight-bold", children: rgbToHex(color) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-medium-emphasis", children: "RGB:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "font-weight-bold", children: color })
    ] })
  ] }) });
};
const ThemeColor = ({ className, children }) => {
  const classes = classNames(className, "theme-color w-75 rounded mb-3");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { xs: 12, sm: 6, md: 4, xl: 2, className: "mb-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classes, style: { paddingTop: "75%" } }),
    children,
    /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeView, {})
  ] });
};
ThemeColor.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
const Colors = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
      "Theme colors",
      /* @__PURE__ */ jsxRuntimeExports.jsx(DocsLink, { href: "https://coreui.io/docs/utilities/colors/" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeColor, { className: "bg-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { children: "Brand Primary Color" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeColor, { className: "bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { children: "Brand Secondary Color" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeColor, { className: "bg-success", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { children: "Brand Success Color" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeColor, { className: "bg-danger", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { children: "Brand Danger Color" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeColor, { className: "bg-warning", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { children: "Brand Warning Color" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeColor, { className: "bg-info", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { children: "Brand Info Color" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeColor, { className: "bg-light", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { children: "Brand Light Color" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeColor, { className: "bg-dark", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { children: "Brand Dark Color" }) })
    ] }) })
  ] }) });
};
export {
  Colors as default
};
