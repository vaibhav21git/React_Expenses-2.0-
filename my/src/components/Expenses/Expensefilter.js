import React from 'react';

import './Expensefilter.css';

const Expensesfilter = (props) => {

   function dropchangehandler(event)
   {
       props.onChangeyear(event.target.value);
   }

// here the expensefilter is controlled compononent because
// it's option is controlled by parent component   


  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select  value = {props.selected}onChange={dropchangehandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default Expensesfilter;