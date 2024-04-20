import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilCalendar,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilEnvelopeOpen,
  cilGrid,
  cilLayers,
  cilMap,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilSpreadsheet,
  cilStar,
  cilHouse,
  cilBlur,
  cilSettings,
  cilSun,
  cilBattery0,
  cilPeople,
  cilUserFollow,
  cilWarning,
  cilMoney,
  cilBalanceScale,
  cilFire,
  cibArtstation,
  cilTerrain,
  cilAperture,
  cibHockeyapp,
  cilRectangle
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react-pro'

const _nav = [
  /*{
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info-gradient',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Theme',
  },
  {
    component: CNavItem,
    name: 'Colors',
    to: '/theme/colors',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Typography1211',
    to: '/theme/typography',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Components',
  },
  {
    component: CNavGroup,
    name: 'Base',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Accordion',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Breadcrumb',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Cards',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'Carousel',
        to: '/base/carousels',
      },
      {
        component: CNavItem,
        name: 'Collapse',
        to: '/base/collapses',
      },
      {
        component: CNavItem,
        name: 'List group',
        to: '/base/list-groups',
      },
      {
        component: CNavItem,
        name: 'Navs & Tabs',
        to: '/base/navs',
      },
      {
        component: CNavItem,
        name: 'Pagination',
        to: '/base/paginations',
      },
      {
        component: CNavItem,
        name: 'Placeholders',
        to: '/base/placeholders',
      },
      {
        component: CNavItem,
        name: 'Popovers',
        to: '/base/popovers',
      },
      {
        component: CNavItem,
        name: 'Progress',
        to: '/base/progress',
      },
      {
        component: CNavItem,
        name: 'Spinners',
        to: '/base/spinners',
      },*/
      {
        component: CNavItem,
        name: 'Tables',
        to: '/base/tables',
      },
      /*{
        component: CNavItem,
        name: 'Tooltips',
        to: '/base/tooltips',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Buttons',
    to: '/buttons',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Buttons',
        to: '/buttons/buttons',
      },
      {
        component: CNavItem,
        name: 'Buttons groups',
        to: '/buttons/button-groups',
      },
      {
        component: CNavItem,
        name: 'Dropdowns',
        to: '/buttons/dropdowns',
      },
      {
        component: CNavItem,
        name: 'Loading Buttons',
        to: '/buttons/loading-buttons',
        badge: {
          color: 'danger-gradient',
          text: 'PRO',
        },
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Forms',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Form Control',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Select',
        to: '/forms/select',
      },
      {
        component: CNavItem,
        name: 'Multi Select',
        to: '/forms/multi-select',
        badge: {
          color: 'danger-gradient',
          text: 'PRO',
        },
      },
      {
        component: CNavItem,
        name: 'Checks & Radios',
        to: '/forms/checks-radios',
      },
      {
        component: CNavItem,
        name: 'Range',
        to: '/forms/range',
      },
      {
        component: CNavItem,
        name: 'Input Group',
        to: '/forms/input-group',
      },
      {
        component: CNavItem,
        name: 'Floating Labels',
        to: '/forms/floating-labels',
      },
      {
        component: CNavItem,
        name: 'Date Picker',
        to: '/forms/date-picker',
        badge: {
          color: 'danger-gradient',
          text: 'PRO',
        },
      },
      {
        component: CNavItem,
        name: 'Date Range Picker',
        to: '/forms/date-range-picker',
        badge: {
          color: 'danger-gradient',
          text: 'PRO',
        },
      },
      {
        component: CNavItem,
        name: 'Time Picker',
        to: '/forms/time-picker',
        badge: {
          color: 'danger-gradient',
          text: 'PRO',
        },
      },
      {
        component: CNavItem,
        name: 'Layout',
        to: '/forms/layout',
      },
      {
        component: CNavItem,
        name: 'Validation',
        to: '/forms/validation',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Icons',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'CoreUI Free',
        to: '/icons/Pages-icons',
        badge: {
          color: 'success-gradient',
          text: 'FREE',
        },
      },
      {
        component: CNavItem,
        name: 'CoreUI Flags',
        to: '/icons/flags',
      },
      {
        component: CNavItem,
        name: 'CoreUI Brands',
        to: '/icons/brands',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Notifications1',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Alerts',
        to: '/notifications/alerts',
      },
      {
        component: CNavItem,
        name: 'Badges',
        to: '/notifications/badges',
      },
      {
        component: CNavItem,
        name: 'Modal',
        to: '/notifications/modals',
      },
      {
        component: CNavItem,
        name: 'Toasts',
        to: '/notifications/toasts',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Widgets',
    to: '/widgets',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    badge: {
      color: 'info-gradient',
      text: 'NEW',
    },
  },
  {
    component: CNavItem,
    name: 'Smart Table',
    icon: <CIcon icon={cilGrid} customClassName="nav-icon" />,
    badge: {
      color: 'danger-gradient',
      text: 'PRO',
    },
    to: '/smart-table',
  },
  {
    component: CNavTitle,
    name: 'Plugins',
  },
  {
    component: CNavItem,
    name: 'Calendar',
    icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />,
    badge: {
      color: 'danger-gradient',
      text: 'PRO',
    },
    to: '/plugins/calendar',
  },
  {
    component: CNavItem,
    name: 'Charts',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
    to: '/plugins/charts',
  },
  {
    component: CNavItem,
    name: 'Google Maps',
    icon: <CIcon icon={cilMap} customClassName="nav-icon" />,
    badge: {
      color: 'danger-gradient',
      text: 'PRO',
    },
    to: '/plugins/google-maps',
  },
  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Apps',
    icon: <CIcon icon={cilLayers} customClassName="nav-icon" />,
    items: [
      {
        component: CNavGroup,
        name: 'Invoicing',
        icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
        to: '/apps/invoicing',
        items: [
          {
            component: CNavItem,
            name: 'Invoice',
            badge: {
              color: 'danger-gradient',
              text: 'PRO',
            },
            to: '/apps/invoicing/invoice',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Email',
        to: '/apps/email',
        icon: <CIcon icon={cilEnvelopeOpen} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Inbox',
            badge: {
              color: 'danger-gradient',
              text: 'PRO',
            },
            to: '/apps/email/inbox',
          },
          {
            component: CNavItem,
            name: 'Message',
            badge: {
              color: 'danger-gradient',
              text: 'PRO',
            },
            to: '/apps/email/message',
          },
          {
            component: CNavItem,
            name: 'Compose',
            badge: {
              color: 'danger-gradient',
              text: 'PRO',
            },
            to: '/apps/email/compose',
          },
        ],
      },
    ],
  },*/
  {
    component: CNavItem,
    name: 'Főoldal',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info-gradient',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Alapanyagok',
  },

  {
    component: CNavGroup,
    name: 'Tőzeg',
    to: '/base',
    icon: <CIcon icon={cilTerrain} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Lista',
        to: '/peat',
      },
      {
        component: CNavItem,
        name: 'Hozzáadás',
        to: '/peat/add',
      },
    ]
  },

  {
    component: CNavGroup,
    name: 'Cserep',
    to: '/base',
    icon: <CIcon icon={cibHockeyapp} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Lista',
        to: '/pot',
      },
      {
        component: CNavItem,
        name: 'Hozzáadás',
        to: '/pot/add',
      },

    ]
  },

  {
    component: CNavGroup,
    name: 'Vegyszerek',
    to: '/base',
    icon: <CIcon icon={cilAperture} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Hozzáadás',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Lista',
        to: '/base/breadcrumbs',
      },
    ]
  },

  {
    component: CNavTitle,
    name: 'Termelés',
  },
  {
    component: CNavGroup,
    name: 'Szezonok',
    to: '/base',
    icon: <CIcon icon={cibArtstation} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Lista',
        to: '/seasons',
      },
      {
        component: CNavItem,
        name: 'Hozzáadás',
        to: '/seasons/add',
      },
    ]
  },

  {
    component: CNavGroup,
    name: 'Elrendezés',
    to: '/base',
    icon: <CIcon icon={cilRectangle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Lista',
        to: '/layouts',
      },
      {
        component: CNavItem,
        name: 'Hozzáadás',
        to: '/layouts/add',
      },

    ]
  },




  {
    component: CNavGroup,
    name: 'Fűtőegységek',
    to: '/base',
    icon: <CIcon icon={cilFire} customClassName="nav-icon" />,
    items: [

      {
        component: CNavItem,
        name: 'Lista',
        to: '/heat-units',
      },
      {
        component: CNavItem,
        name: 'Hozzáadás',
        to: '/heat-units/add',
      },

    ]
  },
  {
    component: CNavGroup,
    name: 'Termelőegységek',
    to: '/base',
    icon: <CIcon icon={cilHouse} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Lista',
        to: '/base/breadcrumbs',
      },

      {
        component: CNavItem,
        name: 'Hozzáadás',
        to: '/base/accordion',
      },

      ]
  },


  {
    component: CNavGroup,
    name: 'Virágcsoportok',
    to: '/base',
    icon: <CIcon icon={cilBlur} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Hozzáadás',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Lista',
        to: '/base/breadcrumbs',
      },
    ]
  },


  {
    component: CNavTitle,
    name: 'Beállítások',
  },

  {
    component: CNavItem,
    name: 'Általános beállítások',
    to: '/theme/colors',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'Hőmérséklet',
    to: '/theme/colors',
    icon: <CIcon icon={cilSun} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'Fogyasztás',
    to: '/theme/colors',
    icon: <CIcon icon={cilBattery0} customClassName="nav-icon" />,
  },

  {
    component: CNavTitle,
    name: 'Felhasználók',
  },
  {
    component: CNavItem,
    name: 'Felhasználói lista',
    to: '/users',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'Felhasználó hozzáadása',
    to: '/users/add',
    icon: <CIcon icon={cilUserFollow} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Jogok',
    to: '/theme/colors',
    icon: <CIcon icon={cilWarning} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Jelentések',
  },
  {
    component: CNavItem,
    name: 'Kiadás',
    to: '/theme/colors',
    icon: <CIcon icon={cilMoney} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Árszámítás',
    to: '/theme/colors',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'Mérleg',
    to: '/theme/colors',
    icon: <CIcon icon={cilBalanceScale} customClassName="nav-icon" />,
  },



]

export default _nav
