import React, { useState } from 'react'
import './Expenses.css'
import Card from '../UI/Card'
import Expensesfilter from './Expensefilter';
import Expenselist from './Expenselist';

// here card is used as a parent of all because all components
// are present inside the card to reomve repitition in css by
// using props.children since card is custiom elements therfore css is added differently


function Expenses(props) {

     const [curryear,setcurryear] = useState('2020');

     function viewyear(year)
     {
         setcurryear(year);
         console.log(year);
     }

     const filteredexpenses = props.item.filter(expense =>
      {
         return expense.date.getFullYear().toString() === curryear;
      }) 

          
      return ( 
        <div>
      <Card className='expenses'>
      <Expensesfilter selected = {curryear} onChangeyear = {viewyear}/>
      <Expenselist item  = {filteredexpenses}/>
      </Card>
      </div>
      );
    }


export default Expenses