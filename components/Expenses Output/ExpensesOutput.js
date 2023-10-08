import { View, Text, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

function ExpensesOutput({ expenses, expensesPeriod, fallBackText }) {
  let content = <Text style={styles.infoText}> {fallBackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  );
}
export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary700,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
  },
  infoText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});
