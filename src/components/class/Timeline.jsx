import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
class Timeline extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [
          {
            data: [
              {
                x: 'Code',
                y: [
                  new Date('2019-03-02').getTime(),
                  new Date('2019-03-04').getTime()
                ]
              },
              {
                x: 'Test',
                y: [
                  new Date('2019-03-04').getTime(),
                  new Date('2019-03-08').getTime()
                ]
              },
              {
                x: 'Validation',
                y: [
                  new Date('2019-03-08').getTime(),
                  new Date('2019-03-12').getTime()
                ]
              },
              {
                x: 'Deployment',
                y: [
                  new Date('2019-03-12').getTime(),
                  new Date('2019-03-18').getTime()
                ]
              }
            ]
          }
        ],
        options: {
          chart: {
            height: 350,
            type: 'rangeBar'
          },
          plotOptions: {
            bar: {
              horizontal: true
            }
          },
          xaxis: {
            type: 'datetime'
          }
        },
      
      
      };
    }

  

    render() {
      return (
        <div>
          <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="rangeBar" height={350} />
          </div>
          <div id="html-dist"></div>
        </div>
      );
    }
  }
  export default Timeline;
