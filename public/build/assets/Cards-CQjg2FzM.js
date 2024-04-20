import { j as jsxRuntimeExports } from "./client-DnTwIhck.js";
import { a as CRow, b as CCol, d as CCard, a0 as CCardHeader, e as CCardBody, ab as CCardImage, ac as CCardTitle, ad as CCardText, k as CButton, ae as CCardSubtitle, af as CCardLink, H as CListGroup, I as CListGroupItem, $ as CCardFooter, B as CNav, x as CNavItem, D as CNavLink, c as CCardGroup } from "./index.es-DQOCfkkb.js";
import { m as DocsExample } from "./ProBadge-D_803NGW.js";
import "./index-mKTONJ2Z.js";
import { R as ReactImg } from "./react-CXR4X3T4.js";
import "./cil-user-q2NU2AQZ.js";
const Cards = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Card" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Example" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Cards are built with as little markup and styles as possible but still manage to deliver a bunch of control and customization. Built with flexbox, they offer easy alignment and mix well with other CoreUI components. Cards have no top, left, and right margins by default, so use",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://coreui.io/docs/utilities/spacing", children: "spacing utilities" }),
          " as needed. They have no fixed width to start, so they'll fill the full width of its parent."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-medium-emphasis small", children: "Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so they'll naturally fill the full width of its parent element." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { style: { width: "18rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCardImage, { orientation: "top", src: ReactImg }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Card title" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardText, { children: "Some quick example text to build on the card title and make up the bulk of the card's content." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { href: "#", children: "Go somewhere" })
          ] })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Card" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Body" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "The main block of a card is the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CCardBody>" }),
          ". Use it whenever you need a padded section within a card."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/card/#body", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: "This is some text within a card body." }) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Card" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Titles, text, and links" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Card titles are managed by ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CCardTitle>" }),
          " component. Identically, links are attached and collected next to each other by ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CCardLink>" }),
          " ",
          "component."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Subtitles are managed by ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CCardSubtitle>" }),
          " component. If the",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CCardTitle>" }),
          " also, the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CCardSubtitle>" }),
          " items are stored in a ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CCardBody>" }),
          " item, the card title, and subtitle are arranged rightly."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/card/#titles-text-and-links", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCard, { style: { width: "18rem" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Card title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCardSubtitle, { className: "mb-2 text-medium-emphasis", children: "Card subtitle" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCardText, { children: "Some quick example text to build on the card title and make up the bulk of the card's content." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCardLink, { href: "#", children: "Card link" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCardLink, { href: "#", children: "Another link" })
        ] }) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Card" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Images" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: ".card-img-top" }),
          " places a picture to the top of the card. With",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: ".card-text" }),
          ", text can be added to the card. Text within",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: ".card-text" }),
          " can additionally be styled with the regular HTML tags."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/card/#images", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { style: { width: "18rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCardImage, { orientation: "top", src: ReactImg }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCardText, { children: "Some quick example text to build on the card title and make up the bulk of the card's content." }) })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Card" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "List groups" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-medium-emphasis small", children: "Create lists of content in a card with a flush list group." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/card/#list-groups", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { lg: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CListGroup, { flush: true, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CListGroupItem, { children: "Cras justo odio" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CListGroupItem, { children: "Dapibus ac facilisis in" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CListGroupItem, { children: "Vestibulum at eros" })
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { lg: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardHeader, { children: "Header" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CListGroup, { flush: true, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CListGroupItem, { children: "Cras justo odio" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CListGroupItem, { children: "Dapibus ac facilisis in" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CListGroupItem, { children: "Vestibulum at eros" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { lg: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CListGroup, { flush: true, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CListGroupItem, { children: "Cras justo odio" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CListGroupItem, { children: "Dapibus ac facilisis in" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CListGroupItem, { children: "Vestibulum at eros" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardFooter, { children: "Footer" })
          ] }) })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Card" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Kitchen sink" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-medium-emphasis small", children: "Combine and match many content types to build the card you need, or throw everything in there. Shown below are image styles, blocks, text styles, and a list group—all wrapped in a fixed-width card." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/card/#kitchen-sink", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { style: { width: "18rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCardImage, { orientation: "top", src: ReactImg }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Card title" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardText, { children: "Some quick example text to build on the card title and make up the bulk of the card's content." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CListGroup, { flush: true, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CListGroupItem, { children: "Cras justo odio" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CListGroupItem, { children: "Dapibus ac facilisis in" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CListGroupItem, { children: "Vestibulum at eros" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardLink, { href: "#", children: "Card link" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardLink, { href: "#", children: "Another link" })
          ] })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Card" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Header and footer" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-medium-emphasis small", children: "Add an optional header and/or footer within a card." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/card/#header-and-footer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCardHeader, { children: "Header" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Special title treatment" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardText, { children: "With supporting text below as a natural lead-in to additional content." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { href: "#", children: "Go somewhere" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Card headers can be styled by adding ex. ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: 'component="h5"' }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/card/#header-and-footer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCardHeader, { component: "h5", children: "Header" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Special title treatment" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardText, { children: "With supporting text below as a natural lead-in to additional content." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { href: "#", children: "Go somewhere" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/card/#header-and-footer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCardHeader, { children: "Quote" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "blockquote mb-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "blockquote-footer", children: [
              "Someone famous in ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("cite", { title: "Source Title", children: "Source Title" })
            ] })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/card/#header-and-footer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCardHeader, { children: "Header" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Special title treatment" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardText, { children: "With supporting text below as a natural lead-in to additional content." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { href: "#", children: "Go somewhere" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCardFooter, { className: "text-medium-emphasis", children: "2 days ago" })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Card" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Body" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Cards assume no specific ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "width" }),
          " to start, so they'll be 100% wide unless otherwise stated. You can adjust this as required with custom CSS, grid classes, grid Sass mixins, or services."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Using grid markup" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-medium-emphasis small", children: "Using the grid, wrap cards in columns and rows as needed." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/card/#sizing", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { sm: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Special title treatment" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardText, { children: "With supporting text below as a natural lead-in to additional content." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { href: "#", children: "Go somewhere" })
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { sm: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Special title treatment" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardText, { children: "With supporting text below as a natural lead-in to additional content." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { href: "#", children: "Go somewhere" })
          ] }) }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Using utilities" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Use some of",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://coreui.io/docs/utilities/sizing/", children: "available sizing utilities" }),
          " to rapidly set a card's width."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "components/card/#sizing", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCard, { className: "w-75", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Card title" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardText, { children: "With supporting text below as a natural lead-in to additional content." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { href: "#", children: "Go somewhere" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCard, { className: "w-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Card title" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardText, { children: "With supporting text below as a natural lead-in to additional content." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { href: "#", children: "Go somewhere" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Using custom CSS" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-medium-emphasis small", children: "Use custom CSS in your stylesheets or as inline styles to set a width." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/card/#sizing", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCard, { style: { width: "18rem" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Special title treatment" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCardText, { children: "With supporting text below as a natural lead-in to additional content." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { href: "#", children: "Go somewhere" })
        ] }) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Card" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Text alignment" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "You can instantly change the text arrangement of any card—in its whole or specific parts—with",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://coreui.io/docs/utilities/text/#text-alignment", children: "text align classes" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DocsExample, { href: "components/card/#text-alignment", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCard, { style: { width: "18rem" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Special title treatment" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardText, { children: "With supporting text below as a natural lead-in to additional content." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { href: "#", children: "Go somewhere" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCard, { className: "text-center", style: { width: "18rem" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Special title treatment" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardText, { children: "With supporting text below as a natural lead-in to additional content." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { href: "#", children: "Go somewhere" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCard, { className: "text-end", style: { width: "18rem" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Special title treatment" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardText, { children: "With supporting text below as a natural lead-in to additional content." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { href: "#", children: "Go somewhere" })
          ] }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Card" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Navigation" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Add some navigation to a ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CCardHeader>" }),
          " with our",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CNav>" }),
          " component."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/card/##navigation", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CNav, { variant: "tabs", className: "card-header-tabs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", active: true, children: "Active" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", children: "Link" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", disabled: true, children: "Disabled" }) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Special title treatment" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardText, { children: "With supporting text below as a natural lead-in to additional content." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { href: "#", children: "Go somewhere" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/card/##navigation", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CNav, { variant: "pills", className: "card-header-pills", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", active: true, children: "Active" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", children: "Link" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CNavItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CNavLink, { href: "#", disabled: true, children: "Disabled" }) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Special title treatment" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardText, { children: "With supporting text below as a natural lead-in to additional content." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { href: "#", children: "Go somewhere" })
          ] })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Card" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Image caps" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-medium-emphasis small", children: 'Similar to headers and footers, cards can include top and bottom "image caps"—images at the top or bottom of a card.' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/card/#image-caps", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { lg: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardImage, { orientation: "top", src: ReactImg }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Card title" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CCardText, { children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CCardText, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-medium-emphasis", children: "Last updated 3 mins ago" }) })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { lg: 6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Card title" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CCardText, { children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CCardText, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-medium-emphasis", children: "Last updated 3 mins ago" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardImage, { orientation: "bottom", src: ReactImg })
          ] }) })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Card" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Card styles" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-medium-emphasis small", children: "Cards include various options for customizing their backgrounds, borders, and color." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Background and color" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Use ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "color" }),
          " property to change the appearance of a card."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/card/#background-and-color", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CRow, { children: [
          { color: "primary", textColor: "white" },
          { color: "secondary", textColor: "white" },
          { color: "success", textColor: "white" },
          { color: "danger", textColor: "white" },
          { color: "warning" },
          { color: "info", textColor: "white" },
          { color: "light" },
          { color: "dark", textColor: "white" }
        ].map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { lg: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { color: item.color, textColor: item.textColor, className: "mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCardHeader, { children: "Header" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardTitle, { children: [
              item.color,
              " card title"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardText, { children: "Some quick example text to build on the card title and make up the bulk of the card's content." })
          ] })
        ] }) }, index)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Border" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Use ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://coreui.io/docs/utilities/borders/", children: "border utilities" }),
          " to change just the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "border-color" }),
          " of a card. Note that you can set",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "textColor" }),
          " property on the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CCard>" }),
          " or a subset of the card's contents as shown below."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/card/#border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CRow, { children: [
          { color: "primary", textColor: "primary" },
          { color: "secondary", textColor: "secondary" },
          { color: "success", textColor: "success" },
          { color: "danger", textColor: "danger" },
          { color: "warning", textColor: "warning" },
          { color: "info", textColor: "info" },
          { color: "light" },
          { color: "dark" }
        ].map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { lg: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { textColor: item.textColor, className: `mb-3 border-${item.color}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCardHeader, { children: "Header" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardTitle, { children: [
              item.color,
              " card title"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardText, { children: "Some quick example text to build on the card title and make up the bulk of the card's content." })
          ] })
        ] }) }, index)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Top border" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Use ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://coreui.io/docs/utilities/borders/", children: "border utilities" }),
          " to change just the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "border-color" }),
          " of a card. Note that you can set",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "textColor" }),
          " property on the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CCard>" }),
          " or a subset of the card's contents as shown below."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/card/#top-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CRow, { children: [
          { color: "primary", textColor: "primary" },
          { color: "secondary", textColor: "secondary" },
          { color: "success", textColor: "success" },
          { color: "danger", textColor: "danger" },
          { color: "warning", textColor: "warning" },
          { color: "info", textColor: "info" },
          { color: "light" },
          { color: "dark" }
        ].map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { lg: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          CCard,
          {
            textColor: item.textColor,
            className: `mb-3 border-top-${item.color} border-top-3`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CCardHeader, { children: "Header" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardTitle, { children: [
                  item.color,
                  " card title"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CCardText, { children: "Some quick example text to build on the card title and make up the bulk of the card's content." })
              ] })
            ]
          }
        ) }, index)) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Card" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Card groups" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Use card groups to render cards as a single, attached element with equal width and height columns. Card groups start off stacked and use ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "display: flex;" }),
          " to become attached with uniform dimensions starting at the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "sm" }),
          " breakpoint."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/card/#card-groups", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardGroup, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardImage, { orientation: "top", src: ReactImg }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Card title" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CCardText, { children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CCardText, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-medium-emphasis", children: "Last updated 3 mins ago" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardImage, { orientation: "top", src: ReactImg }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Card title" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CCardText, { children: "This card has supporting text below as a natural lead-in to additional content." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CCardText, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-medium-emphasis", children: "Last updated 3 mins ago" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardImage, { orientation: "top", src: ReactImg }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Card title" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CCardText, { children: "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CCardText, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-medium-emphasis", children: "Last updated 3 mins ago" }) })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-medium-emphasis small", children: "When using card groups with footers, their content will automatically line up." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/card/#card-groups", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardGroup, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardImage, { orientation: "top", src: ReactImg }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Card title" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CCardText, { children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-medium-emphasis", children: "Last updated 3 mins ago" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardImage, { orientation: "top", src: ReactImg }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Card title" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CCardText, { children: "This card has supporting text below as a natural lead-in to additional content." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-medium-emphasis", children: "Last updated 3 mins ago" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardImage, { orientation: "top", src: ReactImg }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Card title" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CCardText, { children: "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-medium-emphasis", children: "Last updated 3 mins ago" }) })
          ] })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Card" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Grid cards" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Use the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "CRow" }),
          " component and set",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "{xs|sm|md|lg|xl|xxl}={{ cols: * }}" }),
          " property to control how many grid columns (wrapped around your cards) you show per row. For example, here's ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "xs={{cols: 1}}" }),
          " laying out the cards on one column, and ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "md={{cols: 1}}" }),
          " splitting four cards to equal width across multiple rows, from the medium breakpoint up."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/card/#grid-cards", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { xs: { cols: 1, gutter: 4 }, md: { cols: 2 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardImage, { orientation: "top", src: ReactImg }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Card title" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CCardText, { children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-medium-emphasis", children: "Last updated 3 mins ago" }) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardImage, { orientation: "top", src: ReactImg }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Card title" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CCardText, { children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-medium-emphasis", children: "Last updated 3 mins ago" }) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardImage, { orientation: "top", src: ReactImg }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Card title" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CCardText, { children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-medium-emphasis", children: "Last updated 3 mins ago" }) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardImage, { orientation: "top", src: ReactImg }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Card title" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CCardText, { children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-medium-emphasis", children: "Last updated 3 mins ago" }) })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Change it to ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "md={{ cols: 3}}" }),
          " and you'll see the fourth card wrap."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/card/#grid-cards", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { xs: { cols: 1, gutter: 4 }, md: { cols: 3 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardImage, { orientation: "top", src: ReactImg }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Card title" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CCardText, { children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-medium-emphasis", children: "Last updated 3 mins ago" }) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardImage, { orientation: "top", src: ReactImg }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Card title" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CCardText, { children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-medium-emphasis", children: "Last updated 3 mins ago" }) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardImage, { orientation: "top", src: ReactImg }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Card title" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CCardText, { children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-medium-emphasis", children: "Last updated 3 mins ago" }) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardImage, { orientation: "top", src: ReactImg }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Card title" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CCardText, { children: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CCardFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("small", { className: "text-medium-emphasis", children: "Last updated 3 mins ago" }) })
          ] }) })
        ] }) })
      ] })
    ] }) })
  ] });
};
export {
  Cards as default
};
