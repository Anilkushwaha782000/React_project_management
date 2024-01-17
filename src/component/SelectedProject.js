import React from 'react'
import Task from './Task.js';
function SelectedProject({project,Mode,onDelete,onAdd,tasks,deleteTask}) {
  console.log("projectData4",project)
  console.log("darkMode",Mode);
  console.log("selected3 tasks",tasks);
    const formattedDate=new Date(project.dueDate).toLocaleDateString('en-US',{
        year:"numeric",
        month:"short",
        day:"numeric"
    })
  return (
    <div className='w-[35rem] mt-16'>
        <header className='pb-4 mb-4 border-b-2 border-stone-300'>
            <div className='flex items-center justify-between'>
            <h2 className={`text-3xl font-bold  mb-4 ${Mode}?'text-gary-800':"text-stone-500"`}>{project.title}</h2>
            <button onClick={onDelete} className={` hover:text-stone-900 ${Mode}?' hover:text-gray-400 text-gray-600':text-stone-600`}>Delete</button>
            </div>
            <p className={`mb-4 ${Mode}'text-gray-400'?:' text-stone-400'`}>{formattedDate}</p>
        <p className={`whitespace-pre-wrap ${Mode}'text-gray-600'?:'text-stone-600'`}>{project.description}</p>
        </header>
        <Task Mode1={Mode} deleteTask={deleteTask} tasks={tasks} onAdd={onAdd}/>
        
    </div>
  )
}

export default SelectedProject