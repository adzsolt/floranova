import React from 'react'
import PropTypes from 'prop-types'
import { CWidgetStatsD, CRow, CCol } from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cibFacebook,
  cibLinkedin,
  cibTwitter,
  cilCalendar,
  cilPlant,
  cilTerrain,
  cibHockeyapp,
  cibCoderwall,
  cilBattery0,
  cilMoney,
  cilChart,
  cilCalculator






} from '@coreui/icons'
import { CChart } from '@coreui/react-chartjs'

const WidgetsBrand1 = ({
                         withCharts,
                         work_spend,
                         spend,
                         totalSpend,
                         profit

}) => {
  const chartOptions = {
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      },
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  }

  return (
    <CRow>
      <CCol sm={6} lg={3}>
        <CWidgetStatsD
          className="mb-4"
          {...(withCharts && {
            chart: (
              <CChart
                className="position-absolute w-100 h-100"
                type="line"
                data={{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                    {
                      backgroundColor: 'rgba(255,255,255,.1)',
                      borderColor: 'rgba(255,255,255,.55)',
                      pointHoverBackgroundColor: '#fff',
                      borderWidth: 2,
                      data: [65, 59, 84, 84, 51, 55, 40],
                      fill: true,
                    },
                  ],
                }}
                options={chartOptions}
              />
            ),
          })}
          icon={<CIcon icon={ cilBattery0} height={52} className="my-4 text-white" />}
          values={[
            { title: 'Fogyasztási költség', value: spend },
          ]}
          style={{
            '--cui-card-cap-bg': '#d21eba',
          }}
        />
      </CCol>

      <CCol sm={6} lg={3}>
        <CWidgetStatsD
          className="mb-4"
          {...(withCharts && {
            chart: (
              <CChart
                className="position-absolute w-100 h-100"
                type="line"
                data={{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                    {
                      backgroundColor: 'rgba(255,255,255,.1)',
                      borderColor: 'rgba(255,255,255,.55)',
                      pointHoverBackgroundColor: '#fff',
                      borderWidth: 2,
                      data: [1, 13, 9, 17, 34, 41, 38],
                      fill: true,
                    },
                  ],
                }}
                options={chartOptions}
              />
            ),
          })}
          icon={<CIcon icon={cilMoney} height={52} className="my-4 text-white" />}
          values={[
            { title: 'Munka költség', value: work_spend }, ,
          ]}
          style={{
            '--cui-card-cap-bg': '#509826',
          }}
        />
      </CCol>

      <CCol sm={6} lg={3}>
        <CWidgetStatsD
          className="mb-4"
          {...(withCharts && {
            chart: (
              <CChart
                className="position-absolute w-100 h-100"
                type="line"
                data={{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                    {
                      backgroundColor: 'rgba(255,255,255,.1)',
                      borderColor: 'rgba(255,255,255,.55)',
                      pointHoverBackgroundColor: '#fff',
                      borderWidth: 2,
                      data: [78, 81, 80, 45, 34, 12, 40],
                      fill: true,
                    },
                  ],
                }}
                options={chartOptions}
              />
            ),
          })}
          icon={<CIcon icon={cilChart} height={52} className="my-4 text-white" />}
          values={[
            { title: 'Összköltség', value: totalSpend },
          ]}
          style={{
            '--cui-card-cap-bg': '#f8082b',
          }}
        />
      </CCol>

      <CCol sm={6} lg={3}>
        <CWidgetStatsD
          className="mb-4"
          color="info"
          {...(withCharts && {
            chart: (
              <CChart
                className="position-absolute w-100 h-100"
                type="line"
                data={{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                    {
                      backgroundColor: 'rgba(255,255,255,.1)',
                      borderColor: 'rgba(255,255,255,.55)',
                      pointHoverBackgroundColor: '#fff',
                      borderWidth: 2,
                      data: [35, 23, 56, 22, 97, 23, 64],
                      fill: true,
                    },
                  ],
                }}
                options={chartOptions}
              />
            ),
          })}
          icon={<CIcon icon={cilCalculator} height={52} className="my-4 text-white" />}
          values={[
            { title: 'Profit', value: profit },
          ]}
        />
      </CCol>
    </CRow>




  )
}

WidgetsBrand1.propTypes = {
  withCharts: PropTypes.bool,
}

export default WidgetsBrand1
