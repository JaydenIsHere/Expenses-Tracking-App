
import './newExpense.css';
import './expenseForm.css'
import ExpenseForm from './ExpenseForm'

function NewExpense(props){
   const newExpeseInputValues = (enteredExpenseData) => {
      const updatedExpenseValue = {
         ...enteredExpenseData,
         id:Math.random().toString()
      }
      props.onAddExpense(updatedExpenseValue)
      }
   return  (<div>

    <ExpenseForm onSaveValue={newExpeseInputValues}/>
   </div>)

}

export default NewExpense;