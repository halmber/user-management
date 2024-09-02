import { Filters, TableFieldsType } from "@features/userManagement/types";
import { FC, memo } from "react";
import Button from "./common/Button";
import TextField from "./common/TextField";

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
        <TextField
          key={column}
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
