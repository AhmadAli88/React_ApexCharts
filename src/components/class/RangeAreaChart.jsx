import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

class RangeAreaChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [
          {
            name: 'New York Temperature',
            data: [
              {
                x: 'Jan',
                y: [-2, 4]
              },
              {
                x: 'Feb',
                y: [-1, 6]
              },
              {
                x: 'Mar',
                y: [3, 10]
              },
              {
                x: 'Apr',
                y: [8, 16]
              },
              {
                x: 'May',
                y: [13, 22]
              },
              {
                x: 'Jun',
                y: [18, 26]
              },
              {
                x: 'Jul',
                y: [21, 29]
              },
              {
                x: 'Aug',
                y: [21, 28]
              },
              {
                x: 'Sep',
                y: [17, 24]
              },
              {
                x: 'Oct',
                y: [11, 18]
              },
              {
                x: 'Nov',
                y: [6, 12]
              },
              {
                x: 'Dec',
                y: [1, 7]
              }
            ]
          }
        ],
        options: {
          chart: {
            height: 350,
            type: 'rangeArea'
          },
          stroke: {
            curve: 'monotoneCubic'
          },
          title: {
            text: 'New York Temperature (all year round)'
          },
          markers: {
            hover: {
              sizeOffset: 5
            }
          },
          dataLabels: {
            enabled: false
          },
          yaxis: {
            labels: {
              formatter: (val) => {
                return val + '°C'
              }
            }
          }
        },
      
      
      };
    }

  

    render() {
      return (
        <div>
          <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="rangeArea" height={350} />
          </div>
          <div id="html-dist"></div>
        </div>
      );
    }
  }

  export default RangeAreaChart;