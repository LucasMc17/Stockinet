import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import initialState from "./_initialState.js";
import Adapter from "../../utils/Adapter.js";
import thunkBaseCases from "../../utils/thunkBaseCases.js";

const fetchAllPatterns = createAsyncThunk(
  "patterns/fetchAllPatterns",
  async (payload, { getState, requestId, rejectWithValue }) => {
    const { method, page, type, difficulty, clear } = payload;
    const result = await Adapter.getAllPatterns(method, page, type, difficulty);

    if (result?.errorStatus) {
      return rejectWithValue(result);
    }

    result.clear = clear;

    return result;
  },
);

const fetchRecentPatterns = createAsyncThunk(
  "patterns/fetchRecentPatterns",
  async (payload, { getState, requestId, rejectWithValue }) => {
    const patterns = await Adapter.getRecentPatterns();

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
    clearPages: (state, action) => {
      state.pages = {};
      state.currentPage = 1;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    thunkBaseCases(builder, fetchRecentPatterns, {
      fulfilledCallback: (state, action) => {
        state.recentPatterns = action.payload;
      },
    });
    thunkBaseCases(builder, fetchOnePattern, {
      fulfilledCallback: (state, action) => {
        const result = { ...action.payload, fullyLoaded: true };
        state.patternList = state.patternList.map((pattern) => {
          return pattern.id === result.id ? result : pattern;
        });
        state.currentPattern = result;
      },
    });

    thunkBaseCases(builder, fetchPatternPreview, {
      fulfilledCallback: (state, action) => {
        state.currentPattern = action.payload;
      },
    });

    thunkBaseCases(builder, fetchAllPatterns, {
      fulfilledCallback: (state, action) => {
        const { patterns, page, clear } = action.payload;
        if (patterns?.[0]?.totalcount) {
          state.maxPages = Math.ceil(patterns[0].totalcount / 20);
        }
        if (clear) {
          state.pages = { [page]: patterns };
          state.currentPage = 1;
        } else {
          state.pages[page] = patterns;
        }
      },
    });

    thunkBaseCases(builder, fetchPatternsByUser, {
      fulfilledCallback: (state, action) => {
        state.patternList = action.payload;
      },
    });
  },
});

export const { selectPattern, clearPages, setPage } = patternSlice.actions;
export {
  fetchAllPatterns,
  fetchOnePattern,
  fetchPatternsByUser,
  fetchPatternPreview,
  fetchRecentPatterns,
};
export default patternSlice.reducer;
