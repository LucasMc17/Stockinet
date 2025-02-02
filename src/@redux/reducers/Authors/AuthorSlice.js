import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import initialState from "./_initialState.js";
import Adapter from "../../utils/Adapter.js";
import thunkBaseCases from "../../utils/thunkBaseCases.js";

const fetchAuthor = createAsyncThunk(
  "authors/fetchAuthor",
  async (payload, { getState, requestId, rejectWithValue }) => {
    const author = await Adapter.getAuthor(payload);

    if (author?.errorStatus) {
      return rejectWithValue(author);
    }

    return author;
  },
);

const authorSlice = createSlice({
  name: "authors",
  initialState,
  reducers: {
    clearAuthor: (state, action) => {
      state.currentAuthor = null;
    },
  },
  extraReducers: (builder) => {
    thunkBaseCases(builder, fetchAuthor, {
      fulfilledCallback: (state, action) => {
        state.currentAuthor = action.payload;
      },
    });
  },
});

export const { clearAuthor } = authorSlice.actions;
export { fetchAuthor };
export default authorSlice.reducer;
