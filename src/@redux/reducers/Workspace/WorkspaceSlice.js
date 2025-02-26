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

const selectCurrentSize = createAsyncThunk(
  "workspace/selectCurrentSize",
  async (payload, { getState, requestId, rejectWithValue }) => {
    const sizeId = await Adapter.changeProjectSize(payload);

    if (sizeId?.errorStatus) {
      return rejectWithValue(sizeId);
    }

    return sizeId;
  },
);

const workspaceSlice = createSlice({
  name: "workspace",
  initialState,
  reducers: {
    selectProject: (state, action) => {
      state.currentProject = action.payload;
    },
    // selectCurrentSize: (state, action) => {
    //   state.currentSize = action.payload;
    // },
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
        const sizeInfo = {};
        pattern.sizes.forEach((size) => {
          sizeInfo[size.id] = size;
        });
        state.sizeInfo = sizeInfo;
        state.loadedProjects[action.payload.id] = pattern;
        state.currentSize = currentSize || null;
      },
    });
    thunkBaseCases(builder, selectCurrentSize, {
      fulfilledCallback: (state, action) => {
        console.log("ACTION: ", action);
        state.currentSize = action.payload;
      },
    });
  },
});

export const { selectProject } = workspaceSlice.actions;
export { fetchUserProjects, fetchOneProject, selectCurrentSize };
export default workspaceSlice.reducer;
