import { useState } from 'react'
import Expenses from './Expense/Expenses';
import NewExpense from './NewExpense/NewExpense';

const DUMMY_EXPENSES = [
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

function App() {

 const [expensesData , setExpensesData ] = useState(DUMMY_EXPENSES)
  
  const addNewExpense = (enteredExpense) =>{
    setExpensesData(prevExpenses => {return [enteredExpense,...prevExpenses]})
    //relying on previous value
  }

  return (
    <div>
      <NewExpense onAddExpense={addNewExpense}/>
      <Expenses expenses={expensesData}/>
    </div>
  )
}

export default App
