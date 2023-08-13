import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js';
import Card from './Card';

//props is an object that contains all the attributes of the component and makes it reusable
//props bundles all the attributes of the component into one object

function ExpenseItem(props) {
  //only one root element is allowed per component
  return (
    <Card className="expense-item">
      <div className="expense-item__date">
        {/* if you have no content in the div, you can use self closing tag */}
        <ExpenseDate date = {props.date}/>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.price}</div>
    </Card>
  );
}

export default ExpenseItem;
