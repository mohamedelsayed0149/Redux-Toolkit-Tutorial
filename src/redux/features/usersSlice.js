import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk("users/fetchUsers", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
});

const initialState = {
  loading: false,
  data: [],
  error: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      state.loading = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [getUsers.rejected]: (state, action) => {
      state.error = "error";
      state.loading = false;
    },
  },
});

// export const {} = usersSlice.actions;

export default usersSlice.reducer;
