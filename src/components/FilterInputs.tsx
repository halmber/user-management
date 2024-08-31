import { Filters, TableFieldsType } from "@features/userManagement/types";
import { FC } from "react";

interface FilterInputsProps {
  tableColumns: TableFieldsType;
  filters: Filters;
  handleFilterChange: (field: keyof Filters, value: string) => void;
}

const FilterInputs: FC<FilterInputsProps> = ({ tableColumns, filters, handleFilterChange }) => {
  return (
    <>
      {tableColumns.map((column) => (
        <input
          key={column}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder={`Filter by ${column.charAt(0).toUpperCase() + column.slice(1)}`}
          value={filters[column]}
          onChange={(e) => handleFilterChange(column, e.target.value)}
        />
      ))}
    </>
  );
};

export default FilterInputs;
