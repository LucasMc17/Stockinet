import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchOneProject,
  selectProject,
} from "../@redux/reducers/Workspace/WorkspaceSlice.js";
import { LoadingScreen, ErrorScreen } from "../components";
// import "./ProjectsScreen.module.scss";

export default function ProjectScreen() {
  const { patternId } = useParams();
  const dispatch = useDispatch();
  const { loading, error, currentProject, loadedProjects } = useSelector(
    (s) => s.workspace,
  );

  useEffect(() => {
    const projectFromCache = loadedProjects[patternId];
    if (projectFromCache) {
      dispatch(selectProject(projectFromCache));
    } else {
      dispatch(fetchOneProject(patternId));
    }
    return () => {
      dispatch(selectProject(null));
    };
  }, []);

  if (error) {
    return <ErrorScreen error={error} />;
  }

  if (loading) {
    return <LoadingScreen />;
  }

  return <div>{JSON.stringify(currentProject)}</div>;
}
