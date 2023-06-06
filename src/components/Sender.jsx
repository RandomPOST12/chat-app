import React from 'react'
export default function Sender(props) {
  return (
    <div className='flex mt-4 mb-2 justify-end'>
    <span className='md:text-lg bg-blue-900 rounded-lg p-1 md:px-4 px-2 md:max-w-[50%]'>
      {props.msg}
    </span>
  </div>
  )
}
