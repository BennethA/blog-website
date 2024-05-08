import React from 'react'
import BlogPage from '../components/BlogPage'

const Blogs = () => {
  return (
    <div>
      <div className='  py-20 bg-blue-950 text-center text-yellow-500'>
        <h1 className='text-5xl lg:text-7xl leading-snug  font-bold mb-5'>
          Blog Page
        </h1>
      </div>
      <BlogPage/>
    </div>
  )
}

export default Blogs