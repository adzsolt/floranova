import React from 'react'
import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
  CWidgetStatsB,
} from '@coreui/react-pro'
import { getStyle } from '@coreui/utils'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowTop, cilOptions } from '@coreui/icons'

const WidgetsDropdown = ({business_size,
                           business_coverage,
                           business_percentage,
                           heat_unit_size,
                           heat_unit_coverage,
                           heat_unit_percentage,
                           production_unit_size,
                           production_unit_coverage,
                           production_unit_percentage,}) => {
  console.log(business_size);
  return (
    <CRow>
      <CCol sm={6} lg={4}>
        <CWidgetStatsB
          className="mb-3"
          color="primary"
          inverse
          progress={{ value: business_percentage }}
          text="Az üzlet átlag lefedettsége a periódusra"
          title="Üzlet"
          value={
            <>
            {business_percentage}%{' '}
              <span className="fs-6 fw-normal">
                (Össz: {business_size}; Használat:{business_coverage})
              </span>
            </>
          }
        />

      </CCol>
      <CCol sm={6} lg={4}>
        <CWidgetStatsB
          className="mb-3"
          color="info"
          inverse
          progress={{ value: heat_unit_percentage }}
          text="Az fűtőegység átlag lefedettsége a periódusra"
          title="Fűtőegység"
          value={
            <>
              {heat_unit_percentage}%{' '}
              <span className="fs-6 fw-normal">
                (Össz: {heat_unit_size}; Használat:{heat_unit_coverage})
              </span>
            </>
          }
        />
      </CCol>
      <CCol sm={6} lg={4}>
        <CWidgetStatsB
          className="mb-3"
          color="warning"
          inverse
          progress={{ value: production_unit_percentage }}
          text="A termelőegység átlag lefedettsége a periódusra"
          title="Termelőegység"
          value={
            <>
              {production_unit_percentage}%{' '}
              <span className="fs-6 fw-normal">
                (Össz: {production_unit_size}; Használat:{production_unit_coverage})
              </span>
            </>
          }
        />
      </CCol>
      {/*<CCol sm={6} lg={3}>*/}
      {/*  <CWidgetStatsA*/}
      {/*    className="mb-4"*/}
      {/*    color="danger-gradient"*/}
      {/*    value={*/}
      {/*      <>*/}
      {/*        44K{' '}*/}
      {/*        <span className="fs-6 fw-normal">*/}
      {/*          (-23.6% <CIcon icon={cilArrowBottom} />)*/}
      {/*        </span>*/}
      {/*      </>*/}
      {/*    }*/}
      {/*    title="Sessions"*/}
      {/*    action={*/}
      {/*      <CDropdown alignment="end">*/}
      {/*        <CDropdownToggle color="transparent" caret={false} className="p-0">*/}
      {/*          <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />*/}
      {/*        </CDropdownToggle>*/}
      {/*        <CDropdownMenu>*/}
      {/*          <CDropdownItem>Action</CDropdownItem>*/}
      {/*          <CDropdownItem>Another action</CDropdownItem>*/}
      {/*          <CDropdownItem>Something else here...</CDropdownItem>*/}
      {/*          <CDropdownItem disabled>Disabled action</CDropdownItem>*/}
      {/*        </CDropdownMenu>*/}
      {/*      </CDropdown>*/}
      {/*    }*/}
      {/*    chart={*/}
      {/*      <CChartBar*/}
      {/*        className="mt-3 mx-3"*/}
      {/*        style={{ height: '70px' }}*/}
      {/*        data={{*/}
      {/*          labels: [*/}
      {/*            'January',*/}
      {/*            'February',*/}
      {/*            'March',*/}
      {/*            'April',*/}
      {/*            'May',*/}
      {/*            'June',*/}
      {/*            'July',*/}
      {/*            'August',*/}
      {/*            'September',*/}
      {/*            'October',*/}
      {/*            'November',*/}
      {/*            'December',*/}
      {/*            'January',*/}
      {/*            'February',*/}
      {/*            'March',*/}
      {/*            'April',*/}
      {/*          ],*/}
      {/*          datasets: [*/}
      {/*            {*/}
      {/*              label: 'My First dataset',*/}
      {/*              backgroundColor: 'rgba(255,255,255,.2)',*/}
      {/*              borderColor: 'rgba(255,255,255,.55)',*/}
      {/*              data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],*/}
      {/*              barPercentage: 0.6,*/}
      {/*            },*/}
      {/*          ],*/}
      {/*        }}*/}
      {/*        options={{*/}
      {/*          maintainAspectRatio: false,*/}
      {/*          plugins: {*/}
      {/*            legend: {*/}
      {/*              display: false,*/}
      {/*            },*/}
      {/*          },*/}
      {/*          scales: {*/}
      {/*            x: {*/}
      {/*              grid: {*/}
      {/*                display: false,*/}
      {/*                drawTicks: false,*/}
      {/*              },*/}
      {/*              ticks: {*/}
      {/*                display: false,*/}
      {/*              },*/}
      {/*            },*/}
      {/*            y: {*/}
      {/*              grid: {*/}
      {/*                display: false,*/}
      {/*                drawBorder: false,*/}
      {/*                drawTicks: false,*/}
      {/*              },*/}
      {/*              ticks: {*/}
      {/*                display: false,*/}
      {/*              },*/}
      {/*            },*/}
      {/*          },*/}
      {/*        }}*/}
      {/*      />*/}
      {/*    }*/}
      {/*  />*/}
      {/*</CCol>*/}
    </CRow>
  )
}

export default WidgetsDropdown
