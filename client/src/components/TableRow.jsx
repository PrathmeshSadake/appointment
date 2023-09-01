/* eslint-disable react/prop-types */
const TableRow = ({ expense }) => {
  return (
    <tr>
      <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
        {expense.name}
      </td>
      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
        {expense.price}
      </td>
    </tr>
  );
};

export default TableRow;
