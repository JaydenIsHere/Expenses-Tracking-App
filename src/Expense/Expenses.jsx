
import { useState } from 'react'
import Card from '../UI/card.jsx'
import ExpenseItem from './ExpenseItem.jsx'
import './expenses.css'
import ExpensesFilter from './ExpensesFilter.jsx'

const [storeFilterValue,setStoreFilterValue] = useState()

function Expenses({expenses}){
  const passFilterValue = function(val){
    setStoreFilterValue(val)
  }
return (   
  <Card className='expenses'>
        <ExpensesFilter passFilterValue={passFilterValue}/>
        {
            expenses.map(expense =>(
                <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>
            ))
        }
      </Card>)

}

export default Expenses