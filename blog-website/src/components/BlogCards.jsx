import React from 'react'
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa6'

const BlogCards = ({blogs, currentPage, selectedCategory, pageSize}) => {
  const filteredBlogs = blogs.filter((blogs) => 
    !selectedCategory || blogs.category === selectedCategory).slice((currentPage -1) *pageSize, currentPage *pageSize)
  return (
    <div className='flex flex-wrap gap-6 justify-center p-4 '>
      {
        filteredBlogs.map((blog) =>  
        <Link to={`/blogs/${blog.id}`} key={blog.id} className='text-white relative p-5 max-w-52 shadow-white shadow rounded cursor-pointer'>
          <div>
            <img src={blog.image} alt="" className='w-full'/>
          </div>
          <h1 className='mt-4 mb-12 font-bold hover:text-blue-600 cursor-pointer'>{blog.title}</h1>
          <div className='absolute -bottom-0'>
            <p className=' text-gray-700 mb-2'>
              <FaUser className='inline-flex items-center mr-2'/>
              {blog.author}
            </p>
            <p className='text-sm text-gray-500'>
              Published: {blog.published_date}
            </p>
          </div>
        </Link>)
      }
    </div>
  )
}

export default BlogCards