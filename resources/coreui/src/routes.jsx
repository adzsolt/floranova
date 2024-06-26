import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const LoadingButtons = React.lazy(() => import('./views/buttons/loading-buttons/LoadingButtons'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const DatePicker = React.lazy(() => import('./views/forms/date-picker/DatePicker'))
const DateRangePicker = React.lazy(() => import('./views/forms/date-range-picker/DateRangePicker'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const MultiSelect = React.lazy(() => import('./views/forms/multi-select/MultiSelect'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const TimePicker = React.lazy(() => import('./views/forms/time-picker/TimePicker'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const SmartTable = React.lazy(() => import('./views/smart-table/SmartTable'))

// Plugins
const Calendar = React.lazy(() => import('./views/plugins/calendar/Calendar'))
const Charts = React.lazy(() => import('./views/plugins/charts/Charts'))
const GoogleMaps = React.lazy(() => import('./views/plugins/google-maps/GoogleMaps'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const Invoice = React.lazy(() => import('./views/apps/invoicing/Invoice'))



//production

//Peat

const Peat = React.lazy(() => import('./views/peat/Peat'))
const AddPeat = React.lazy(() => import('./views/peat/AddPeat'))
const EditPeat = React.lazy(() => import('./views/peat/EditPeat'))



//Pott

const Pot = React.lazy(() => import('./views/pot/Pot'))
const AddPot = React.lazy(() => import('./views/pot/AddPot'))
const EditPot = React.lazy(() => import('./views/pot/EditPot'))

//Plant

const Plant = React.lazy(() => import('./views/plant/Plant'))
const AddPlant = React.lazy(() => import('./views/plant/AddPlant'))
const EditPlant = React.lazy(() => import('./views/plant/EditPlant'))

//Fertilizer

const Fertilizer = React.lazy(() => import('./views/fertilizer/Fertilizer'))
const AddFertilizer = React.lazy(() => import('./views/fertilizer/AddFertilizer'))
const EditFertilizer = React.lazy(() => import('./views/fertilizer/EditFertilizer'))


//Fertilizer Status
const AddFertilizerStatus = React.lazy(() => import('./views/fertilizer-status/AddFertilizerStatus'))


//HeatUnit
const Business = React.lazy(() => import('./views/businesses/Business'))
const AddHBusiness = React.lazy(() => import('./views/businesses/AddBusiness'))
const EditBusiness = React.lazy(() => import('./views/businesses/EditBusiness'))


//Seasons
const Seasons = React.lazy(() => import('./views/seasons/Seasons'))
const AddSeason = React.lazy(() => import('./views/seasons/AddSeason'))
const EditSeason = React.lazy(() => import('./views/seasons/EditSeason'))

//Layout
const PotLayout = React.lazy(() => import('./views/layout/PotLayout'))
const AddPotLayout = React.lazy(() => import('./views/layout/AddLayout'))
const EditPotLayout = React.lazy(() => import('./views/layout/EditLayout'))


//HeatUnit
const HeatUnit = React.lazy(() => import('./views/heat-unit/HeatUnit'))
const AddHeatUnit = React.lazy(() => import('./views/heat-unit/AddHeatUnit'))
const EditHeatUnit = React.lazy(() => import('./views/heat-unit/EditHeatUnit'))


//ProductionUnit
const ProductionUnit = React.lazy(() => import('./views/production-unit/ProductionUnit'))
const AddProductionUnit = React.lazy(() => import('./views/production-unit/AddProductionUnit'))
const EditProductionUnit = React.lazy(() => import('./views/production-unit/EditProductionUnit'))



//Lot

const Lot = React.lazy(() => import('./views/lot/Lot'))
const AddLot = React.lazy(() => import('./views/lot/AddLot'))


//Users
const Users = React.lazy(() => import('./views/users/Users'))
const AddUser = React.lazy(() => import('./views/users/AddUser'))
const EditUser = React.lazy(() => import('./views/users/EditUser'))

//Works

const Works = React.lazy(() => import('./views/works/Works'))
const AddWork = React.lazy(() => import('./views/works/AddWork'))

//Temperatures

const Temperatures = React.lazy(() => import('./views/temperatures/Temperatures'))
const AddTemperature = React.lazy(() => import('./views/temperatures/AddTemperature'))


//Works

const Spends = React.lazy(() => import('./views/spends/Spends'))
const AddSpend = React.lazy(() => import('./views/spends/AddSpend'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/buttons/loading-buttons', name: 'Loading Buttons', element: LoadingButtons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/multi-select', name: 'Multi Select', element: MultiSelect },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/date-picker', name: 'Date Picker', element: DatePicker },
  { path: '/forms/date-range-picker', name: 'Date Range Picker', element: DateRangePicker },
  { path: '/forms/time-picker', name: 'Time Picker', element: TimePicker },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/Pages-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/plugins', name: 'Plugins', element: Calendar, exact: true },
  { path: '/plugins/calendar', name: 'Calendar', element: Calendar },
  { path: '/plugins/charts', name: 'Charts', element: Charts },
  { path: '/plugins/google-maps', name: 'GoogleMaps', element: GoogleMaps },
  { path: '/smart-table', name: 'Smart Table', element: SmartTable },
  { path: '/widgets', name: 'Widgets', element: Widgets },
  { path: '/apps', name: 'Apps', element: Invoice, exact: true },
  { path: '/apps/invoicing', name: 'Invoice', element: Invoice, exact: true },
  { path: '/apps/invoicing/invoice', name: 'Invoice', element: Invoice },
  { path: '/apps/email', name: 'Email', exact: true },
  { path: '/apps/email/inbox', name: 'Inbox', exact: true },
  { path: '/apps/email/compose', name: 'Compose', exact: true },
  { path: '/apps/email/message', name: 'Message', exact: true },
  //production----------------------------------------------------

  //Peat
  { path: '/peat', name: 'Peat', element: Peat },
  { path: '/peat/add', name: 'Add Peat', element: AddPeat },
  { path: '/peat/edit/:id', name: 'Edit Peat', element: EditPeat },


  //Pot
  { path: '/pot', name: 'Pot', element: Pot },
  { path: '/pot/add', name: 'Add Pot', element: AddPot },
  { path: '/pot/edit/:id', name: 'Edit Pot', element: EditPot },


  //Plant
  { path: '/plant', name: 'Plant', element: Plant },
  { path: '/plant/add', name: 'Add Plant', element: AddPlant },
  { path: '/plant/edit/:id', name: 'Edit Plant', element: EditPlant },


  //Fertilizer
  { path: '/fertilizer', name: 'Fertilizer', element: Fertilizer },
  { path: '/fertilizer/add', name: 'Add Fertilizer', element: AddFertilizer },
  { path: '/fertilizer/edit/:id', name: 'Edit Fertilizer', element: EditFertilizer },

  //Fertilizer-status

  { path: '/fertilizer-status/add/:id', name: 'Add Fertilizer Status', element: AddFertilizerStatus },
  //{ path: '/fertilizer/edit/:id', name: 'Edit Fertilizer', element: EditFertilizer },

  //Heat units
  { path: '/businesses', name: 'Egységek', element: Business },
  { path: '/businesses/add', name: 'Egység hozzzáadása ', element: AddHBusiness },
  { path: '/businesses/edit/:id', name: 'Egység szerkesztése', element: EditBusiness },




  //Seasons
  { path: '/seasons', name: 'Seasons', element: Seasons },
  { path: '/seasons/add', name: 'Add Season', element: AddSeason },
  { path: '/seasons/edit/:id', name: 'Edit Season', element: EditSeason },


  //Layouts
  { path: '/layouts', name: 'Layouts', element: PotLayout },
  { path: '/layouts/add', name: 'Add Layout', element: AddPotLayout },
  { path: '/layouts/edit/:id', name: 'Edit layout', element: EditPotLayout },


  //Heat units
  { path: '/heat-units', name: 'Heat Units', element: HeatUnit },
  { path: '/heat-units/add', name: 'Add Heat Unit', element: AddHeatUnit },
  { path: '/heat-units/edit/:id', name: 'Edit Heat Unit', element: EditHeatUnit },


  //Production units
  { path: '/production-units', name: 'Termelőegységek', element: ProductionUnit },
  { path: '/production-units/add', name: 'Add Production Unit', element: AddProductionUnit },
  { path: '/production-units/edit/:id', name: 'Edit Production Unit', element: EditProductionUnit },


  //Lot
  { path: '/lots', name: 'Virágcsoportok', element: Lot },
  { path: '/lot/add', name: 'Add Lot', element: AddLot },



  //Users
  { path: '/users', name: 'Users', element: Users },
  { path: '/users/add', name: 'Add User', element: AddUser },
  { path: '/users/edit/:id', name: 'Edit User', element: EditUser},


  //Work
  { path: '/works', name: 'Munkaköltség', element: Works },
  { path: '/works/add', name: 'Költség hozzáadása', element: AddWork },


  //Temperature
  { path: '/temperatures', name: 'Hőmérséklet', element: Temperatures },
  { path: '/temperatures/add', name: 'Hőmérséklet hozzáadása', element: AddTemperature },


  //Spend
  { path: '/spends', name: 'Fogyasztás', element: Spends },
  { path: '/spends/add', name: 'Fogyasztás hozzáadása', element: AddSpend },
]

export default routes
