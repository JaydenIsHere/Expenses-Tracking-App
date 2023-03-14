
import { useState } from 'react'
import Card from '../UI/card.jsx'
import ExpenseItem from './ExpenseItem.jsx'
import './expenses.css'
import ExpensesFilter from './ExpensesFilter.jsx'
import ExpenseList from './ExpenseList.jsx'

function Expenses({expenses}){
  const [filterValue,setFilterValue] = useState('');
  const updateFilterValue = function(val){
    setFilterValue(val)
  }
  const filteredExpenses = expenses.length > 0 && expenses.filter(expense => expense.date.getFullYear() === Number(filterValue))


return (   
  <Card className='expenses'>
        <ExpensesFilter selected={filterValue} updateFilterValue={updateFilterValue}/>
        <ExpenseList items ={filteredExpenses}/>
      </Card>
      )

}

export default Expenses

