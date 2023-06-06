import React from 'react'
import NavBar from '../components/NavBar'
import RoomTab from '../components/RoomTab'

export default function RoomsPage() {
  return (
    <div className='bg-gray-900 min-h-screen text-white'>
      <NavBar></NavBar>
      <h2 className='text-2xl flex uppercase justify-center font-bold mt-10'>Available Room</h2>
      <div className='p-5 mt-10  h-full flex flex-col items-center justify-center'>

        <RoomTab></RoomTab>


      </div>


    </div>
  )
}
