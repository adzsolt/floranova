import { j as jsxRuntimeExports, r as reactExports } from "./client-DnTwIhck.js";
import { a as CRow, b as CCol, d as CCard, a0 as CCardHeader, e as CCardBody, aF as CModal, aG as CModalHeader, aH as CModalTitle, aI as CModalBody, aJ as CModalFooter, k as CButton, an as CPopover, aq as CTooltip, _ as CLink } from "./index.es-DQOCfkkb.js";
import { m as DocsExample } from "./ProBadge-CTxLXQO1.js";
import "./index-FB58F2rY.js";
import "./cil-user-q2NU2AQZ.js";
const LiveDemo = () => {
  const [visible, setVisible] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { onClick: () => setVisible(!visible), children: "Launch demo modal" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CModal, { visible, onClose: () => setVisible(false), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CModalHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CModalTitle, { children: "Modal title" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CModalBody, { children: "Woohoo, you're reading this text in a modal!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CModalFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "secondary", onClick: () => setVisible(false), children: "Close" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "primary", children: "Save changes" })
      ] })
    ] })
  ] });
};
const StaticBackdrop = () => {
  const [visible, setVisible] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { onClick: () => setVisible(!visible), children: "Launch static backdrop modal" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CModal, { backdrop: "static", visible, onClose: () => setVisible(false), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CModalHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CModalTitle, { children: "Modal title" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CModalBody, { children: "I will not close if you click outside me. Don'teven try to press escape key." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CModalFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "secondary", onClick: () => setVisible(false), children: "Close" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "primary", children: "Save changes" })
      ] })
    ] })
  ] });
};
const ScrollingLongContent = () => {
  const [visible, setVisible] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { onClick: () => setVisible(!visible), children: "Launch demo modal" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CModal, { visible, onClose: () => setVisible(false), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CModalHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CModalTitle, { children: "Modal title" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CModalBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CModalFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "secondary", onClick: () => setVisible(false), children: "Close" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "primary", children: "Save changes" })
      ] })
    ] })
  ] });
};
const ScrollingLongContent2 = () => {
  const [visible, setVisible] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { onClick: () => setVisible(!visible), children: "Launch demo modal" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CModal, { scrollable: true, visible, onClose: () => setVisible(false), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CModalHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CModalTitle, { children: "Modal title" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CModalBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CModalFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "secondary", onClick: () => setVisible(false), children: "Close" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "primary", children: "Save changes" })
      ] })
    ] })
  ] });
};
const VerticallyCentered = () => {
  const [visible, setVisible] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { onClick: () => setVisible(!visible), children: "Vertically centered modal" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CModal, { alignment: "center", visible, onClose: () => setVisible(false), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CModalHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CModalTitle, { children: "Modal title" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CModalBody, { children: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CModalFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "secondary", onClick: () => setVisible(false), children: "Close" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "primary", children: "Save changes" })
      ] })
    ] })
  ] });
};
const VerticallyCentered2 = () => {
  const [visible, setVisible] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { onClick: () => setVisible(!visible), children: "Vertically centered scrollable modal" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CModal, { alignment: "center", scrollable: true, visible, onClose: () => setVisible(false), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CModalHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CModalTitle, { children: "Modal title" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CModalBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CModalFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "secondary", onClick: () => setVisible(false), children: "Close" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "primary", children: "Save changes" })
      ] })
    ] })
  ] });
};
const TooltipsPopovers = () => {
  const [visible, setVisible] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { onClick: () => setVisible(!visible), children: "Launch demo modal" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CModal, { alignment: "center", visible, onClose: () => setVisible(false), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CModalHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CModalTitle, { children: "Modal title" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CModalBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { children: "Popover in a modal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "This",
          /* @__PURE__ */ jsxRuntimeExports.jsx(CPopover, { title: "Popover title", content: "Popover body content is set in this property.", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { children: "button" }) }),
          " ",
          "triggers a popover on click."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("hr", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { children: "Tooltips in a modal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTooltip, { content: "Tooltip", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CLink, { children: "This link" }) }),
          " ",
          "and",
          /* @__PURE__ */ jsxRuntimeExports.jsx(CTooltip, { content: "Tooltip", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CLink, { children: "that link" }) }),
          " ",
          "have tooltips on hover."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CModalFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "secondary", onClick: () => setVisible(false), children: "Close" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "primary", children: "Save changes" })
      ] })
    ] })
  ] });
};
const OptionalSizes = () => {
  const [visibleXL, setVisibleXL] = reactExports.useState(false);
  const [visibleLg, setVisibleLg] = reactExports.useState(false);
  const [visibleSm, setVisibleSm] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { onClick: () => setVisibleXL(!visibleXL), children: "Extra large modal" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { onClick: () => setVisibleLg(!visibleLg), children: "Large modal" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { onClick: () => setVisibleSm(!visibleSm), children: "Small large modal" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CModal, { size: "xl", visible: visibleXL, onClose: () => setVisibleXL(false), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CModalHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CModalTitle, { children: "Extra large modal" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CModalBody, { children: "..." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CModal, { size: "lg", visible: visibleLg, onClose: () => setVisibleLg(false), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CModalHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CModalTitle, { children: "Large modal" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CModalBody, { children: "..." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CModal, { size: "sm", visible: visibleSm, onClose: () => setVisibleSm(false), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CModalHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CModalTitle, { children: "Small modal" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CModalBody, { children: "..." })
    ] })
  ] });
};
const FullscreenModal = () => {
  const [visible, setVisible] = reactExports.useState(false);
  const [visibleSm, setVisibleSm] = reactExports.useState(false);
  const [visibleMd, setVisibleMd] = reactExports.useState(false);
  const [visibleLg, setVisibleLg] = reactExports.useState(false);
  const [visibleXL, setVisibleXL] = reactExports.useState(false);
  const [visibleXXL, setVisibleXXL] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { onClick: () => setVisible(!visible), children: "Full screen" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { onClick: () => setVisibleSm(!visibleSm), children: "Full screen below sm" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { onClick: () => setVisibleMd(!visibleMd), children: "Full screen below md" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { onClick: () => setVisibleLg(!visibleLg), children: "Full screen below lg" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { onClick: () => setVisibleXL(!visibleXL), children: "Full screen below xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { onClick: () => setVisibleXXL(!visibleXXL), children: "Full screen below xxl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CModal, { fullscreen: true, visible, onClose: () => setVisible(false), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CModalHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CModalTitle, { children: "Full screen" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CModalBody, { children: "..." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CModal, { fullscreen: "sm", visible: visibleSm, onClose: () => setVisibleSm(false), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CModalHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CModalTitle, { children: "Full screen below sm" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CModalBody, { children: "..." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CModal, { fullscreen: "md", visible: visibleMd, onClose: () => setVisibleMd(false), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CModalHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CModalTitle, { children: "Full screen below md" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CModalBody, { children: "..." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CModal, { fullscreen: "lg", visible: visibleLg, onClose: () => setVisibleLg(false), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CModalHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CModalTitle, { children: "Full screen below lg" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CModalBody, { children: "..." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CModal, { fullscreen: "xl", visible: visibleXL, onClose: () => setVisibleXL(false), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CModalHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CModalTitle, { children: "Full screen below xl" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CModalBody, { children: "..." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CModal, { fullscreen: "xxl", visible: visibleXXL, onClose: () => setVisibleXXL(false), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CModalHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CModalTitle, { children: "Full screen below xxl" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CModalBody, { children: "..." })
    ] })
  ] });
};
const Modals = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Modal" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Below is a static modal example (meaning its ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "position" }),
          " and",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "display" }),
          " have been overridden). Included are the modal header, modal body (required for ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "padding" }),
          "), and modal footer (optional). We ask that you include modal headers with dismiss actions whenever possible, or provide another explicit dismiss action."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/modal", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          CModal,
          {
            className: "show d-block position-static",
            backdrop: false,
            keyboard: false,
            portal: false,
            visible: true,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CModalHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CModalTitle, { children: "Modal title" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CModalBody, { children: "Modal body text goes here." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CModalFooter, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "secondary", children: "Close" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "primary", children: "Save changes" })
              ] })
            ]
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Modal" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Live demo" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-medium-emphasis small", children: "Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/modal#live-demo", children: LiveDemo() })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Modal" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Static backdrop" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "If you don’t provide an ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "onDimsiss" }),
          " handler to the Modal component, your modal will behave as though the backdrop is static, meaning it will not close when clicking outside it. Click the button below to try it."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/modal#static-backdrop", children: StaticBackdrop() })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Modal" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Scrolling long content" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-medium-emphasis small", children: "If your modal is too long for user’s viewport, it scrolls the page by itself." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/modal#scrolling-long-content", children: ScrollingLongContent() }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "You can also create a scrollable modal that allows scroll the modal body by adding",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "scrollable" }),
          " prop."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/modal#scrolling-long-content", children: ScrollingLongContent2() })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Modal" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Vertically centered" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Add ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: 'alignment="center"' }),
          " to ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CModal>" }),
          " to vertically center the modal."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/modal#vertically-centered", children: VerticallyCentered() }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/modal#vertically-centered", children: VerticallyCentered2() })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Modal" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Tooltips and popovers" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CTooltips>" }),
          " and ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CPopovers>" }),
          " can be placed within modals as needed. When modals are closed, any tooltips and popovers within are also automatically dismissed."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/modal#tooltips-and-popovers", children: TooltipsPopovers() })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Modal" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Optional sizes" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Modals have three optional sizes, available via modifier classes to be placed on a",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CModal>" }),
          ". These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "table", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Size" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Property size" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Modal max-width" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Small" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "'sm'" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "300px" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Default" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-medium-emphasis", children: "None" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "500px" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Large" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "'lg'" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "800px" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Extra large" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "'xl'" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "1140px" }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/modal#optional-sizes", children: OptionalSizes() })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "React Modal" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Fullscreen Modal" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Another override is the option to pop up a modal that covers the user viewport, available via property ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "fullscreen" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "table", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Property fullscreen" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Availability" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "true" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Always" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "'sm'" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
                "Below ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "576px" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "'md'" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
                "Below ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "768px" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "'lg'" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
                "Below ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "992px" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "'xl'" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
                "Below ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "1200px" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "'xxl'" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
                "Below ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "1400px" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "components/modal#fullscreen-modal", children: FullscreenModal() })
      ] })
    ] }) })
  ] });
};
export {
  Modals as default
};
