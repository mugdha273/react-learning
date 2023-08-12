import './ExpenseItem.css'

//props is an object that contains all the attributes of the component and makes it reusable

function ExpenseItem(props) {
  //only one root element is allowed per component
  return (
    <div className="expense-item">
      <div className="expense-item__date">{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.price}</div>
    </div>
  );
}

export default ExpenseItem;
