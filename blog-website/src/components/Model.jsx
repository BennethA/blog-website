import React, { useState } from 'react'
import { FaCommentDots, FaRegCircleDot } from 'react-icons/fa6'

const Model = ({isOpen, onClose}) => {
  const [toRegister, setToRegister] = useState(false)

  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  return (
    <div className={` ${isOpen ? "z-50 fixed top-0 lef0 w-full h-full overflow-auto flex items-center justify-center" : "hidden"}`}>
      <div className='model-container'>
        <div className='bg-indigo-700 text-center p-5 sm:w-[300px] ld:w-[500px] rounded shadow-md'>
          <h2 className='text-lg font-semibold mb-2 mt-6  uppercase'>
            Please 
            {
              toRegister ? " Register " : " Login "
            }
            Here!
            <div className='flex justify-center gap-2'>
              <FaRegCircleDot className='text-xs'/>
              <FaRegCircleDot className='text-xs'/>
              <FaRegCircleDot className='text-xs'/>
            </div>
          </h2>
          <form className='px-4' >
            {
              toRegister && 
              <div className='mb-3'>
                <input 
                id='name' 
                type="name" 
                name='name'
                placeholder='Your name here' 
                onChange={(e) => setUserName(e.target.value)}
                className='w-full rounded-md border border-[black] bg-white py-2 px-4 text-base font-medium text-[gray] outline-none focus:border:[blue] focus:shadow-md'/>
              </div>
            }
            <div className='mb-3'>
              <input 
              id='email' 
              type="email" 
              name='email' 
              placeholder='example@gmail.com' 
              onChange={(e) => setUserEmail(e.target.value)}
              className='w-full rounded-md border border-[black] bg-white py-2 px-4 text-base font-medium text-[gray] outline-none focus:border:[blue] focus:shadow-md'/>
            </div>
            <div className='mb-5'>
              <input 
              id='password' 
              type="password" 
              name='password' 
              placeholder='Enter your password here' 
              onChange={(e) => setUserPassword(e.target.value)}
              className='w-full rounded-md border border-[black] bg-white py-2 px-4 text-base font-medium text-[gray] outline-none focus:border:[blue] focus:shadow-md'/>
            </div>
            {
              toRegister === false ?
              <div>
                <button type='submit' className='hover:shadow-md rounded-md bg-blue-700 hover:bg-orange-600 py-2 px-6 text-base font-semibold text-white outline-none'>Login</button>
              </div>
              : 
              <div>
                <button type='submit' className='hover:shadow-md rounded-md bg-blue-700 hover:bg-orange-600 py-2 px-6 text-base font-semibold text-white outline-none'>Register</button>
              </div>
            }
            <div className='mt-2 flex items-center justify-center' >
              <p className='cursor-pointer hover:text-gray-400 active:text-gray-400' onClick={() => setToRegister(!toRegister)}>
                {
                  toRegister === true 
                  ? 'Has an account.'
                  : `Don't have an account.`
                }
                
              </p>
            </div>
          </form>
          <button onClick={onClose} className='bg-gray-300 hover:bg-gray-400 active:bg-gray-400 text-gray-800 font-semibold  py-2 px-6 rounded inline-flex items-center mt-5'>
            Close
          </button>
        </div>
      </div>
      
    </div>
  )
}

export default Model