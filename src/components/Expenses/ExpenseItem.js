import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log("clicked");
  };
  const delHandler = (e) => {
    if (e.target.classList.contains("delete")) {
      let item = e.target.parentElement;
      item.remove();
    }
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={delHandler} className="delete">
        Delete Expense
      </button>
    </Card>
  );
};

export default ExpenseItem;
