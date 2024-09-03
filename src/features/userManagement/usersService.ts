import axiosInstance from "@api/index";
import { API_ENDPOINTS } from "@api/endpoints";
import { Filters, User } from "./types";

export const fetchUsers = async (filters: Filters): Promise<User[]> => {
  const queryParams = Object.entries(filters)
    .filter(([_, value]) => value !== "")
    .map(([key, value]) => `${key}_like=${encodeURIComponent(value)}`)
    .join("&");

  const url = API_ENDPOINTS.USERS + (queryParams ? `?${queryParams}` : "");

  const response = await axiosInstance.get(url);
  return response.data;
};
