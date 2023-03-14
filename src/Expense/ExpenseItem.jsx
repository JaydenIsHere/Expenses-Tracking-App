
import {useState} from 'react'
import './expenseItem.css'
import ExpenseDate from './ExpenseDate.jsx'
import Card from '../UI/card'
function ExpenseItem (props){

    const changeTitle = function(){
    alert("updated")//pass the value that you want to update
    } 
 
   
    return(

        <li>
        <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
        <h2>{ props.title }</h2>
            
        <div className="expense-item__price">{ props.amount}</div>
            </div>
            <button onClick={changeTitle}>change Title</button>
        </Card>
        </li>
    )
    
}

export default ExpenseItem
