import { TableFieldsType } from "@features/userManagement/types";
import { FC, memo } from "react";

interface TableHeaderProps {
  columns: TableFieldsType;
}

const TableHeader: FC<TableHeaderProps> = ({ columns }) => {
  return (
    <thead className="bg-gray-50">
      <tr>
        {columns.map((header) => (
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
  );
};

export default memo(TableHeader);
