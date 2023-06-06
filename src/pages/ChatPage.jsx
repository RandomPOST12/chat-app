import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import '../../src/App.css';
import Sender from '../components/Sender';
import Receiver from '../components/Receiver';
import { MdSend } from 'react-icons/md';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import firebaseConfig from '../firebaseConfig';
import { io } from 'socket.io-client';

firebase.initializeApp(firebaseConfig);

const socket = io('http://localhost:3001');

export default function ChatPage() {
  const [msg, setMsg] = useState('');
  const [data, setData] = useState({});
  const auth = firebase.auth();
  const [receive, setReceive] = useState([]);
  const [sent, setSent] = useState([]);
  const socketID = localStorage.getItem('room_id');

  useEffect(() => {
    socket.emit('join-room', socketID);
  }, [socketID]);

  const sendMessage = () => {
    const toSend = { message: msg };
    console.log(socket);
    socket.emit('send-message', { ...data, ...toSend }, socketID);
    setSent((prevSent) => [...prevSent, { message: msg }]);
  };

  useEffect(() => {
    socket.on('receive-message', (message) => {
      setReceive((prevReceive) => [
        ...prevReceive,
        { name: message.name, profile: message.profile, message: message.message },
      ]);
    });
  }, []);

  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (!loading) {
      setData({ name: user.displayName, profile: user.photoURL });
    }
  }, [loading]);

  if (loading) {
    return <div className='h-screen flex justify-center items-center text-4xl'> Loading....</div>;
  }

  if (!user) {
    return <Navigate to='/' />;
  }

  return (
    <div className='min-h-screen text-white bg-gray-800'>
      <NavBar copy={true} />

      <div className='flex justify-center mt-10'>
        <div className='md:w-[80%] overflow-auto h-[540px] p-7 shadow-xl'>
          {sent.map((item, index) => {
            return <Sender key={index} msg={item.message}></Sender>;
          })}
          {receive.map((item, index) => {
            return (
              <Receiver
                key={index}
                profile={item.profile}
                name={item.name}
                msg={item.message}
              ></Receiver>
            );
          })}
        </div>
      </div>

      <div className='flex justify-center mt-8 md:mt-5'>
        <div className='w-[95%] md:w-[60%] flex items-center'>
          <input
            onChange={(e) => {
              setMsg(e.target.value);
            }}
            type='text'
            id='first_name'
            className='bg-gray-50 border h-[48px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex-grow mr-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none text-bold'
            placeholder='Type Your Message'
          />
          <MdSend onClick={sendMessage} className='bg-green-700 p-1 rounded cursor-pointer' size={38} />
        </div>
      </div>
    </div>
  );
}
