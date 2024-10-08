import FilterInputs from "@components/FilterInputs";
import UsersTable from "@components/UsersTable";
import LoadingSpinner from "@components/LoadingSpinner";
import { TABLE_COLUMNS } from "@features/userManagement/constants";
import { Filters } from "@features/userManagement/types";
import { clearFilters, fetchUsersThunk, setFilter } from "@features/userManagement/usersSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useFilteredUsers } from "@hooks/useFilteredUsers";
import { useCallback, useEffect } from "react";
import ErrorMessage from "@components/ErrorMessage";

const UserManagement = () => {
  const { users, filters, loading, error } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  const filteredUsers = useFilteredUsers(users, filters);

  const handleFilterChange = useCallback(
    (field: keyof Filters, value: string) => {
      dispatch(setFilter({ field, value }));
    },
    [dispatch],
  );

  const handleClearFilters = useCallback(() => {
    dispatch(clearFilters());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchUsersThunk());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <div className="mb-4 grid grid-cols-1 md:grid-cols-5 gap-4">
        <FilterInputs
          tableColumns={TABLE_COLUMNS}
          filters={filters}
          handleFilterChange={handleFilterChange}
          handleClearFilters={handleClearFilters}
        />
      </div>

      {error && <ErrorMessage message={error}></ErrorMessage>}

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        {loading ? <LoadingSpinner /> : <UsersTable users={filteredUsers} tableColumns={TABLE_COLUMNS} />}
      </div>
    </div>
  );
};

export default UserManagement;
