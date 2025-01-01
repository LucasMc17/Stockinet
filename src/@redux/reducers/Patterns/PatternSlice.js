import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import initialState from "./_initialState.js";
import Adapter from "../../utils/Adapter.js";
import thunkBaseCases from "../../utils/thunkBaseCases.js";

const fetchAllPatterns = createAsyncThunk(
  "patterns/fetchAllPatterns",
  async (payload, { getState, requestId, rejectWithValue }) => {
    const { method, page } = payload;
    const patterns = await Adapter.getAllPatterns(method, page);

    if (patterns?.errorStatus) {
      return rejectWithValue(patterns);
    }

    return patterns;
  },
);

const fetchPatternsByUser = createAsyncThunk(
  "patterns/fetchPatternsByUser",
  async (payload, { getState, requestId, rejectWithValue }) => {
    const patterns = await Adapter.getPatternsByUser();

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

const fetchPatternPreview = createAsyncThunk(
  "patterns/fetchPatternPreview",
  async (payload, { getState, requestId, rejectWithValue }) => {
    const pattern = await Adapter.getPatternPreview(payload);

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
    thunkBaseCases(builder, fetchOnePattern, {
      fulfilledCallback: (state, action) => {
        const result = { ...action.payload, fullyLoaded: true };
        state.currentPattern = result;
        if (state.patternList) {
          state.patternList[String(action.payload.id)] = result;
        }
      },
    });

    thunkBaseCases(builder, fetchPatternPreview, {
      fulfilledCallback: (state, action) => {
        state.currentPattern = action.payload;
      },
    });

    thunkBaseCases(builder, fetchAllPatterns, {
      fulfilledCallback: (state, action) => {
        const list = {};
        action.payload.forEach((item) => {
          list[item.id] = state.patternList[item.id]
            ? { ...state.patternList[item.id], ...item }
            : item;
        });
        state.patternList = list;
      },
    });

    thunkBaseCases(builder, fetchPatternsByUser, {
      fulfilledCallback: (state, action) => {
        const list = {};
        action.payload.forEach((item) => {
          list[item.id] = state.patternList[item.id]
            ? { ...state.patternList[item.id], ...item }
            : item;
        });
        state.patternList = list;
      },
    });
  },
});

export const { selectPattern } = patternSlice.actions;
export {
  fetchAllPatterns,
  fetchOnePattern,
  fetchPatternsByUser,
  fetchPatternPreview,
};
export default patternSlice.reducer;
