import React from 'react'
import Chartbar from './Chartbar'
import './Chart.css'

function Chart(props) {

    const datapointvalues = props.datapoints.map(datapoint =>
        datapoint.value);

    const totalmax = Math.max(...datapointvalues);


  return (
    <div className='chart'>
     {props.datapoints.map(datapoint => <Chartbar 
      value = {datapoint.value}
      maxvalue = {totalmax}
      label ={datapoint.label}
      key = {datapoint.label}
      />)}



    </div>
  )
}

export default Chart