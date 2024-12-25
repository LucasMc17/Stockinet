import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import initialState from "./_initialState.js";
import Adapter from "../../utils/Adapter.js";

// const authenticate = createAsyncThunk(
//   "user/authenticate",
//   async (payload, { getState, requestId, rejectWithValue }) => {
//     await Adapter.authenticate(payload);
//     return true;
//   },
// );

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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        const { requestId } = action.meta;
        if (!state.loading) {
          state.loading = true;
          state.currentRequestId = requestId;
        }
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (state.loading && state.currentRequestId === requestId) {
          state.id = action.payload.id;
          state.stytchId = action.payload.stytchId;
          state.loading = false;
          state.currentRequestId = undefined;
        }
      })
      .addCase(fetchUser.rejected, (state, action) => {
        const { requestId } = action.meta;
        state.loading = false;
        state.currentRequestId = undefined;
        state.error = action.error;
        state.currentRequestId = undefined;
        console.error(action.error);
      });
    // .addCase(authenticate.pending, (state, action) => {
    //   const { requestId } = action.meta;
    //   if (!state.loading) {
    //     state.loading = true;
    //     state.currentRequestId = requestId;
    //   }
    // })
    // .addCase(authenticate.fulfilled, (state, action) => {
    //   const { requestId } = action.meta;
    //   if (state.loading && state.currentRequestId === requestId) {
    //     // const result = { ...action.payload, fullyLoaded: true };
    //     state.id = 1;
    //     state.loading = false;
    //     state.currentRequestId = undefined;
    //   }
    // })
    // .addCase(authenticate.rejected, (state, action) => {
    //   const { requestId } = action.meta;
    //   state.loading = false;
    //   state.error = action.error;
    //   state.currentRequestId = undefined;
    //   console.error(action.error);
    // });
  },
});

export { fetchUser };
export default userSlice.reducer;
