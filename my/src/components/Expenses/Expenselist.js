import React from 'react'
import Expenseitem from './Expenseitem';
import './Expenselist.css'

function Expenselist(props) {

       if(props.item.length === 0)
       {
          return <h2 className='expenses-list__fallback'>No expenses found</h2>
       }  
     


  return (<ul className='expenselist'>
       {props.item.map((expense) =>(
      <Expenseitem 
      key = {expense.id} 
      id  = {expense.id} 
      title  ={expense.title}
      amount = {expense.amount} 
      date  = {expense.date}
      />
       ))}
    </ul>
  )
}

export default Expenselist