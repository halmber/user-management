import { TABLE_COLUMNS } from "./constants";

export type TableFieldsType = typeof TABLE_COLUMNS;

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export interface Filters {
  name: string;
  username: string;
  email: string;
  phone: string;
}
