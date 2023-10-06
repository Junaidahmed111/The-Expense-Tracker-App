import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 49.99,
    date: new Date("2020-09-14"),
  },
  {
    id: "e2",
    description: "A pair of watches",
    amount: 59.99,
    date: new Date("2021-10-14"),
  },
  {
    id: "e3",
    description: "some bananas",
    amount: 69.99,
    date: new Date("2024-02-14"),
  },
  {
    id: "e4",
    description: "A Book",
    amount: 5.99,
    date: new Date("2023-09-05"),
  },
  {
    id: "e5",
    description: "A laptop",
    amount: 99.99,
    date: new Date("2023-10-04"),
  },
  {
    id: "e6",
    description: "A pair of shoes",
    amount: 49.99,
    date: new Date("2020-09-14"),
  },
  {
    id: "e7",
    description: "A pair of watches",
    amount: 59.99,
    date: new Date("2021-10-14"),
  },
  {
    id: "e8",
    description: "some bananas",
    amount: 69.99,
    date: new Date("2024-02-14"),
  },
  {
    id: "e9",
    description: "A Book",
    amount: 5.99,
    date: new Date("2023-09-05"),
  },
  {
    id: "e10",
    description: "A laptop",
    amount: 99.99,
    date: new Date("2023-10-04"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer({ state, action }) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.data, id: id }, ...state];
    case "DELETE":
    case "UPDATE":
    default:
      return state;
  }
}
function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", data: expenseData });
  }
  function deleteExpense(id) {
    dispatch({ type: "DELETE", data: id });
  }
  function updateExpense(id, expenseData) {
    dispatch({ type: "DELETE", data: { id: id, dataa: expenseData } });
  }
  return <ExpensesContext.Provider>{children}</ExpensesContext.Provider>;
}

export default ExpensesContextProvider;
