import { TableFieldsType, User } from "@features/userManagement/types";
import { FC } from "react";

interface UsersTableProps {
  users: User[];
  tableColumns: TableFieldsType;
}

const UsersTable: FC<UsersTableProps> = ({ users, tableColumns }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          {tableColumns.map((header) => (
            <th
              key={header}
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody className="bg-white divide-y divide-gray-200">
        {users.map((user) => (
          <tr key={user.id} className="hover:bg-gray-50">
            {tableColumns.map((column, index) => (
              <td
                key={column}
                className={`px-6 py-4 whitespace-nowrap text-sm text-gray-900 ${index === 0 && "font-medium"}`}
              >
                {user[column]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
