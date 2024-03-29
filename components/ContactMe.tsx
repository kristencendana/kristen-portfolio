import React, {useRef} from 'react'
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import emailjs from '@emailjs/browser';

function ContactMe() {
  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault(); // prevents page from reloading when you hit 'submit'


    if (process.env.NEXT_PUBLIC_YOUR_SERVICE_ID && process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID) {
      emailjs.sendForm(process.env.NEXT_PUBLIC_YOUR_SERVICE_ID, process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID, e.target, process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY)
        .then((result) => {
          console.log(result.text)
          alert("Email successfully sent to Kristen! She will get in touch with you soon.");
          e.target.reset();
        })
        .catch((error) => {
          console.log("Error in sending email." + error.text)
        })
    }
  }

  return (
    <div className='h-screen flex relative flex-col 
    text-center md:text-left md:flex-rowmax-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='pageName'>
        Contact
      </h3>

      <div className='flex flex-col space-y-10'>
        <h4 className='xxs:text-xl text-4xl font-semibold text-center'>
          <span className='decoration-[#E7E8D1]/50 underline'>Let&#39;s Connect!</span>
        </h4>

        <div>
          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#E7E8D1] h-7 w-7 animate-pulse'/>
            <p className='xxs:text-sm xs:text-base text-2xl'>kristencendana@yahoo.com</p>
          </div>
        </div>
        <form onSubmit={sendEmail} className='flex flex-col xxs:space-y-1 space-y-2 w-fit mx-auto'>
          <div className='flex xxs:flex-col xxs:space-x-0 xxs:space-y-1 xs:flex-col xs:space-x-0 xs:space-y-1 space-x-2'>
            <input placeholder="Name" className='contactInput' type="text" name="name" required/>
            <input placeholder="Email" className='contactInput' type="email" name="email" required/>
          </div>
          <textarea placeholder="Message" className='contactInput' name="message" required/>
          <input type="submit" className='bg-[#B85042]/80 py-5 px-10 rounded-md text-black font-bold text-lg' value="Send"/>
        </form>
      </div>
    </div>
  )
}

export default ContactMe;