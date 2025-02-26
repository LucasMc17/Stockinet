import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import initialState from "./_initialState.js";
import Adapter from "../../utils/Adapter.js";
import thunkBaseCases from "../../utils/thunkBaseCases";

const fetchUserProjects = createAsyncThunk(
  "workspace/fetchUserProjects",
  async (payload, { getState, requestId, rejectWithValue }) => {
    const projects = await Adapter.getUserProjects();

    if (projects?.errorStatus) {
      return rejectWithValue(projects);
    }

    return projects;
  },
);

const fetchOneProject = createAsyncThunk(
  "workspace/fetchOneProject",
  async (payload, { getState, requestId, rejectWithValue }) => {
    const project = await Adapter.getOneProject(payload);

    if (project?.errorStatus) {
      return rejectWithValue(project);
    }

    return project;
  },
);

const workspaceSlice = createSlice({
  name: "workspace",
  initialState,
  reducers: {
    selectProject: (state, action) => {
      state.currentProject = action.payload;
    },
    getSizeInfo: (state, action) => {
      const result = {};
      action.payload.forEach((size) => {
        result[size.id] = size;
      });
      state.sizeInfo = result;
    },
    selectCurrentSize: (state, action) => {
      state.currentSize = action.payload;
    },
  },
  extraReducers: (builder) => {
    thunkBaseCases(builder, fetchUserProjects, {
      fulfilledCallback: (state, action) => {
        state.projectList = action.payload;
      },
    });
    thunkBaseCases(builder, fetchOneProject, {
      fulfilledCallback: (state, action) => {
        const { pattern, currentSize } = action.payload;
        state.currentProject = pattern;
        state.loadedProjects[action.payload.id] = pattern;
        state.currentSize = currentSize || null;
      },
    });
  },
});

export const { selectProject, getSizeInfo, selectCurrentSize } =
  workspaceSlice.actions;
export { fetchUserProjects, fetchOneProject };
export default workspaceSlice.reducer;
