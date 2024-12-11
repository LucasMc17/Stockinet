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

const patternSlice = createSlice({
  name: "patterns",
  initialState: initialState,
  reducers: {
    selectPattern: (state, action) => {
      state.currentPattern = action.payload;
    },
    //   selectConversation: (state, action) => {
    //     state.currentConversation = action.payload;
    //   },
    //   readChunk: (state, action) => {
    //     state.currentConversation.messages[0].replicant_message += action.payload;
    //   },
    //   newUserMessage: (state, action) => {
    //     state.currentConversation.messages.unshift({
    //       user_message: action.payload,
    //       replicant_message: "",
    //     });
    //   },
  },
  extraReducers: (builder) => {
    builder
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
            list[item.id] = item;
          });
          state.patternList = list;
          state.currentPattern = action.payload[0];
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
export { fetchAllPatterns };
export default patternSlice.reducer;
