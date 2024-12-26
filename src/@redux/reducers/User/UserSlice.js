import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import initialState from "./_initialState.js";
import Adapter from "../../utils/Adapter.js";
import thunkBaseCases, { fulfilledBase } from "../../utils/thunkBaseCases.js";

const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (payload, { getState, requestId, rejectWithValue }) => {
    const user = await Adapter.getUser(payload);

    if (user?.errorStatus) {
      return rejectWithValue(user);
    }

    return user;
  },
);

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    clearUser: (state, action) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    thunkBaseCases(builder, fetchUser, {
      fulfilledCallback: (state, action) => {
        state.id = action.payload.id;
        state.stytchId = action.payload.stytchId;
      },
    });
  },
});

export const { clearUser } = userSlice.actions;
export { fetchUser };
export default userSlice.reducer;
