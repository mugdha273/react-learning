import React, {useState} from 'react';
import './NewForm.css';
import NewExpense from './NewExpense';

const ExpenseForm = (props) =>{
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [enteredTitle, setEnteredTitle] = useState('');

    // const titleChangeHandler = (event) =>{
    //     setEnteredTitle(event.target.value);
    // }
    // const [enteredAmount, setEnteredAmount] = useState('');

    // const amountChangeHandler = (event) =>{
    //     setEnteredAmount(event.target.value);
    // }
    
    // const [enteredDate, setEnteredDate] = useState('');

    // const dateChangeHandler = (event) =>{
    //     setEnteredDate(event.target.value);
    // }

    //rather than using 3 different states, we can use one state and update it with the help of spread operator
    
    //this is a good approach as it is not dependent on the previous state which ensures that the state is always the latest as react gives snapshot of the state

    const inputChangeHandler = (identifier, value) =>{
        if(identifier == "title"){
            console.log(value);
            setEnteredTitle(value);
        }
        else if(identifier == "amount"){
            console.log(value);
            setEnteredAmount(value);
        }
        else{
            console.log(value);
            setEnteredDate(value);
        }

    }

    //this is not a good approach as it is dependent on the previous state
    // const titleChangeHandler = (event) =>{
    //     setUserInput({
    //         //spread operator to copy the existing values of the object 
    //         ...userInput,
    //         enteredTitle: event.target.value
    //     });
    // }

    const submitHandler = (event) =>{
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date : new Date(enteredDate)
        }
        
        //clear the input fields after submitting the form
        props.saveExpenseDataHandler(expenseData);
        // setEnteredTitle('');
        // setEnteredAmount('');
        // setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className = "new-expense__control">
                    <label>enteredTitle</label>
                    <input type = "text" value={enteredTitle} onChange = {(event) => {inputChangeHandler("title", event.target.value)}}/>
                </div>
                <div className = "new-expense__control">
                    <label>Amount</label>
                    <input type = "number" value={enteredAmount} onChange= {(event) => {inputChangeHandler("amount", event.target.value)}}/>
                </div>
                <div className = "new-expense__control">
                    <label>Date</label>
                    <input type = "date" value = {enteredDate} onChange= {(event) => {inputChangeHandler("date", event.target.value)}}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
            
        </form>
    )
}

export default ExpenseForm;