import React from 'react'
import { Link } from 'react-router-dom'

export const List = () => {
  return (
        <div className='flex justify-center'>
            <h1>Hi I'm List Page</h1>
            <button className="bg-blue-500 mt-56 hover:bg-blue-700 h-10  text-white cursor-pointer font-bold py-2 px-4 rounded-full">
                <Link to='/form'>Form</Link>
            </button>
        </div>
  )
}
