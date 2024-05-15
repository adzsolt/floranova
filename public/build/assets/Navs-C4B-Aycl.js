import { j as jsxRuntimeExports } from "./client-DnTwIhck.js";
import { a as CRow, b as CCol, d as CCard, a0 as CCardHeader, e as CCardBody, B as CNav, x as CNavItem, D as CNavLink, o as CDropdown, p as CDropdownToggle, q as CDropdownMenu, r as CDropdownItem } from "./index.es-DQOCfkkb.js";
import { m as DocsExample } from "./ProBadge-CF002Dfl.js";
import "./index-C98SRLOe.js";
import "./cil-user-q2NU2AQZ.js";
const Navs = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Navs" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Base navs" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "The base ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: ".nav" }),
          " component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/navs-tabs#base-nav", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CNav, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", active: true, children: "Active" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", children: "Link" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", children: "Link" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", disabled: true, children: "Disabled" }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Classes are used throughout, so your markup can be super flexible. Use",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<ul>" }),
          "s like above, ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<ol>" }),
          " if the order of your items is important, or roll your own with a ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<nav>" }),
          " element. Because the .nav uses display: flex, the nav links behave the same as nav items would, but without the extra markup."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/navs-tabs#base-nav", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CNav, { component: "nav", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", active: true, children: "Active" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", children: "Link" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", children: "Link" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", disabled: true, children: "Disabled" })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Navs" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Horizontal alignment" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Change the horizontal alignment of your nav with",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://coreui.io/docs/layout/grid/#horizontal-alignment", children: "flexbox utilities" }),
          ". By default, navs are left-aligned, but you can easily change them to center or right aligned."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Centered with ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: ".justify-content-center" }),
          ":"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/navs-tabs#horizontal-alignment", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CNav, { className: "justify-content-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", active: true, children: "Active" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", children: "Link" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", children: "Link" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", disabled: true, children: "Disabled" }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Right-aligned with ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: ".justify-content-end" }),
          ":"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/navs-tabs#base-nav", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CNav, { className: "justify-content-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", active: true, children: "Active" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", children: "Link" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", children: "Link" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", disabled: true, children: "Disabled" }) })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Navs" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Vertical" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Stack your navigation by changing the flex item direction with the",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: ".flex-column" }),
          " utility. Need to stack them on some viewports but not others? Use the responsive versions (e.g., ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: ".flex-sm-column" }),
          ")."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/navs-tabs#vertical", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CNav, { className: "flex-column", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", active: true, children: "Active" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", children: "Link" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", children: "Link" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", disabled: true, children: "Disabled" }) })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Navs" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Tabs" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Takes the basic nav from above and adds the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: 'variant="tabs"' }),
          " class to generate a tabbed interface"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/navs-tabs#tabs", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CNav, { variant: "tabs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", active: true, children: "Active" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", children: "Link" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", children: "Link" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", disabled: true, children: "Disabled" }) })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Navs" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Pills" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Take that same HTML, but use ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: 'variant="pills"' }),
          " instead:"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/navs-tabs#pills", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CNav, { variant: "pills", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", active: true, children: "Active" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", children: "Link" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", children: "Link" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", disabled: true, children: "Disabled" }) })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Navs" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Fill and justify" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Force your ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: ".nav" }),
          "'s contents to extend the full available width one of two modifier classes. To proportionately fill all available space with your",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: ".nav-item" }),
          "s, use ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: 'layout="fill"' }),
          ". Notice that all horizontal space is occupied, but not every nav item has the same width."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/navs-tabs#fill-and-justify", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CNav, { variant: "pills", layout: "fill", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", active: true, children: "Active" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", children: "Link" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", children: "Link" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", disabled: true, children: "Disabled" }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "For equal-width elements, use ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: 'layout="justified"' }),
          ". All horizontal space will be occupied by nav links, but unlike the .nav-fill above, every nav item will be the same width."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/navs-tabs#fill-and-justify", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CNav, { variant: "pills", layout: "justified", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", active: true, children: "Active" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", children: "Link" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", children: "Link" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", disabled: true, children: "Disabled" }) })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Navs" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Working with flex utilities" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "If you need responsive nav variations, consider using a series of",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://coreui.io/docs/utilities/flex", children: "flexbox utilities" }),
          ". While more verbose, these utilities offer greater customization across responsive breakpoints. In the example below, our nav will be stacked on the lowest breakpoint, then adapt to a horizontal layout that fills the available width starting from the small breakpoint."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/navs-tabs#working-with-flex-utilities", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CNav, { component: "nav", variant: "pills", className: "flex-column flex-sm-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", active: true, children: "Active" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", children: "Link" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", children: "Link" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", disabled: true, children: "Disabled" })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Navs" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Tabs with dropdowns" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/navs-tabs#tabs-with-dropdowns", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CNav, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", active: true, children: "Active" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdown, { variant: "nav-item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownToggle, { color: "secondary", children: "Dropdown button" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdownMenu, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Action" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Another action" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Something else here" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", children: "Link" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", disabled: true, children: "Disabled" }) })
      ] }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Navs" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Pills with dropdowns" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/navs-tabs#pills-with-dropdowns", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CNav, { variant: "pills", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", active: true, children: "Active" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdown, { variant: "nav-item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownToggle, { color: "secondary", children: "Dropdown button" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CDropdownMenu, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Action" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Another action" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CDropdownItem, { href: "#", children: "Something else here" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", children: "Link" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", disabled: true, children: "Disabled" }) })
      ] }) }) })
    ] }) })
  ] });
};
export {
  Navs as default
};
