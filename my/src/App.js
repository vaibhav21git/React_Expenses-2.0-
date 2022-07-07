import React from 'react';
import  Expenses from './components/Expenses/Expenses'
import Newexpense from './components/Newexpense/Newexpense';
import { useState } from 'react';

const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


function App() 
{
    const [expenses,setexpenses] = useState(DUMMY_DATA);

    function  addexpensehandler(expense)
    {
       console.log(expense);
       setexpenses(prevexpenses=>
        {
            return [...prevexpenses,expense];
        });
    };
  
  return (<div>
   <Newexpense onaddexpense = {addexpensehandler}/>
  <Expenses item = {expenses}/>
  </div>);
}

 export default App;

