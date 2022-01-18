import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import { Button } from './Button';

export function ContactForm() {
  const [state, handleSubmit] = useForm("mrgjekrg");
  if (state.succeeded) {
    return <p>Thank you for contact us. We'll be in touch as soon as posible!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      <div className='flex flex-col justify-between gap-4'>
        <label htmlFor='name' className='flex flex-col w-full'>
          Name
          <input id='name' type="text" name='name' className='rounded' />
        </label>
        <ValidationError 
          prefix="name" 
          field="name"
          errors={state.errors}
        />

        <label htmlFor="lastname" className='flex flex-col w-full'>
          Last name
          <input type="text" name='lastname' className='rounded' />
        </label>
        <ValidationError 
          prefix="lastname" 
          field="lastname"
          errors={state.errors}
        />
      </div>
      <label htmlFor="email" className='flex flex-col w-full'>
        Email Address
        <input
          id="email"
          type="email" 
          name="email"
          className='rounded'
        />
      </label>
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      
      <label className='flex flex-col w-full'>
        Message
        <textarea
            id="message"
            name="message"
            className='rounded'
          />
      </label>
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <Button children='Submit' type="submit" disabled={state.submitting} className='bg-green rounded py-2 px-3 w-full m-auto text-white font-bold cursor-pointer transition-all ease-in-out delay-150 hover:bg-gradient-to-r from-lightblue to-green hover:gradient-x md:w-1/4' />
    </form>
  );
}
