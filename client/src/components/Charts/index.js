import React from "react";
// import Chart from "../Chart";
import BarChart from "../BarChart";
import "./style.css"

function Charts () {
  return (

    <div id="me" className="jumbotron jumbotron-fluid">
  <div className="container">
    <br></br>
    <div className="row">
    <div className="col">
        <BarChart />
    </div>
    {/* <div className="col">
      <Chart />
    </div> */}
  </div>
  </div>
</div>
  )
}
export default Charts;