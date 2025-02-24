import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchOneProject,
  selectProject,
} from "../@redux/reducers/Workspace/WorkspaceSlice.js";
import { LoadingScreen, ErrorScreen } from "../components";
import ProjectHead from "../components/ProjectScreen/ProjectHead.jsx";
import ProjectGridPanel from "../components/ProjectScreen/ProjectGridPanel.jsx";
import ProjectStepsPanel from "../components/ProjectScreen/ProjectStepsPanel.jsx";
import "./ProjectsScreen.module.scss";

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

  if (currentProject) {
    return (
      <div id="project-screen">
        <ProjectHead />
        <div id="project-split">
          <ProjectGridPanel grids={currentProject.grids} />
          <ProjectStepsPanel
            stepSections={[
              {
                name: "section 1",
                steps: [
                  { text: "do it" },
                  { text: "do it right" },
                  { text: "do it good" },
                ],
              },
              {
                name: "section 2",
                steps: [
                  { text: "do it" },
                  { text: "do it right" },
                  { text: "do it good" },
                ],
              },
              {
                name: "section 3",
                steps: [
                  { text: "do it" },
                  { text: "do it right" },
                  { text: "do it good" },
                ],
              },
            ]}
          />
        </div>
      </div>
    );
  }
}
