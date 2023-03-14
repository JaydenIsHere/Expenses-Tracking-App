
import { useState } from 'react';

import './newExpense.css';
import './expenseForm.css'
import ExpenseForm from './ExpenseForm'

function NewExpense(props){

   const [isaddingExpense,setIsAddingExpense] = useState(false);
   const toggleExpandingButton = () =>{
      setIsAddingExpense(prev => !prev)
      }

   let outputContent = <button onClick={toggleExpandingButton} className="addNewBtn">Add New Expense</button>

   const newExpeseInputValues = (enteredExpenseData) => {
      const updatedExpenseValue = {
         ...enteredExpenseData,
         id:Math.random().toString()
      }
      props.onAddExpense(updatedExpenseValue)
      }

      if(isaddingExpense){
         outputContent= <ExpenseForm onSaveValue={newExpeseInputValues} onToggleExpandingButton={toggleExpandingButton}/>
   
      }

   return  (<div>
    {outputContent}
   </div>)

}

export default NewExpense;