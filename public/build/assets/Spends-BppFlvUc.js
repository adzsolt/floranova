import { r as reactExports, j as jsxRuntimeExports } from "./client-DnTwIhck.js";
import { d as CCard, e as CCardBody, a as CRow, b as CCol, ac as CCardTitle, k as CButton, i as CIcon } from "./index.es-DQOCfkkb.js";
import { g as useNavigate } from "./index-CohQ1QJD.js";
import "./ProBadge-CdXCZ9PP.js";
import { S as Spendslist } from "./SpendsList-voinXyr0.js";
import { c as cilUserPlus } from "./cil-user-plus-kfZGZ2sS.js";
import "./cil-user-q2NU2AQZ.js";
import "./axios-fEUzBR8L.js";
const Spends = () => {
  new AbortController();
  const navigate = useNavigate();
  reactExports.useState(true);
  reactExports.useState("");
  const handleAdd = () => {
    navigate("/spends/add");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CCard, { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CCardBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { className: "d-flex justify-content-between mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CCardTitle, { children: "Fogyasztás" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CButton, { color: "light", onClick: handleAdd, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CIcon, { icon: cilUserPlus, className: "btn-icon mr-2" }),
        " Fogyasztás hozzáadása"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spendslist, {}) })
  ] }) }) });
};
export {
  Spends as default
};
