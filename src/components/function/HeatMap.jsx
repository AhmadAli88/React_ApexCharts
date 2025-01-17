import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const generateData = (count, { min, max }) => {
  return Array.from({ length: count }, (_, i) => ({
    x: `w${i + 1}`,
    y: Math.floor(Math.random() * (max - min + 1)) + min,
  }));
};

const HeatMap = () => {
  const [chartData] = useState({
    series: [
      {
        name: 'Metric1',
        data: generateData(18, { min: 0, max: 90 }),
      },
      {
        name: 'Metric2',
        data: generateData(18, { min: 0, max: 90 }),
      },
      {
        name: 'Metric3',
        data: generateData(18, { min: 0, max: 90 }),
      },
      {
        name: 'Metric4',
        data: generateData(18, { min: 0, max: 90 }),
      },
      {
        name: 'Metric5',
        data: generateData(18, { min: 0, max: 90 }),
      },
      {
        name: 'Metric6',
        data: generateData(18, { min: 0, max: 90 }),
      },
      {
        name: 'Metric7',
        data: generateData(18, { min: 0, max: 90 }),
      },
      {
        name: 'Metric8',
        data: generateData(18, { min: 0, max: 90 }),
      },
      {
        name: 'Metric9',
        data: generateData(18, { min: 0, max: 90 }),
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'heatmap',
      },
      dataLabels: {
        enabled: false,
      },
      colors: ['#008FFB'],
      title: {
        text: 'HeatMap Chart (Single color)',
      },
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="heatmap"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default HeatMap;
