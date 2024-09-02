import { Filters, TableFieldsType } from "@features/userManagement/types";
import { FC, memo } from "react";
import Button from "./common/Button";

interface FilterInputsProps {
  tableColumns: TableFieldsType;
  filters: Filters;
  handleFilterChange: (field: keyof Filters, value: string) => void;
  handleClearFilters: () => void;
}

const FilterInputs: FC<FilterInputsProps> = ({ tableColumns, filters, handleFilterChange, handleClearFilters }) => {
  return (
    <>
      {tableColumns.map((column) => (
        <input
          key={column}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
          placeholder={`Filter by ${column.charAt(0).toUpperCase() + column.slice(1)}`}
          value={filters[column]}
          onChange={(e) => handleFilterChange(column, e.target.value)}
        />
      ))}
      <Button onClick={handleClearFilters}>Clear filters</Button>
    </>
  );
};

export default memo(FilterInputs);
