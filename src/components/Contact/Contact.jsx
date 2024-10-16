import React from 'react'

function Contact() {
  return (
    <div className="flex flex-col sm:flex-col md:flex-row w-full mb-36 bg-white gap-5 items-center md:items-start">
      
      <div className="w-full md:w-1/2 lg:w-1/3 bg-gray-200 rounded-md h-auto p-6 mt-10 md:mt-20 text-center md:ml-20 flex flex-col items-center">
        <h1 className='text-2xl text-black font-bold'>Get in touch</h1>
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex items-center gap-2 cursor-pointer">
            <img src="./images/location.png" alt="Location Icon" width={24} height={24} />
            <h2 className='text-lg md:text-xl text-slate-600'>:- Delhi, near India Gate</h2>
          </div>
          <div className="flex items-center gap-2 curs or-pointer">
            <img src="./images/phone.png" alt="Phone Icon" width={24} height={24} />
            <h2 className='text-lg md:text-xl text-slate-600'>:- 8745546645</h2>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <img src="./images/mail.png" alt="Mail Icon" width={24} height={24} />
            <h2 className='text-lg md:text-xl text-blue-800 hover:underline'>:- deepaktourandtravels970@gmail.com</h2>
          </div>
        </div>
      </div>
      

      <div className="w-full md:w-1/2 lg:w-1/3 rounded-md p-6 mt-10 md:mt-20">
        <form action="https://formspree.io/f/mwpedyoq" method="POST" className='flex flex-col gap-4'>
          <input type="text" name="Username" className='rounded-md outline-none  border-2 p-2 w-full' placeholder='Enter Full name' required />
          <input type="email" name="Email" className='rounded-md outline-none  border-2 p-2 w-full' placeholder='Enter Email' required />
          <input type="tel" name="Contact" className='rounded-md outline-none  border-2 p-2 w-full' placeholder='Enter Contact' required />
          <textarea name="message" cols="30" rows= "6" required autoComplete='off' className="rounded-md outline-none  border-2 p-2 w-full" ></textarea>
          <input type="submit" className="w-1/2 md:w-1/3 lg:w-1/4 outline-none bg-red-600 text-white p-2 rounded-md cursor-pointer" value='Submit' />
        </form>
      </div>
    </div>
  );
}

export default Contact;
