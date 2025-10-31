import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Photo from "../assets/Photo.jpg";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");

  // Create a new room
  const createNewRoom = (e) => {
  e.preventDefault();
  const id = uuidv4().split("-")[0].slice(0, 8).toUpperCase(); // 👉 Take only 5 chars
  setRoomId(id);
  toast.success("Created a new room!");
  };


  // Join the room
  const joinRoom = (e) => {
    if (e) e.preventDefault();
    if (!roomId || !username) {
      toast.error("ROOM ID AND USERNAME ARE REQUIRED");
      return;
    }

    navigate(`/editor/${roomId}`, {
      state: { username },
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-amber-800 ">
      {/* Outer wrapper centers everything */}
      <div className="flex w-full max-w-5xl min-h-[80vh] shadow-lg rounded-2xl overflow-hidden bg-white">
        {/* Left Side - Image */}
        <div className="w-1/2 hidden md:flex items-center justify-center bg-gray-200">
          <img
            src={Photo}
            alt="Code Illustration"
            className="object-cover h-full w-full"
          />
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center bg-black">
          <div className="flex items-center justify-center p-6">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
              <h1 className="text-3xl font-bold text-black mb-2 tracking-tighter">
                Code-Share ✋
              </h1>
              <h5 className="font-semibold text-black mb-6">
                "Write collaborative code in real time"
              </h5>

              <form onSubmit={joinRoom} className="space-y-4">
                <input
                  type="text"
                  placeholder="Room ID"
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />

                <input
                  type="text"
                  placeholder="User Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />

                <button
                  type="submit"
                  className="w-full cursor-pointer bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
                >
                  Join
                </button>
              </form>

              <p className="mt-4 text-gray-600">
                Don’t have a room?{" "}
                <button
                  onClick={createNewRoom}
                  className="text-black font-bold hover:underline hover:text-gray-800"
                >
                  Create New Room
                </button>
              </p>

              <h5 className="font-semibold text-black mt-6">
                "Made for coding project with Friends"
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
