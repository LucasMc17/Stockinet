import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchUserProjects,
  selectProject,
} from "../@redux/reducers/Workspace/WorkspaceSlice.js";
import { LoadingScreen, ErrorScreen } from "../components";
import { Link } from "react-router-dom";
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
    return <ErrorScreen error={error} />;
  }

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="screen">
      {projectList.map((project, i) => (
        <Link to={`/workspace/project/${project.id}`} key={i}>
          <h1>{project.title}</h1>
        </Link>
      ))}
    </div>
  );
}
