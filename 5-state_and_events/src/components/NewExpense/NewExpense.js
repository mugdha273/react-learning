import React from 'react';
import './NewExpense.css';
import ExpenseForm from './NewForm';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpenseHandler(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm saveExpenseDataHandler ={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense;