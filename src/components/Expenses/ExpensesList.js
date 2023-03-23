import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  if (props.items.length == 0) {
    return <h2 className="expenses-list__fallback">No expenses Found</h2>;
  } else if (props.items.length == 1) {
    return (
      <ul className="expenses-list">
        {props.items.map((item) => (
          <>
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
            <h3 className="expenses-list-single">
              Only single Expense here. Please add more...
            </h3>
          </>
        ))}
      </ul>
    );
  }

  return (
    <ul className="expenses-list">
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
