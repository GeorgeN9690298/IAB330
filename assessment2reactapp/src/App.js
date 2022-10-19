import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import RoomScreen from './pages/RoomScreen';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Data from './pages/Datascreen';


function App() {

 
  return (

    <>
    <BrowserRouter>
    <NavigationBar />
      <Routes>
          <Route path="/rooms" element={ <RoomScreen/>} />
          <Route path="/data" element={ <Data/>} />
 
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
