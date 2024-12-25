import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import initialState from "./_initialState.js";
import Adapter from "../../utils/Adapter.js";

const fetchAllPatterns = createAsyncThunk(
  "patterns/fetchAllPatterns",
  async (payload, { getState, requestId, rejectWithValue }) => {
    const patterns = await Adapter.getAllPatterns();

    if (patterns?.errorStatus) {
      return rejectWithValue(patterns);
    }

    return patterns;
  },
);

const fetchPatternsByUser = createAsyncThunk(
  "patterns/fetchPatternsByUser",
  async (payload, { getState, requestId, rejectWithValue }) => {
    const patterns = await Adapter.getPatternsByUser(userId);

    if (patterns?.errorStatus) {
      return rejectWithValue(patterns);
    }

    return patterns;
  },
);

const fetchOnePattern = createAsyncThunk(
  "patterns/fetchOnePattern",
  async (payload, { getState, requestId, rejectWithValue }) => {
    const pattern = await Adapter.getOnePattern(payload);

    if (pattern?.errorStatus) {
      return rejectWithValue(pattern);
    }

    return pattern;
  },
);

const patternSlice = createSlice({
  name: "patterns",
  initialState: initialState,
  reducers: {
    selectPattern: (state, action) => {
      state.currentPattern = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOnePattern.pending, (state, action) => {
        const { requestId } = action.meta;
        if (!state.loading) {
          state.loading = true;
          state.currentRequestId = requestId;
        }
      })
      .addCase(fetchOnePattern.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (state.loading && state.currentRequestId === requestId) {
          const result = { ...action.payload, fullyLoaded: true };
          state.loading = false;
          state.currentRequestId = undefined;
          state.currentPattern = result;
          if (state.patternList) {
            state.patternList[String(action.payload.id)] = result;
          }
        }
      })
      .addCase(fetchOnePattern.rejected, (state, action) => {
        const { requestId } = action.meta;
        state.loading = false;
        state.error = action.error;
        state.currentRequestId = undefined;
        console.error(action.error);
      })

      .addCase(fetchAllPatterns.pending, (state, action) => {
        const { requestId } = action.meta;
        if (!state.loading) {
          state.loading = true;
          state.currentRequestId = requestId;
        }
      })
      .addCase(fetchAllPatterns.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (state.loading && state.currentRequestId === requestId) {
          state.loading = false;
          state.currentRequestId = undefined;
          const list = {};
          action.payload.forEach((item) => {
            list[item.id] = state.patternList[item.id]
              ? { ...state.patternList[item.id], ...item }
              : item;
          });
          state.patternList = list;
        }
      })
      .addCase(fetchAllPatterns.rejected, (state, action) => {
        const { requestId } = action.meta;
        state.loading = false;
        state.error = action.error;
        state.currentRequestId = undefined;
        console.error(action.error);
      });
    //   .addCase(postConversation.pending, (state, action) => {
    //     const { requestId } = action.meta;
    //     if (!state.loading) {
    //       state.loading = true;
    //       state.currentRequestId = requestId;
    //     }
    //   })
    //   .addCase(postConversation.fulfilled, (state, action) => {
    //     const { requestId } = action.meta;
    //     if (state.loading && state.currentRequestId === requestId) {
    //       state.loading = false;
    //       state.currentRequestId = undefined;
    //       state.currentConversation = action.payload;
    //     }
    //   })
    //   .addCase(postConversation.rejected, (state, action) => {
    //     const { requestId } = action.meta;
    //     if (state.loading && state.currentRequestId === requestId) {
    //       state.loading = false;
    //       state.error = action.error;
    //       state.currentRequestId = undefined;
    //     }
    //   })
  },
});

export const { selectPattern } = patternSlice.actions;
export { fetchAllPatterns, fetchOnePattern };
export default patternSlice.reducer;
