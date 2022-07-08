import React from 'react'
import './Chartbar.css'

function Chartbar(props) {

   let barfillht = '0%';

   if(props.maxvalue>0)
   {
    barfillht = Math.round((props.value/props.maxvalue)*100) + '%';
   }




    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style  = {{height : barfillht}}>
            
                </div>
            </div>
            <div className='chart-bar__label'>{props.label}</div>
        </div>
    )
}

export default Chartbar