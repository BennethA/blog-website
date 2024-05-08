import React from 'react'
import { FaFacebook, FaMessage, FaInstagram, FaWhatsapp, FaTwitter } from "react-icons/fa6"

const Footer = () => {
  return (
    <div className='bg-gray-900'>
      <div className='mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-4 lg:px-4'>
        <div>
          <div>
            <div className=' p-3'>
              <p className='font-medium tracking-wide text-gray-300'>Help</p>
              <ul className='mt-2 space-y-2'>
                <li>
                  <a href="/about" className='text-gray-500 transition-colors duration-500 hover:text-orange-500'>About
                  </a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-500 hover:text-orange-500'>Terms & Conditions</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-500 hover:text-orange-500'>Privacy & Policy</a>
                </li>
              </ul>
            </div>
            <div className='p-3'>
              <p className='font-medium tracking-wide text-gray-300'>Loction:</p>
              <ul className='mt-2 space-y-2'>
                <li>
                  <a href="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d127056.97423159608!2d-0.17694719999997358!3d5.636096000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sgh!4v1713753274853!5m2!1sen!2sgh" className='text-gray-500 transition-colors duration-500 hover:text-orange-500'>Accra, Ghana, West Africa</a>
                </li>
              </ul>
            </div>
            <div className=' p-3'>
              <p className='font-medium tracking-wide text-gray-300'>Socials:</p>
              <ul className='mt-2 space-y-2'>
                <li className='flex'>
                  <a href="http://wa.me/0508529031" className='flex text-gray-500 transition-colors duration-500 hover:text-orange-500'><FaWhatsapp className='mr-2' />WhatsApp: http://wa.me/0508529031</a>
                </li>
                <li className='flex'>
                  <a href="mailto:addobenneth6@gmail.com" className='flex text-gray-500 transition-colors duration-500 hover:text-orange-500'><FaMessage className='mr-2' />Gmail: mailto:addobenneth6@gmail.com</a>
                </li>
                <li className='flex'>
                  <a href="http://www.twitter.com/myBlogWeb" className='flex text-gray-500 transition-colors duration-500 hover:text-orange-500'><FaTwitter className='mr-2' />Twitter(X): http://www.twitter.com/myBlogWeb</a>
                </li>
                <li className='flex'>
                  <a href="http://www.facebook.com/myBlogWeb" className='flex text-gray-500 transition-colors duration-500 hover:text-orange-500'><FaFacebook className='mr-2' />FaceBook: http://www.facebook.com/myBlogWeb</a>
                </li>
                <li className='flex'>
                  <a href="http://www.instagram.com/myBlogWeb" className='flex text-gray-500 transition-colors duration-500 hover:text-orange-500'><FaInstagram className='mr-2' />Instagram: http://www.instagram.com/myBlogWeb</a>
                </li>
              </ul>
            </div>
          </div>
          <hr className='m-3'/>
          <div className='text-gray-300 mx-2 flex flex-wrap'>
            Copyright 2024 | All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer