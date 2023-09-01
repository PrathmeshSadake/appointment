import axios from "axios";
export const getExpenses = async () => {
  const { data } = await axios.get("http://localhost:8000/expenses");
  return data;
};
export const createExpense = async ({ name, price }) => {
  const { data } = await axios.post("http://localhost:8000/expenses", {
    name,
    price,
  });
  return data;
};
