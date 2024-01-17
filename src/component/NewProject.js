import React, { useRef } from 'react'
import Input from './Input.js'
import Modal from './Modal.js';
function NewProject({ Mode,onAdd }) {
    const title = useRef();
    const modal=useRef();
    const description = useRef();
    const duedate = useRef();
    const pstyle=`mb-4 ${Mode}text-gray-400?:text-stone-400`;
    function handleSave(){
    const enteredTitle=title.current.value;
    const enteredDescription=description.current.value;
    const enteredDuedate=duedate.current.value;
    if(enteredTitle===''||enteredDescription===""||enteredDuedate===""){
        modal.current.open();
        return;
    }
    onAdd({
        title:enteredTitle,
        description:enteredDescription,
        dueDate:new Date(enteredDuedate)
    })
    }
    
    return (
        <>
        <Modal ref={modal} Mode={Mode} buttonCaption="Okay">
            <h2 className={`text-xl font-bold  ${Mode?"text-gray-600":"text-stone-500"} my-4`}>Invalid Input!</h2>
            <p className={pstyle}>
                Oops...looks like you forget to enter a value.
            </p>
            <p className={pstyle}>Please make sure you provide a valid value for every input field.</p>
        </Modal>

        <div className='w-[35rem] mt-16'>
            <menu className='flex items-center justify-end gap-4 my-4'>
                <li><button className={`text-stone-800 hover:text-stone-950 ${Mode
                    ? ' text-white hover:text-white'
                    : ' text-stone-400  hover:text-stone-100'
                    }`}>Cancle</button></li>
                <li><button
                onClick={handleSave}
                 className={`px-6 py-2 rounded-md  text-stone-50 hover:bg-stone-950 ${Mode
                    ? ' text-white hover:text-white bg-slate-500 hover:bg-slate-400'
                    : ' text-stone-400 bg-stone-800  hover:text-stone-100'}`}>Save</button></li>
            </menu>
            <div>
                <Input type='text' ref={title} darkMode={Mode} label="Title" />
                <Input ref={description} darkMode={Mode} label="Description" textarea />
                <Input type='date' ref={duedate} darkMode={Mode} label="Due Date" />
            </div>
        </div>
        </>
    )
}

export default NewProject