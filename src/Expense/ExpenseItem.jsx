
import {useState} from 'react'
import './expenseItem.css'
import ExpenseDate from './ExpenseDate.jsx'
import Card from '../UI/card'
function ExpenseItem (props){

    const [title , setTitle] = useState(props.title)
    const changeTitle = function(){
    setTitle("updated")//pass the value that you want to update
    } 
   

  
    return(
        <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
        <h2>{ title }</h2>
            
        <div className="expense-item__price">{ props.amount}</div>
            </div>

            <button onClick={changeTitle}>change Title</button>
        </Card>
    )
    
}

export default ExpenseItem
