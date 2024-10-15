import React from "react";
import FBasicColumn from "./components/function/BasicCloumn";
import FAreaColumn from "./components/function/BasicArea";
import "./App.css";
import LineChart from "./components/class/LineChart";
import BarChart from "./components/class/BarChart";
import RangeAreaChart from "./components/class/RangeAreaChart";
import Timeline from "./components/class/Timeline";
import PieChart from "./components/class/PieChart";
import Donut from "./components/class/Donut";
import HeatMap from "./components/class/Heatmap";


function App() {
  return (
    <div className="App">
      <FBasicColumn />
      <FAreaColumn />
      <div style={{ width: "400px" }}>
        <LineChart />
      </div>
      <BarChart />
      <RangeAreaChart />
      <div style={{ width: "400px" }}>
        <Timeline />
      </div>
      <PieChart />
      <Donut />
      <div style={{ width: "400px" }}>
        <HeatMap />
      </div>
    </div>
  );
}

export default App;
