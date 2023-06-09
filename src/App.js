import "./components/Expenses/ExpenseItem";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import React, { useState } from "react";
import NewExpense from "./components/NewExpenses/NewExpense";

const App = () => {
  const expensesArray = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "New Delhi",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      location: "Haryana",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: "Mumbia",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "Banglore",
    },
  ];

  const [expenses, setExpenses] = useState(expensesArray);

  const addExpenseHandler = (expense) => {
    setExpenses([expense, ...expenses]);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};
// return React.createElement(
//   "div",
//   { className: "class" },
//   React.createElement("h1", {}, "lets get started"),
//   React.createElement(Expenses, { items: expenses })
// );
export default App;
