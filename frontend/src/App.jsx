import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Editorpage from './pages/Editorpage';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
    <div>
      <Toaster
      position='top-right'
      toastOptions={
        {
          success:{
            theme:{
              primary:"#4aed88"
            },
          },
        }
      }/>

      
    </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/editor/:roomId' element={<Editorpage />} />
      </Routes>
    </>
  );
}

export default App;
