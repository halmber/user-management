import axiosInstance from "@api/index";
import { API_ENDPOINTS } from "@api/endpoints";
import { User } from "./types";

export const fetchUsers = async (): Promise<User[]> => {
  const response = await axiosInstance.get(API_ENDPOINTS.USERS);
  return response.data;
};
