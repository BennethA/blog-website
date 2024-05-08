import React from 'react'
import { FaClock, FaUser } from 'react-icons/fa6'
import { useLoaderData } from 'react-router-dom'

const SingleBlog = () => {
  //useLoaderData gets the data from its route
  const data = useLoaderData()
  const {title, image, author, published_date, reading_time, content} = data[0]
  return (
    <div>
      <div className='py-40 bg-blue-950 text-yellow-600 px-4'>
        <h1 className='text-5xl lg:text-7xl font-bold mb-5'>Blog Details:</h1>
      </div>
      <div className='max-w-7xl mx-auto my-12'>
        <div className='lg:w-3/4 mx-auto'>
          <div className='m-2'>
            <img src={image} alt="" className='w-full mx-auto rounded'/>
            <h2 className='text-3xl font-bold mb-4 text-blue-500 cursor-pointer mt-8'>{title}</h2>
            <p className=' mb-3 text-gray-600  justify-center align-middle'><FaUser className='inline-flex items-center mr-2'/> {author} | {published_date}</p>
            <p className=' mb-3 text-gray-600  justify-center align-middle'><FaClock className='inline-flex items-center mr-2'/> {reading_time}</p>
            <p className='text-sm text-gray-500 mb-6'>{content}</p>
            <div className='text-sm text-gray-500 mb-6'>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae tempora magnam quibusdam, consequuntur magni voluptatem ducimus soluta, quidem ut nesciunt rerum, facilis qui suscipit labore voluptates ratione nisi debitis? Dolorem!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae tempora magnam quibusdam, consequuntur magni voluptatem ducimus soluta, quidem ut nesciunt rerum, facilis qui suscipit labore voluptates ratione nisi debitis? Dolorem!
              </p><br />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae tempora magnam quibusdam, consequuntur magni voluptatem ducimus soluta, quidem ut nesciunt rerum, facilis qui suscipit labore voluptates ratione nisi debitis? Dolorem!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae tempora magnam quibusdam, consequuntur magni voluptatem ducimus soluta, quidem ut nesciunt rerum, facilis qui suscipit labore voluptates ratione nisi debitis? Dolorem!
              </p><br />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae tempora magnam quibusdam, consequuntur magni voluptatem ducimus soluta, quidem ut nesciunt rerum, facilis qui suscipit labore voluptates ratione nisi debitis? Dolorem!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae tempora magnam quibusdam, consequuntur magni voluptatem ducimus soluta, quidem ut nesciunt rerum, facilis qui suscipit labore voluptates ratione nisi debitis? Dolorem!
              </p><br />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleBlog