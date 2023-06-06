import React from 'react'
import tea from '../assets/tea.png';

export default function Receiver(props) {
  return (
    <div className='flex'>
    <img src={props.profile} alt='' className='w-10 mt-4 h-10 rounded-full mr-3' />
    <div className='flex mt-4 mb-2 flex-col w-full justify-center'>
      <p className='opacity-60 font-bold text-sm uppercase'>{props.name} <b className='text-cyan-600'>Developer👨‍💻</b></p>
      <span className='md:text-lg bg-gray-700 rounded-lg p-1 w-fit px-2 md:max-w-[50%]'>
        {props.msg}
      </span>
    </div>
  </div>
  )
}
