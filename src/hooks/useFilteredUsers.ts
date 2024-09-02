import { useMemo } from "react";
import { User, Filters } from "@features/userManagement/types";

export const useFilteredUsers = (users: User[], filters: Filters) => {
  return useMemo(() => {
    const areFiltersEmpty = Object.values(filters).every((filter) => filter === "");

    if (areFiltersEmpty) {
      return users;
    }
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
        user.username.toLowerCase().includes(filters.username.toLowerCase()) &&
        user.email.toLowerCase().includes(filters.email.toLowerCase()) &&
        user.phone.includes(filters.phone),
    );
  }, [users, filters]);
};
