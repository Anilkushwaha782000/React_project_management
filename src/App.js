import logo from './logo.svg';
import './App.css';
import ProjectSideBar from './component/ProjectSideBar.js';
import NewProject from './component/NewProject.js';
import NoProjectSelected from './component/NoProjectSelected.js';
import SelectedProject from './component/SelectedProject.js';
import { useState } from 'react';
function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    project: [],
    task:[]
  });
 function handleAddtask(text){
  console.log("project dtaa",text);
  const taskId=Math.random();
  const newTask={
    text:text,
    id:taskId
  }
  setProjectState(prevState=>{
    return{
      ...prevState,
      selectedProjectId: undefined,
      project:[...prevState.project,newProject]
    }
  })
 }
 function handleDeletetask(){
  
 }
  function handleAddStartProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      };
    })
  }
  function handleAddProject(projectData){
    console.log("project dtaa",projectData);
    const projectId=Math.random();
    const newProject={
      ...projectData,
      id:projectId
    }
    setProjectState(prevState=>{
      return{
        ...prevState,
        selectedProjectId: undefined,
        project:[...prevState.project,newProject]
      }
    })

  }
  function handleSelectProject(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id
      };
    })
  }
  function handleDeleteProject() {
    setProjectState((prevState) => {
      const updatedProjects = prevState.project.filter((project) => project.id !== prevState.selectedProjectId);
  
      return {
        ...prevState,
        selectedProjectId: undefined,
        project: updatedProjects,
      };
    });
  }
  
  console.log(projectState)
  const selectedproject=projectState.project.find(project=>project.id===projectState.selectedProjectId)
  console.log("selectedproject",selectedproject);
  console.log("darkMode",darkMode);
  let content=<SelectedProject Mode={darkMode} onDelete={handleDeleteProject} project={selectedproject} onAdd={handleAddtask}/>;
  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} Mode={darkMode} />;
  }
  else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected Mode={darkMode} onStartAddproject={handleAddStartProject} />
  }
  return (
    <main   className={`h-screen flex gap-8 ${
      darkMode ? 'dark bg-gray-800 text-white' : 'bg-gray-100 text-black'
    }`}>
      <ProjectSideBar Mode={darkMode} project={projectState.project} onStartAddproject={handleAddStartProject} onselectProject={handleSelectProject} />
      {/* <NewProject/> */}
      <button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 bg-gray-800 text-white dark:text-black dark:bg-gray-300 p-2 rounded-full"
      >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      {content}

    </main>






  );
}

export default App;
