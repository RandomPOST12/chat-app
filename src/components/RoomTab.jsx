import React from 'react'

export default function RoomTab() {
    return (
        <div className='p-10 rounded md:w-[60%] bg-gray-800 mb-10'>
            <h2 className='uppercase font-bold md:text-3xl text-2xl'>Sankalpa Room</h2>
            <p className='mt-4 mb-10 md:text-lg'>Discover, Connect, Chat - Engage in lively conversations, make new friends, and explore diverse perspectives in our welcoming chat room. Join us now!</p>

            <div className='flex justify-between items-center'>
                <span className=' bg-pink-800 hover:bg-pink-900 p-3 font-bold cursor-pointer rounded'>Join Now</span>
                <p>3 🟢</p>

            </div>

        </div>
    )
}
