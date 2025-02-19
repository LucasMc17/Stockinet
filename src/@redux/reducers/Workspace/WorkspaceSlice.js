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

const workspaceSlice = createSlice({
  name: "workspace",
  initialState,
  reducers: {
    selectProject: (state, action) => {
      state.currentProject = action.payload;
    },
  },
  extraReducers: (builder) => {
    thunkBaseCases(builder, fetchUserProjects, {
      fulfilledCallback: (state, action) => {
        state.projectList = action.payload;
      },
    });
  },
});

export const { selectProject } = workspaceSlice.actions;
export { fetchUserProjects };
export default workspaceSlice.reducer;
