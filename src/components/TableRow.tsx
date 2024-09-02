import { TableFieldsType, User } from "@features/userManagement/types";
import { FC, memo } from "react";

interface TableRowProps {
  user: User;
  columns: TableFieldsType;
}

const TableRow: FC<TableRowProps> = ({ user, columns }) => {
  return (
    <tr className="hover:bg-gray-50">
      {columns.map((column, index) => (
        <td
          key={column}
          className={`px-6 py-4 whitespace-nowrap text-sm text-gray-900 ${index === 0 ? "font-medium" : ""}`}
        >
          {user[column]}
        </td>
      ))}
    </tr>
  );
};

export default memo(TableRow);
