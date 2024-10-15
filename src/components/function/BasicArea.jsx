import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const FAreaColumn = () => {
  // Define your series data locally here
  const monthDataSeries1 = {
    prices: [8107.85, 8128.0, 8122.9, 8165.5, 8340.7, 8423.7, 8423.5, 8514.3, 8481, 8487.3],
    dates: [
      "2024-10-01",
      "2024-10-02",
      "2024-10-03",
      "2024-10-04",
      "2024-10-05",
      "2024-10-06",
      "2024-10-07",
      "2024-10-08",
      "2024-10-09",
      "2024-10-10"
    ]
  };

  const [chartData] = useState({
    series: [
      {
        name: "STOCK ABC",
        data: monthDataSeries1.prices, // Correct data for prices
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 350,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Fundamental Analysis of Stocks",
        align: "left",
      },
      subtitle: {
        text: "Price Movements",
        align: "left",
      },
      labels: monthDataSeries1.dates, // Correct data for dates
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        opposite: true,
      },
      legend: {
        horizontalAlign: "left",
      },
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="area"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default FAreaColumn;
