import { useContext, useLayoutEffect } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import IconButton from "../components/UI/IconButton";
import Button from "../components/UI/Button";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

function ManageExpense({ route, navigation }) {
  const expensesCtx = useContext(ExpensesContext);

  const editedexpenseId = route.params?.expenseId;
  const isEditing = !!editedexpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [isEditing, navigation]);

  function deleteExpenseHandler() {
    //console.log(editedexpenseId);
    expensesCtx.deleteExpense(editedexpenseId);
    navigation.goBack();
  }
  function cancelHanlder() {
    navigation.goBack();
  }
  function confirmHanlder() {
    if (isEditing) {
      expensesCtx.updateExpense(editedexpenseId, {
        description: "Test!!!!!!!!",
        amount: 99.99,
        date: new Date("2023-10-5"),
      });
    } else {
      expensesCtx.addExpense({
        description: "Test",
        amount: 19.99,
        date: new Date("2022-10-5"),
      });
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onCancel={cancelHanlder} 
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}
export default ManageExpense;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
