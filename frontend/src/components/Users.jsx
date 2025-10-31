import React from 'react'
import Avatar from "react-avatar";


const Users = ({ username }) => {
    console.log();
    
  return (
    <div 
  className="flex items-center gap-2 p-2 
    rounded-xl transition-colors duration-300 
    hover:bg-cyan-950 cursor-pointer" // Container: Hover effect for the whole row
>
  <div 
    className="ring-2 ring-white/70 rounded-2xl 
      shadow-lg transition-transform duration-300 
      hover:scale-110 hover:ring-white" // Avatar Wrapper: Ring, shadow, and scale on hover
  >
    <Avatar name={username} size="50" round="14px"/>
  </div>
  <span className="font-medium text-white transition-colors duration-300 hover:text-gray-200">
    {username}
  </span>
</div>
  )
}

export default Users
