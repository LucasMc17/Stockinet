import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchOneProject,
  getSizeInfo,
  selectProject,
} from "../@redux/reducers/Workspace/WorkspaceSlice.js";
import { LoadingScreen, ErrorScreen } from "../components";
import ProjectHead from "../components/ProjectScreen/ProjectHead.jsx";
import ProjectGridPanel from "../components/ProjectScreen/ProjectGridPanel.jsx";
import ProjectStepsPanel from "../components/ProjectScreen/ProjectStepsPanel.jsx";
import ProjectInitiation from "../components/ProjectScreen/ProjectInitiation.jsx";
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

  useEffect(() => {
    if (currentProject?.sizes) {
      dispatch(getSizeInfo(currentProject.sizes));
    }
  }, [currentProject]);

  if (error) {
    return <ErrorScreen error={error} />;
  }

  if (loading) {
    return <LoadingScreen />;
  }

  if (currentProject && sizeInfo) {
    console.log(sizeInfo);
    console.log(currentSize);
    if (currentSize) {
      return (
        <div id="project-screen" className="screen">
          <ProjectHead
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
      return <ProjectInitiation sizes={currentProject.sizes} />;
    }
  }
}
