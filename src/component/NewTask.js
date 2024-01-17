import React, { useState } from 'react'

function NewTask({Mode,onAdd}) {
    const [task, setTask] = useState("");
    console.log("mode newtask",Mode);
    function handleChange(event) {
        console.log(event.target.value);
        setTask(event.target.value);
    }
    function handleClickbutton(){
        setTask('');
        onAdd(task);
    }
    return (
        <div className='flex items-center gap-4'>
            <input  className={`w-64 px-2 py-1 rounded-sm ${Mode ? 'text-black' : 'text-gray-900 bg-stone-400'}`} type='text' onChange={handleChange} value={task} />
            <button className={`${Mode}?'text-gray-300 hover:text-gray-100':'text-stone-700 hover:text-stone-900'`} onClick={handleClickbutton}>Add Task</button>
        </div>
    )
}

export default NewTask