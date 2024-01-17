import React from 'react'

function Button({ children, darkMode, ...props }) {
    return (
        <div>
            <button {...props} className={`px-4 py-2 text-xs md:text-base rounded-md ${darkMode
                    ? 'bg-gray-700 text-white hover:bg-gray-300 hover:text-gray-900'
                    : 'bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100'
                }`}>{children}</button>
        </div>
    )
}

export default Button