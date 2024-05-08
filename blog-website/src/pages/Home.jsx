import React from 'react'

const Home = () => {
  return (
    <div className='px-4 py-32 mx-auto bg-[url(/images/home-background.jpg)] bg-center bg-no-repeat'>
      <div className='text-yellow-500 text-center z-10'>
        <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>
          Welcome To Our Blog
        </h1>
        <p className='text-gray-100 lg:w-3/5 mx-auto mb-5 font-primary'>
          Start your blog today and join a community of writers and readers who are passionate and sharing their stories and ideas. We offer everything you need to get started from helpful tips and tutorials
        </p>
      </div>
    </div>
  )
}

export default Home