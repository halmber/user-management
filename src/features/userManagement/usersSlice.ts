import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Filters, User } from "./types";
import { fetchUsers } from "./usersService";

interface UsersState {
  users: User[];
  filters: Filters;
  loading: boolean;
  error: null | string;
}

const initialState: UsersState = {
  users: [],
  filters: {
    name: "",
    username: "",
    email: "",
    phone: "",
  },
  loading: false,
  error: null,
};

export const fetchUsersThunk = createAsyncThunk("users/fetchUsers", async () => {
  const users = await fetchUsers();
  return users;
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<{ field: keyof Filters; value: string }>) => {
      state.filters[action.payload.field] = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsersThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsersThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
  },
});

export const { setFilter } = userSlice.actions;
export default userSlice.reducer;
