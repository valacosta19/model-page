import React from 'react'

export const Form = () => {
  return (
    <form className='flex flex-col max-w-4xl grow gap-6' method='POST'>
      <div className='flex flex-col justify-between gap-4'>
        <label className='flex flex-col w-full'>
          Name
          <input type="text" name='name' className='rounded' />
        </label>

        <label className='flex flex-col w-full'>
          Last name
          <input type="text" name='lastname' className='rounded' />
        </label>
      </div>

      <label className='flex flex-col w-full'>
        Message
        <textarea name='message' className='rounded' />
      </label>

      <input type="submit" value="Submit" className='bg-orange-500 rounded py-2 px-3 w-1/4 m-auto text-white font-bold cursor-pointer scale-100 transition-all ease-in-out delay-150 hover:bg-orange-400 hover:scale-110 ' />
    </form>
  )
}
