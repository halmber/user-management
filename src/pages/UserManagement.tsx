import FilterInputs from "@components/FilterInputs";
import UsersTable from "@components/UsersTable";
import { TABLE_COLUMNS } from "@features/userManagement/constants";
import { Filters } from "@features/userManagement/types";
import { fetchUsersThunk, setFilter } from "@features/userManagement/usersSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";

const UserManagement = () => {
  const { users, filters } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsersThunk());
  }, [dispatch]);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      user.username.toLowerCase().includes(filters.username.toLowerCase()) &&
      user.email.toLowerCase().includes(filters.email.toLowerCase()) &&
      user.phone.includes(filters.phone),
  );

  const handleFilterChange = (field: keyof Filters, value: string) => {
    dispatch(setFilter({ field, value }));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <div className="mb-4 grid grid-cols-1 md:grid-cols-4 gap-4">
        <FilterInputs tableColumns={TABLE_COLUMNS} filters={filters} handleFilterChange={handleFilterChange} />
      </div>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <UsersTable users={filteredUsers} tableColumns={TABLE_COLUMNS} />
      </div>
    </div>
  );
};

export default UserManagement;
