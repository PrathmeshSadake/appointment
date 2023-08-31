import axios from "axios";
export const getUsers = async () => {
  const { data } = await axios.get("http://localhost:8000/users");
  return data;
};
export const createUser = async ({ name, email, phone }) => {
  const { data } = await axios.post("http://localhost:8000/users", {
    name,
    email,
    phone,
  });
  return data;
};
