import ExpenseItem from './ExpenseItem'
import './expenseList.css'

function ExpenseList({items}){
    if(items.length === 0){
       return   <h1 className='expenses-list__fallback'>No expense found in this year</h1>
    }
    

    return (
<ul className='expenses-list'>

    {items.map(expense =>(
          <ExpenseItem  
          key= {expense.id} 
          title={expense.title} 
          amount={expense.amount} 
          date={expense.date}/>))}
</ul>
    )
    }

export default  ExpenseList