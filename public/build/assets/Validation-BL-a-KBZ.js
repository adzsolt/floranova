import { j as jsxRuntimeExports, r as reactExports } from "./client-DnTwIhck.js";
import { a as CRow, b as CCol, d as CCard, a0 as CCardHeader, e as CCardBody, f as CForm, l as CFormLabel, j as CFormInput, aB as CFormFeedback, g as CInputGroup, h as CInputGroupText, ax as CFormSelect, V as CFormCheck, k as CButton, t as CFormTextarea } from "./index.es-DQOCfkkb.js";
import { m as DocsExample } from "./ProBadge-Bed_uZ7J.js";
import "./index-DSp_2-9r.js";
import "./cil-user-q2NU2AQZ.js";
const CustomStyles = () => {
  const [validated, setValidated] = reactExports.useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    CForm,
    {
      className: "row g-3 needs-validation",
      noValidate: true,
      validated,
      onSubmit: handleSubmit,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { md: 4, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "validationCustom01", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { type: "text", id: "validationCustom01", defaultValue: "Mark", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormFeedback, { valid: true, children: "Looks good!" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { md: 4, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "validationCustom02", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { type: "text", id: "validationCustom02", defaultValue: "Otto", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormFeedback, { valid: true, children: "Looks good!" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { md: 4, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "validationCustomUsername", children: "Username" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { className: "has-validation", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CInputGroupText, { id: "inputGroupPrepend", children: "@" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CFormInput,
              {
                type: "text",
                id: "validationCustomUsername",
                defaultValue: "",
                "aria-describedby": "inputGroupPrepend",
                required: true
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormFeedback, { invalid: true, children: "Please choose a username." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { md: 6, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "validationCustom03", children: "City" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { type: "text", id: "validationCustom03", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormFeedback, { invalid: true, children: "Please provide a valid city." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { md: 3, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "validationCustom04", children: "City" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormSelect, { id: "validationCustom04", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { disabled: true, children: "Choose..." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "..." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormFeedback, { invalid: true, children: "Please provide a valid city." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { md: 3, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "validationCustom05", children: "City" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { type: "text", id: "validationCustom05", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormFeedback, { invalid: true, children: "Please provide a valid zip." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { xs: 12, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CFormCheck,
            {
              type: "checkbox",
              id: "invalidCheck",
              label: "Agree to terms and conditions",
              required: true
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormFeedback, { invalid: true, children: "You must agree before submitting." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "primary", type: "submit", children: "Submit form" }) })
      ]
    }
  );
};
const BrowserDefaults = () => {
  const [validated, setValidated] = reactExports.useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CForm, { className: "row g-3 needs-validation", validated, onSubmit: handleSubmit, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { md: 4, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "validationDefault01", children: "Email" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { type: "text", id: "validationDefault01", defaultValue: "Mark", required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormFeedback, { valid: true, children: "Looks good!" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { md: 4, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "validationDefault02", children: "Email" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { type: "text", id: "validationDefault02", defaultValue: "Otto", required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormFeedback, { valid: true, children: "Looks good!" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { md: 4, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "validationDefaultUsername", children: "Username" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { className: "has-validation", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CInputGroupText, { id: "inputGroupPrepend02", children: "@" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CFormInput,
          {
            type: "text",
            id: "validationDefaultUsername",
            defaultValue: "",
            "aria-describedby": "inputGroupPrepend02",
            required: true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CFormFeedback, { invalid: true, children: "Please choose a username." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { md: 6, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "validationDefault03", children: "City" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { type: "text", id: "validationDefault03", required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormFeedback, { invalid: true, children: "Please provide a valid city." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { md: 3, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "validationDefault04", children: "City" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormSelect, { id: "validationDefault04", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { disabled: true, children: "Choose..." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "..." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormFeedback, { invalid: true, children: "Please provide a valid city." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { md: 3, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "validationDefault05", children: "City" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { type: "text", id: "validationDefault05", required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormFeedback, { invalid: true, children: "Please provide a valid zip." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { xs: 12, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CFormCheck,
        {
          type: "checkbox",
          id: "invalidCheck",
          label: "Agree to terms and conditions",
          required: true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CFormFeedback, { invalid: true, children: "You must agree before submitting." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "primary", type: "submit", children: "Submit form" }) })
  ] });
};
const Tooltips = () => {
  const [validated, setValidated] = reactExports.useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    CForm,
    {
      className: "row g-3 needs-validation",
      noValidate: true,
      validated,
      onSubmit: handleSubmit,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { md: 4, className: "position-relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "validationTooltip01", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { type: "text", id: "validationTooltip01", defaultValue: "Mark", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormFeedback, { tooltip: true, valid: true, children: "Looks good!" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { md: 4, className: "position-relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "validationTooltip02", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { type: "text", id: "validationTooltip02", defaultValue: "Otto", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormFeedback, { tooltip: true, valid: true, children: "Looks good!" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { md: 4, className: "position-relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "validationTooltipUsername", children: "Username" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { className: "has-validation", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CInputGroupText, { id: "inputGroupPrepend", children: "@" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CFormInput,
              {
                type: "text",
                id: "validationTooltipUsername",
                defaultValue: "",
                "aria-describedby": "inputGroupPrepend",
                required: true
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormFeedback, { tooltip: true, invalid: true, children: "Please choose a username." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { md: 6, className: "position-relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "validationTooltip03", children: "City" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { type: "text", id: "validationTooltip03", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormFeedback, { tooltip: true, invalid: true, children: "Please provide a valid city." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { md: 3, className: "position-relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "validationTooltip04", children: "City" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormSelect, { id: "validationTooltip04", required: true, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { disabled: true, defaultValue: "", children: "Choose..." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "..." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormFeedback, { tooltip: true, invalid: true, children: "Please provide a valid city." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { md: 3, className: "position-relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "validationTooltip05", children: "City" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { type: "text", id: "validationTooltip05", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormFeedback, { tooltip: true, invalid: true, children: "Please provide a valid zip." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, className: "position-relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "primary", type: "submit", children: "Submit form" }) })
      ]
    }
  );
};
const Validation = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CRow, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Validation" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Custom styles" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "For custom CoreUI form validation messages, you'll need to add the",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "noValidate" }),
          " boolean property to your ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CForm>" }),
          ". This disables the browser default feedback tooltips, but still provides access to the form validation APIs in JavaScript. Try to submit the form below; our JavaScript will intercept the submit button and relay feedback to you. When attempting to submit, you'll see the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: ":invalid" }),
          " and ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: ":valid" }),
          " styles applied to your form controls."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "Custom feedback styles apply custom colors, borders, focus styles, and background icons to better communicate feedback.",
          " "
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "forms/validation", children: CustomStyles() })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Validation" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Browser defaults" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-medium-emphasis small", children: "Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you'll see a slightly different style of feedback." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-medium-emphasis small", children: "While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "forms/validation#browser-defaults", children: BrowserDefaults() })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Validation" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Server side" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "We recommend using client-side validation, but in case you require server-side validation, you can indicate invalid and valid form fields with ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "invalid" }),
          " ",
          "and ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "valid" }),
          " boolean properties."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "For invalid fields, ensure that the invalid feedback/error message is associated with the relevant form field using ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "aria-describedby" }),
          " (noting that this attribute allows more than one ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "id" }),
          " to be referenced, in case the field already points to additional form text)."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "forms/validation#server-side", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CForm, { className: "row g-3 needs-validation", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { md: 4, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "validationServer01", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CFormInput,
              {
                type: "text",
                id: "validationServer01",
                defaultValue: "Mark",
                valid: true,
                required: true
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormFeedback, { valid: true, children: "Looks good!" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { md: 4, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "validationServer02", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CFormInput,
              {
                type: "text",
                id: "validationServer02",
                defaultValue: "Otto",
                valid: true,
                required: true
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormFeedback, { valid: true, children: "Looks good!" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { md: 4, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "validationServerUsername", children: "Username" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CInputGroup, { className: "has-validation", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CInputGroupText, { id: "inputGroupPrepend03", children: "@" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                CFormInput,
                {
                  type: "text",
                  id: "validationServerUsername",
                  defaultValue: "",
                  "aria-describedby": "inputGroupPrepend03",
                  invalid: true,
                  required: true
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CFormFeedback, { invalid: true, children: "Please choose a username." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { md: 6, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "validationServer03", children: "City" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { type: "text", id: "validationServer03", invalid: true, required: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormFeedback, { invalid: true, children: "Please provide a valid city." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { md: 3, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "validationServer04", children: "City" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormSelect, { id: "validationServer04", invalid: true, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { disabled: true, children: "Choose..." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "..." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormFeedback, { invalid: true, children: "Please provide a valid city." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { md: 3, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "validationServer05", children: "City" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormInput, { type: "text", id: "validationServer05", invalid: true, required: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormFeedback, { invalid: true, children: "Please provide a valid zip." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CCol, { xs: 12, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CFormCheck,
              {
                type: "checkbox",
                id: "invalidCheck",
                label: "Agree to terms and conditions",
                invalid: true,
                required: true
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormFeedback, { invalid: true, children: "You must agree before submitting." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { color: "primary", type: "submit", children: "Submit form" }) })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Validation" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Supported elements" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-medium-emphasis small", children: "Validation styles are available for the following form controls and components:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CFormInput>" }),
            "s"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CFormSelect>" }),
            "s"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "<CFormCheck>" }),
            "s"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "forms/validation#supported-elements", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CForm, { validated: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormLabel, { htmlFor: "validationTextarea", className: "form-label", children: "Textarea" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CFormTextarea,
              {
                id: "validationTextarea",
                placeholder: "Required example textarea",
                invalid: true,
                required: true
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormFeedback, { invalid: true, children: "Please enter a message in the textarea." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CFormCheck,
            {
              className: "mb-3",
              id: "validationFormCheck1",
              label: "Check this checkbox",
              required: true
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormFeedback, { invalid: true, children: "Example invalid feedback text" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CFormCheck,
            {
              type: "radio",
              name: "radio-stacked",
              id: "validationFormCheck2",
              label: "Check this checkbox",
              required: true
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CFormCheck,
            {
              className: "mb-3",
              type: "radio",
              name: "radio-stacked",
              id: "validationFormCheck3",
              label: "Or toggle this other radio",
              required: true
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CFormFeedback, { invalid: true, children: "More example invalid feedback text" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CFormSelect, { required: true, "aria-label": "select example", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Open this select menu" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "1", children: "One" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2", children: "Two" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "3", children: "Three" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormFeedback, { invalid: true, children: "Example invalid select feedback" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CFormInput,
              {
                type: "file",
                id: "validationTextarea",
                "aria-label": "file example",
                required: true
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CFormFeedback, { invalid: true, children: "Example invalid form file feedback" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CButton, { type: "submit", color: "primary", disabled: true, children: "Submit form" }) })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CCol, { xs: 12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CCard, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Validation" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "Tooltips" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CCardBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-medium-emphasis small", children: [
          "If your form layout allows it, you can swap the text for the tooltip to display validation feedback in a styled tooltip. Be sure to have a parent with",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "position: relative" }),
          " on it for tooltip positioning. In the example below, our column classes have this already, but your project may require an alternative setup."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocsExample, { href: "forms/validation#tooltips", children: Tooltips() })
      ] })
    ] }) })
  ] });
};
export {
  Validation as default
};
