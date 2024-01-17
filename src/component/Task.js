import React from 'react'
import NewTask from './NewTask.js'
function Task({ Mode1,onAdd, tasks, deleteTask }) {
  console.log("tasks3 task", tasks);
  function handleDelete(id){
    deleteTask(id);
  }
  return (
    <div>
      <section>
        <h2 className={` mb-4 text-2xl font-bold ${Mode1}?text-gray-200:text-stone-700`}>Task List</h2>
        <NewTask Mode={Mode1} onAdd={onAdd} />
        {tasks.length === 0 && <p className={`my-4 ${Mode1 ? 'text-gray-200' : 'text-stone-800'}`}>This Project doesn't have any task yet!</p>}
        {tasks.length > 0 && <ul className='p-4 mt-8 rounded-md bg-stone-300 text-stone-100 '>
          {tasks.map((item) => <li className='flex justify-between my-4' key={item.id}>
            <span className='text-stone-700'>{item.text}</span>
            <button onClick={() => handleDelete(item.id)} className='text-stone-700 hover:text-red-500'>
            &#x2716;
            </button>
          </li>)}
        </ul>}
      </section>
    </div>
  )
}

export default Task