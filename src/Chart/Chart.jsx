

import './chart.css'
import ChartBar from './ChartBar.jsx'
const Chart = props =>{
    
    const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value)
    //map return new array and we only get value number
    const totalMaximum = Math.max(...dataPointValue)
    //find maximum value by passing Array with spread operator

    return <div className="chart">
    {props.dataPoints.map(dataPoint =>
     <ChartBar 
    key={dataPoint.label}
    value={dataPoint.value} 
    maxValue={totalMaximum} 
    label ={dataPoint.label}/>)}
    </div>
}

export default Chart