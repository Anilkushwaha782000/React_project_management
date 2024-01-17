import React from 'react'
import { forwardRef } from 'react'
const Input=forwardRef(
    function Input({darkMode,label,textarea,...props},ref) {
        const buttonStyle=`w-full p-1 border-b-2 rounded-sm ${
            darkMode
              ? 'border-stone-700 bg-stone-200 text-black focus:outline-none focus:border-gray-800'
              : 'border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600'
          }`
      return (
        <p className='flex flex-col gap-1 my-4'>
            <label className={`text-sm font-bold uppercase ${darkMode ? 'text-gray-300':'text-stone-500'} `}>{label}</label>
            {textarea?<textarea ref={ref} className={buttonStyle} {...props}/>:<input ref={ref} className={buttonStyle} {...props}/>}
        </p>
      )
    }
)

export default Input