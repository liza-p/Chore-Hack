import {Pie} from 'react-chartjs-2';
import React, {Component} from 'react'
import "./style.css"

class Chart extends Component {

    constructor(props) {
        super(props)
        this.state = {
            labels: ['Hannah', 'Sierra', 'Ayla', 'Liza'],
            datasets: [{
                data: [30, 20, 30, 20],
                backgroundColor: ['red', 'orange', 'yellow', 'blue']
            }]
        }
    }

    render() {
        return (
            <div className="pie">
                <figcaption id="Chores"><strong>Percentace of Chores Completed Over the Last Week</strong></figcaption>
                <Pie
                    data={{
                        labels: this.state.labels,
                        datasets: this.state.datasets
                    }}
                    height = { 100 }
                />
                <br />
            </div>
        )
        }
}

export default Chart;