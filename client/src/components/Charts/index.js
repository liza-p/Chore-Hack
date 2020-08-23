import React from "react";
// import Chart from "../Chart";
import BarChart from "../BarChart";
import "./style.css"

function Charts() {
  return (

    <div id="me" className="jumbotron jumbotron-fluid">
      <div className="container">
        <div className="row">
          <BarChart />
        </div>
      </div>
    </div>
  )
}
export default Charts;
