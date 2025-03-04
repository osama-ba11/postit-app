import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: [] }; //list of user is an object with empty array as initial value

export const userSlice = createSlice({
  name: "users", //name of the state

  initialState, // initial value of the state

  reducers: {},
});

export default userSlice.reducer;
