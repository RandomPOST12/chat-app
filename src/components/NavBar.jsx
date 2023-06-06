import React from 'react'
import tea from '../assets/tea.png'
import {AiFillHome,AiFillCopy} from 'react-icons/ai'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firebaseConfig from '../firebaseConfig'


firebase.initializeApp(firebaseConfig);
export default function NavBar(props) {


  const auth = firebase.auth();

  return (
    <div className='bg-gray-800 shadow-2xl flex justify-between items-center text-white md:p-7 p-4  md:px-12'>
    <img src={tea} alt="" className='w-20 h-17' />
    <div className='flex items-center '>
    <span className='bg-orange-800 hover:bg-orange-900 px-4 mr-3 cursor-pointer rounded py-2 h-fit font-bold'>
    <AiFillHome size={22} />
    </span>
    { 
    props.copy &&
    <span className='bg-orange-800 flex hover:bg-orange-900 px-4 cursor-pointer rounded py-2 h-fit font-bold'>
    <AiFillCopy size={20} />  Copy ID 
    </span>

}
    <span onClick={()=>{auth.signOut()}} className='bg-indigo-800 hover:bg-indigo-900 px-4 rounded cursor-pointer ml-4 py-2 md:text-xl h-fit font-bold'>Logout</span>

    </div>
  </div>
  )
}

