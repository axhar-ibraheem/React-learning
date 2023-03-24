import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsExpanded(false);
  };
  const addExpenseHandler = () => {
    setIsExpanded(true);
  };
  const cancelAddExpenseHandler = () => {
    setIsExpanded(false);
  };

  let content = <button onClick={addExpenseHandler}>Add New Expense</button>;

  if (isExpanded) {
    content = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={cancelAddExpenseHandler}
      />
    );
  }

  return <div className="new-expense">{content}</div>;
};

export default NewExpense;
