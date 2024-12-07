import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import initialState from "./_initialState.js";

const patternSlice = createSlice({
  name: "patterns",
  initialState: initialState,
  reducers: {
    loadPatterns: (state, action) => {
      state.patternList = action.payload;
      state.currentPattern = action.payload[0];
    },
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
    builder;
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

export const { loadPatterns, selectPattern } = patternSlice.actions;
// export { fetchConversationById, postConversation };
export default patternSlice.reducer;
