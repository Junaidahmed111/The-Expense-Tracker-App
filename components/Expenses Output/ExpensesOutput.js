import { View, Text,StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

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
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}
export default ExpensesOutput;

const styles = StyleSheet.create({
  container:{
padding:24,
backgroundColor:GlobalStyles.colors.primary700,
flex:1,
  }
})
