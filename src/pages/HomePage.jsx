import React from 'react'
import tae from '../assets/tea.png'
import {ImGoogle} from 'react-icons/im'
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,signInWithPopup,getAuth } from "firebase/auth";
import firebaseConfig from '../firebaseConfig'
import hashGenerator from '../hashGenerator'
export default function HomePage() {
      
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider()
      const signInWithGoogle = ()=>{
        signInWithPopup(auth,provider).then((data)=>{
            console.log(data)
        }).catch((data)=>{
            console.log(data)
        })
      }

      const createRoom = ()=>{
        localStorage.setItem('room_id',hashGenerator(35));
        window.location.href = '/chat'
      }
    return (
        <div className='bg-gray-800 h-screen text-white flex justify-center items-center overflow-hidden'>
            <div className='p-4 shadow-2xl bg-gray-900 rounded-xl py-12 flex flex-col justify-center items-center'>

                <h1 className='md:text-4xl text-xl font-bold uppercase'>Chiya Guff - Chat Application</h1>
                <img className='w-28 h-26 mt-4' src={tae} alt="" />
                <div className='flex flex-col mt-5 w-full '>
                    <div className='flex flex-col md:flex-row justify-center items-center'>
                        <input type="text" id="first_name" className="bg-gray-50 border h-[48px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:mr-5 md:w-[60%] w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none text-bold" placeholder="Room ID" required />
                        <button  className='md:w-fit hover:bg-indigo-800 w-full mt-3 md:mt-0 p-3 text-xl md:text-xl font-bold rounded bg-indigo-700 cursor-pointer'>Join Room</button>
                      
                    </div>
                    <span onClick={createRoom} className='mt-5 shadow-xl p-3 text-xl md:text-xl text-center font-bold rounded md:ml-5 bg-[] cursor-pointer bg-gray-700 hover:bg-gray-800'>Create Room</span>
                    <span onClick={signInWithGoogle} className='mt-5 flex items-center justify-center p-3 text-xl md:text-xl text-center font-bold rounded md:ml-5 hover:bg-orange-800 bg-orange-700 cursor-pointer'>
                    <ImGoogle  size={22} className='mr-3'/> Sign In
                    </span>
                </div>

            </div>


        </div>
    )
}
