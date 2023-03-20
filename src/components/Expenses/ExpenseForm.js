import "./ExpenseForm.css";

const ExpenseForm = () => {
  const expensAddHandler = (e) => {
    e.preventDefault();
    let title = document.getElementById("ExpenseTitle").value;
    let amount = document.getElementById("ExpenseAmount").value;
    let date = document.getElementById("date").value;
    console.log(title, amount, date);
  };

  return (
    <form action="" onChange={expensAddHandler}>
      <div className="expense-form">
        <label htmlFor="ExpenseTitle">Expense Title</label>
        <input type="text" id="ExpenseTitle" />
        <label htmlFor="ExpenseAmount">Expense Amount</label>
        <input type="number" id="ExpenseAmount" />
        <label htmlFor="date">Date</label>
        <input type="date" id="date" />
        <div>
          <button>Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
