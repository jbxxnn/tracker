import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const Expenses = [
    {
      title: "Monday",
      price: "357",
      description: "This is monday",
    },
    {
      title: "Tuesday",
      price: "192",
      description: "This is tuesday",
    },
    {
      title: "Wednesday",
      price: "920",
      description: "This is wednesday",
    },
  ];
  return (
    <div>
      <ExpenseItem
        title={Expenses[0].title}
        price={Expenses[0].price}
        description={Expenses[0].description}
      ></ExpenseItem>
      <ExpenseItem
        title={Expenses[1].title}
        price={Expenses[1].price}
        description={Expenses[1].description}
      ></ExpenseItem>
      <ExpenseItem
        title={Expenses[2].title}
        price={Expenses[2].price}
        description={Expenses[2].description}
      ></ExpenseItem>
    </div>
  );
}

export default App;
