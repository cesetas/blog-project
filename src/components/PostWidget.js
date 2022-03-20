import React from 'react'

export const PostWidget = () => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        Recent Posts
      </h3>
      <div className="flex items-center w-full mb-4">
        <div className="w-16 flex-none">
          <img src="" alt="" className="align-middle rounded-full" />
        </div>
        <div className="flex-grow ml-4">
          <p className="text-gray-500 font-xs">16.03.2022</p>
          <a href="">Post title</a>
        </div>
      </div>
    </div>
  )
}
