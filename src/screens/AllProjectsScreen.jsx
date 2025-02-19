import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchUserProjects,
  selectProject,
} from "../@redux/reducers/Workspace/WorkspaceSlice.js";
import { LoadingScreen, ErrorScreen } from "../components";
// import "./AllProjectsScreen.module.scss";

export default function AllProjectsScreen() {
  const dispatch = useDispatch();
  const { loading, error, projectList } = useSelector((s) => s.workspace);

  useEffect(() => {
    dispatch(fetchUserProjects());
    return () => {
      // clear the list
    };
  }, []);

  if (error) {
    return <ErrorScreen />;
  }

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div>
      {projectList.map((project) => (
        <h1>{project.title}</h1>
      ))}
    </div>
  );
}
