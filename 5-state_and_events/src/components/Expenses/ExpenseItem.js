import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js';
import Card from './Card';

//useState is a react hook that allows you to manage state in a functional component. All react hooks start with use
import React, {useState} from 'react';

//props is an object that contains all the attributes of the component and makes it reusable
//props bundles all the attributes of the component into one object

const ExpenseItem = (props) => {
  //all the hooks must be called at the top level of the component, not inside any if statements or for loops and also not outside of near imports 
  
  //why are we using const here? because when setTitle it re-evaluates the function hence line no. 15 will be re-evaulated 
  const [title, setTitle] = useState(props.title)
  
  const clickHandler = () => {

    //this does not assign a new value to title rightaway, it just schedules a state update and react will re-evaulated this exact component (not others) and update the title value
    setTitle('Updated!');
    console.log(title);
  };
  //only one root element is allowed per component
  return (
    <Card className="expense-item">
      <div className="expense-item__date">
        {/* if you have no content in the div, you can use self closing tag */}
        <ExpenseDate date = {props.date}/>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${props.price}</div>

      {/* here you don't put () after clickHandler because you don't want to execute it immediately, you want to execute it when the button is clicked. We point it to the function and whenver that action is performed react executes it for us*/}
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
}

export default ExpenseItem;
