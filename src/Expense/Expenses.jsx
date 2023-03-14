
import { useState } from 'react'
import Card from '../UI/card.jsx'
import './expenses.css'
import ExpensesFilter from './ExpensesFilter.jsx'
import ExpenseList from './ExpenseList.jsx'
import ExpenseChart from './ExpenseChart.jsx'

function Expenses({expenses}){
  const [filterValue,setFilterValue] = useState('');
  const updateFilterValue = function(val){
    setFilterValue(val)
  }
  const filteredExpenses = expenses.length > 0 && expenses.filter(expense => expense.date.getFullYear() === Number(filterValue))


return (   
  <Card className='expenses'>
        <ExpensesFilter selected={filterValue} updateFilterValue={updateFilterValue}/>
        <ExpenseChart expenses={filteredExpenses}/>
        <ExpenseList items ={filteredExpenses}/>
      </Card>
      )

}

export default Expenses

