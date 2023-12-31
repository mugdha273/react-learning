import React, {useState} from 'react';

import Card from './Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  
  //another way to do this
  {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>} */}
  //so in this way if first condition is met then javascript will return the second condition

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;



      // {/* <ExpenseItem
      //   title={props.items[0].title}
      //   amount={props.items[0].amount}
      //   date={props.items[0].date}
      // />
      // <ExpenseItem
      //   title={props.items[1].title}
      //   amount={props.items[1].amount}
      //   date={props.items[1].date}
      // />
      // <ExpenseItem
      //   title={props.items[2].title}
      //   amount={props.items[2].amount}
      //   date={props.items[2].date}
      // />
      // <ExpenseItem
      //   title={props.items[3].title}
      //   amount={props.items[3].amount}
      //   date={props.items[3].date}
      // /> */}