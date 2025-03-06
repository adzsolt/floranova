import React, {useEffect} from 'react'
import {useState, useRef} from "react";
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CCardTitle,
  CSpinner,


} from '@coreui/react-pro'
import {CChartLine} from '@coreui/react-chartjs'
import {getStyle, hexToRgba} from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,

} from '@coreui/icons'

import {CDatePicker} from "@coreui/react-pro";

import avatar1 from '../../assets/images/avatars/1.jpg'
import avatar2 from '../../assets/images/avatars/2.jpg'
import avatar3 from '../../assets/images/avatars/3.jpg'
import avatar4 from '../../assets/images/avatars/4.jpg'
import avatar5 from '../../assets/images/avatars/5.jpg'
import avatar6 from '../../assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsBrand1 from '../widgets/WidgetsBrand1'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import axios from "axios";


const Dashboard = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');


  const controller = new AbortController();
  const controllerRef = useRef();

  const [businesses, setBusinesses] = useState([])
  const [currentMainTab, setCurrentMainTab] = useState('')
  const [currentMainId, setCurrentMainId] = useState('')

  const [heatUnits, setHeatUnits] = useState([])
  const [currentHeatUnitTab, setCurrentHeatUnitTab] = useState('')
  const [currentHeatUnitId, setCurrentHeatUnitId] = useState('')

  const [productionUnits, setProductionUnits] = useState([])
  const [currentProductiontUnitTab, setCurrentProductionUnitTab] = useState('')
  const [currentProductionUnitId, setCurrentProductionUnitId] = useState('')
  const [testData, setTestData] = useState([10, 100, 1000, 10000])


  const [businessSize, setBusinessSize] = useState(0)
  const [heatUnitSize, setHeatUnitSize] = useState(0)
  const [productionUnitSize, setProductionUnitSize] = useState(0)


  const [businessCoverage, setBusinessCoverage] = useState(0)
  const [heatUnitCoverage, setHeatUnitCoverage] = useState(0)
  const [productionUnitCoverage, setProductionUnitCoverage] = useState(0)


  const [businessPercentage, setBusinessPercentage] = useState(0)
  const [heatUnitPercentage, setHeatUnitPercentage] = useState(0)
  const [productionUnitPercentage, setProductionUnitPercentage] = useState(0)


  const [plantSpend, setPlantSpend] = useState(0)
  const [potSpend, setPotSpend] = useState(0)
  const [peatSpend, setPeatSpend] = useState(0)
  const [fertilizerSpend, setFertilizerSpend] = useState(0)
  const [spend, setSpend] = useState(0)
  const [workSpend, setWorkSpend] = useState(0)
  const [totalSpend, setTotalSpend] = useState(0)
  const [profit, setProfit] = useState(0)


  const date = new Date();

  const initial_start_date = new Date(date.getFullYear(), date.getMonth(), 1, date.getHours(), date.getMinutes());
  initial_start_date.setMinutes(initial_start_date.getMinutes() - initial_start_date.getTimezoneOffset());


  const initial_end_date = new Date(date.getFullYear(), date.getMonth() + 1, 0, date.getHours(), date.getMinutes());
  initial_end_date.setMinutes(initial_end_date.getMinutes() - initial_end_date.getTimezoneOffset());

  const [startDate, setStartDate] = useState(initial_start_date.toISOString().split('T')[0]);
  const [endDate, setEndDate] = useState(initial_end_date.toISOString().split('T')[0]);


  useEffect(() => {
    getData();


    return () => {
      controller.abort()
    }
  }, []);


  useEffect(() => {
    getHeatUnits(currentMainId);


    return () => {
      controller.abort()
    }
  }, [currentMainId]);


  useEffect(() => {
    getProductionUnits(currentHeatUnitId);


    return () => {
      controller.abort()
    }
  }, [currentHeatUnitId]);

  useEffect(() => {
    getInfo();


    return () => {
      controller.abort()
    }
  }, [currentProductionUnitId, startDate, endDate]);


  const getData = () => {
    setIsLoading(true);
    setError('');


    axios.get(
      '/get-dashboard-info',
      {
        signal: controller.signal
      }
    )
      .then((response) => {
        // console.log('get-users ', response);
        setBusinesses(response.data.businesses);
        setCurrentMainTab(response.data.businesses[0].name)
        setCurrentMainId(response.data.businesses[0].id)

        setHeatUnits(response.data.heat_units);
        setCurrentHeatUnitTab(response.data.heat_units[0].name)
        setCurrentHeatUnitId(response.data.heat_units[0].id)

        setProductionUnits(response.data.production_units);
        setCurrentProductionUnitTab(response.data.production_units[0].name)
        setCurrentProductionUnitId(response.data.production_units[0].id)
        //console.log(currentMainTab, currentMainId, currentHeatUnitTab,currentHeatUnitId  );
      })
      .catch(error => {
        console.log("ERROR:: ", error);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });

  }


  const getHeatUnits = () => {
    setIsLoading(true);
    setError('');

    axios.post(
      '/react-heat-units',
      {
        id: currentMainId,
        signal: controller.signal
      }
    )
      .then((response) => {

        setHeatUnits(response.data);

        if (typeof response.data[0] !== 'undefined') {

          setCurrentHeatUnitTab(response.data[0].name)
          setCurrentHeatUnitId(response.data[0].id)

        }
      })
      .catch(error => {
        console.log("ERROR:: ", error);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });

  }

  const getProductionUnits = () => {
    setIsLoading(true);
    setError('');

    axios.post(
      '/react-production-units',
      {
        id: currentHeatUnitId,
        signal: controller.signal
      }
    )
      .then((response) => {

        setProductionUnits(response.data);

        if (typeof response.data[0] !== 'undefined') {

          setCurrentProductionUnitTab(response.data[0].name)
          setCurrentProductionUnitId(response.data[0].id)

        }
      })
      .catch(error => {
        console.log("ERROR:: ", error);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });

  }

  const getInfo = () => {
    setIsLoading(true);
    setError('');

    if (controllerRef.current) {
      controllerRef.current.abort();
    }
    controllerRef.current = new AbortController();
    const signal = controllerRef.current.signal;
    console.log('jel', signal);
    axios.defaults.timeout = 300000;
    axios.post(
      '/dashboard-info',
      {
        business_id: currentMainId,
        heat_unit_id: currentHeatUnitId,
        production_unit_id: currentProductionUnitId,
        start: startDate,
        end: endDate
      },

      {
        signal: signal,
        timeout:300000
      }
    )
      .then((response) => {
        setBusinessSize(response.data.business_size)
        setHeatUnitSize(response.data.heat_unit_size)
        setProductionUnitSize(response.data.production_unit_size)

        setBusinessCoverage(response.data.business_coverage)
        setHeatUnitCoverage(response.data.heat_unit_coverage)
        setProductionUnitCoverage(response.data.production_unit_coverage)


        setBusinessPercentage(response.data.business_percentage)
        setHeatUnitPercentage(response.data.heat_unit_percentage)
        setProductionUnitPercentage(response.data.production_unit_percentage)

        setPlantSpend(response.data.spend_info.plant)
        setPeatSpend(response.data.spend_info.peat)
        setPotSpend(response.data.spend_info.pot)
        setFertilizerSpend(response.data.spend_info.fertilizer)
        setWorkSpend(response.data.spend_info.work)
        setSpend(response.data.spend_info.spend)

        setTotalSpend(response.data.spend_info.total)
        setProfit(response.data.profit)


      })
      .catch(error => {
        console.log("ERROR:: ", error);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });

  }

  const handleTabChange = (e) => {
    const id = e.currentTarget.getAttribute('id');
    const active = e.currentTarget.innerText;


    setCurrentMainTab(active);
    setCurrentMainId(id);

    //console.log(currentMainTab, currentMainId, e.currentTarget);

  }

  const handleHeatUnitTabChange = (e) => {
    const id = e.currentTarget.getAttribute('id');
    const active = e.currentTarget.innerText;
    setCurrentHeatUnitTab(active);
    setCurrentHeatUnitId(id);

  }

  const handleProductionUnitTabChange = (e) => {
    const id = e.currentTarget.getAttribute('id');
    const active = e.currentTarget.innerText;
    setCurrentProductionUnitTab(active);
    setCurrentProductionUnitId(id);
  }


  const handleSetStartDate = (d) => {
    setStartDate(d);
  }

  const handleSetEndDate = (d) => {
    setEndDate(d);
  }

  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const progressExample = [
    {title: 'Visits', value: '29.703 Users', percent: 40, color: 'success'},
    {title: 'Unique', value: '24.093 Users', percent: 20, color: 'info'},
    {title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning'},
    {title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger'},
    {title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary'},
  ]

  const progressGroupExample1 = [
    {title: 'Monday', value1: 34, value2: 78},
    {title: 'Tuesday', value1: 56, value2: 94},
    {title: 'Wednesday', value1: 12, value2: 67},
    {title: 'Thursday', value1: 43, value2: 91},
    {title: 'Friday', value1: 22, value2: 73},
    {title: 'Saturday', value1: 53, value2: 82},
    {title: 'Sunday', value1: 9, value2: 69},
  ]

  const progressGroupExample2 = [
    {title: 'Male', icon: cilUser, value: 53},
    {title: 'Female', icon: cilUserFemale, value: 43},
  ]

  const progressGroupExample3 = [
    {title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235'},
    {title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223'},
    {title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564'},
    {title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319'},
  ]

  const tableExample = [
    {
      avatar: {src: avatar1, status: 'success'},
      user: {
        name: 'Yiorgos Avraamu',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: {name: 'USA', flag: cifUs},
      usage: {
        value: 50,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: {name: 'Mastercard', icon: cibCcMastercard},
      activity: '10 sec ago',
    },
    {
      avatar: {src: avatar2, status: 'danger'},
      user: {
        name: 'Avram Tarasios',
        new: false,
        registered: 'Jan 1, 2021',
      },
      country: {name: 'Brazil', flag: cifBr},
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'info',
      },
      payment: {name: 'Visa', icon: cibCcVisa},
      activity: '5 minutes ago',
    },
    {
      avatar: {src: avatar3, status: 'warning'},
      user: {name: 'Quintin Ed', new: true, registered: 'Jan 1, 2021'},
      country: {name: 'India', flag: cifIn},
      usage: {
        value: 74,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'warning',
      },
      payment: {name: 'Stripe', icon: cibCcStripe},
      activity: '1 hour ago',
    },
    {
      avatar: {src: avatar4, status: 'secondary'},
      user: {name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2021'},
      country: {name: 'France', flag: cifFr},
      usage: {
        value: 98,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'danger',
      },
      payment: {name: 'PayPal', icon: cibCcPaypal},
      activity: 'Last month',
    },
    {
      avatar: {src: avatar5, status: 'success'},
      user: {
        name: 'Agapetus Tadeáš',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: {name: 'Spain', flag: cifEs},
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'primary',
      },
      payment: {name: 'Google Wallet', icon: cibCcApplePay},
      activity: 'Last week',
    },
    {
      avatar: {src: avatar6, status: 'danger'},
      user: {
        name: 'Friderik Dávid',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: {name: 'Poland', flag: cifPl},
      usage: {
        value: 43,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: {name: 'Amex', icon: cibCcAmex},
      activity: 'Last week',
    },
  ]


  return (
    <><CCard>

      <CCardBody>
        <CCardTitle>Üzletek</CCardTitle>
        <CRow>
          <CButtonGroup className="float-end me-3">
            {businesses.map(value => (
              <CButton
                color="primary"
                id={value.id}
                key={value.id}
                className="mx-0"
                active={value.name === currentMainTab}
                onClick={handleTabChange}
              >
                {value.name}
              </CButton>
            ))}
          </CButtonGroup>
        </CRow>
      </CCardBody>
    </CCard>
      <CCard>
        <CCardBody>
          <CCardTitle>Fűtőegységek </CCardTitle>
          <CRow>
            <CButtonGroup className="float-end me-3">
              {heatUnits.map(value => (
                <CButton
                  color="info"
                  id={value.id}
                  key={value.id}
                  active={value.name === currentHeatUnitTab}
                  onClick={handleHeatUnitTabChange}
                >
                  {value.name}
                </CButton>
              ))}
            </CButtonGroup>
          </CRow>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardBody>
          <CCardTitle>Termelőegységek</CCardTitle>
          <CRow>
            <CButtonGroup className="float-end me-3">
              {productionUnits.map(value => (
                <CButton
                  color="warning"
                  id={value.id}
                  key={value.id}
                  active={value.name === currentProductiontUnitTab}
                  onClick={handleProductionUnitTabChange}
                >
                  {value.name}
                </CButton>
              ))}
            </CButtonGroup>
          </CRow>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardBody>
          <CRow>
            <div style={{display: "flex"}}>
              {isLoading ? <CSpinner style={{margin: "auto"}}/> : ""}
            </div>

            <div className="row">
              <div className="col-lg-6">
                <CDatePicker
                  locale="en-US"
                  placeholder="Adj mage egy kezdési dátumot"
                  required
                  feedbackInvalid='A kezdési dátum kötelező'
                  date={startDate}
                  onDateChange={(date) => {
                    date.setMinutes(date.getMinutes() - date.getTimezoneOffset())
                    handleSetStartDate(date.toISOString().split('T')[0])
                  }
                  }
                />
              </div>

              <div className="col-lg-6">
                <CDatePicker
                  locale="en-US"
                  placeholder="Adj mage egy kezdési dátumot"
                  required
                  feedbackInvalid='A kezdési dátum kötelező'
                  date={endDate}
                  onDateChange={(date) => {
                    date.setMinutes(date.getMinutes() - date.getTimezoneOffset())
                    handleSetEndDate(date.toISOString().split('T')[0])
                  }
                  }
                />
              </div>
            </div>
          </CRow>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardBody>
          <WidgetsDropdown
            business_size={businessSize}
            business_coverage={businessCoverage}
            business_percentage={businessPercentage}

            heat_unit_size={heatUnitSize}
            heat_unit_coverage={heatUnitCoverage}
            heat_unit_percentage={heatUnitPercentage}

            production_unit_size={productionUnitSize}
            production_unit_coverage={productionUnitCoverage}
            production_unit_percentage={productionUnitPercentage}
          />
        </CCardBody>
      </CCard>

      <CCard>
        <CCardBody>
          <CCardTitle>Költségek a periódusra/üzlet</CCardTitle>
          <WidgetsBrand
            plant_spend={plantSpend}
            peat_spend={peatSpend}
            pot_spend={potSpend}
            fertilizer_spend={fertilizerSpend}

          />

          <WidgetsBrand1
            work_spend={workSpend}
            spend={spend}
            totalSpend={totalSpend}
            profit={profit}
          />
        </CCardBody>
      </CCard>
      {/*<CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Traffic {' & '} Sales</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">New Clients</div>
                        <div className="fs-5 fw-semibold">9,123</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Recurring Clients</div>
                        <div className="fs-5 fw-semibold">22,643</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0"/>
                  {progressGroupExample1.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-prepend">
                        <span className="text-medium-emphasis small">{item.title}</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="info-gradient" value={item.value1}/>
                        <CProgress thin color="danger-gradient" value={item.value2}/>
                      </div>
                    </div>
                  ))}
                </CCol>

                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Pageviews</div>
                        <div className="fs-5 fw-semibold">78,623</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Organic</div>
                        <div className="fs-5 fw-semibold">49,123</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0"/>

                  {progressGroupExample2.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg"/>
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">{item.value}%</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="warning-gradient" value={item.value}/>
                      </div>
                    </div>
                  ))}

                  <div className="mb-5"></div>

                  {progressGroupExample3.map((item, index) => (
                    <div className="progress-group" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg"/>
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">
                          {item.value}{' '}
                          <span className="text-medium-emphasis small">({item.percent}%)</span>
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="success-gradient" value={item.percent}/>
                      </div>
                    </div>
                  ))}
                </CCol>
              </CRow>

              <br/>

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople}/>
                    </CTableHeaderCell>
                    <CTableHeaderCell>User</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Country</CTableHeaderCell>
                    <CTableHeaderCell>Usage</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Payment Method</CTableHeaderCell>
                    <CTableHeaderCell>Activity</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar.src} status={item.avatar.status}/>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-medium-emphasis text-nowrap">
                          <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                          {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.country.flag} title={item.country.name}/>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="d-flex justify-content-between">
                          <div className="float-start">
                            <strong>{item.usage.value}%</strong>
                          </div>
                          <div className="float-end ms-1 text-nowrap">
                            <small className="text-medium-emphasis">{item.usage.period}</small>
                          </div>
                        </div>
                        <CProgress
                          thin
                          color={`${item.usage.color}-gradient`}
                          value={item.usage.value}
                        />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.payment.icon}/>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-medium-emphasis">Last login</div>
                        <div className="fw-semibold text-nowrap">{item.activity}</div>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>*/}
    </>
  );
}

export default Dashboard
