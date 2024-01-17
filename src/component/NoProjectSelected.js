import React from 'react'
import Button from './Button.js'
function NoProjectSelected({Mode,onStartAddproject}) {
  return (
    <div className='mt-24 text-center w-2/3'>
        <img className='w-16 h-16 object-contain mx-auto 'alt='No image found'/>
        <h2 className={`text-xl font-bold  ${Mode?"text-gray-200":"text-stone-500"} my-4`}>No Project Selected</h2>
        <p className='text-stone-400 mb-4'>Select a project or get started with a new one</p>
        <p className='mt-8'>
            <Button darkMode={Mode} onClick={onStartAddproject}> Create  new Project</Button>
        </p>
    </div>
  )
}

export default NoProjectSelected