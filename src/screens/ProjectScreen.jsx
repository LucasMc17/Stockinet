import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchOneProject,
  selectProject,
} from "../@redux/reducers/Workspace/WorkspaceSlice.js";
import {
  LoadingScreen,
  ErrorScreen,
  ProjectHead,
  ProjectGridPanel,
  ProjectStepsPanel,
  ProjectInitiation,
} from "../components";
import "./ProjectsScreen.module.scss";

export default function ProjectScreen() {
  const { patternId } = useParams();
  const dispatch = useDispatch();
  const {
    loading,
    error,
    currentProject,
    loadedProjects,
    sizeInfo,
    currentSize,
  } = useSelector((s) => s.workspace);

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

  if (currentProject && sizeInfo) {
    if (currentSize) {
      return (
        <div id="project-screen" className="screen">
          <ProjectHead
            title={currentProject.title}
            projectId={currentProject.project.id}
            size={{
              name: sizeInfo[currentSize].name,
              value: sizeInfo[currentSize],
            }}
            sizes={currentProject.sizes}
          />
          <div id="project-split">
            <ProjectGridPanel grids={currentProject.grids} />
            <ProjectStepsPanel
              stepSections={
                sizeInfo && currentSize ? sizeInfo[currentSize]?.sections : []
              }
            />
          </div>
        </div>
      );
    } else {
      return <ProjectInitiation currentProject={currentProject} />;
    }
  }
}
