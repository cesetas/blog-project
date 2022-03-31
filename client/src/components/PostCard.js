import React from 'react'
import moment from 'moment'

export const PostCard = ({post}) => {
  console.log(post);
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img src="../../public/bg.jpg"
         alt={post.title}
         className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg" />
      </div>
      <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
        {post.title}
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <img src="" alt="" height="30px" width="30px" className="align-middle rounded-full" />
          <p className='inline align-middle text-gray-700 ml-2 text-lg'>aaaa</p>
        </div>
        <div className="font-medium text-gray-700">
          icon <span>time</span>
        </div>
      </div>
      <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">{post.excerpt}</p>
      <div className="text-center">
        <span className="transition  duration-500 transform hover:-translate-y-2 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Continue reading</span>
      </div>
    </div>
  )
}
