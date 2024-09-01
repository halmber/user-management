import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Filters, User } from "./types";

interface UsersState {
  users: User[];
  filters: Filters;
  loading: boolean;
  error: null | string;
}

const initialState: UsersState = {
  users: [
    { id: 1, name: "Leanne Graham", username: "Bret", email: "jSincere@april.biz", phone: "1-770-736-8031" },
    { id: 2, name: "Ervin Howell", username: "Antonette", email: "Shanna@melissa.tv", phone: "010-692-6593" },
    { id: 3, name: "Clementine Bauch", username: "Samantha", email: "Nathan@yesenia.net", phone: "1-463-123-4447" },
  ],
  filters: {
    name: "",
    username: "",
    email: "",
    phone: "",
  },
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<{ field: keyof Filters; value: string }>) => {
      state.filters[action.payload.field] = action.payload.value;
    },
  },
});

export const { setFilter } = userSlice.actions;
export default userSlice.reducer;
