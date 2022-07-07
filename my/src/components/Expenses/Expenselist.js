import React from 'react'
import Expenseitem from './Expenseitem';
import './Expenselist.css'

function Expenselist() {


    
    let expensecontent = <p>No expenses found</p>;
    if(filteredexpenses.length > 0)
    {
      expensecontent =  filteredexpenses.map((expense)=><Expenseitem 
      key = {expense.id} 
      id  = {expense.id} 
      title  ={expense.title}
      amount = {expense.amount} 
      date  = {expense.date}/>)
    }


  return (
    <div>Expenselist</div>
  )
}

export default Expenselist