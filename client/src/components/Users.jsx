import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createUser, getUsers } from "../api";
import { useState } from "react";
import TableRow from "./TableRow";

function Users() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");

  // Access the client
  const queryClient = useQueryClient();

  // Queries
  const { status, data, error } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  // Mutations
  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
  if (status === "loading") {
    return <span>Loading...</span>;
  }

  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }
  return (
    <div className='py-12 mx-auto max-w-6xl space-y-8'>
      <div className='flex items-center space-x-4'>
        <input
          type='text'
          name='name'
          value={name}
          onChange={(e) => setname(e.target.value)}
          className='block w-full rounded-md border-0 py-1 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
        />
        <input
          type='text'
          name='price'
          value={email}
          onChange={(e) => setemail(e.target.value)}
          className='block w-full rounded-md border-0 py-1 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
        />{" "}
        <input
          type='number'
          name='price'
          value={phone}
          onChange={(e) => setphone(e.target.value)}
          className='block w-full rounded-md border-0 py-1 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
        />{" "}
        <button
          onClick={() => {
            mutation.mutate({
              name,
              email,
              phone,
            });
          }}
          className='rounded-md min-w-fit py-1.5 px-2.5 text-sm bg-indigo-600 hover:bg-indigo-700 text-white'
        >
          Add
        </button>
      </div>
      <div className='mx-auto max-w-5xl overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
        <table className='min-w-full divide-y divide-gray-300'>
          <tbody className='divide-y divide-gray-200 bg-white'>
            {data.map((user) => (
              <TableRow key={user.id} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
