import React from 'react'
import Expenseform from './Expenseform';
import  './Newexpense.css'
import { useState} from 'react'
import Add from './Add'


function Newexpense(props) {

  const [addexpense,setaddexpense] = useState(false);

  function changeit()
  {
     if(addexpense === false)
     setaddexpense(true);
     else
     setaddexpense(false);


  }




    function saveexpensedatahandler(enteredexpensedata)
    {
        const expensedata = {
            ...enteredexpensedata,
            id : Math.random().toString()
        }

        props.onaddexpense(expensedata);
    }

    if(addexpense === false)
    {
      return <div className='new-expense'>
      <Add  decide = {changeit}/>
      </div>
    }

  return (<div className='new-expense'>
    <Expenseform  decide = {changeit} onSaveexpensedata = {saveexpensedatahandler}/>
    </div>
  )
};

export default Newexpense