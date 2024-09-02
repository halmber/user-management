import { Filters, TableFieldsType } from "@features/userManagement/types";
import { FC } from "react";

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
      <button
        onClick={handleClearFilters}
        className="w-full md:w-auto px-4 py-2 bg-black text-white rounded-md shadow-sm hover:bg-[#2f2f31] focus:outline-none active:bg-black transition-colors duration-200 ease-in-out"
      >
        Clear filters
      </button>
    </>
  );
};

export default FilterInputs;
