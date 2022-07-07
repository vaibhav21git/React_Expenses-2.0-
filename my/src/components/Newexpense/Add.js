import React from 'react'
import './Expenseform.css'


function Add(props) {


    function toggleit()
    {
        props.decide();
    }
   
  return (
    <div>
        <div className='new-expense__align'>
            <button  onClick = {toggleit} type = 'submit'>Add a new expense</button>
        </div>
    </div>
  )
}

export default Add