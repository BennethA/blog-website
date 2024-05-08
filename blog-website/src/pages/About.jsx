import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { FaFacebook, FaInstagram, FaMessage, FaTwitter, FaWhatsapp } from 'react-icons/fa6'

const About = () => {
  const form = useRef();
  
const sendEmail = (e) => {
  e.preventDefault();
  // service_id, templte_id and public key will get from Emailjs website when you create account and add template service and email service 
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 
  'YOUR_PUBLIC_KEY')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  };
  return (
    <div className="gap-5 p-6 flex flex-col bg-cover bg-[url(./images/contact.png)] text-black">
      <div>
        <h1 className='flex mb-6 font-bold'>About Us</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus amet vero laboriosam molestias necessitatibus placeat accusamus quo maxime magni, inventore repellat beatae nulla labore blanditiis laborum quidem voluptate neque eveniet!
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        <div className="w-[400px] bg-gray-300 rounded-md p-3">
          <h1 className='flex mb-3 font-bold'>Contact Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae quia necessitatibus perferendis ipsum perspiciatis accusamus iste sequi id, quibusdam facilis, eum hic sint excepturi. Enim doloremque molestiae earum impedit cupiditate?
          </p>
          <div className='flex flex-row mt-2'>
            <a href="http://wa.me/0508529031" className='flex text-gray-500 transition-colors duration-500 hover:text-orange-500'><FaWhatsapp className='mr-2' /></a>
            <a href="mailto:addobenneth6@gmail.com" className='flex text-gray-500 transition-colors duration-500 hover:text-orange-500'><FaMessage className='mr-2' /></a>
            <a href="http://www.twitter.com/myBlogWeb" className='flex text-gray-500 transition-colors duration-500 hover:text-orange-500'><FaTwitter className='mr-2' /></a>
            <a href="http://www.facebook.com/myBlogWeb" className='flex text-gray-500 transition-colors duration-500 hover:text-orange-500'><FaFacebook className='mr-2' /></a>
            <a href="http://www.instagram.com/myBlogWeb" className='flex text-gray-500 transition-colors duration-500 hover:text-orange-500'><FaInstagram className='mr-2' /></a>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className="bg-gray-300 rounded-md p-3 flex flex-wrap flex-col shadow-lg gap-5">
          <div>
            <input 
            type="email" 
            name="user_email" 
            />
          </div>
          <div>
            <p>What can we help you with?</p>
            <textarea 
            name='message'
            className='text-black p-1 pl-3 outline-none border-black rounded-lg w-full h-auto' 
            />
          </div>
          <input type='submit' value='Send' className='hover:bg-blue-400 active:bg-blue-400 font-bold p-2 mt-3 rounded bg-blue-600'/>
        </form>
      </div>
    </div>
  )
}

export default About