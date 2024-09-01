import { TableFieldsType, User } from "@features/userManagement/types";
import { FC } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import NoDataRow from "./NoDataRow";

interface UsersTableProps {
  users: User[];
  tableColumns: TableFieldsType;
}

const UsersTable: FC<UsersTableProps> = ({ users, tableColumns }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <TableHeader columns={tableColumns} />
      <tbody className="bg-white divide-y divide-gray-200">
        {users.length === 0 ? (
          <NoDataRow colSpan={tableColumns.length} />
        ) : (
          users.map((user) => <TableRow key={user.id} user={user} columns={tableColumns} />)
        )}
      </tbody>
    </table>
  );
};

export default UsersTable;
