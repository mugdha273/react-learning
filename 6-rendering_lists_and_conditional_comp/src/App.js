import './components/Expenses/Expenses.css';
import React, {useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const dummy_expenses = [
  { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 2, 28) },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2020, 2, 28) },
  { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2022, 2, 28) },
  { id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2023, 2, 28) },
];

function App() {

  const [expenses, setExpense] = useState(dummy_expenses);

  const addExpenseHandler = (expense) =>{
    setExpense(prevExpense =>{
      return [expense, ...prevExpense];
    });
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpenseHandler={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
