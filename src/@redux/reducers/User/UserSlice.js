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

const signUp = createAsyncThunk(
  "user/signUp",
  async (payload, { getState, requestId, rejectWithValue }) => {
    const user = await Adapter.signUp(payload);

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
      state.error = null;
      state.id = null;
      state.stytchId = null;
      state.currentRequestId = null;
      state.username = null;
    },
  },
  extraReducers: (builder) => {
    thunkBaseCases(builder, fetchUser, {
      fulfilledCallback: (state, action) => {
        state.id = action.payload.id;
        state.stytchId = action.payload.stytchId;
        state.username = action.payload.username;
      },
    });
    thunkBaseCases(builder, signUp, {
      fulfilledCallback: (state, action) => {
        state.id = action.payload.id;
        state.stytchId = action.payload.stytchId;
        state.username = action.payload.username;
      },
    });
  },
});

export const { clearUser } = userSlice.actions;
export { fetchUser, signUp };
export default userSlice.reducer;
