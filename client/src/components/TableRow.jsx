import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

/* eslint-disable react/prop-types */
const TableRow = ({ user }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async () => {
      console.log("Deleting");
      const { data } = await axios.delete(
        `http://localhost:8000/users/${user.id}`
      );
      console.log(data);
      return data;
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["user", user.id] });
    },
  });
  return (
    <tr>
      <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
        {user.name}
      </td>
      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
        {user.email}
      </td>
      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
        {user.phone}
      </td>
      <td className='flex space-x-1 relative whitespace-nowrap py-4 text-sm font-medium'>
        <button
          onClick={() => mutate()}
          className='py-1 px-2 bg-indigo-500 text-white'
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
