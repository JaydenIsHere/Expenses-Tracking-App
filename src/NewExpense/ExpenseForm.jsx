import './expenseForm.css'
import {useState} from 'react'


function ExpenseForm(props){

const [expenseTitle,setExpenseTitle] = useState('')
const [expenseAmount,setExpenseAmount] = useState('')
const [expenseDate,setExpenseDate] = useState('')

//alternative
// const [expenseInput,setExpenseInput] = useState({
//         title:'',
//         amount:'',
//         date:new Date(expenseDate),
//         id: Math.random()
// })

// const getTitleInputValue = function(event){
//         return {...expenseInput,title: event.target.value}
//    }

const getTitleInputValue = function(event){
setExpenseTitle(event.target.value)
}

const getAmountInputValue = function(event){
        setExpenseAmount(event.target.value)
}

const getDateInputValue = function(event){
        setExpenseDate(event.target.value)
}

const createNewExpense = function(e){
        e.preventDefault();
const newExpenses = {
        title: expenseTitle,
        amount:expenseAmount,
        date:new Date(expenseDate)
};

props.onSaveValue(newExpenses);
setExpenseTitle('');
setExpenseAmount('');
setExpenseDate('');
}
   return  (
   <form className="new-expense" onSubmit={createNewExpense}>
<div className='new-expense__controls'>



    <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={expenseTitle} onChange={getTitleInputValue} />
    </div>

    <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" value={expenseAmount} onChange={getAmountInputValue} min="0.01" step="0.01"/>
    </div>

    <div className="new-expense__control">
            <label>Date</label>
            <input type="date" value={expenseDate} onChange={getDateInputValue} min="2019-01-01" max="2023-01-31"/>
    </div> 

    <div className='new-expense__actions'>
    <button className="new-expense button">Create New</button>
    </div>

</div>
        </form>)

};

export default ExpenseForm;