import React from 'react'
import { PostWidget } from './PostWidget'
import { Categories } from './Categories'
import PostDetail from './PostDetail'
import Author from './Author'
import CommentsForm from './CommentsForm'
import Comments from './Comments'

const PostDetails = () => {
  return (
    <div className='container mx-auto px-10 mb-8'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            <div className='col-span-1 lg:col-span-8'>
                <PostDetail/>
                <Author/>
                <CommentsForm/>
                <Comments/>
            </div>
            <div className='col-span-1 lg:col-span-4'>
                <div className="relative lg:sticky top-8">
                    <PostWidget/>
                    <Categories/>
                </div>                
            </div>
        </div>
    </div>
  )
}

export default PostDetails