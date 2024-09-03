import { useMemo } from "react";
import { User, Filters } from "@features/userManagement/types";

export const useFilteredUsers = (users: User[], filters: Filters) => {
  return useMemo(() => {
    const areFiltersEmpty = Object.values(filters).every((filter) => filter === "");

    if (areFiltersEmpty) {
      return users;
    }
    return users.filter(
      ({ name, username, email, phone }) =>
        name.toLowerCase().includes(filters.name.toLowerCase()) &&
        username.toLowerCase().includes(filters.username.toLowerCase()) &&
        email.toLowerCase().includes(filters.email.toLowerCase()) &&
        phone.includes(filters.phone),
    );
  }, [users, filters]);
};
