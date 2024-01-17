import React from 'react'
import Button from './Button.js'
const projectSideBar = ({ Mode, onStartAddproject, project, onselectProject, selectedProjectId }) => {
  return (
    <aside className={`w-1/3 px-8 py-16 ${Mode ? 'bg-gray-600 text-white' : 'bg-stone-900 text-stone-50'
      } md:w-72 rounded-r-xl`}>
      <h2 className={`mb-8 font-bold uppercase md:text-xl ${Mode ? 'text-stone-200' : 'text-white'
        }`}>Your Projects</h2>
      <div>
        <Button darkMode={Mode} onClick={onStartAddproject}> + Add Project</Button>
        <ul className='mt-8'>
          {project.map((item) => {
            let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
            if (item.id === selectedProjectId) {
              cssClasses += ' bg-gray-1000!important hover: text-stone-200';
              console.log("Mode", Mode);
            }
            else {
              cssClasses += ' text-stone-400'
            }
            return (<li key={item.id}>
              <button onClick={() => onselectProject(item.id)} className={`${cssClasses} ${Mode ? 'bg-gray-800 hover:bg-gray-400 hover:text-stone-300 ' : 'bg-stone-800 hover:bg-stone-600'} `}>{item.title}</button>
            </li>)
          })}
        </ul>
      </div>
    </aside>
  )
}

export default projectSideBar