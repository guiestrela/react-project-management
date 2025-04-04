import { useState } from "react";

import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidecar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []    
  });

  function handleStartProject(){
    setProjectState(presState => {
      return {
        ...presState,
        selectedProjectId: null
      }
    });
  }

  function handleCancelProject(){
    setProjectState(presState => {
      return {
        ...presState,
        selectedProjectId: undefined
      }
    });
  }

  function handleAddProject(projectData){
    setProjectState(presState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId
      };

      return {
        ...presState,
        selectedProjectId: undefined,
        projects: [...presState.projects, newProject],
      }
    });
  }

  let content;

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelProject} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartProject} 
      projects={projectState.projects}
      />
      {content}      
    </main>
  );
}

export default App;
