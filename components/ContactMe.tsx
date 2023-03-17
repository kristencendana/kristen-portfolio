import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {}

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    // console.log(formData);
    // window.location.href = `malito:kristencendana@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    // alert('Message sent!')
    return false;
  }

  return (
    <div className='h-screen flex relative flex-col 
    text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-[#E7E8D1] text-2xl'>
        Contact
      </h3>

      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
          I'm excited to meet you too! {" "}
          <span className='decoration-[#E7E8D1]/50 underline'>Let's Connect</span>
        </h4>

        <div>
          {/* <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#E7E8D1] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>+123456789</p>
          </div> */}
          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#E7E8D1] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>kristencendana@yahoo.com</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}className='flex flex-col space-y-2 w-fit mx-auto'>
          <div className='flex space-x-2'>
            <input {...register('name')} placeholder="Name" className='contactInput' type="text" />
            <input {...register('email')} placeholder="Email" className='contactInput' type="email" />
          </div>
          <input {...register('subject')} placeholder="Subject" className='contactInput' type="text"/>

          <textarea {...register('message')} placeholder="Message" className='contactInput'/>

          <button type="submit" className='bg-[#B85042]/80 py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe