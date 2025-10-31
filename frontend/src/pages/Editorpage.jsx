import React, { useState } from 'react';
import Users from '../components/Users';
import Editor from '../components/Editor';

const Editorpage = () => {
  const [clients] = useState([
    { socketId: 1, username: 'Tanishq dhingra ' },
    { socketId: 2, username: 'Yash singhal ' },
    { socketId: 3, username: 'Akhil Chauhan' },
  ]);

  return (
    <div className="mainWrap bg-gray-700 h-screen grid grid-cols-12 p-4 gap-4">
      {/* 🔹 Aside Section (smaller ~15%) */}
      <div className="aside col-span-2 bg-black rounded-2xl flex flex-col justify-between p-4 shadow-lg">
        <div className="asideinner cursor-pointer">
          <div className="logo mb-4">
            <h3 className="bg-black text-3xl tracking-tighter text-white text-center py-2 rounded animate-slideInX">
              CODE-SHARE ✋
            </h3>
          </div>

          <h3 className="bg-lime-500 text-center text-black font-extrabold py-4 rounded">
            CONNECTED
          </h3>

          <div className="clientlist mt-4 space-y-2">
            {clients.map((client) => (
              <Users key={client.socketId} username={client.username} />
            ))}
          </div>
        </div>

        {/* 🔹 Buttons pinned to bottom */}
        <div className="space-y-2">
          <button className="w-full  cursor-pointer bg-lime-500 text-black font-extrabold py-2 rounded-lg hover:bg-gray-800 transition">
            Copy Room Id
          </button>
          <button className="w-full font-extrabold cursor-pointer bg-lime-500 text-black py-2 rounded-lg hover:bg-gray-800 transition">
            Leave
          </button>
        </div>
      </div>

      {/* 🔹 Editor Section (bigger ~85%) */}
      <div className="editorwrap col-span-10 bg-gray-900 rounded-2xl text-3xl p-4 shadow-lg text-white">Start writing code with your friends Here  
        <Editor />
      </div>                                        
    </div>
  );
};

export default Editorpage;
