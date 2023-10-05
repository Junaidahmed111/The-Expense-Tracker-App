import { useLayoutEffect } from "react";
import { Text } from "react-native";
function ManageExpense({ route, navigation }) {
  const editedexpenseId = route.params?.expenseId;
  const isEditing = !!editedexpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [isEditing, navigation]);
  return;
}
export default ManageExpense;
