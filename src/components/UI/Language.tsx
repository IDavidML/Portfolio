import React from 'react'

function Language({ label } : { label : string }) {
  return (
    <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-blue-300 text-blue-900">{label}</div>
  )
}

export default Language